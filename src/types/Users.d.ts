export declare namespace IUsers {
  export interface BaseData {
    role: string;
    name: string;
    avatar: string;
  }

  export interface PM extends BaseData {}

  export interface DM extends BaseData {}

  export interface Leader extends BaseData {}
}
