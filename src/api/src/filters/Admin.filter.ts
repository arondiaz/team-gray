import { Injectable, DependencyLifeTime } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext, ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import jwt from "jsonwebtoken";

/**
 * middleware to authenticate administrators
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AdminFilter implements IFilter {
    private config: Configuration;
    constructor(private readonly configBuilder: ConfigurationBuilder) {
        this.config = configBuilder.build(Configuration);
    }

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            const token = httpContext.request.header("x-auth");
            const validate = jwt.verify(token, this.config.jwt.secret);

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

