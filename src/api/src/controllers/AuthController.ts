import { Action, ApiController, Controller, HttpMethod } from "@miracledevs/paradigm-express-webapi";
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
    async post(authUser: IAuthProfessionalUser): Promise<string> {
        const user = await this.service.register(authUser);

        if (user.error) {
            this.httpContext.response.status(user.code).end(user.message);
        } else {
            this.httpContext.response.status(user.code).end(user.message);
        }
        return;
    }

    @POST
    @Path("/login")
    @Response<string>(200, "Success")
    @Response<string>(400, "Bad request")
    @Response<string>(500, "Error server")
    @Action({ route: "/login", fromBody: true, method: HttpMethod.POST })
    async login(authUser: IAuthProfessionalUser): Promise<string> {
        const user = await this.service.login(authUser);
        if (user.error) {
            this.httpContext.response.status(user.code).end(user.message);
        } else {
            this.httpContext.response.send(user.token);
        }
        return;
    }
}
