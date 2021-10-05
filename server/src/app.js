require("dotenv").config();



const hbs = require("hbs");
const express = require("express");
const path = require("path");
const app = express();
//Port
const PORT = process.env.PORT;

require("./db/conn");

//Template Path
const template_path = path.join(__dirname, "../templates/views");
const static_path = path.join(__dirname, "../public");

const Movie = require("./models/movieSchema");
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
require("./db/conn");

app.get("/",(req,res) =>{
res.render("index");
})