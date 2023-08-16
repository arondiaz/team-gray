import { HttpClient } from '@miracledevs/paradigm-web-fetch';
import { QueryString } from '@miracledevs/paradigm-web-fetch';
import { environment } from './environment';

export class HttpServiceBase {
  baseUrl = environment.production || environment.baseUrl;

  constructor(private readonly httpClient: HttpClient) {}

  protected async get<T>(url?: string, queryString?: QueryString): Promise<T> {
    const response = await this.httpClient.get(
      `${this.baseUrl}/${url}`,
      queryString
    );
    return (await response.json()) as T;
  }

  protected async post<T>(
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
