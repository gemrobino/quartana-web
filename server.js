const express = require('express');
const app = express();
const port = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/src'));
app.use('/images', express.static(__dirname + 'src/images'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/js', express.static(__dirname + '/js'));

app.get("/", (req,res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get("/dashboard", (req,res) => {
  res.sendFile(__dirname + "/src/dashboard.html")
})

app.listen(port, () =>{
 console.log(`Server Running at port ${port}`)
})

