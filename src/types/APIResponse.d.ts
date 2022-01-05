export declare namespace IApi {
  export interface Response<T> {
    data: T;
    status: number; // default: 200
    statusText: string; // default: ''
  }
}
