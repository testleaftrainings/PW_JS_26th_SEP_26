//promise with .then() and .catch()
// let marks=25

// let studentRecord = new Promise((resolve,reject)=>{

// if(marks>30){
//     resolve("passed")
// }else{
//     reject("falied")
// }


// })

// //console.log(studentRecord);//Promise { <pending> }

// studentRecord
// .then(result=>console.log(result)) //positive
// .catch(error=>console.log(error)) //error/failed state




//promise with async and await keyword


let marks=20

function studentRecord(){

return new Promise((resolve,reject)=>{

if(marks>30){
    resolve("passed")
}else{
    reject("falied")
}


})

}

async function checkResult(){

    try{

        let result= await studentRecord()
        console.log(result);
        
    }

    catch (error){
        console.log(error);
        
    }

}

checkResult()
