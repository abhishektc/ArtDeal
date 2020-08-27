export interface IPwt {
    id?: any;
    artistid?: any;
    userid?:any;
    portrait?:string;
    wallpaint?:string;
    teach?: string;
    filename?:any;
    picByteFile1?:any;
    type?:string;
    price?:any;
    status?:string;
  }
  
  export class Pwt implements IPwt {
    constructor(
      public id?: any,
      public artistid?: any,
      public userid?:any,
      public portrait?:string,
      public wallpaint?:string,
      public teach?: string,
      public filename?:any,
      public picByteFile1?:any,
      public type?:string,
      public price?:any,
      public status?:string
    ) {}
}