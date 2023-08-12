import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ProfessionalUser } from "../models/users/ProfessionalUser";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { InsertionResult } from "../core/repositories/commands/db.command";
import bcrypt from "bcrypt";
import { IAuthProfessionalUser } from "../controllers/AuthProfessionUser.interface";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    constructor(private repo: ProfessionalUserRepository) {}

    async register(authUser: IAuthProfessionalUser): Promise<InsertionResult<number>> {
        try {
            const salt = await bcrypt.genSalt(10);
            authUser.password = await bcrypt.hash(authUser.password, salt);
            const response = await this.repo.insertOne(authUser);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

