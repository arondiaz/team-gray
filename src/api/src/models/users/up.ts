import { DependencyLifeTime, Injectable } from "@miracledevs/paradigm-web-di";
import { IUp } from "./up.interface";

@Injectable({ lifeTime: DependencyLifeTime.Transient })
export class UP implements IUp {
    id?: number = 0;
    email: string = "";
    name: string = "";
    lastname: string = "";
    dni: string = "";
    province: string = "";
    city: string = "";
    tel: string = "";
    link?: string = "";
    about_me?: string = "";
    gender: string = "";
    birthdate: string = "";
    auth_number?: string = "";
    img?: string = "";
    created_at?: string = "";
    category_id: string = "";
}
