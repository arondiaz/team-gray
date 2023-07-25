export interface IUp {
    id?: number;
    email: string;
    name: string;
    lastname: string;
    dni: string;
    province: string;
    city: string;
    tel: string;
    link?: string;
    about_me?: string;
    gender: Gender;
    birthdate: string;
    auth_number?: string;
    img?: string;
    created_at?: string;
    category_id: string;
}

export enum Gender {
    male = "Masculino",
    female = "Femenino",
    other = "Otro",
}
