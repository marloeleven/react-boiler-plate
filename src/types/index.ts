declare global {
  interface Window {
    test: any;
    FB: {
      init: Function;
    };
  }
}

export type userId = string;

export interface UserInfo {
  name: string;
  type: UserType;
}

export enum UserType {
  ADMIN = 'admin',
  USER = 'user',
}
