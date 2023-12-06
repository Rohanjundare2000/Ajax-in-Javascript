
// creating a promise
// let pro = new Promise (function(resolve,reject)
// {
//     let a=10
//     let b=20
//     if(a==b)
//     {
//         resolve("hellow")
//     }
//     else{
//         reject('result')
//     }
// })
// pro.then(function(str){
//   console.log(str)
// },function(str){
//   console.log(str)
// })
// program 2

// let pro2 = new Promise(function (resolve, reject) {
//     let names = "chinmay"
//     if (names.startsWith("C")) {
//         console.log("pass")
//         resolve([11, 22, 33])
//     }
//     else {
//         console.log("fail")
//         reject([-11, -22, -33])
//     }
// })

// pro2
//     .then(function (a) {
//         console.log(a)
//         console.log(a[0])
//     })
//     .catch(function (b) {
//         console.log(b)
//         console.log(b[0])
//     })
//Array promise 
// let p1 = new Promise(function(resolve,reject){

//     let name = "Rohan" 
//     if (name.startsWith('r')){
//         resolve([11,22,33])
//     }
//     else{
//         reject([55,66,77])
//     }
// })
// p1.then(function(str){
//      console.log(str)
//      console.log(str[1])
// })
// .catch(function(str){
//     console.log(str)
//      console.log(str[1])
// })

// program 3
// let pro3 = new Promise(function (resolve,reject) {
//     let cities = ["jaipur", "udaipur", "banglore", "chennai"]

//     if (cities.includes('Jaipur')) {
//         resolve({ firstName: "chinmay", lastName: "deshpande" })
//     }
//     else {
//         reject({ firstName: "poorva", lastName: "vyas" })
//     }
// })

// pro3.then(function(obj){
//     console.log(obj)
//     let {firstName,lastName} = obj
//     console.log(firstName)
//     console.log(lastName)
// })
// .catch(function(obj){
//     let {firstName,lastName} = obj
//     console.log(firstName)
//     console.log(lastName)
// })
// .finally(function(){
//     console.log("i will run any way")
// })
let p3= new Promise(function(resolve,reject){

    let array = ["rohan","Jundare","mangesh"]
    if(array.includes("rohan")){
        resolve({fristName:"Rohan",lastName:"Jundare"})
    }
    else{
        reject({fristName:"revati",lastName:"Jundare"})
    }
})
p3.then(function(str2){
      console.log(str2)
      console.log(str2.fristName)
})
p3.catch(function(str2){
    console.log(str2)
      console.log(str2.fristName)
})
p3.finally(function(){
    console.log("i will run any way")
})


// program 4

// let pro4 = new Promise(function(resolve,reject){
//     let a =  10
//     let b = 5
//     if(a == b){
//         resolve(true)
//     }
//     else {
//         reject(false)
//     }
// })
// pro4
// .then(function(a){
//     console.log(a)
//     return "hello"
// })
// .then(function(str){
//     console.log(str)
// })
// .catch(function(b){
//     console.log(b)
// })
// .finally(function(){
//     console.log("i will run any way")
// })


// creating a promise
let pro = new Promise (function(resolve,reject)
{
    let a=10
    let b=10
    if(a==b)
    {
        resolve("hellow")
    }
    else{
        reject('result')
    }
})
pro.then(function(str){
  console.log(str)
},)
.then(function(str){
  console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i waill run any way")
})