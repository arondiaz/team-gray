import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IResponse } from "../models/Response.interface";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { AuthService } from "./AuthUser.service";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class ProfessionalUserService {
    constructor(private readonly repo: ProfessionalUserRepository, private readonly service: AuthService) {}

    public async getAllProfessionalUser(): Promise<IProfessionalUser[]> {
        const response = await this.repo.getAll();

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
        } else {
            throw new Error("There are no registered users");
        }
    }

    public async edit(professionalUser: IProfessionalUser): Promise<IResponse> {
        // assign the id to the authenticated user
        professionalUser.id = this.service.authUser.id;
        const response = await this.repo.update(professionalUser);

        if (response) {
            return {
                error: false,
                message: "Updated user",
                code: 200,
            };
        }
        throw new Error("User could not edit");
    }
}

