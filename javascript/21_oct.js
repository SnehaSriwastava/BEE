// function getData(empId,callback){
//     setTimeout(()=>{
//         console.log(`employee code is ${empId}`);
//        if(callback){
//         callback()
//        }
//     },3000)
// }

// getData(101,()=>{
//     getData(102,()=>{
//         getData(103)
//     })
// })

//promises

// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("order is delivered successfully");
//             resolve("success")
//         },10000);
//     })
// }

// let res=getData()


//promise chaining function
// function asyncFun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data 1...");
//             resolve("success")
//         },3000)
//     })
// }

// function getData(dataid){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data is==>",dataid);
//             resolve("success")
//             if(getnextdata){
//                 getnextdata();
//             }
//             reject("error")
//         }, 3000);
//     })
// }

// getData(101)
// .then((res)=>{
//     return getData(102)
// })
// .then((res)=>{
//     return getData(103)
// })
// .then((res)=>{
//     console.log(res);
// })


// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data is",dataId);
//             resolve("success")
//         },3000);
//     })
// }

// async function displayId(){
//     await getData(101)
//     await getData(102)
// }
// displayId()


async function fetchapi(){
    const url="https://jsonplaceholder.typicode.com/posts"
    let respose=await fetch(url)
    console.log(respose);
    let data=await respose.json()
    console.log(data);
    console.log(respose.status);

}
fetchapi()
