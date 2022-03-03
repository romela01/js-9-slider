"use strict";

let slider = document.querySelector('.slider')
let content = document.querySelector('.content')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let person = document.querySelector('.person')

let page = 1

function start(page){

    fetch('https://reqres.in/api/users/'+page, {
    method: 'GET',
    })
    .then(function(response){
        if(response.status!==200){
            throw "error"
        }
        return response.json()
    })
    .then(function(response){
        createProfile(response.data)
        
    })
    .catch(function(error){
        console.log("this error")
    })
}

start(page)


function createProfile(info){
    let ul = document.createElement('ul');

    let img = document.createElement('img');
    img.src = info.avatar

    let li1 = document.createElement('li');
    li1.textContent = "Name: "+info.first_name
    ul.appendChild(li1)

    let li2 = document.createElement('li');
    li2.textContent = "Last-Name: "+info.last_name
    ul.appendChild(li2)

    let li3 = document.createElement('li');
    li3.textContent = "Email: "+info.email
    ul.appendChild(li3)

    person.appendChild(img)
    person.appendChild(ul)
}

left.addEventListener('click',()=>{
    if(page==0){
        page=13
    }
    page -=1;
    person.innerHTML='';
    start(page)
    
})

right.addEventListener('click',()=>{
    if(page==12){
        page=0
    }
    page +=1;
    
    person.innerHTML='';
    start(page)


})
setInterval(()=>{
    
})



    
