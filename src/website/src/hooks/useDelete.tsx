import { professionalUserServiceInstance } from '../services/ProfessionalUser.service';
import jwtDecode from 'jwt-decode';
import { IProfessionalUser } from '../interfaces/ProfessionalUser.interface';
import { apiServiceInstance } from '../services/ApiService';

export function useDelete() {
  const token = localStorage.getItem('token');

  const request = async () => {
    try {
      apiServiceInstance.authorize(token as string);
      const authUser = jwtDecode(token as string);

      await professionalUserServiceInstance.deleteProfessionalUser(
        authUser as IProfessionalUser
      );
    } catch (error) {
      console.log(error);
    }
  };
  return { request };
}
