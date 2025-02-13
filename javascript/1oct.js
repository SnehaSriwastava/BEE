// let btn=document.querySelector('#btn')
// btn.addEventListener('click',function(event){
//     console.log(event);
//     let dayno=document.getElementById('dayno').value
//     console.log(typeof dayno);
    
// });

let btn=document.querySelector('#btn')
btn.addEventListener('click',function(event){
    let output=document.getElementById('voter')
    let aadhar=document.getElementById('aadhar').value
    let name=document.getElementById('name').value;
    let aad=aadhar.slice(0,6);
    let nam=name.slice(0,3);
    if(aadhar.length==12){
        output.innerHTML=`<h1>voter id is ${aad}${nam}</h1>`
    }
    else{
        output.innerHTML=`<h1>Enter valid aadhar number</h1>`
    }
});