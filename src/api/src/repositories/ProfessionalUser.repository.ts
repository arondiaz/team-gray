import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { AuthProfessionalUser } from "../models/auth/AuthProfessionalUser";
import { IAuthProfessionalUser } from "../models/auth/AuthProfessionUser.interface";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { ProfessionalUser } from "../models/users/ProfessionalUser";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class ProfessionalUserRepository extends EditRepositoryBase<IProfessionalUser, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, ProfessionalUser, "professional_user");
    }

    async validateEmail(email: string): Promise<boolean> {
        const validated = await this.find("email = ?", [email]);

        if (validated.length === 1) {
            return true;
        }
        return false;
    }

    async getByEmail(email: string): Promise<IAuthProfessionalUser[]> {
        const validated = await this.find("email = ?", [email]);
        return validated;
    }
}

