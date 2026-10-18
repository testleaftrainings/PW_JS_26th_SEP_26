//print the statement

// console.log("TypeScript Basics")


//implicit inference

// let courseName="playwright"
// courseName="5"
// console.log(courseName);

// let duration=4
// console.log(duration);


//explicit inference

// let courseName:string="playwright"
// courseName="Testleaf"
// console.log(courseName);

// let duration:number=3.5
// console.log(duration);


/* DataTypes 

Primitive
1. string -'',"",``
2. number -0.5(number)
3. boolean -true or false
4. null - intentionally making null
5. undefined- variable without a value
6. bigInt -after 16 digits (n at the end)
7. any
8. unknown
9. never
10. tuple

*/


//any -> it can accept any datatype

// let empName:any="Sai"
// empName="1234"
// // empName=true
// // empName="hello"

// console.log(empName.toUpperCase)


//unknown -> similar to any type

// let empName:unknown="Sai"
// empName=1234
// empName=true
// empName="hello"

//if(typeof empName==="string"){
// console.log(empName.toUpperCase()) //HELLO

//}


//never -> enters into infinite loop 

// function add(a:number,b:string):string{

//     //console.log(a+b);
//     return a+b
    

// }

// //add(10,"12") //22,"1012"
// console.log(add(10,"12"))


// function Execute():never{

//     throw new Error("login failed")


// }
// Execute()


//tuple -> similar to array in JS

// let name1=["1","hello",90,true]  //array

// //name, id, mb, isInsured,bloodgroup
// let empDetails:[string,number,number,boolean,string]=["Arun",1123,786789367,true,"0+ve"]

// console.log(empDetails);
// empDetails[4]="welcome"
// console.log(empDetails);


//type Assertion -> 

let APIResponse:any="OK"
APIResponse=200

let newRespone=APIResponse as string

console.log(APIResponse, typeof APIResponse)
console.log(newRespone, typeof newRespone)

/* 200 number
200 number */









