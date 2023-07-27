import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { UP } from "../models/users/up";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class UpRepository extends EditRepositoryBase<UP, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, UP, "up");
    }
}
