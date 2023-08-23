import { Action, ApiController, Controller, HttpMethod } from "@miracledevs/paradigm-express-webapi";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { GET, PUT, Path, PathParam, Security } from "typescript-rest";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { Response, Tags } from "typescript-rest-swagger";
import { UserFilter } from "../filters/UserFilter";
import { ProfessionalUserService } from "../service/ProfessionalUser.service";
import { AuthService } from "../service/AuthUser.service";

@Path("/api/professional_user")
@Tags("Professional Users")
@Controller({ route: "/api/professional_user" })
export class ProfessionalUserController extends ApiController {
    constructor(
        private readonly repo: ProfessionalUserRepository,
        private readonly service: ProfessionalUserService,
        private readonly authService: AuthService
    ) {
        super();
    }

    @GET
    @Response<IProfessionalUser[]>(200, "Success")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/" })
    async get(): Promise<any[]> {
        return await this.service.getAllProfessionalUser();
    }

    /**
     * @param category
     * * This endpoint returns all registered professional users by trade category to which they belong.
     * @returns
     */

    @GET
    @Path("/category/:category_id")
    @Response<IProfessionalUser[]>(200, "Success")
    @Response<string>(400, "Bad request")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/category/:category_id" })
    async getByCategory(@PathParam("category_id") category: number): Promise<IProfessionalUser[]> {
        // todo implement service
        return await this.repo.find("category_id = ?", [category]);
    }

    /**
     * @param id
     * * This endpoint returns an professional user by id.
     * @returns
     */

    @GET
    @Path(":id")
    @Response<IProfessionalUser>(200, "Success")
    @Response<string>(404, "User not found")
    @Response<string>(500, "No connection to database")
    @Action({ route: "/:id" })
    async getById(@PathParam("id") id: number): Promise<IProfessionalUser> {
        return await this.repo.getById(id);
    }

    /**
     * 
     * @param professionalUser 
     * 
     * * This endpoint is for edit a professional user.
     * 
     * Example: 
     * 
            "name": "Juan Pedro",
            "last_name": "Lopez",
            "dni": "34614738",
            "province": "Santa Fe",
            "city": "Franck",
            "tel": "0341434454",
            "link": "hi-world.com.ar",
            "about_me": "Experienced carpenter skilled in crafting wood into functional and artistic pieces. Dedicated to transforming ideas into tangible, quality creations.",
            "gender": "Male",
            "birth_date": "1990-01-03",
            "auth_number": "12312da134123QWw",
            "img": "photo.png",
            "category_id": "3"
        
     * @returns 
     */
    @PUT
    @Security("x-auth")
    @Response<string>(200, "Updated user")
    @Response<string>(404, "User not found")
    @Action({ route: "/", fromBody: true, method: HttpMethod.PUT, filters: [UserFilter] })
    async editUser(professionalUser: IProfessionalUser): Promise<string> {
        const response = await this.service.edit(professionalUser);

        if (response.error) {
            this.httpContext.response.status(response.code).send(response.message);
            throw new Error(response.message);
        } else {
            this.httpContext.response.send(response.message);
            return;
        }
    }
}

