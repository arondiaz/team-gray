import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { ProfessionalUser } from "../models/users/ProfessionalUser";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class ProfessionalUserRepository extends EditRepositoryBase<IProfessionalUser, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, ProfessionalUser, "professional_user");
    }

    async getByEmail(email: string): Promise<IProfessionalUser | undefined> {
        const validated = await this.find("email = ?", [email]);

        if (validated.length === 1 && validated[0].state === 1) {
            return validated[0];
        }
        return undefined;
    }

    async getAllProfessionalUser(): Promise<IProfessionalUser[]> {
        const response = this.find("state = ?", [true]);
        return response;
    }

    // method for change state to 0.
    async changeState(professionalUser: IProfessionalUser) {
        if (professionalUser.state === 1) {
            professionalUser.state = 0;
        } else {
            professionalUser.state = 1;
        }

        const response = await this.update(professionalUser);
        return response;
    }
}

