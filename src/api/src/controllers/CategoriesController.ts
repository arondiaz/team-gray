import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { CategoryRepository } from "../repositories/Categories.repository";
import { ICategory } from "../models/categories/Category.interface";
import { GET, POST, Path } from "typescript-rest";
import { Response, Tags } from "typescript-rest-swagger";
import { Category } from "../models/categories/Category";

@Path("/api/categories")
@Tags("Categories")
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

    @POST
    @Action({ route: "/", fromBody: true })
    async post(category: ICategory) {
        await this.repo.insertOne(category);
    }
}

