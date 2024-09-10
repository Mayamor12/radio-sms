const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://may:12345@user.gklz1.mongodb.net/?retryWrites=true&w=majority&appName=user").then(() => {
  console.log("mongodb connected");
 })
 .catch(() => {
   console.log(err);
 });



 const newSchema=new mongoose.Schema({

  nom:{
    type:String,
    required:true
},
prenom:{
  type:String,
  required:true
},




  email:{
      type:String,
      required:true
  },

  number:{
    type:Number,
    required:true
},
  password:{
      type:String,
      required:true
  }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection