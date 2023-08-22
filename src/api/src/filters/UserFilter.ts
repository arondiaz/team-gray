import { Injectable, DependencyLifeTime } from "@miracledevs/paradigm-web-di";
import { IFilter, HttpContext, ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import jwt from "jsonwebtoken";
import { IPayLoad } from "../models/users/Payload.interface";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";

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

            // decoded payload from jwt token.
            const decodedPayload = jwt.decode(token) as IPayLoad;

            // gets email from repository

            const user = await this.repo.validateEmail(decodedPayload.email);

            console.log(user);
        } catch (error) {
            throw new Error(error);
        }
    }

    async afterExecute(): Promise<void> {}

    async onError() {}
}

