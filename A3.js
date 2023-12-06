// function additionA(){
//     console.log("A")
// }

// function additionB(){
//     console.log("B")
// }
// additionB()
// additionA()
// function additionA(){
//     setTimeout(function(){
//         console.log("A")
//     },3000)
// }

// function additionB(){
//     console.log("B")
// }
// additionA()
// additionB()

// Async --------> sync

// function getInfo(){

//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("get id")
//     },2000)

//     setTimeout(function(){
//         console.log("get info")
//     },1000)


// }
//getInfo()



// function getInfo() {

//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("get id")
//             setTimeout(function () {
//                 console.log("get info")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()


// let pro = new Promise(function(resolve,reject){
//     let  a = 10
//     let b  = 5
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro
// .then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })


// pro
// .then(function(str){
//     console.log(str)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
//     return "hi"
// })
// .then(function(){
//     console.log("hi")
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will always execute")
// })



function createUser(){
   return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
         setTimeout(function(){
             resolve("get id")
         },2000)
     })
 }

 function getInfo(){
    return new Promise(function(resolve,reject){
         setTimeout(function(){
             resolve("get info")
         },1000)
     })
 }


//  createUser()
//  .then(function(str){
//     console.log(str)
//     return getId()
//  })
//  .then(function(str){
//     console.log(str)
//     return getInfo()
//  }).then(function(str){
//     console.log(str)
//  })
//  .catch(function(){
//     console.log("Error")
//  })
// .finally(function(){
//     console.log(" i will always execute")
// })


async function getUsersq(){
    let a = await createUser()
    console.log(a)
    let b  = await getId()
    console.log(b)
    let c = await getInfo()
    console.log(c)
}
getUsersq()