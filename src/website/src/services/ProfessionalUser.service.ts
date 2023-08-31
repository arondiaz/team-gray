import { environment } from './environment';
import { Endpoint } from './endpoints';
import { ApiService, apiServiceInstance } from './ApiService';

const url = environment.baseUrl;

export class ProfessionalUserService {
  constructor(private readonly apiService: ApiService) {}
  async getProfessionalUserByCategory(category_id: string) {
    const request = await this.apiService.getById(
      category_id,
      url,
      Endpoint.professionalUserByCategory
    );
    return request;
  }
}

export const professionalUserServiceInstance = new ProfessionalUserService(
  apiServiceInstance
);
