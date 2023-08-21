import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IResponse } from "../models/Response.interface";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class ProfessionalUserService {
    constructor(private readonly repo: ProfessionalUserRepository) {}

    public async edit(professionalUser: IProfessionalUser): Promise<IResponse> {
        const response = await this.repo.getByEmail(professionalUser.email);
        if (response) {
            return {
                error: false,
                message: "The email has been found",
                code: 200,
            };
        } else {
            return {
                error: true,
                message: "Email not found",
                code: 404,
            };
        }
    }
}

