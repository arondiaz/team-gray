import { authServiceInstance } from '../services/Auth.service';
import { useState } from 'react';
import { IProfessionalUser } from '../interfaces/ProfessionalUser.interface';

export function useRegister() {
  const [result, setResult] = useState<string>();

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
