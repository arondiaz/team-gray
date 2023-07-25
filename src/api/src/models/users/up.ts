import { Gender, IUp } from "./up.interface";

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
    gender: Gender.female;
    birthdate: string = "";
    auth_number?: string = "";
    img?: string = "";
    created_at?: string = "";
    category_id: string = "";
}
