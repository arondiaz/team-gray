import { Injectable, DependencyLifeTime } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext, ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import jwt from "jsonwebtoken";
import { IPayLoad } from "../models/users/Payload.interface";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { AuthService } from "../service/AuthUser.service";

/**
 * middleware to authenticate professional user.
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class UserFilter implements IFilter {
    private config: Configuration;
    constructor(private readonly configBuilder: ConfigurationBuilder, private readonly service: AuthService) {
        this.config = configBuilder.build(Configuration);
    }

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        const token = httpContext.request.header("x-auth");
        const validate = jwt.verify(token, this.config.jwt.secret);

        if (!token || !validate) {
            httpContext.response.sendStatus(401);
            return;
        }

        // decoded payload from jwt token.
        const decodedPayload = jwt.decode(token) as IPayLoad;

        // authenticating professional user requests.
        await this.service.authenticate(decodedPayload.email);
    }

    async afterExecute(): Promise<void> {}

    async onError() {}
}

