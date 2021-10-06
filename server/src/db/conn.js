const mongoose = require("mongoose");

const DB = process.env.DATABASE;
console.log(process.env.DATABASE)
mongoose.connect(DB, {
  useNewUrlParser: true,
  
  useUnifiedTopology: true,
  
})
.then(() => {
  console.log("connection successful");
})
.catch((err) => console.log("connection unsuccessful "+err));