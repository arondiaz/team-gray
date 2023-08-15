import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { AuthProfessionalUser } from "../controllers/AuthProfessionalUser";
import { IAuthProfessionalUser } from "../controllers/AuthProfessionUser.interface";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AuthRepository extends EditRepositoryBase<IAuthProfessionalUser, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, AuthProfessionalUser, "professional_user");
    }
}

