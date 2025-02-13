const express=require("express")
const app=express()

// app.get("/profile",(req,res)=>{
//     const {username,age}=req.query;
//     console.log(username)
//     res.send("profile page of"+" "+username+" "+age)
// })

// app.get("/profile/:id",(req,res)=>{
//     const {id}=req.params;
//     //find in database
//     res.send("profile page of"+" "+id)
// })
// app.get("/profile/:id/:username",(req,res)=>{
//     const {id,username}=req.params;
//     //find in database
//     res.send("profile page of"+" "+id+" "+username)
// })



let userData=[
    {
        id:1,
        name:"abc",
        address:"Punjab"
    },
    {
        id:2,
        name:"xyz",
        address:"Punjab"
    },
    {
        id:3,
        name:"asd",
        address:"Delhi"
    },

]

app.get("/allusers",(req,res)=>{
    res.send(userData)
})

app.get("/getuserbyID",(req,res)=>{
    // const id=req.query.id
    const{id}=req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            return res.send(userData[i])
        }
    }
    res.send("users not found")
})


// app.get("getoneuser",(req,res)=>{
//     
// })



app.get("/adduser",(req,res)=>{
    const {id,name,address}=req.query;
    console.log(id,name,address);
    let newUser={
        id:id,
        name:name,
        address:address
    }
    userData.push(newUser)
    res.send("user added successfully")
})

app.listen(3544,(req,res)=>{
    console.log("server started")
})
