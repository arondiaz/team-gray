import { ICategory } from '../interfaces/Category.interface';
import { ApiService, apiServiceInstance } from './ApiService';
import { Endpoint } from './endpoints';

export class CategoryService {
  constructor(private readonly apiService: ApiService) {}

  // Method to get all categories.
  async getAll(): Promise<ICategory[]> {
    const response = await this.apiService.get(Endpoint.categories);
    return response as ICategory[];
  }
}

export const categoryServiceInstance = new CategoryService(apiServiceInstance);
