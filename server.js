const express = require("express");
const ejs= require('ejs');


const app = express();

app.set('view engine', 'ejs');


app.use(express.static("assets"));


app.get("/", (req, res) => {

     var drinks = [{ name: "Bloody Mary", drunkness: 3 }, { name: "Martini", drunkness: 5 }, { name: "Scotch", drunkness: 10 }];
    res.render("pages/home", { 'drinks': drinks });
});

app.get("/add", (req, res) => {
  
  res.render("pages/add");
});

app.listen(3000, () => console.log("App listening on port 3000!"));
