const mongoose= require("mangoose");

const movieSchema =new mongoose.Schema({
  name:{
      type:String,
      required : true,
  },
  leadacter:{
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