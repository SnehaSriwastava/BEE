console.log("order is plsced")
console.log("order is on the way")
console.log("order is successfully delivered")

setTimeout(()=>{
    console.log("order is rejected..")
},2000)
console.log("order is successfully delivered");
let orderstatus=(status)=>{
    console.log(`your order is ${status}`);
    
}
orderstatus("cancelled...")
