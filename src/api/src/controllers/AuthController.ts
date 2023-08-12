import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthService } from "../service/AuthUser.service";
import { POST, Path } from "typescript-rest";
import { Response, Tags } from "typescript-rest-swagger";
import { IAuthProfessionalUser } from "./AuthProfessionUser.interface";

@Path("/api/auth")
@Tags("AuthUser")
@Controller({ route: "/api/auth" })
export class AuthController extends ApiController {
    constructor(private service: AuthService) {
        super();
    }

    @POST
    @Path("/signup")
    @Response<string>(201, "Professional User created")
    @Response<string>(400, "Bad request")
    @Response<string>(500, "Error server")
    @Action({ route: "/signup", fromBody: true })
    async post(authUser: IAuthProfessionalUser): Promise<any> {
        try {
            const insert = await this.service.register(authUser);
            if (insert) {
                this.httpContext.response.status(201).end();
            } else {
                this.httpContext.response.sendStatus(500);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

