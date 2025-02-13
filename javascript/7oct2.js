// let btn=document.getElementById('btn')
// let result=document.querySelector('.result')
// btn.addEventListener('click',function(){
//     console.log("loading....");
//     setTimeout(() => {
//       result.innerHTML="<h1>Welcome User....</h1>"  
//     },5000);
// })

// let id=setInterval(() => {
//     console.log("Wake up......");
// }, 3000);

// clearInterval(id)


let startbtn=document.getElementById('start-btn')
let stopbtn=document.getElementById('stop-btn')
let result=document.getElementById('result')
var counter;
var count=0 
startbtn.addEventListener('click',function(){
    
    counter=setInterval(() => {
        count++;
        result.innerHTML=count
    }, 1000);
})
stopbtn.addEventListener('click',function(){
    clearInterval(counter)
})