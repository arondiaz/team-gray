import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import bcrypt from "bcrypt";
import { IAuthProfessionalUser } from "../controllers/AuthProfessionUser.interface";
import { AuthRepository } from "../repositories/Auth.repository";
import { IResponse } from "./Response.interface";
import jwt from "jsonwebtoken";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    config: Configuration;
    constructor(private authRepo: AuthRepository, config: ConfigurationBuilder) {
        this.config = config.build(Configuration);
    }

    async register(authUser: IAuthProfessionalUser): Promise<IResponse> {
        try {
            // email already registered validation
            const validateEmail = await this.authRepo.find("email = ?", [authUser.email]);
            if (validateEmail.length === 1) {
                return {
                    error: true,
                    message: "The email is already registered",
                    code: 409,
                };
            }

            // fields not empty validation

            if (!authUser.birthdate) {
                return {
                    error: true,
                    message: "Birtdate field not found",
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

            if (!authUser.lastname) {
                return {
                    error: true,
                    message: "Lastname field not found",
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
            await this.authRepo.insertOne(authUser);
            return {
                error: false,
                message: "Created user",
                code: 201,
            };
        } catch (error) {
            throw Error(error);
        }
    }

    async login(authUser: IAuthProfessionalUser): Promise<string> {
        const user = await this.authRepo.find("email = ?", [authUser.email]);

        if (!user[0]) {
            return "User not found";
        }

        const compare = await bcrypt.compare(authUser.password, user[0].password);

        if (compare) {
            const token = jwt.sign(
                {
                    user: user[0].name,
                    last_name: user[0].lastname,
                    phone: user[0].tel,
                },
                this.config.jwt.secret
            );

            return token;
        } else {
            return "Invalid credentials";
        }
    }
}

