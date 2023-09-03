import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import bcrypt from "bcrypt";
import { IResponse } from "../models/Response.interface";
import jwt from "jsonwebtoken";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    public authUser: IProfessionalUser;
    constructor(private readonly repo: ProfessionalUserRepository, private readonly configBuilder: ConfigurationBuilder) {}

    async register(authUser: IProfessionalUser): Promise<IResponse> {
        try {
            // Email already registered validation.
            const validateEmail = await this.repo.getByEmail(authUser.email);
            if (validateEmail) {
                return {
                    error: true,
                    message: "The email is already registered",
                    code: 409,
                };
            }

            // Fields not empty validation.
            if (!authUser.birth_date) {
                return {
                    error: true,
                    message: "Birth date field not found",
                    code: 400,
                };
            }

            if (!authUser.category_id) {
                return {
                    error: true,
                    message: " Category field not found",
                    code: 400,
                };
            }

            if (!authUser.city) {
                return {
                    error: true,
                    message: " City field not found",
                    code: 400,
                };
            }

            if (!authUser.dni) {
                return {
                    error: true,
                    message: " Dni field not found",
                    code: 400,
                };
            }

            if (!authUser.email) {
                return {
                    error: true,
                    message: " Email field not found",
                    code: 400,
                };
            }

            if (!authUser.gender) {
                return {
                    error: true,
                    message: " Gender field not found",
                    code: 400,
                };
            }

            if (!authUser.last_name) {
                return {
                    error: true,
                    message: "Last name field not found",
                    code: 400,
                };
            }

            if (!authUser.name) {
                return {
                    error: true,
                    message: "Name field not found",
                    code: 400,
                };
            }
            if (!authUser.password) {
                return {
                    error: true,
                    message: "Password field not found",
                    code: 400,
                };
            }
            if (!authUser.province) {
                return {
                    error: true,
                    message: "Province field not found",
                    code: 400,
                };
            }
            if (!authUser.tel) {
                return {
                    error: true,
                    message: "Phone field not found",
                    code: 400,
                };
            }

            // Generate salt.
            const salt = await bcrypt.genSalt(10);

            // Hashed password.
            authUser.password = await bcrypt.hash(authUser.password, salt);

            // insert on database.
            const response = await this.repo.insertOne(authUser);

            if (response) {
                return {
                    error: false,
                    message: "Created user",
                    code: 201,
                };
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async login(authUser: IProfessionalUser): Promise<IResponse> {
        const config = this.configBuilder.build(Configuration);
        const user = await this.repo.getByEmail(authUser.email);

        if (!user) {
            return {
                error: true,
                message: "The user does not exist in the database",
                code: 404,
            };
        }

        if (user.state === 0)
            return {
                error: true,
                message: "Disabled account",
                code: 403,
            };

        const compare = await bcrypt.compare(authUser.password, user.password);

        if (compare) {
            const token = jwt.sign(
                {
                    email: user.email,
                    name: user.name,
                    last_name: user.last_name,
                    dni: user.dni,
                    province: user.province,
                    city: user.city,
                    tel: user.tel,
                    link: user.link,
                    about_me: user.about_me,
                    gender: user.gender,
                    birth_date: user.birth_date,
                    auth_number: user.auth_number,
                    img: user.img,
                    category_id: user.category_id,
                },
                config.jwt.secret
            );

            return {
                error: false,
                message: "Success",
                code: 200,
                token: token,
            };
        } else {
            return {
                error: true,
                message: "Invalid credentials",
                code: 401,
            };
        }
    }

    // Gets email to authenticate user.
    async authenticate(email: string): Promise<IProfessionalUser> {
        const user = await this.repo.getByEmail(email);

        if (!user) throw new Error("User not authenticated.");

        // If the user has false state, it is deleted.
        if (user.state === 0) throw new Error("The user is not enable");

        // Is available to the authenticated user.
        this.authUser = user;

        return user;
    }
}
