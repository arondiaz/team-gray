import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import bcrypt from "bcrypt";
import { IAuthProfessionalUser } from "../controllers/AuthProfessionUser.interface";

export interface IError {
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
                    message: "The email is already registered",
                    code: 409,
                };
            }

            // fields not empty validation

            if (!authUser.birthdate) {
                return {
                    message: "Birtdate field not found",
                    code: 400,
                };
            }

            if (!authUser.category_id) {
                return {
                    message: " Category field not found",
                    code: 400,
                };
            }

            if (!authUser.city) {
                return {
                    message: " City field not found",
                    code: 400,
                };
            }

            if (!authUser.dni) {
                return {
                    message: " Dni field not found",
                    code: 400,
                };
            }

            if (!authUser.email) {
                return {
                    message: " Email field not found",
                    code: 400,
                };
            }

            if (!authUser.gender) {
                return {
                    message: " Gender field not found",
                    code: 400,
                };
            }

            if (!authUser.lastname) {
                return {
                    message: "Lastname field not found",
                    code: 400,
                };
            }

            if (!authUser.name) {
                return {
                    message: "Name field not found",
                    code: 400,
                };
            }
            if (!authUser.password) {
                return {
                    message: "Password field not found",
                    code: 400,
                };
            }
            if (!authUser.province) {
                return {
                    message: "Province field not found",
                    code: 400,
                };
            }
            if (!authUser.tel) {
                return {
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

