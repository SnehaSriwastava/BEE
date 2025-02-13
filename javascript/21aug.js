// const prompt=require("prompt-sync")();
// let str="hey this is sneha "
// for(let i =0;i< str.length;i++){
//     console.log(str [i]);

// }
// console.log(str.length);


// let arr=[1,2,3,4,5,6];
// let arr1=[10,20,30];
// let arr2=arr.concat(arr1);
// console.log(arr2);
// console.log(arr.slice(1,4));
// arr.splice(2,1,30,40);
// console.log(arr);
// arr.push(45);
// console.log(arr.shift());
// console.log(arr);
// let length=arr.length;
// console.log(length);
// console.log(arr.pop());
// // console.log(arr);
// const prompt= require("prompt-sync")();

// let str="qwertyuiop"
// let vowel=0;
// let cons=0

// for(let i=0;i<str.length;i++){
//     if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u'){
//         vowel++;
//     }
//     else{
//         cons++;
//     }

// }
// console.log(vowel);
// console.log(cons);
// // Get input from the user
// let input = prompt("Enter an array of numbers separated by spaces:");

// // Convert the input string into an array of numbers
// let arr = input.split(' ').map(Number);

// // Initialize the first element as the maximum
// let max = arr[0];

// // Iterate through the array to find the maximum element
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]; // Update max if the current element is larger
//     }
// }

// // Display the result
// console.log("The maximum element in the array is: " + max);
// const prompt=require()qqqconst prompt= require("prompt-sync")();
// let size=+prompt("enter the size of array")
// let arr=[];

// for(let i=0;i<size;i++){
//     arr[i]=+prompt(enter ${i+1} element);
// }

// let max=-Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max);
const prompt=require("prompt-sync")();

console.log("press 1 for addition");
console.log("press 2 for subtraction");
console.log("press 3 for multiplication");
console.log("press 4 for division");

let choice=+prompt("enter choice ")
let num1=+prompt("enter the number 1 ")
let num2=+prompt("enter the number 2 ")

switch(choice)
{
    case 1: 
            let sum=num1+num2
            console.log(result is ${sum});
            break;
    case 2: 
            let sub=num1-num2
            console.log(result is ${sub});
            break;
    case 3:
            let mul=num1*num2
            console.log(result is ${mul});
            break;
    case 4:
            let div=num1/num2
            console.log(result is ${div});
            break;
}