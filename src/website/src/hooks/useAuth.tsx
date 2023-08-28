import { useState } from 'react';
import { ILoginToken } from '../interfaces/LoginProfessionalUser.interface';
import { authServiceInstance } from '../services/Auth.service';

export function useAuth() {
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
        localStorage.setItem('token', result);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return { result, apiPostRequest };
}
