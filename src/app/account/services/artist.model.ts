export interface IArtist {
    id?: any;
    username?: string;
    fullname?: string;
    email?: string;
    contact?: any;
    experience?: string;
    qualification?: string;
    website?: string;
    address?: string;
    city?: string;
    password?: string;
    isportrait?:string;
    iswallpainter?:string;
    filename1?:string;
    filename2?:string;
    picByteProfile?:any;
    rankReview?:any;
    description?:string;
    accStatus?:string;
    picByteFile1?:any;
    picByteFile2?:any;
    roles?:String[];
    price?:IPrice
    
  }
  
  export class Artist implements IArtist {
    constructor(
      public id?: any,
      public username?: string,
      public fullname?: string,
      public email?: string,
      public contact?: Number,
      public experience?: string,
      public qualification?: string,
      public website?: string,
      public address?: string,
      public city?: string,
      public password?:string,
      public isportrait?:string,
      public iswallpainter?:string,
      public filename1?:string,
      public filename2?:string,
      public picByteProfile?:any,
      public rankReview?:any,
      public description?:string,
      public accStatus?:string,
      public picByteFile1?:any,
      public picByteFile2?:any,
      public roles?:String[],
      public price?:Price
    ) {}
  }

  export interface IPrice{
    portraitPrice?:any;
    wallpaintPrice?:any;
    teachPrice?:any;
  }

  export class Price implements IPrice{
    constructor(
      public portraitPrice?:any,
      public wallpaintPrice?:any,
      public teachPrice?:any
    ) {}
    
  }