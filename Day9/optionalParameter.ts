//optional parameter

function login(username:string, password?:string, islogin?:boolean){

if(password){

    if(islogin){

        console.log("you have already logged in");
    
    }else{
        console.log("logging in");
        
    }
}else if(username){

    console.log("only user name is eneterd and password is missing");
    
}
}

login("democsr","crmsfa")
login("democsr")
login("democsr","crmsfa",true)


// function greet(name: string, city?: string) {
 
//  if(city){
//   console.log(`Hello ${name}, mycity is ${city}`);
//   }
// else{
//     console.log(`Hello ${name}`);
//   }
// }

// greet("Bala");     //   Hello Bala    
// greet("Bala", "Chennai"); //Hello Bala , mycity is Chennai