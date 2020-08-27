export interface IOrders {
    id?: any;
    userid?:any;
    artistid?: any;
    paintingsid?:any;
    pwtid?:any;
    orderDate?: any;
    status?:string;
    rating?:any;
    comment?:string
  }
  
  export class Orders implements IOrders {
    constructor(
      public id?: any,
      public userid?:any,
      public artistid?: any,
      public paintingsid?:any,
      public pwtid?:any,
      public orderDate?: any,
      public status?:string,
      public rating?:any,
      public comment?:string
    ) {}
}