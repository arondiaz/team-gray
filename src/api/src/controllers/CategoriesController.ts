import { Action, ApiController, ConfigurationBuilder, Controller } from "@miracledevs/paradigm-express-webapi";
import { CategoryRepository } from "../repositories/Categories.repository";
import { ICategory } from "../models/categories/Category.interface";
import { GET, POST, Path, Security } from "typescript-rest";
import { Response, Tags } from "typescript-rest-swagger";
import { Configuration } from "../configuration/configuration";
import { AdminFilter } from "../filters/Admin.filter";
import { AdminService } from "../service/Admin.service";

@Path("/api/categories")
@Controller({ route: "/api/categories" })
export class CategoriesController extends ApiController {
    config: Configuration;
    constructor(private repo: CategoryRepository, private service: AdminService, config: ConfigurationBuilder) {
        super();
        this.config = config.build(Configuration);
    }

    @GET
    @Tags("Categories")
    @Path("/")
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
    @Security("x-auth")
    @Tags("Admin")
    @Path("/")
    @Response<string>(201, "Created category")
    @Response<string>(500, "Server error")
    @Action({ route: "/", fromBody: true, filters: [AdminFilter] })
    async post(category: ICategory): Promise<string> {
        try {
            const addCategory = await this.service.addCategory(category);

            if (addCategory.error) {
                this.httpContext.response.status(addCategory.code).end(addCategory.message);
                return;
            } else {
                this.httpContext.response.status(addCategory.code).end(addCategory.message);
                return;
            }
        } catch (error) {
            console.log(error);
            this.httpContext.response.sendStatus(500);
        }
    }
}

