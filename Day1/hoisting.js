//hoisting => default behaviour JS where declarations alone gets hoisted to the top of the scope, here we have 2 phases 
// 1. memory creation phase-JavaScript prepares variables and functions
//2. execution phase-JavaScript executes the code line by line.

//var-> allows hoisting and return the value as undefined

/* var a=10
console.log(a); //10 */



console.log(a); //10                    
var a=10 //undefined 
var a=11  
                                           
/* internally
var a
console.log(a);
a=10 */


//let => hoisting takes place but throws ReferenceError

// let b=20
// console.log(b); //20


// console.log(b); //ReferenceError: Cannot access 'b' before initialization
// let b=20



/* internally
let b
console.log(b);
b=20 */


//const  => hoisting takes place but throws ReferenceError

// const c=30
// console.log(c); //30

console.log(c)// ReferenceError: Cannot access 'c' before initialization
const c=30


/* internally
const c
console.log(c);
c=30 */


//TDZ(temporal dead zone)- time period between the variable declaration and value assignment to it.



