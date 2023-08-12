import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ProfessionalUser } from "../models/users/ProfessionalUser";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { InsertionResult } from "../core/repositories/commands/db.command";
import bcrypt from "bcrypt";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    constructor(private repo: ProfessionalUserRepository) {}

    async register(professionalUser: ProfessionalUser): Promise<InsertionResult<number>> {
        try {
            const salt = await bcrypt.genSalt(10);
            professionalUser.password = await bcrypt.hash(professionalUser.password, salt);
            const response = await this.repo.insertOne(professionalUser);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

