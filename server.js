const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
  res.sendfile(__dirname + "/dashboard.html")
})

app.get("/dashboard", (req,res) => {
  res.sendfile(__dirname + "/dashboard.html")
})

app.post("/submitForm", (req,res) => {
  const username  = req.body.username;
  const password = req.body.password;
  let result = "success! name is "+ username
  res.send(result)
})

app.post("/addUser", (req,res) => {
  res.send("Hello World! from addUser post")
})

app.listen(port, () =>{
 console.log(`Server Running at port ${port}`)
})

