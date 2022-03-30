import type { AxiosRequestConfig } from 'axios';

declare module 'axios' {
  export interface Pagination {
    current_page: number;
    page_size: number;
    total: number;
  }

  export interface DefaultResponse {
    list: any[];
    pagination: Pagination;
  }

  export interface AxiosInstance {
    request<T = DefaultResponse>(config: AxiosRequestConfig): Promise<T>;
    get<T = DefaultResponse>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T = DefaultResponse>(url: string, config?: AxiosRequestConfig): Promise<T>;
    head<T = DefaultResponse>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T = DefaultResponse>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T = DefaultResponse>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T = DefaultResponse>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }
}
