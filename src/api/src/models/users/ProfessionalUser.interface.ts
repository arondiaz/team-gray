import { Gender } from "./Gender";

export interface IProfessionalUser {
    id?: number;
    email: string;
    password?: string;
    name: string;
    last_name: string;
    dni: string;
    province: string;
    city: string;
    tel: string;
    link?: string;
    about_me?: string;
    gender: Gender;
    birth_date: string;
    auth_number?: string;
    img?: string;
    category_id?: string;
    state?: number;
}
