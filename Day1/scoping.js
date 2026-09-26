//scoping => accessiblity or visibility of the variable in the code

/* 
var-> function scoped varaible
let/cont ->block scoped variable
var/let/const -> can also be used as global scoped variable(if not present inside the any block{},
it is a global variable) */


/* if condition=> based on the condition a block of code can be executed
if (condition) {
    
} */

/* function:A function is a reusable block of code that performs a specific task.
function name(params) {
    
} 
name()*/

//global scoped variable globalvariable

const globalvariable="varscoping"

function calculation(marks){

//let marks=25

if(marks>30){ 

   /* block scoped variable color, with let/const accessible only inside the if block but with var
    is accessible even outside the if block but not outside the function block */

    var color="pink" 
    console.log("passed"); //passed
    console.log("color inside the if block",color); //color inside the if block pink
}
    

console.log("color outside the if block but inside the function block",color);//color outside the if block but inside the function block pink

}
//console.log("color outside the if block and outside function block",color);//ReferenceError: color is not defined

calculation(80)
//calculation(10)
