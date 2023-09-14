import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IResponse } from "../models/Response.interface";
import { IProfessionalUser } from "../models/users/ProfessionalUser.interface";
import { ProfessionalUserRepository } from "../repositories/ProfessionalUser.repository";
import { AuthService } from "./AuthUser.service";
import jwt from "jsonwebtoken";
import { ConfigurationBuilder } from "@miracledevs/paradigm-express-webapi";
import { Configuration } from "../configuration/configuration";
import { Validator } from "../utils/validator";

@Injectable({ lifeTime: DependencyLifeTime.Scoped })
export class ProfessionalUserService {
    constructor(
        private readonly repo: ProfessionalUserRepository,
        private readonly service: AuthService,
        private readonly configBuilder: ConfigurationBuilder,
        private readonly validate: Validator
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
        try {
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
                img: professionalUser.img,
            };

            // If the date of birth is undefined, assign the date of birth of the authenticated user, passing the data in the expected format.

            if (!updatedUser.birth_date) {
                const authUserDate = new Date(this.service.authUser.birth_date);
                updatedUser.birth_date = authUserDate.toISOString().slice(0, 10);
            }

            // If the value is undefined assign the value of the auth user.
            for (let key in updatedUser) {
                if (!updatedUser[key]) {
                    updatedUser[key] = this.service.authUser[key].toString();
                }
            }

            const editArr = [
                updatedUser.name,
                updatedUser.last_name,
                updatedUser.dni,
                updatedUser.birth_date,
                updatedUser.category_id,
                updatedUser.link,
                updatedUser.tel,
                updatedUser.city,
                updatedUser.province,
                updatedUser.gender,
                updatedUser.auth_number,
                updatedUser.about_me,
            ];

            if (this.validate.validateStringTypeData(editArr)) {
                return {
                    error: true,
                    message: "There are fields that are not of type string",
                    code: 400,
                };
            }

            if (!this.validate.validateString(updatedUser.name)) {
                return {
                    error: true,
                    message: "The field is not a valid name",
                    code: 400,
                };
            }

            if (!this.validate.validatePhone(updatedUser.tel)) {
                return {
                    error: true,
                    message: "The field is not a valid phone",
                    code: 400,
                };
            }

            if (!this.validate.validateString(updatedUser.last_name)) {
                return {
                    error: true,
                    message: "The field is not a valid last name",
                    code: 400,
                };
            }

            if (!this.validate.validateString(updatedUser.city)) {
                return {
                    error: true,
                    message: "The field is not a valid city",
                    code: 400,
                };
            }

            if (!this.validate.validateDni(updatedUser.dni)) {
                return {
                    error: true,
                    message: "The field is not a valid DNI",
                    code: 400,
                };
            }

            if (!this.validate.validateString(updatedUser.province)) {
                return {
                    error: true,
                    message: "The field is not a valid province",
                    code: 400,
                };
            }

            if (this.validate.validateAge(updatedUser.birth_date)) {
                return {
                    error: true,
                    message: this.validate.validateAge(updatedUser.birth_date) as string,
                    code: 400,
                };
            }

            if (this.validate.validateGender(updatedUser.gender)) {
                return {
                    error: true,
                    message: "Gender must be 'Male', 'Female' or 'Non-binary'",
                    code: 400,
                };
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
        } catch (error) {
            throw new Error(error);
        }
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

    public async getById(id: number): Promise<IProfessionalUser | undefined> {
        const response = await this.repo.getUserById(id);

        if (response) {
            const user: IProfessionalUser = {
                email: response.email,
                name: response.name,
                last_name: response.last_name,
                dni: response.dni,
                province: response.province,
                city: response.city,
                tel: response.tel,
                link: response.link,
                about_me: response.about_me,
                gender: response.gender,
                birth_date: response.birth_date,
                auth_number: response.auth_number,
                img: response.img,
                category_id: response.category_id,
            };
            return user;
        }
        return undefined;
    }
}
