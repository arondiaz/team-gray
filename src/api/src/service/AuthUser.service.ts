import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import bcrypt from "bcrypt";
import { IResponse } from "../models/Response.interface";
import jwt from "jsonwebtoken";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { Validator } from "../utils/validator";
import { link } from "fs";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    public authUser: IProfessionalUser;
    constructor(
        private readonly repo: ProfessionalUserRepository,
        private readonly configBuilder: ConfigurationBuilder,
        private readonly validate: Validator
    ) {}

    async register(registerUser: IProfessionalUser): Promise<IResponse> {
        try {
            // Create a user for registration.
            const user = {
                name: registerUser.name,
                last_name: registerUser.last_name,
                birth_date: registerUser.birth_date,
                category_id: registerUser.category_id,
                city: registerUser.city,
                dni: registerUser.dni,
                email: registerUser.email,
                gender: registerUser.gender,
                password: registerUser.password,
                province: registerUser.province,
                tel: registerUser.tel,
                about_me: registerUser.about_me,
                auth_number: registerUser.auth_number,
                link: registerUser.link,
                img: registerUser.img,
            };

            // Fields not empty validation.
            if (!user.birth_date) {
                return {
                    error: true,
                    message: "Birth date field not found",
                    code: 400,
                };
            }

            if (!user.category_id) {
                return {
                    error: true,
                    message: " Category field not found",
                    code: 400,
                };
            }

            if (!user.city) {
                return {
                    error: true,
                    message: " City field not found",
                    code: 400,
                };
            }

            if (!user.dni) {
                return {
                    error: true,
                    message: " Dni field not found",
                    code: 400,
                };
            }

            if (!user.email) {
                return {
                    error: true,
                    message: " Email field not found",
                    code: 400,
                };
            }

            if (!user.gender) {
                return {
                    error: true,
                    message: " Gender field not found",
                    code: 400,
                };
            }

            if (!user.last_name) {
                return {
                    error: true,
                    message: "Last name field not found",
                    code: 400,
                };
            }

            if (!user.name) {
                return {
                    error: true,
                    message: "Name field not found",
                    code: 400,
                };
            }

            if (!user.password) {
                return {
                    error: true,
                    message: "Password field not found",
                    code: 400,
                };
            }

            if (!user.province) {
                return {
                    error: true,
                    message: "Province field not found",
                    code: 400,
                };
            }

            if (!user.tel) {
                return {
                    error: true,
                    message: "Phone field not found",
                    code: 400,
                };
            }

            // Data string type validation with Validator Class.
            const arrData = [
                user.email,
                user.password,
                user.name,
                user.last_name,
                user.dni,
                user.province,
                user.city,
                user.tel,
                user.link,
                user.about_me,
                user.gender,
                user.birth_date,
                user.auth_number,
                user.img,
                user.category_id,
            ];

            if (this.validate.validateStringTypeData(arrData)) {
                return {
                    error: true,
                    message: "There are fields that are not of type string",
                    code: 400,
                };
            }

            // Fields validation with Validator Class.
            if (!this.validate.validateEmail(user.email))
                return {
                    error: true,
                    message: "The field is not a valid email",
                    code: 400,
                };

            if (this.validate.validatePassword(user.password))
                return {
                    error: true,
                    message: this.validate.validatePassword(user.password) as string,
                    code: 400,
                };

            if (!this.validate.validateString(user.name)) {
                return {
                    error: true,
                    message: "The field is not a valid name",
                    code: 400,
                };
            }

            if (!this.validate.validateNumber(user.tel)) {
                return {
                    error: true,
                    message: "The field is not a valid phone",
                    code: 400,
                };
            }

            if (!this.validate.validateString(user.last_name)) {
                return {
                    error: true,
                    message: "The field is not a valid last name",
                    code: 400,
                };
            }

            if (!this.validate.validateString(user.city)) {
                return {
                    error: true,
                    message: "The field is not a valid city",
                    code: 400,
                };
            }

            if (!this.validate.validateNumber(user.dni) || !this.validate.validateDni(user.dni)) {
                return {
                    error: true,
                    message: "The field is not a valid DNI",
                    code: 400,
                };
            }

            if (!this.validate.validateString(user.province)) {
                return {
                    error: true,
                    message: "The field is not a valid province",
                    code: 400,
                };
            }

            if (this.validate.validateAge(user.birth_date)) {
                return {
                    error: true,
                    message: this.validate.validateAge(user.birth_date) as string,
                    code: 400,
                };
            }

            if (this.validate.validateGender(user.gender)) {
                return {
                    error: true,
                    message: "Gender must be 'Male', 'Female' or 'Non-binary'",
                    code: 400,
                };
            }

            // Email already registered validation.
            const validateEmail = await this.repo.getByEmail(user.email);
            if (validateEmail) {
                return {
                    error: true,
                    message: "The email is already registered",
                    code: 409,
                };
            }

            // Generate salt.
            const salt = await bcrypt.genSalt(10);

            // Hashed password.
            user.password = await bcrypt.hash(user.password, salt);

            // Insert on database.
            const response = await this.repo.insertOne(user);

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
        try {
            if (!authUser.email) {
                return {
                    error: true,
                    message: "Email field not found",
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

            const arrData = [authUser.email, authUser.password];

            if (this.validate.validateStringTypeData(arrData)) {
                return {
                    error: true,
                    message: "There are fields that are not of type string",
                    code: 400,
                };
            }

            if (!this.validate.validateEmail(authUser.email)) {
                return {
                    error: true,
                    message: "The field is not a email",
                    code: 400,
                };
            }

            if (this.validate.validatePassword(authUser.password)) {
                return {
                    error: true,
                    message: this.validate.validatePassword(authUser.password) as string,
                    code: 400,
                };
            }

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

            const config = this.configBuilder.build(Configuration);

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
        } catch (error) {
            throw new Error(error);
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
