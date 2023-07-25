import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { CategoryRepository } from "../repositories/categories.repository";
import { ICategory } from "../models/categories/category.interface";

@Controller({ route: "/api/categories" })
export class CategoriesController extends ApiController {
    constructor(private repo: CategoryRepository) {
        super();
    }

    @Action({ route: "/" })
    async get(): Promise<ICategory[]> {
        try {
            return await this.repo.getAll();
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            throw Error(error);
        }
    }
}
