import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { ProfessionalUser } from "../models/users/ProfessionalUser";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class ProfessionalUserRepository extends EditRepositoryBase<ProfessionalUser, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, ProfessionalUser, "professional_user");
    }

    public async getByEmail(userEmail: string): Promise<IProfessionalUser | undefined> {
        const results = await this.find("email = ?", [userEmail]);

        return results && results.length > 0 ? results[0] : undefined;
    }
}

