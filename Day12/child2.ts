import { Parent } from "./parent";

class Child2 extends Parent{


    createAccount(){

        console.log("Account is created");
        
    }
}

let ch2=new Child2
ch2.createAccount()
ch2.launchBrowser()
ch2.loadApplication()
ch2.loadUrl()
