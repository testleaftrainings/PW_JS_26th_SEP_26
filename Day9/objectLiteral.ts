//object is group of related data that is respresented  in the form of key-value pairs

//implicit inference 
//let userDeatils=value

// let userDetails={

//     firstName:"Kavitha",
//     age:30,
//     id:10035,
//     isInsured:true

// }

// console.log(userDetails)//{ firstName: 'Kavitha', age: 30, id: 10035, isInsured: true }
// console.log(userDetails.firstName)//Kavitha


//explicit inference
//let userDetails:type=value

let userDetails:{

    firstName:string
    "@age":number
    id:number
    isInsured:boolean

}={
   firstName:"Kavitha",
    "@age":30,
    id:1002,
    isInsured:true
}

console.log(userDetails)//{ firstName: 'Kavitha', age: 30, id: 1002, isInsured: true }
console.log(userDetails.firstName)//Kavitha
console.log(userDetails["@age"])//30

