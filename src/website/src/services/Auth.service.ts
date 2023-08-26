import { ApiService, apiServiceInstance } from './ApiService';
import { Endpoint } from './endpoints';
import { ILoginToken } from '../interfaces/LoginProfessionalUser.interface';
import { IProfessionalUser } from '../interfaces/ProfessionalUser.interface';

export class AuthService {
  constructor(private apiService: ApiService) {}
  async ProfessionalUserLogin(login: any): Promise<ILoginToken> {
    const response = await this.apiService.post<ILoginToken>(
      Endpoint.loginProfessionalUser,
      undefined,
      JSON.stringify(login)
    );

    return response;
  }

  async ProfessionalUserRegister(
    user: IProfessionalUser
  ): Promise<ILoginToken> {
    const response = await this.apiService.post<ILoginToken>(
      Endpoint.signupProfessionalUser,
      undefined,
      JSON.stringify(user)
    );

    return response;
  }
}

export const authServiceInstance = new AuthService(apiServiceInstance);
