import { useState } from 'react';
import { authServiceInstance } from '../services/Auth.service';

export function useAuth() {
  const [result, setResult] = useState<string | undefined>();

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
      if (data) {
        setResult(data);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return { result, apiPostRequest };
}
