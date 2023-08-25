import { Injectable, DependencyLifeTime } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext, ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import jwt from "jsonwebtoken";
import { IPayLoad } from "../models/users/Payload.interface";
import { AuthService } from "../service/AuthUser.service";

/**
 * middleware to authenticate professional user.
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class UserFilter implements IFilter {
    constructor(private readonly configBuilder: ConfigurationBuilder, private readonly service: AuthService) {}

    async beforeExecute(httpContext: HttpContext): Promise<void> {
        const config = this.configBuilder.build(Configuration);
        const token = httpContext.request.header("x-auth");
        const validate = jwt.verify(token, config.jwt.secret);

        if (!token || !validate) {
            httpContext.response.sendStatus(401);
            return;
        }

        // Decoded payload from jwt token.
        const decodedPayload = jwt.decode(token) as IPayLoad;

        // Authenticating professional user requests.
        await this.service.authenticate(decodedPayload.email);
    }

    async afterExecute(): Promise<void> {}

    async onError() {}
}

