const mongoose=require('mongoose');
const {Schema}=mongoose;

     const imageSchema=new mongoose.Schema({
         imagePath:String,
         imageName:String,
         imageLabel:String
     });

     const Image=mongoose.model('Image',imageSchema);
     module.exports=Image;



