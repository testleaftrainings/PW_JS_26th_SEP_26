function login(cb){

console.log("log in is successful");
cb()
}

function username(cb){
console.log("enetered username");
cb()

}

function password(cb){
console.log("enetered password");
cb()
}

function welcome(){
console.log("enetered welcome");
}


//login(username,password)

login(()=>{
    username(()=>{
        password(()=>{
            welcome()

        })
    })
})