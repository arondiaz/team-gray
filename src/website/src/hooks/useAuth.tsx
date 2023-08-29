import { useState } from 'react';
import { authServiceInstance } from '../services/Auth.service';
import { IProfessionalUser } from '../interfaces/ProfessionalUser.interface';

export function useAuth() {
  const [user, setUser] = useState<IProfessionalUser>();

  const request = async ({
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
        setUser(data);
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

  return { user, request };
}
