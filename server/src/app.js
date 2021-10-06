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

app.get("/",async(req,res) =>{
  const movies=await Movie.find();
  console.log(movies);
res.render("index",{movies:movies});
});

app.post("/addmovie",async(req,res)=>{
  try
  {
 
    const {name,leadactor,actress,director,year}=req.body;
    const add= new Movie({name,leadactor,actress,director,year});
    await add.save();
    res.redirect("/");
  }
  catch(err){
    console.log(err);
  }
});

app.post("/searchmovie",async(req,res)=>{
  try{
    const name=req.body;
    const movies=await Movie.find({"leadactor":name.leadactor});
    console.log(movies);
    res.render("actor",{movies:movies,name:name})
  }
  catch(err){
    console.log(err);
  }
})

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
  });