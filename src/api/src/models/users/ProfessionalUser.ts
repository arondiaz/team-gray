import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IProfessionalUser } from "./ProfessionalUser.interface";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class ProfessionalUser implements IProfessionalUser {
    id?: number = 0;
    email: string = "";
    private password: string = "";
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
    category_id: string = "";
}

