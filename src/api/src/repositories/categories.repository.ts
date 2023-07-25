import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { Category } from "../models/categories/category";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { ReadonlyRepositoryBase } from "../core/repositories/readonly.repository";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class CategoryRepository extends ReadonlyRepositoryBase<Category, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Category, "categories");
    }
}
