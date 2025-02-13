// let heading2 =document.getElementById("head");
// console.log(heading2);
// console.log(heading2.innerHTML);
// console.log(heading2.textContent);
// console.log(heading2.innerText);
// function addname(){


// let paragraph=document.querySelector('#para');
// let name=document.getElementById('name').value
// // let name="sneha"
// console.log(paragraph);
// paragraph.innerHTML=`<h2>This is a pargraph ${name}</h2>`;'/'
// }
function number(){
    let num = document.getElementById('num').value;
    let output = document.querySelector('#output')
    switch(num){
        case '1':
           output.innerHTML = `Monday` 
           break;
        case '2':
            output.innerHTML = `Tuesday` 
            break;
        case '3':
           output.innerHTML = `Wednesday` 
           break;
        case '4':
           output.innerHTML = `Thursday` 
           break;
        case '5':
           output.innerHTML = `Friday` 
           break;
        case '6':
           output.innerHTML = `Saturday` 
           break;
        case '7':
           output.innerHTML = `Sunday` 
           break;
        default:
            output.innerHTML = `Enter a correct number`
            break;
    }
}