import { Parent } from "./parent";

class Child extends Parent{

    createLead(){

        console.log("Lead is created");
        
    }

}

let ch=new Child()

ch.launchBrowser()
ch.loadUrl()
ch.createLead()
ch.loadApplication()