//typeAlias-> creating the alias name for the custom type

//1. type union(|)/OR
//2. type intersection(&)/AND

//type union

let loginDetails:string | number
// loginDetails="gauthami"
// loginDetails=7680378678
// //loginDetails=true
// console.log(loginDetails);

// type ld=string | number

// let loginDetails:ld="kavitha"
// loginDetails="gauthami"
// loginDetails=7680378678
// console.log(loginDetails);


// type supportedBrowser= "chrome" | "edge" | "firefox" 


// //let launchBrowser:supportedBrowser="safari"


// function crossBrowser(bname:supportedBrowser){

// switch (bname) {
//     case "chrome":
//         console.log("launch chrome browser");
//         break;

//     case "edge":
//         console.log("launch edge browser");
//         break;

//     case "firefox":
//         console.log("launch firefox browser");
//         break;

//     default:
//         console.log("invalid browser");
// }

// }

// crossBrowser("chrome")



//type intersection(&)


// let loginDetails1:string & number //type is never 


//example

// type credentials={
//     username:string
//     password:string
// }

// type browserConfig={

//     browserName:string
//     browserVersion:number
//     headless:boolean
// }


// type tesConfig= credentials & browserConfig


// let config:tesConfig={

//     username:"democsr",
//     password:"crmsfa",
//     browserName:"chrome",
//     browserVersion:144,
//     headless:true

// }

// console.log(config.browserVersion)//144
// console.log(config)

/* {
  username: 'democsr',
  password: 'crmsfa',
  browserName: 'chrome',
  browserVersion: 144,
  headless: true
} */