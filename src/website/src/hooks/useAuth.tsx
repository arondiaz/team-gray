import { useState, useEffect } from 'react';
import { ILoginProfessionalUser } from '../interfaces/LoginProfessionalUser.interface';
import { authServiceInstance } from '../services/Auth.service';

export const useAuth = () => {
  const [user, setUser] = useState<ILoginProfessionalUser[] | []>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await authServiceInstance.ProfessionalUserRegister();
        if (data) {
          setUser([data] as ILoginProfessionalUser[]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return { user, setUser };
};
