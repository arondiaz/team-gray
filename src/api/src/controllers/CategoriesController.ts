import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { CategoryRepository } from "../repositories/categories.repository";
import { ICategory } from "../models/categories/category.interface";
import { GET, Path } from "typescript-rest";
import { Response } from "typescript-rest-swagger";

@Path("/api/categories")
@Controller({ route: "/api/categories" })
export class CategoriesController extends ApiController {
    constructor(private repo: CategoryRepository) {
        super();
    }

    @GET
    @Response<ICategory[]>(200, "Success")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/" })
    async get(): Promise<ICategory[]> {
        try {
            return await this.repo.getAll();
        } catch (error) {
            throw error;
        }
    }
}

