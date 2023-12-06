// let buttonA = document.querySelector('button')
// function getUsers(pageNumber){
//     fetch(`https://reqres.in/api/users?page=${pageNumber}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         console.log(response.data)
//         response.data.forEach(el => {
//             document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
//             document.write(`<p>${el.email}</p>`)
//             document.write(`<p>${el.id}</p>`)
//             document.write(`<img src = "${el.avatar}">`)
//         });
//     })
// }
// //getUsers(2)
// buttonA.addEventListener('click',function(){
//     getUsers(1)
// })

let buttonA= document.querySelector('button')
function getUsers(pageNumber){
    fetch(`https://reqres.in/api/users?page=${pageNumber}`)
    .then(function(response){
       return response.json()
    })
    .then(function(response){
        console.log(response.data)
        response.data.forEach(el => {
            document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
            document.write(`<p>${el.email}</p>`)
            document.write(`<p>${el.id}</p>`)
           document.write(`<img src = "${el.avatar}">`)
        });
    })
    
}
buttonA.addEventListener('click',function(){
    getUsers(2)
})