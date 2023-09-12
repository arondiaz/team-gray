import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import bcrypt from "bcrypt";
import { IResponse } from "../models/Response.interface";
import jwt from "jsonwebtoken";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { Validator } from "../utils/validator";
import { ILoginProfessionalUser } from "../models/users/LoginProfessionalUser.interface";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    public authUser: IProfessionalUser;
    constructor(
        private readonly repo: ProfessionalUserRepository,
        private readonly configBuilder: ConfigurationBuilder,
        private readonly validate: Validator
    ) {}

    async register(authUser: IProfessionalUser): Promise<IResponse> {
        try {
            // Create a user for registration.
            const registerUser = {
                name: authUser.name,
                last_name: authUser.last_name,
                birth_date: authUser.birth_date,
                category_id: authUser.category_id,
                city: authUser.city,
                dni: authUser.dni,
                email: authUser.email,
                gender: authUser.gender,
                password: authUser.password,
                province: authUser.province,
                tel: authUser.tel,
                about_me: authUser.about_me,
                auth_number: authUser.auth_number,
                link: authUser.link,
                img: authUser.img,
            };

            // Fields not empty validation.
            if (!registerUser.birth_date) {
                return {
                    error: true,
                    message: "Birth date field not found",
                    code: 400,
                };
            }

            if (!registerUser.category_id) {
                return {
                    error: true,
                    message: " Category field not found",
                    code: 400,
                };
            }

            if (!registerUser.city) {
                return {
                    error: true,
                    message: " City field not found",
                    code: 400,
                };
            }

            if (!registerUser.dni) {
                return {
                    error: true,
                    message: " Dni field not found",
                    code: 400,
                };
            }

            if (!registerUser.email) {
                return {
                    error: true,
                    message: " Email field not found",
                    code: 400,
                };
            }

            if (!registerUser.gender) {
                return {
                    error: true,
                    message: " Gender field not found",
                    code: 400,
                };
            }

            if (!registerUser.last_name) {
                return {
                    error: true,
                    message: "Last name field not found",
                    code: 400,
                };
            }

            if (!registerUser.name) {
                return {
                    error: true,
                    message: "Name field not found",
                    code: 400,
                };
            }

            if (!registerUser.password) {
                return {
                    error: true,
                    message: "Password field not found",
                    code: 400,
                };
            }

            if (!registerUser.province) {
                return {
                    error: true,
                    message: "Province field not found",
                    code: 400,
                };
            }

            if (!registerUser.tel) {
                return {
                    error: true,
                    message: "Phone field not found",
                    code: 400,
                };
            }

            // Data string type validation with Validator Class.
            const arrData = [
                registerUser.email,
                registerUser.password,
                registerUser.name,
                registerUser.last_name,
                registerUser.dni,
                registerUser.province,
                registerUser.city,
                registerUser.tel,
                registerUser.link,
                registerUser.about_me,
                registerUser.gender,
                registerUser.birth_date,
                registerUser.auth_number,
                registerUser.img,
                registerUser.category_id,
            ];

            if (this.validate.validateStringTypeData(arrData)) {
                return {
                    error: true,
                    message: "There are fields that are not of type string",
                    code: 400,
                };
            }

            // Fields validation with Validator Class.
            if (!this.validate.validateEmail(registerUser.email))
                return {
                    error: true,
                    message: "The field is not a valid email",
                    code: 400,
                };

            if (this.validate.validatePassword(registerUser.password))
                return {
                    error: true,
                    message: this.validate.validatePassword(registerUser.password) as string,
                    code: 400,
                };

            if (!this.validate.validateString(registerUser.name)) {
                return {
                    error: true,
                    message: "The field is not a valid name",
                    code: 400,
                };
            }

            if (!this.validate.validateNumber(registerUser.tel)) {
                return {
                    error: true,
                    message: "The field is not a valid phone",
                    code: 400,
                };
            }

            if (!this.validate.validateString(registerUser.last_name)) {
                return {
                    error: true,
                    message: "The field is not a valid last name",
                    code: 400,
                };
            }

            if (!this.validate.validateString(registerUser.city)) {
                return {
                    error: true,
                    message: "The field is not a valid city",
                    code: 400,
                };
            }

            if (!this.validate.validateNumber(registerUser.dni) || !this.validate.validateDni(registerUser.dni)) {
                return {
                    error: true,
                    message: "The field is not a valid DNI",
                    code: 400,
                };
            }

            if (!this.validate.validateString(registerUser.province)) {
                return {
                    error: true,
                    message: "The field is not a valid province",
                    code: 400,
                };
            }

            if (this.validate.validateAge(registerUser.birth_date)) {
                return {
                    error: true,
                    message: this.validate.validateAge(registerUser.birth_date) as string,
                    code: 400,
                };
            }

            if (this.validate.validateGender(registerUser.gender)) {
                return {
                    error: true,
                    message: "Gender must be 'Male', 'Female' or 'Non-binary'",
                    code: 400,
                };
            }

            // Email already registered validation.
            const validateEmail = await this.repo.getByEmail(registerUser.email);
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
            registerUser.password = await bcrypt.hash(registerUser.password, salt);

            // Insert on database.
            const response = await this.repo.insertOne(registerUser);

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

    async login(authUser: ILoginProfessionalUser): Promise<IResponse> {
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
