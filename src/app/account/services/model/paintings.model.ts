import { Artist } from './../artist.model';
export interface IPaintings {
    id?: any;
    artistid?: any;
    title?: string;
    date?: string;
    type?: string;
    price?: any;
    description?:string;
    filename1?:string;
    filename2?:string;
    filename3?:string;
    picByteFile1?:any;
    picByteFile2?:any;
    picByteFile3?:any;
    countView?:any;
    status?:string;
  }
  
  export class Paintings implements IPaintings {
    constructor(
      public id?: any,
      public artistid?: any,
      public title?: string,
      public date?: string,
      public type?: string,
      public price?: any,
      public description?:string,
      public filename1?:string,
      public filename2?:string,
      public filename3?:string,
      public picByteFile1?:any,
      public picByteFile2?:any,
      public picByteFile3?:any,
      public countView?:any,
      public status?:string
    ) {}
  }