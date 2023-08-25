import {
  AddHeaderInterceptor,
  HttpClient,
} from '@miracledevs/paradigm-web-fetch';
import { QueryString } from '@miracledevs/paradigm-web-fetch';
import { environment } from './environment';

export class ApiService {
  private baseUrl = environment.baseUrl;
  private readonly httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
    this.httpClient.registerInterceptor(
      new AddHeaderInterceptor('content-type', 'application/json')
    );
  }

  authorize(token: string): void {
    this.httpClient.registerInterceptor(
      new AddHeaderInterceptor('x-auth', token)
    );
  }

  async get<T>(url?: string, queryString?: QueryString): Promise<T> {
    const response = await this.httpClient.get(
      `${this.baseUrl}/${url}`,
      queryString
    );
    return (await response.json()) as T;
  }

  async getById<T>(id: string, url?: string, endpoint?: string): Promise<T> {
    const response = await this.httpClient.get(`${url}/${endpoint}/${id}`);
    return (await response.json()) as T;
  }

  async post<T>(
    url?: string,
    queryString?: QueryString,
    body?: BodyInit
  ): Promise<T> {
    const response = await this.httpClient.post(
      `${this.baseUrl}/${url}`,
      queryString,
      body
    );
    return (await response.json()) as T;
  }

  protected async put<T>(
    url?: string,
    queryString?: QueryString,
    body?: BodyInit
  ): Promise<T> {
    const response = await this.httpClient.put(
      `${this.baseUrl}/${url}`,
      queryString,
      body
    );
    return (await response.json()) as T;
  }

  protected async patch<T>(
    url?: string,
    queryString?: QueryString,
    body?: BodyInit
  ): Promise<T> {
    const response = await this.httpClient.patch(
      `${this.baseUrl}/${url}`,
      queryString,
      body
    );
    return (await response.json()) as T;
  }

  protected async delete<T>(
    url?: string,
    queryString?: QueryString
  ): Promise<T> {
    const response = await this.httpClient.delete(
      `${this.baseUrl}/${url}`,
      queryString
    );
    return (await response.json()) as T;
  }
}

export const apiServiceInstance = new ApiService();
