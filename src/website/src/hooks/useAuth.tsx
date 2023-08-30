import { tr } from 'date-fns/locale';
import { authServiceInstance } from '../services/Auth.service';

export function useAuth() {
  const request = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await authServiceInstance.ProfessionalUserLogin({
        email,
        password,
      });
      return true;
    } catch (error) {
      console.log('Error', error);
      return false;
    }
  };

  return { request };
}
