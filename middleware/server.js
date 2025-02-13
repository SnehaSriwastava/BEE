const express = require("express");
const app = express();

// app.use(m1);
// app.use(m3);
app.use(m2);

app.get("/", (req, res) => {
  res.send("Running get request on /");
});
app.get("/about",m4, (req, res) => {
    res.send(" about page");
  });

function m1(req, res, next) {
  console.log("Running Middleware m1 !");
  next();
}

function m2(req, res, next) {
  console.log("Running Middleware m2 !");
  next();
}
function m3(req,res,next)
{
    console.log("Running Middleware m3 !")
    next();
}
function m4(req,res,next)
{
    console.log("Running Middleware m4 !")
    next();
}


app.listen(4018, () => {
  console.log("Server is running...");
});
