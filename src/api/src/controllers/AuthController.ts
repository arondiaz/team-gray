import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";
import { AuthService, IError } from "../service/AuthUser.service";
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
    async post(authUser: IAuthProfessionalUser): Promise<IError | boolean> {
        try {
            const user = await this.service.register(authUser);
            console.log(typeof user);

            if (typeof user != "boolean") {
                this.httpContext.response.status(user.code).end(user.message);
                return;
            }
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            console.log(error);
        }
    }
}

