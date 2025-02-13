const express =require("express")
const path= require("path")
const mongoose= require("mongoose")
const app=express();
const port=3019;
app.use(express.static(__dirname));

app.get("",(req,res)=>{
    // res.send("<h1> Server created.....</h1>");

    res.sendFile(path.join(__dirname,"form.html"));
});


app.get("/home",(res)=>{
    res.send("Home page ");
});





app.listen(port,()=>{
    console.log(`server is running on ${port}`);

});

