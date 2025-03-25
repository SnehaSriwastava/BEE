const express= require ("express")
const app= express();

const mongoose=require('mongoose');
const User= require("./Model/user");
const Blog= require("./Model/blog");
app.use(express.json())


app.post("/users",async(req,res)=>{
    let{ name,email,password}=req.body;
    let newUser=new User({name:name,email:email,password:password});
    await newUser.save();// will add data into user collection
    //any query to the database is asynchronous
    res.send("user added")
})
app.get("/users", async (req, res) => {
  let users = await User.find();
  res.json(users);
});
app.get("/blog", async (req, res) => {
  let blogs = await Blog.find();
  res.json(blogs);
});


app.get("/blog/:id",async(req,res)=>{
  let{id}=req.params;
  let blog=await blog.findById(id);
  res.send(blog);
})
app.delete("/blog/:id",(req,res)=>{
  let {id}=req.params;
  Blog.findByIdAndDelete(id);
  res.send("blog deleted")

})
app.put("/blog/:id",async(req,res)=>{
  let{id}=req.params;
  let blog=await Blog.findById(id);
  let{title,content,author}=req.body;
  blog.title=title;
  blog.content=content;
  blog.author=author;
  await blog.save();
  res.send(blog);
})

app.get("/users/:id",async(req,res)=>{
  let{id}=req.params;
  let oneblog =await blog.findById(id);
  res.send(oneblog);
})
mongoose.connect('mongodb://127.0.0.1:27017/g13mdb')
  .then(() => console.log('Connected!'))
  .catch((err)=>console.log(err));

app.listen(5555,(req,res)=>{
    console.log("server started") 
})

// Schema -> structure define
//model create a class of the schema which give various function of mongoose 


app.post("/blogs", async (req, res) => {
  let { title, content, author } = req.body;
  let newBlog = new Blog({ title, content, author });
  await newBlog.save();
  res.send("Blog Added");
});