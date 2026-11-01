class MethodOverload{

click(locator:string):void
click(locator:string,action:string):void

click(locator:string,action?:string){

if(action){

    console.log(`double click the ${locator}`);
    
}else{
    console.log(`click the ${locator}`);

}

}


}

let mv=new MethodOverload()
mv.click("#login")
mv.click(".product","doubleclick")