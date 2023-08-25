import { useState } from 'react';
import { ILoginToken } from '../interfaces/LoginProfessionalUser.interface';
import { authServiceInstance } from '../services/Auth.service';

export const useAuth = () => {
  const [result, setResult] = useState<ILoginToken>();

  const apiPostRequest = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const data = await authServiceInstance.ProfessionalUserLogin({
        email,
        password,
      });
      console.log('Data', data);
      if (data) {
        setResult(data);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return { result, apiPostRequest };
};
