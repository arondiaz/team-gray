import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ICategory } from "../models/categories/Category.interface";
import { CategoryRepository } from "../repositories/Categories.repository";
import { IResponse } from "./Response.interface";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AdminService {
    constructor(private repo: CategoryRepository) {}

    async addCategory(category: ICategory): Promise<IResponse> {
        if (category.name.length <= 1)
            return {
                error: true,
                message: "Bad request",
                code: 400,
            };

        const categoryFound = await this.repo.find("name = ?", [category.name]);

        if (categoryFound.length === 1) {
            return {
                error: true,
                message: "The category is already exists",
                code: 409,
            };
        } else {
            await this.repo.insertOne(category);
            return {
                error: false,
                message: "Category created",
                code: 201,
            };
        }
    }
}

