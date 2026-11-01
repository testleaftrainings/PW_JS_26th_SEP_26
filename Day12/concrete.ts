import { BaseBank } from "./abstractforRBI";

class SBI extends BaseBank{

    loan(): void {
        console.log("loan is issued ");
        
    }
    rateofinterest(): number {
        return 8.2
        
    }
    minBal(): number {
        return 2000
    }
   
}

let sb=new SBI()
sb.KYC()
sb.deposit()
sb.loan()
console.log(sb.minBal())
console.log(sb.rateofinterest())
sb.withDrawal()