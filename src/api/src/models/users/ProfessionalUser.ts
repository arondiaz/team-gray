import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IProfessionalUser } from "./ProfessionalUser.interface";
import { Gender } from "./Gender";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class ProfessionalUser implements IProfessionalUser {
    id?: number = 0;
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
    gender: Gender.female;
    birth_date: string = "";
    auth_number?: string = "";
    img?: string = "";
    category_id: string = "";
    state?: number = 1;
}
