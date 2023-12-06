// function getSingleUser(id) {
//     return fetch(`https://reqres.in/api/users/${id}`)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (response) {
//             return response.data
//         })
// }
// function getErrorState() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject("Error happen")
//         }, 3)
// //     })
// // }
function getSingleUser(id){
   return fetch(`https://reqres.in/api/users/${id}`)
    .then(function(response){
       // console.log(response)
         return response.json()
    })
    .then(function(response){
        //console.log(response)
        return response.data
    })
}
function getErrorState(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject ("Error happen")
        },3)
    })
}


// // program 2

// async function PromiseAll() {
//     let a = await Promise.all(
//         [
//             getSingleUser(1),
//             getSingleUser(2),
//             getSingleUser(3)

//         ]
//     )
//     console.log(a)
// }
// //PromiseAll()
async function PromiseAll(){
    let a = await Promise.all(
        [
            getsingleUser(1),
            getsingleUser(2),
            getsingleUser(3)
        ]
    )
    console.log(a)
}
PromiseAll()

// // async function PromiseAllSettled(){
// //     let b = await Promise.allSettled([
// //             getSingleUser(1),
// //             getSingleUser(2),
// //             getSingleUser(3),
// //             getSingleUser(334)
// //     ])
// //     console.log(b)
// // }
// // PromiseAllSettled()


// async function PromiseRace() {
//     try{
//         let b = await Promise.race([
//             getSingleUser(1),
//             getErrorState()
//         ])
//         console.log(b)
//     }
//     catch {
//         console.log("Error happen")
//     }
   
    
// }
// //PromiseRace()


// async function PromiseAny(){
//     let q1 = await Promise.any([
//         getErrorState(),
//         getSingleUser(2),
//         getSingleUser(3)

//     ])
//     console.log(q1)
// }
// PromiseAny()