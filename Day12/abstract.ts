abstract class Payment{

//implemented method
 printReceipt(){
console.log("payment receipt is printed");

}

//unimplemented method
abstract pay(amount:number):void

}

//can not create object for abstract class
//new Payment

class PaymentGateway extends Payment{

    pay(amount: number): void {
        console.log(`Amount paid through gpay is ${amount}`);
        
    }
    
}

let pg=new PaymentGateway()
pg.pay(100)
pg.printReceipt()