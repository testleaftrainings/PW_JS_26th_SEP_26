import { GrandParent } from "./grandParent";

export class Parent extends GrandParent{


    launchBrowser(){

        console.log("browser is launched");
        
    }

    loadUrl(){

    console.log("URL is loaded");

    }
}

//can directly inherit, no need to export and import
// class Child1 extends Parent{

//     createLead(){

//         console.log("Lead is created");
        
//     }

// }

// let ch1=new Child()

// ch.launchBrowser()
// ch.loadUrl()
// ch.createLead()