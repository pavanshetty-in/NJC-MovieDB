const mongoose= require("mongoose");

const movieSchema =new mongoose.Schema({
  name:{
      type:String,
      required : true,
  },
  leadactor:{
    type:String,
    required : true,
  },
  actress:
  {
    type:String,
    required : true,
  },
   director:
   {
    type:String,
    required : true,
   },
   year:
   {
       type:Number,
       required:true,
   }
});
const Movie=mongoose.model("MOVIE",movieSchema);
module.exports=Movie;