const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
app.set('views', './src')

app.use(express.static(__dirname + '/src'));
app.use('/images', express.static(__dirname + 'src/img'));
app.use('/js', express.static(__dirname + 'src/js'));

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
  res.render("charts")
})

app.get("/tables", (req,res) => {
  res.render("tables")
})

app.get("/threads", (req,res) => {
  const threads_data = require('./src/js/threads_json.json');
  res.render("threads", {threads_data})
})

app.get("/utilities-color", (req, res) => {
  res.sendFile("./src/other_pages/utilities-color.html")
})
app.get("/utilities-border", (req, res) => {
  res.sendFile("./src/other_pages/utilities-border.html")
})
app.get("/utilities-animation", (req, res) => {
  res.sendFile("./src/other_pages/utilities-animation.html")
})
app.get("/utilities-other", (req, res) => {
  res.sendFile("./src/other_pages/utilities-other.html")
})

app.all('*', (req, res, next) => {
  res.status(404);
  res.render('error', {ErrorCode: 404});
})



app.listen(port, () =>{
 console.log(`Server Running at port ${port}`)
})
