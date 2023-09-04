import { Endpoint } from './endpoints';
import { ApiService, apiServiceInstance } from './ApiService';

export class ProfessionalUserService {
  constructor(private readonly apiService: ApiService) {}
  async getProfessionalUserByCategory(category_id: string) {
    const response = await this.apiService.getById(
      category_id,
      Endpoint.professionalUserByCategory
    );
    return response;
  }
}

export const professionalUserServiceInstance = new ProfessionalUserService(
  apiServiceInstance
);
