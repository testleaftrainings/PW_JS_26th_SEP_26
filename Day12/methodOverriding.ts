class BrowserLaunch{


    browser(){

    console.log("chrome browser is launched");


    }

}



class ChildBrowser extends BrowserLaunch{

browser(){

    //console.log("Edge browser is launched");
    super.browser()
}

}

let cb=new ChildBrowser()
cb.browser()
