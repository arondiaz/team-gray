import { IAuthProfessionalUser } from "./AuthProfessionUser.interface";
export class AuthProfessionalUser implements IAuthProfessionalUser {
    email: string = "";
    password: string = "";
}

