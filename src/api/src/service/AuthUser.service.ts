import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ProfessionalUser } from "../models/users/ProfessionalUser";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { InsertionResult } from "../core/repositories/commands/db.command";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthService {
    constructor(private repo: ProfessionalUserRepository) {}

    async register(professionalUser: ProfessionalUser): Promise<InsertionResult<number>> {
        try {
            const response = await this.repo.insertOne(professionalUser);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

