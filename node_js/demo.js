const prebooking =(bikename)=>{
    console.log(`your ${bikename} is booked`)
}
const orderStatus=(bikename)=>{
    console.log(`Your ${bikename} id delivered`)
}
console.log(`bike is booked`)
module.exports={prebooking, orderStatus};
// prebooking("RTR 200CC")