declare global {
  interface Window {
    test: any;
    FB: {
      init: Function;
    };
  }
}

// add T suffix for types
export type TAccountId = number;

// add E suffix for enums
export enum EUserType {
  ADMIN = 'admin',
  USER = 'user',
}

// add I suffix for interfaces
export interface IAccount {
  id: TAccountId;
  name: string;
  type: EUserType;
}
