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
    } catch (error) {
      console.log('Error', error);
    }
  };

  return { request };
}
