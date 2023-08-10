import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { GET, Path, PathParam } from "typescript-rest";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { Response, Tags } from "typescript-rest-swagger";

@Path("/api/professional_user")
@Tags("Professional Users")
@Controller({ route: "/api/professional_user" })
export class ProfessionalUserController extends ApiController {
    constructor(private repo: ProfessionalUserRepository) {
        super();
    }

    // get all UPs

    @GET
    @Response<IProfessionalUser[]>(200, "Success")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/" })
    async get(): Promise<IProfessionalUser[]> {
        try {
            return await this.repo.getAll();
        } catch (error) {
            throw Error(error);
        }
    }

    // get by category

    @GET
    @Path("/category/:category_id")
    @Response<IProfessionalUser[]>(200, "Success")
    @Response<string>(400, "Bad request")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/category/:category_id" })
    async getByCategory(@PathParam("category_id") category: number): Promise<IProfessionalUser[]> {
        try {
            if (category <= 16 && category > 0) return await this.repo.find("category_id = ?", [category]);
        } catch (error) {
            throw Error(error);
        }
    }

    // get by id

    @GET
    @Path(":id")
    @Response<IProfessionalUser>(200, "Success")
    @Response<string>(404, "User not found")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/:id" })
    async getById(@PathParam("id") id: number): Promise<IProfessionalUser> {
        try {
            return await this.repo.getById(id);
        } catch (error) {
            throw Error(error);
        }
    }
}

