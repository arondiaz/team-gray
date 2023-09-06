import { authServiceInstance } from '../services/Auth.service';
import { IProfessionalUser } from '../interfaces/ProfessionalUser.interface';

export function useRegister() {
  const makeRegister = async ({
    email,
    password,
    name,
    last_name,
    dni,
    province,
    city,
    tel,
    link,
    about_me,
    gender,
    birth_date,
    auth_number,
    img,
    category_id,
  }: IProfessionalUser) => {
    try {
      const data = await authServiceInstance.professionalUserRegister({
        email,
        password,
        name,
        last_name,
        dni,
        province,
        city,
        tel,
        link,
        about_me,
        gender,
        birth_date,
        auth_number,
        img,
        category_id,
      });

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { makeRegister };
}
