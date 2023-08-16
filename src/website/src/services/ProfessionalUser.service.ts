import { HttpServiceBase } from './HttpServiceBase';
import { environment } from './environment';
import { endpoints } from './endpoints';

const url = environment.production || environment.baseUrl;

const endpoint = endpoints.professionalUserByCategory;

export class ProfessionalUserService extends HttpServiceBase {
  async getProfessionalUserByCategory(category_id: string) {
    const request = await this.getById(category_id, url, endpoint);
    return request;
  }
}
