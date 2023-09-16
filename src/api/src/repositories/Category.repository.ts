import { DependencyContainer, DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { Category } from "../models/categories/Category";
import { MySqlConnection } from "../core/mysql/mysql.connection";
import { EditRepositoryBase } from "../core/repositories/edit.repository";
import { ICategory } from "../models/categories/Category.interface";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class CategoryRepository extends EditRepositoryBase<Category, number> {
    constructor(dependencyContainer: DependencyContainer, connection: MySqlConnection) {
        super(dependencyContainer, connection, Category, "categories");
    }

    async findCategory(category: ICategory): Promise<ICategory> {
        const categories = await this.find("name = ?", [category.name]);
        return categories[0];
    }
}

