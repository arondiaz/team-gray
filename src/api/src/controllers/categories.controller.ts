import { Action, ApiController, Controller } from "@miracledevs/paradigm-express-webapi";

@Controller({ route: "/api/categories" })
export class CategoriesController extends ApiController {
    constructor() {
        super();
    }

    @Action({ route: "/" })
    async get(): Promise<void> {
        try {
            this.httpContext.response.sendStatus(200);
            return;
        } catch {
            this.httpContext.response.sendStatus(500);
            return;
        }
    }
}
