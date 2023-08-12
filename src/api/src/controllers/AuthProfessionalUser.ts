import { IAuthProfessionalUser } from "./AuthProfessionUser.interface";
export class AuthProfessionalUser implements IAuthProfessionalUser {
    id: number = 0;
    email: string = "";
    password: string = "";
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
    created_at: string = "";
    category_id: string = "";
}

