import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ICategory } from "../models/categories/Category.interface";
import { CategoryRepository } from "../repositories/Categories.repository";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AdminService {
    constructor(private repo: CategoryRepository) {}

    async insertCategory(category: ICategory) {
        await this.repo.insertOne(category);
    }
}

