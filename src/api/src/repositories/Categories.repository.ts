import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { Category } from "../models/categories/Category";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { ReadonlyRepositoryBase } from "../core/repositories/readonly.repository";
import { EditRepositoryBase } from "../core/repositories/edit.repository";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class CategoryRepository extends EditRepositoryBase<Category, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Category, "categories");
    }
}

