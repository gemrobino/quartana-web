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

app.get("/charts", (req,res) => {
  res.sendfile("./src/charts.html")
})

app.get("/tables", (req,res) => {
  res.sendfile("./src/tables.html")
})

app.get("/utilities-color", (req, res) => {
  res.sendfile("./src/other_pages/utilities-color.html")
})
app.get("/utilities-border", (req, res) => {
  res.sendfile("./src/other_pages/utilities-border.html")
})
app.get("/utilities-animation", (req, res) => {
  res.sendfile("./src/other_pages/utilities-animation.html")
})
app.get("/utilities-other", (req, res) => {
  res.sendfile("./src/other_pages/utilities-other.html")
})

app.all('*', (req, res, next) => {
  res.status(404);
  res.render('Error', {ErrorCode: 404});
  res.send();
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