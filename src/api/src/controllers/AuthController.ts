import { Action, ApiController, Controller, HttpMethod } from "@miracledevs/paradigm-express-webapi";
import { AuthService } from "../service/AuthUser.service";
import { POST, Path } from "typescript-rest";
import { Response, Tags } from "typescript-rest-swagger";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";

@Path("/api/auth")
@Tags("AuthUser")
@Controller({ route: "/api/auth" })
export class AuthController extends ApiController {
    constructor(private service: AuthService) {
        super();
    }

    /**
     *
     * @param authUser
     *    * This is an endpoint to register as a professional user.
     * 
     *   Example:
     * 
            "email": "juan@gmail.com",
            "password": "1234",
            "name": "Juan",
            "last_name": "Lopez",
            "dni": "34614738",
            "province": "Santa Fe",
            "city": "Rosario",
            "tel": "2477434454",
            "link": "hi-world.com.ar",
            "about_me": "Experienced carpenter skilled in crafting wood into functional and artistic pieces. Dedicated to transforming ideas into tangible, quality creations.",
            "gender": "Male",
            "birth_date": "1990-01-03",
            "auth_number": "12312da134123QWw",
            "img": "photo.png",
            "category_id": "3"
        
     * @returns
     */

    @POST
    @Path("/signup")
    @Response<string>(201, "Professional User created")
    @Response<string>(400, "Bad request")
    @Response<string>(500, "Error server")
    @Action({ route: "/signup", fromBody: true })
    async post(authUser: IProfessionalUser): Promise<string> {
        const user = await this.service.register(authUser);

        if (user.error) {
            this.httpContext.response.status(user.code).send(user.message);
            throw new Error(user.message);
        } else {
            this.httpContext.response.status(user.code).send(user.message);
            return;
        }
    }

    /**
     * @param authUser
     * 
     *   * This is an endpoint to login as a professional user. The user will receive an authentication
     *     token to be validated when making requests.
     * 
     *   Example:
     * 
            "email": "juan@gmail.com",
            "password": "1234"        

     * @returns
     */

    @POST
    @Path("/login")
    @Response<string>(200, "Success")
    @Response<string>(400, "Bad request")
    @Response<string>(500, "Error server")
    @Action({ route: "/login", fromBody: true, method: HttpMethod.POST })
    async login(authUser: IProfessionalUser): Promise<string> {
        const response = await this.service.login(authUser);
        if (response.error) {
            this.httpContext.response.status(response.code).end(response.message);
            throw new Error(response.message);
        } else {
            this.httpContext.response.send(response.token);
            return;
        }
    }
}

