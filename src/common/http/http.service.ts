import { Catch, HttpException, HttpStatus, Inject } from '@nestjs/common';
import Axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';
import { AXIOS_INSTANCE_TOKEN } from './http.constants';

export class HttpService {
  constructor(
    @Inject(AXIOS_INSTANCE_TOKEN)
    private readonly instance: AxiosInstance = Axios,
  ) {}
  request<T = any>(
    config: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    throw new Error('Method not implemented.');
  }
  get<T = any>(
    url: string,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return Axios.get<T>(url, config);
  }
  delete<T = any>(
    url: string,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return Axios.delete<T>(url, config);
  }
  head<T = any>(
    url: string,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return Axios.head<T>(url, config);
  }
  post<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return Axios.post<T>(url, data, config);
  }
  put<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return Axios.put<T>(url, data, config);
  }
  patch<T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>,
  ): Promise<AxiosResponse<T, any>> {
    return Axios.patch<T>(url, data, config);
  }
  get axiosRef(): AxiosInstance {
    return this.instance;
  }
}
