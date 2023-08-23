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
    private config: Configuration;
    public authUser: IProfessionalUser;
    constructor(private readonly repo: ProfessionalUserRepository, private readonly configBuilder: ConfigurationBuilder) {
        this.config = this.configBuilder.build(Configuration);
    }

    async register(authUser: IProfessionalUser): Promise<IResponse> {
        try {
            // email already registered validation
            const validateEmail = await this.repo.getByEmail(authUser.email);
            if (validateEmail) {
                return {
                    error: true,
                    message: "The email is already registered",
                    code: 409,
                };
            }

            // fields not empty validation

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

            // generate salt
            const salt = await bcrypt.genSalt(10);
            // hashed password
            authUser.password = await bcrypt.hash(authUser.password, salt);
            // insert on database
            await this.repo.insertOne(authUser);
            return {
                error: false,
                message: "Created user",
                code: 201,
            };
        } catch (error) {
            throw Error(error);
        }
    }

    async login(authUser: IProfessionalUser): Promise<IResponse> {
        const user = await this.repo.getByEmail(authUser.email);

        if (!user) {
            return {
                error: true,
                message: "The email does not exist in the database",
                code: 404,
            };
        }

        const compare = await bcrypt.compare(authUser.password, user.password);

        if (compare) {
            const token = jwt.sign(
                {
                    email: user.email,
                },
                this.config.jwt.secret
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

    // gets email to authenticate user.
    async authenticate(email: string): Promise<IProfessionalUser> {
        const user = await this.repo.getByEmail(email);

        if (!user) throw new Error("User not authenticated.");

        // is available to the authenticated user.

        if (user.state === 0) throw new Error("The user not exist");

        this.authUser = user;

        return user;
    }
}

