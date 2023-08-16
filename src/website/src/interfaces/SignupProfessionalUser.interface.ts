export interface ISignupProfessionalUser {
  email: string;
  password: string;
  name: string;
  lastname: string;
  dni: string;
  province: string;
  city: string;
  tel: string;
  link?: string;
  about_me?: string;
  gender: string;
  birthdate: string;
  auth_number?: string;
  img?: string;
  category_id: string;
}
