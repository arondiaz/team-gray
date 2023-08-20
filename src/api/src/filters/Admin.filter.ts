import { Injectable, DependencyLifeTime } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext, ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import { AdminService } from "../service/Admin.service";
import jwt from "jsonwebtoken";

/**
 * middleware to authenticate administrators
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class AdminFilter implements IFilter {
    private config: Configuration;
    constructor(private readonly service: AdminService, private readonly configBuilder: ConfigurationBuilder) {
        this.config = configBuilder.build(Configuration);
    }

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        try {
            const token = httpContext.request.header("x-auth");

            if (!token || !jwt.verify(token, this.config.jwt.secret)) {
                httpContext.response.sendStatus(401);
                return;
            }

            // todo insert ProfessionalUserRepository
        } catch (error) {
            console.log(error);
            httpContext.response.sendStatus(500);
        }
    }

    async afterExecute(): Promise<void> {}

    async onError() {}
}

