import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IAuthProfessionalUser } from "./AuthProfessionUser.interface";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class AuthProfessionalUser implements IAuthProfessionalUser {
    id: number = 0;
    email: string = "";
    password: string = "";
    name: string = "";
    last_name: string = "";
    dni: string = "";
    province: string = "";
    city: string = "";
    tel: string = "";
    link?: string = "";
    about_me?: string = "";
    gender: string = "";
    birth_date: string = "";
    auth_number?: string = "";
    img?: string = "";
    created_at: string = "";
    category_id: string = "";
}

