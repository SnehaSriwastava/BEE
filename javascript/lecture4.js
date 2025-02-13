//loops
const prompt=require("prompt-sync")();
let num=+prompt("enter the number ");
// for(let i=0;i<=10; i++)
// {
//     console.log("for loop")
console.log(num);
let res=1;
for(let i=1; i<=num;i++){
    res=res*i;

}
console.log(res);
// }