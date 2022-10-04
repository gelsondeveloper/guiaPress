const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const connection = require("./database/database");
const categoriesController = require("./categories/CategoriesController");

//Database 
connection
.authenticate()
.then(() => {
    console.log("Conexão feita com sucesso!")
}).catch((error) =>{
    console.log(error);
});

app.use("/", categoriesController);

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