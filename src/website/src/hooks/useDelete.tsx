import { professionalUserServiceInstance } from '../services/ProfessionalUser.service';
import jwtDecode from 'jwt-decode';
import { IProfessionalUser } from '../interfaces/ProfessionalUser.interface';
import { apiServiceInstance } from '../services/ApiService';
import { HttpResponse } from '@miracledevs/paradigm-web-fetch';

export function useDelete() {
  const token = localStorage.getItem('token');

  const request = async (): Promise<HttpResponse | undefined> => {
    try {
      apiServiceInstance.authorize(token as string);
      const authUser = jwtDecode(token as string);

      const response =
        await professionalUserServiceInstance.deleteProfessionalUser(
          authUser as IProfessionalUser
        );

      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return { request };
}
