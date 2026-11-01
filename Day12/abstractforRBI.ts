import { RBI } from "./interface";

export abstract class BaseBank implements RBI{

deposit(){
console.log("Amount is depoisted");
}


withDrawal(){
console.log("Amount is withdrawn");
}
  

KYC(){
console.log("customer details");
}

abstract loan():void

abstract rateofinterest():number

abstract minBal():number


}


