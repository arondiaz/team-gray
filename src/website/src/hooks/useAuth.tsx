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
      const data = await authServiceInstance.professionalUserLogin({
        email,
        password,
      });
      return data;
    } catch (error) {
      console.log('Error', error);
    }
  };

  return { request };
}
