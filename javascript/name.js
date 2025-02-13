let form = document.querySelector('form')
form.addEventListener('submit' , function(event){
    console.log(event);

    let firstname = event.target.fname.value ; 
    let lastname= event.target.lname,value;
    console.log(firstname);
    event.preventDefault();
})