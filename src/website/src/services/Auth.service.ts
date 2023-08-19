import { environment } from './environment';
import { ApiService, apiServiceInstance } from './ApiService';
import { Endpoint } from './endpoints';

const url = environment.baseUrl;

export class AuthService {
  constructor(private apiService: ApiService) {}
  async ProfessionalUserRegister(userData: any): Promise<any> {
    const response = await this.apiService.authPost(
      `${url}${Endpoint.signupProfessionalUser}`,
      undefined,
      JSON.stringify(userData)
    );
    return response;
  }
}

export const authServiceInstance = new AuthService(apiServiceInstance);
