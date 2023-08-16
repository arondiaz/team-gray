import { HttpServiceBase } from './HttpServiceBase';

export class ProfessionalUserService extends HttpServiceBase {
  async getProfessionalUserByCategory(category_id: string) {
    const request = await this.getByCategory(category_id);
    return request;
  }
}
