const { response, request } = require("express");
let express=require("express");

let app=express();

const bodyParser = require('body-parser');
//importation du middleware urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

var mysql=require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"bienvenue",
    database:"exam"
    });

connection.connect(function(error) {if (error) console.log(error);});

app.get("/",(req, res) =>{
    connection.query("SELECT * from exam;", function (error, result){
        console.log(result);
        res.render("encodage.ejs", {exam: result})
})});

app.get("/liste",(req, res)=>{
    connection.query("INSERT INTO rooms(name, lenght, width) VALUES ?;", function (error, result){
    res.render("liste.ejs", {exam: result})
    })
});

app.listen(3303,function(){
    console.log("Server is running on port 3303")
});
