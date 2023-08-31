import { ApiService, apiServiceInstance } from './ApiService';
import { Endpoint } from './endpoints';
import { ILoginProfessionalUser } from '../interfaces/LoginProfessionalUser.interface';
import { IProfessionalUser } from '../interfaces/ProfessionalUser.interface';
import { HttpResponse } from '@miracledevs/paradigm-web-fetch';

export class AuthService {
  constructor(private apiService: ApiService) {}
  async ProfessionalUserLogin(
    login: ILoginProfessionalUser
  ): Promise<HttpResponse | undefined> {
    const response = await this.apiService.post(
      Endpoint.loginProfessionalUser,
      undefined,
      JSON.stringify(login)
    );

    if (response.status === 200) {
      const token = (await response.text()) as string;
      localStorage.setItem('token', token);
    }
    return response;
  }

  async ProfessionalUserRegister(user: IProfessionalUser): Promise<string> {
    const response = await this.apiService.post(
      Endpoint.signupProfessionalUser,
      undefined,
      JSON.stringify(user)
    );

    return (await response.text()) as string;
  }
}

export const authServiceInstance = new AuthService(apiServiceInstance);
