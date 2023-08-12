import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import bcrypt from "bcrypt";
import { IAuthProfessionalUser } from "../controllers/AuthProfessionUser.interface";

export interface IError {
    error: string;
    message: string;
    code: number;
}

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    constructor(private repo: ProfessionalUserRepository) {}

    async register(authUser: IAuthProfessionalUser): Promise<boolean | IError> {
        try {
            // email already registered validation
            const validateEmail = await this.repo.find("email = ?", [authUser.email]);
            if (validateEmail.length === 1) {
                return {
                    error: "email_already_registered",
                    message: "The email is already registered",
                    code: 409,
                };
            }

            // fields not empty validation

            if (!authUser.birthdate) {
                return {
                    error: "missing_birthdate_field",
                    message: "Birtdate field not found",
                    code: 400,
                };
            }

            if (!authUser.category_id) {
                return {
                    error: "missing_category_id_field",
                    message: " Category field not found",
                    code: 400,
                };
            }

            if (!authUser.city) {
                return {
                    error: "missing_city_field",
                    message: " City field not found",
                    code: 400,
                };
            }

            if (!authUser.dni) {
                return {
                    error: "missing_dni_field",
                    message: " Dni field not found",
                    code: 400,
                };
            }

            if (!authUser.email) {
                return {
                    error: "missing_email_field",
                    message: " Email field not found",
                    code: 400,
                };
            }

            if (!authUser.gender) {
                return {
                    error: "missing_gender_field",
                    message: " Gender field not found",
                    code: 400,
                };
            }

            if (!authUser.lastname) {
                return {
                    error: "missing_lastname_field",
                    message: "Lastname field not found",
                    code: 400,
                };
            }

            if (!authUser.name) {
                return {
                    error: "missing_name_field",
                    message: "Name field not found",
                    code: 400,
                };
            }
            if (!authUser.password) {
                return {
                    error: "missing_password_field",
                    message: "Password field not found",
                    code: 400,
                };
            }
            if (!authUser.province) {
                return {
                    error: "missing_province_field",
                    message: "Province field not found",
                    code: 400,
                };
            }
            if (!authUser.tel) {
                return {
                    error: "missing_tel_field",
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
            return true;
        } catch (error) {
            throw Error(error);
        }
    }
}

