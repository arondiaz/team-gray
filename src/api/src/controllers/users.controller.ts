import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { UpRepository } from "../repositories/up.repository";
import { GET, Path, PathParam } from "typescript-rest";
import { IUp } from "../models/users/up.interface";
import { Response } from "typescript-rest-swagger";

@Path("/api/up")
@Controller({ route: "/api/up" })
export class UsersController extends ApiController {
    constructor(private repo: UpRepository) {
        super();
    }

    // get all UPs

    @GET
    @Response<IUp[]>(200, "Succes")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/" })
    async get(): Promise<IUp[]> {
        try {
            return await this.repo.getAll();
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            throw Error(error);
        }
    }

    // get by category

    @GET
    @Path("/category/:category_id")
    @Response<IUp[]>(200, "Succes")
    @Response<string>(404, "There are no users with those trades")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/category/:category_id" })
    async getByCategory(@PathParam("category_id") category: number): Promise<IUp[]> {
        try {
            if (category <= 16) return await this.repo.find("category_id = ?", [category]);
            this.httpContext.response.sendStatus(400).send("Bad request");
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            throw Error(error);
        }
    }
}
