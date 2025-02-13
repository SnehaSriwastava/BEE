const express=require("express");
const app=express();
// app.get("/",(req,res)=>{
//     res.send("server is created...");
// });
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    // res.sendFile("template/index.html",{
    //     root:__dirname
    // });
    res.render("index")
}
);
app.listen(3018,()=>{
console.log(`server is running...`);
})

app.get("/footer",(req,res)=>
{
    res.render("footer")
})