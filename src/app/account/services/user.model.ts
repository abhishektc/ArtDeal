export interface IUser {
    id?: any;
    username?: string;
    fullname?: string;
    email?: string;
    contact?: Number;
    address?: string;
    city?: string;
    password?: string;
    roles?:String;
  }
  
  export class User implements IUser {
    constructor(
      public id?: any,
      public username?: string,
      public fullname?: string,
      public email?: string,
      public contact?: Number,
      public address?: string,
      public city?: string,
      public password?: string,
      public roles?:String
    ) {}
  }
  