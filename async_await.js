// async function return promise
// The keyword await makes JavaScript wait until a promise settles and returns its result.

// Promises in JS -> resolve or reject
// Async / Await in JS -> try, catch

async function fun()
{
    try{ 
       await abc;
    }
    catch(error){
       console.log("abc does not exist", error)
    }
    finally{
       console.log("Runs code anyways")
    }
}
fun(); 

// Question for all

// async function sample()
// {
//     console.log('Inside function');
//     const response = await fetch('https://api.github.com/users');
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')
//     return users;
// }

// console.log("Before calling function")
// let a = sample();
// console.log("After calling function")
// console.log(a);
// a.then(data => console.log(data))
// console.log("Last line of this js file")




// let error = false;

// function time(ms) {

//    return new Promise( (resolve, reject) => {

//       if(!error){
//          setTimeout(resolve,ms);
//       }

//       else{
//          reject(console.log("Sorry!!"))
//       }
//     });
// }

// async function production()
// {
//     try{
// 	await time(2000)
// 	console.log("Task 1 completed");

// 	await time(0000)
// 	console.log("Task 2 completed");

// 	await time(2000)
// 	console.log("Task 3 completed");

// 	await time(1000)
// 	console.log("Task 4 completed");

// 	await time(1000)
// 	console.log("Task 5 completed");

// 	await time(2000)
// 	console.log("Task 6 completed");

// 	await time(3000)
// 	console.log("Task 7 completed");
//     }
//     catch(error){
// 	 console.log("Failed!!")
//     }
// }

// production();