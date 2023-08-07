import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { UpRepository } from "../repositories/up.repository";
import { GET, Path, PathParam } from "typescript-rest";
import { IUp } from "../models/users/up.interface";
import { Response } from "typescript-rest-swagger";

@Path("/api/up")
@Controller({ route: "/api/up" })
export class ProfessionalUserController extends ApiController {
    constructor(private repo: UpRepository) {
        super();
    }

    // get all UPs

    @GET
    @Response<IUp[]>(200, "Success")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/" })
    async get(): Promise<IUp[]> {
        try {
            return await this.repo.getAll();
        } catch (error) {
            throw Error(error);
        }
    }

    // get by category

    @GET
    @Path("/category/:category_id")
    @Response<IUp[]>(200, "Success")
    @Response<string>(400, "Bad request")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/category/:category_id" })
    async getByCategory(@PathParam("category_id") category: number): Promise<IUp[]> {
        try {
            if (category <= 16 && category > 0) return await this.repo.find("category_id = ?", [category]);
        } catch (error) {
            throw Error(error);
        }
    }

    // get by id

    @GET
    @Path(":id")
    @Response<IUp>(200, "Success")
    @Response<string>(404, "User not found")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/:id" })
    async getById(@PathParam("id") id: number): Promise<IUp> {
        try {
            return await this.repo.getById(id);
        } catch (error) {
            throw Error(error);
        }
    }
}

