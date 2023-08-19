import { ICategory } from '../interfaces/Category.interface';
import { ApiService, apiServiceInstance } from './ApiService';
import { Endpoint } from './endpoints';

export class CategoryService {
  constructor(private apiService: ApiService) {}
  // method to get all categories
  async getAll(): Promise<ICategory[]> {
    const petition = await this.apiService.get(Endpoint.categories);
    return petition as ICategory[];
  }
}

export const categoryServiceInstance = new CategoryService(apiServiceInstance);
