import { authServiceInstance } from '../services/Auth.service';
import { ILoginToken } from '../interfaces/LoginProfessionalUser.interface';
import { ISignupProfessionalUser } from '../interfaces/SignupProfessionalUser.interface';
import { useState } from 'react';

export function useRegister() {
  const [result, setResult] = useState<ILoginToken>();

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
  }: ISignupProfessionalUser) => {
    try {
      const data = await authServiceInstance.ProfessionalUserRegister({
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
      console.log(data);
      if (data) {
        setResult(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { result, makeRegister };
}
