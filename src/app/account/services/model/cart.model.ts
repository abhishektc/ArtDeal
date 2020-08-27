export interface ICart {
    id?: any;
    userid?:any;
    artistid?: any;
    paintingsid?:any;
    date?: any;
  }
  
  export class Cart implements ICart {
    constructor(
      public id?: any,
      public userid?:any,
      public artistid?: any,
      public paintingsid?:any,
      public date?: any
    ) {}
  }