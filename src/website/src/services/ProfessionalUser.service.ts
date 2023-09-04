import { Endpoint } from './endpoints';
import { ApiService, apiServiceInstance } from './ApiService';

export class ProfessionalUserService {
  constructor(private readonly apiService: ApiService) {}
  async getProfessionalUserByCategory(category_id: string) {
    const request = await this.apiService.getById(
      category_id,
      Endpoint.professionalUserByCategory
    );
    return request;
  }
}

export const professionalUserServiceInstance = new ProfessionalUserService(
  apiServiceInstance
);
