import { ApiService, apiServiceInstance } from './ApiService';
import { Endpoint } from './endpoints';
import { ILoginProfessionalUser } from '../interfaces/LoginProfessionalUser.interface';

export class AuthService {
  constructor(private apiService: ApiService) {}
  async ProfessionalUserRegister(): Promise<ILoginProfessionalUser> {
    const response = await this.apiService.get<ILoginProfessionalUser>(
      Endpoint.signupProfessionalUser
    );

    return response;
  }
}

export const authServiceInstance = new AuthService(apiServiceInstance);
