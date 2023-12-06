function getuserinfo(pagenumber){
    return fetch(`https://reqres.in/api/users?page=${pagenumber}`)
    .then(function(response){
        //console.log(response)
        return response.json()
    })
    .then(function(response){
         //console.log(response)
         return response.data
    })
}

function getsingleUserinfo(id){
  return  fetch (`https://reqres.in/api/users/${id}`)
    .then(function(response){
        console.log(response)
        return response.json()
    })
    .then(function(response){
         console.log(response)
         return response.data
    })
}
function renderHtml(el){
document.write(`<h1>${el.first_name}${el.last_name}</h1>`)
document.write(`<p>${el.email}</p>`)
document.write(`<p>${el.id}</p>`)
document.write(`<img src="${el.avatar}">`)
}

getuserinfo(2)
.then(function(response){
    console.log(response)
    let id1=response[0].id
    return getuserinfo(id1)
    
})
.then(function(id2){
    return  getsingleUserinfo(id2)
})
.then(function(obj){
    return renderHtml(obj)
})
getuserinfo(2)

// async function getUser(pagenumber){
//     let user=await getuserinfo(pagenumber)
//     let id = user[0].id
//     let singleobj =  await getsingleUserinfo(id)
//     renderHtml(singleobj)
// }
// getUser(2)