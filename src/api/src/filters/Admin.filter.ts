import { Injectable, DependencyLifeTime } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext, ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import jwt from "jsonwebtoken";

/**
 * Middleware to authenticate administrators.
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AdminFilter implements IFilter {
    constructor(private readonly configBuilder: ConfigurationBuilder) {}

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        const config: Configuration = this.configBuilder.build(Configuration);

        try {
            const token = httpContext.request.header("x-auth");
            const validate = jwt.verify(token, config.jwt.secret);

            if (!token || !validate) {
                httpContext.response.sendStatus(401);
                return;
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async afterExecute(): Promise<void> {}

    async onError() {}
}
