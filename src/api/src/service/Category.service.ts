import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ICategory } from "../models/categories/Category.interface";
import { CategoryRepository } from "../repositories/Category.repository";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class CategoryService {
    constructor(private readonly repo: CategoryRepository) {}

    async getAllCategories(): Promise<ICategory[] | undefined> {
        const response = await this.repo.getAll();

        if (response.length > 0) {
            return response;
        }
        return undefined;
    }
}

