import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { ICategory } from "../models/categories/Category.interface";
import { CategoryRepository } from "../repositories/Categories.repository";
import { IResponse } from "./Response.interface";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AdminService {
    constructor(private repo: CategoryRepository) {}

    async addCategory(category: ICategory): Promise<IResponse> {
        if (category.name.length === 1)
            return {
                error: true,
                message: "Bad request",
                code: 400,
            };
        const arr = category.name.split("");
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === " ") {
                arr.splice(i, 1);
            }
        }
        const categoryClean = arr.join("");

        const validate = await this.repo.find("name = ?", [categoryClean]);
        console.log(validate[0]);

        if (validate.length === 1) {
            return {
                error: true,
                message: "The category is already exists",
                code: 409,
            };
        }

        return {
            error: false,
            message: "Category created",
            code: 201,
        };
    }
}

