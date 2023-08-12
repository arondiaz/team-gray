import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ProfessionalUser } from "../models/users/ProfessionalUser";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { InsertionResult } from "../core/repositories/commands/db.command";
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
            const validateEmail = await this.repo.find("email = ?", [authUser.email]);
            if (validateEmail.length === 1) {
                return {
                    error: "email_already_registered",
                    message: "The email is already registered",
                    code: 409,
                };
            }
            const salt = await bcrypt.genSalt(10);
            authUser.password = await bcrypt.hash(authUser.password, salt);
            await this.repo.insertOne(authUser);
        } catch (error) {
            console.log(error);
        }
    }
}

