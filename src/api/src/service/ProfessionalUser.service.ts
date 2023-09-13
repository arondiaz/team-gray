import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IResponse } from "../models/Response.interface";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { AuthService } from "./AuthUser.service";
import jwt from "jsonwebtoken";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class ProfessionalUserService {
    constructor(
        private readonly repo: ProfessionalUserRepository,
        private readonly service: AuthService,
        private readonly configBuilder: ConfigurationBuilder
    ) {}

    public async getAll(): Promise<IProfessionalUser[] | undefined> {
        const response = await this.repo.getAllProfessionalUser();

        if (response.length > 0) {
            const users: IProfessionalUser[] = response.map(professionalUser => {
                const user: IProfessionalUser = {
                    email: professionalUser.email,
                    name: professionalUser.name,
                    last_name: professionalUser.last_name,
                    dni: professionalUser.dni,
                    province: professionalUser.province,
                    city: professionalUser.city,
                    tel: professionalUser.tel,
                    link: professionalUser.link,
                    about_me: professionalUser.about_me,
                    gender: professionalUser.gender,
                    birth_date: professionalUser.birth_date,
                    auth_number: professionalUser.auth_number,
                    img: professionalUser.img,
                    category_id: professionalUser.category_id,
                };
                return user;
            });

            return users;
        }
        return undefined;
    }

    public async findByCategory(category: number): Promise<IProfessionalUser[] | undefined> {
        const response = await this.repo.getByCategory(category);

        if (response.length > 0) {
            const users: IProfessionalUser[] = response.map(professionalUser => {
                const user: IProfessionalUser = {
                    email: professionalUser.email,
                    name: professionalUser.name,
                    last_name: professionalUser.last_name,
                    dni: professionalUser.dni,
                    province: professionalUser.province,
                    city: professionalUser.city,
                    tel: professionalUser.tel,
                    link: professionalUser.link,
                    about_me: professionalUser.about_me,
                    gender: professionalUser.gender,
                    birth_date: professionalUser.birth_date,
                    auth_number: professionalUser.auth_number,
                    img: professionalUser.img,
                };
                return user;
            });
            return users;
        }
        return undefined;
    }

    public async edit(professionalUser: IProfessionalUser): Promise<IResponse> {
        // Create a user for update.
        const updatedUser: IProfessionalUser = {
            // Assign the id to the authenticated user.
            id: this.service.authUser.id,
            // Assign the email to the authenticated user.
            email: this.service.authUser.email,
            name: professionalUser.name,
            last_name: professionalUser.last_name,
            dni: professionalUser.dni,
            birth_date: professionalUser.birth_date,
            category_id: professionalUser.category_id,
            link: professionalUser.link,
            tel: professionalUser.tel,
            city: professionalUser.city,
            province: professionalUser.province,
            gender: professionalUser.gender,
            auth_number: professionalUser.auth_number,
            about_me: professionalUser.about_me,
        };

        // If the value is undefined assign the value of the auth user.
        for (let key in updatedUser) {
            if (!updatedUser[key]) {
                updatedUser[key] = this.service.authUser[key];
            }
        }

        const user: IProfessionalUser = await this.repo.update(updatedUser);

        if (user) {
            const config = this.configBuilder.build(Configuration);

            const token = jwt.sign(
                {
                    email: user.email,
                    name: user.name,
                    last_name: user.last_name,
                    dni: user.dni,
                    province: user.province,
                    city: user.city,
                    tel: user.tel,
                    link: user.link,
                    about_me: user.about_me,
                    gender: user.gender,
                    birth_date: user.birth_date,
                    auth_number: user.auth_number,
                    img: user.img,
                    category_id: user.category_id,
                },
                config.jwt.secret
            );
            return {
                error: false,
                message: "Updated user",
                code: 200,
                token: token,
            };
        }
        throw new Error("User could not edit");
    }

    public async changeStateToFalse(authUser: IProfessionalUser): Promise<IResponse> {
        // State changed.
        authUser.state = 0;
        const changed = await this.repo.update(authUser);
        if (!changed) {
            return {
                error: true,
                message: "The user could not be disabled",
                code: 500,
            };
        }

        return {
            error: false,
            message: "The account has been disabled",
            code: 200,
        };
    }

    public async remove(authUser: IProfessionalUser): Promise<void> {
        await this.repo.delete(authUser.id);
    }
}
