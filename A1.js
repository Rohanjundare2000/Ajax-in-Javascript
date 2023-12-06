
// function A(){
//     console.log(9+9)
// }
// function B(x1,x2)
// {
//     // return 9+9
//     return x1+x2
// }
// A()
// let V = B(20,10)
// console.log(V)


// // program 2
// // async  
// function addA(){
//      // this function will execute after 3 seconds 
//      setTimeout(function(){
//         console.log('print addA')
//      },3000)
// }
// function addB(){
//     console.log(9+9)
// }
// addA()
// addB()

// // program 3
// // user created ====> get id for user =====> get info for user
// function Userinfo(){

//     setTimeout(function(){
//         console.log('user created')
//     },3000)
//     setTimeout(function(){
//         console.log('get id for user')
//     },2000)
//     setTimeout(function(){
//         console.log('get info for user')
//     },1000)
// }
// Userinfo()


// // async code -----> synchronously??

// // call back hell: Callback hell occurs when you have multiple 
//nested callbacks within callbacks, leading to code that is hard to understand and prone to errors.

// Solution:By using techniques such as Promises and async / await , and 
// following best practices for organizing your code, 

// function Userinfo(){

//     setTimeout(function(){
//         console.log('user created')
//         setTimeout(function(){
//             console.log('get id for user')
//             setTimeout(function(){
//                 console.log('get info for user')
//             },1000)
//         },2000)
//     },3000)
// }
// Userinfo()


// // promises -------> 
// // async code --- sychronously removing call back function 
let pro = new Promise(function(resolve,reject){
    let a=20
    let b=20
    if(a==b)
    {
        resolve('hellow')
    }
    else{
        reject('bye')
    }
})
// consuming the promises
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})