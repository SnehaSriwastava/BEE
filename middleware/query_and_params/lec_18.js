const express=require("express");
const app=express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
//converts urlencoded data into objects
// it is a middleware thant needs to be run on every request
let userData=[]
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html")
})
app.post("/adduser",(req,res)=>{
    let{name,email,password}=req.body;
    userData.push({name:name,email:email,password:password})
    console.log(name,email,password);
    res.send(userData)
})


app.listen(9876,()=>{
    console.log("server started")
})