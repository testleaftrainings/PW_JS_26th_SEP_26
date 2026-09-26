// DataTypes-specifies the type of data a variable holds  (ctrl+/ for single line comment)

/* paragraph comment
Shift
+
Alt
+
A
 */



//var a1=100  //var is a keyword to declare a variable 'a1' and is been assigned with value as 100

/* Datatypes in JS

1. Primitive datatype(immutable-can not be changed)

number
string
boolean
undefined
null
bigint 

2. non primitive datatypes(mutable)
arrays, functions and objects
let arr=[1,2,3,4]
*/

//number  ->other programming lanugauges in c, Java ex: int, long, float, double
            //in JS all numbers are considered as number here

var phoneNumber=75629936783      //(camelCase=variable name)
phoneNumber=12.67
console.log(phoneNumber) //12.67
console.log(typeof phoneNumber)//number


//string -> reperesented using ''(single quote),""(double quotes),``(backticks-above the tab key)

var email="testleaf@support.com"
// email="1234"
// email="$"
// email=`26-09-26`
console.log("email id is ",email) //26-09-26
console.log(typeof email)//string


//boolean -> it returns either true or false

var isPlaywright=true
console.log(isPlaywright) //true
console.log(typeof isPlaywright) //boolean


//undefined -> we dont assign a value to the variable, later can be assigned in run time

var accountNumber
console.log(accountNumber) //undefined
console.log(typeof accountNumber)//undefined


//null -> means the variable currently has no value, and we intentionally set it as null

var landLineNumber=null
console.log(landLineNumber)  //null
console.log(typeof landLineNumber) //object (histroical bug that has been kept for backward compatibility.)

//bigInt -> BigInt is for large integers when Number cannot safely represent the exact integer value
// beyond 16 digits of numbers it is considered as exponential number or you can represent using bigint

var transactionId= 12345678910111212346789004567n
console.log(transactionId); //12345678910111212346789004567n
console.log(typeof transactionId);//bigint

