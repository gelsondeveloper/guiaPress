const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const connection = require("./database/database");
//Controllers of Application
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesControler");

//Models of Application
const Aticle = require("./articles/Article");
const Category = require("./categories/Category");
//Database 
connection
.authenticate()
.then(() => {
    console.log("Conexão feita com sucesso!")
}).catch((error) =>{
    console.log(error);
});

app.use("/", categoriesController);
app.use("/",articlesController);

app.get("/", (req, res)=>{
res.render("index");
});

//View Engine 

app.set('view engine', 'ejs');

//Static 
app.use(express.static('public'));

//Body Parser 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log("O servidor está rodando");
});