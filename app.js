// UI
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');


// Add Event Listeners

btn1.addEventListener('click' , getText);
btn2.addEventListener('click' , getJson);
btn3.addEventListener('click' , getExternal);

// API Functions

function getText(){
    fetch('test.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        document.querySelector('.output').innerHTML = data ;
    })
    .catch(function(error){
        console.log(error);
    })
}

function getJson(){
    fetch('posts.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.querySelector('.output').innerHTML = output
    })
    .catch(function(error){
        console.log(error);
    })
}

function getExternal(){
    fetch('https://api.github.com/users')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`
        });
        document.querySelector('.output').innerHTML = output
    })
    .catch(function(error){
        console.log(error);
    })
}