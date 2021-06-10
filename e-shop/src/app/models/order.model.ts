export class OrderModel{
  ID: number;
  Name: string;
  UserPhone: string;
  UserAddress: string;
  Guid: string;
  Amount: number;
  Note:string = "";
  Status: string;
  CreatedTime: Date;
}