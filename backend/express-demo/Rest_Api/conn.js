const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Abhinav:Abhipa1@test.mprxk.mongodb.net/Logistics",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('Connection Succesfull..'))
.catch((err) => console.log(err));
