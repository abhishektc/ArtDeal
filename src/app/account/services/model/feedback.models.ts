export interface IFeedback {
    id?: any;
    fullname?:any;
    email?: any;
    subject?:String;
    message?: String;
  }
  
  export class Feedback implements IFeedback {
    constructor(
      public id?: any,
      public fullname?:any,
      public email?: any,
      public subject?:String,
      public message?: String
    ) {}
  }