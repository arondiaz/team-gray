import { ICategories } from '../interfaces/Category.interface';
import { HttpServiceBase } from './HttpServiceBase';
import { endpoints } from './endpoints';

export class CategoriesService extends HttpServiceBase {
  // method to get all categories
  async getAll(): Promise<ICategories[]> {
    const petition = await this.get(endpoints.categories, {
      method: 'GET',
    });
    return petition as ICategories[];
  }
}
