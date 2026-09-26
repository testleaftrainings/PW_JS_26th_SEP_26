
//var,let and const -> keyword used to declare a varibale


//var => allows both redeclaration and reassignment

var product="mobile"  //declaration
var product="laptop" //redeclaration/reinitialization is allowed.

console.log(product); //laptop
console.log(typeof product);//string

product="carryBag" // reassignment-> updating the new value is also allowed in var

console.log(product); //carryBag
console.log(typeof product);//string

//let => allows reassignment but redeclaration is not allowed

let quantity=1 
//let quantity=2 //(redeclaration is not allowed)
quantity=4 //(reassignment is allowed)
//quantity="5"

console.log(quantity) //4
console.log(typeof quantity)//number


//const 

const price="4000" 
//const price="4000"(redeclaration is not allowed)
price=6000 // (reassignment is not allowed) TypeError: Assignment to constant variable.
console.log(price);

/* const price
price=4000 , cannot declare the variable and assign value in 2 different line*/
