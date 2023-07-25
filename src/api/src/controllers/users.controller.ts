import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";

@Controller({ route: "/api/users" })
export class UsersController extends ApiController {
    constructor() {
        super();
    }

    @Action({ route: "/up" })
    async get(): Promise<any> {
        try {
            return;
        } catch (error) {
            this.httpContext.response.sendStatus(500);
            throw Error(error);
        }
    }
}
