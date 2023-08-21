import { Injectable, DependencyLifeTime } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext, ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import jwt from "jsonwebtoken";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { IPayLoad } from "../models/users/Payload.interface";

/**
 * middleware to authenticate Professional User
 */
@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class UserFilter implements IFilter {
    private config: Configuration;
    constructor(private readonly configBuilder: ConfigurationBuilder, private readonly repo: ProfessionalUserRepository) {
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

            const decode = jwt.decode(token) as IPayLoad;
            console.log(decode.last_name);
        } catch (error) {
            throw new Error(error);
        }
    }

    async afterExecute(): Promise<void> {}

    async onError() {}
}

