import { Action, ApiController, ConfigurationBuilder, Controller } from "@miracledevs/paradigm-express-webapi";
import { CategoryRepository } from "../repositories/Categories.repository";
import { ICategory } from "../models/categories/Category.interface";
import { GET, POST, Path, Security } from "typescript-rest";
import { Response, Tags } from "typescript-rest-swagger";
import { AdminFilter } from "../filters/Admin.filter";
import { AdminService } from "../service/Admin.service";

@Path("/api/categories")
@Controller({ route: "/api/categories" })
export class CategoriesController extends ApiController {
    constructor(private readonly repo: CategoryRepository, private readonly service: AdminService) {
        super();
    }

    /**
     *
     * @returns This endpoint returns all categories added by an administrator.
     */

    @GET
    @Tags("Categories")
    @Path("/")
    @Response<ICategory[]>(200, "Success")
    @Response<string>(500, "Server error")
    @Action({ route: "/" })
    async get(): Promise<ICategory[]> {
        return await this.repo.getAll();
    }

    /**
     *
     * @param category
        This endpoint is implemented to add categories by an authenticated administrator. 
        For now, for testing purposes, you can generate the token in jwt.io by passing the jwt.secret from 
        the .env file in the signature.
     * @returns
     */

    @POST
    @Security("x-auth")
    @Tags("Admin")
    @Path("/")
    @Response<string>(201, "Created category")
    @Response<string>(400, "Bad request")
    @Response<string>(409, "The category is already exists")
    @Response<string>(500, "Server error")
    @Action({ route: "/", fromBody: true, filters: [AdminFilter] })
    async post(category: ICategory) {
        const response = await this.service.addCategory(category);

        if (response.error) {
            this.httpContext.response.status(response.code).send(response.message);
            throw new Error(response.message);
        } else {
            this.httpContext.response.status(response.code).send(response.message);
            return;
        }
    }
}

