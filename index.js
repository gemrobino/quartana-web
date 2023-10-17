const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', './src')

app.use(express.static(__dirname + '/src'));
app.use('/images', express.static(__dirname + '/img'));
app.use('/js', express.static(__dirname + '/js'));

// app.use(express.urlencoded({extended: true}));

app.get("/", (req,res) => {
  // res.send("Hello World!")
  // res.sendfile(__dirname + "/src/index.ejs")
    const data = {
    name: "John Doe",
    personal: "dev in training"
  }

  // res.sendfile(__dirname + "/index.html")
  res.render("index", {data})
})

app.get("/dashboard", (req,res) => {
  // res.sendfile(__dirname + "/dashboard.html")
  const data = {
    name: "John Doe",
    personal: "dev in training"
  }
  res.render("dashboard", {data})
})

// app.get("/contact", (req,res) => {
//   res.sendfile(__dirname + "/contact.html")
// })
// app.get("/my-works", (req,res) => {
//   // res.sendfile(__dirname + "/src/my-works.html")
//   const colors = [
//     {name:'green', hex:'#00ff00'},
//     {name:'red', hex:'#ff0000'}
//   ];
//   res.render('my-works', {colors})
// })


app.listen(port, () =>{
 console.log(`Server Running at port ${port}`)
})
