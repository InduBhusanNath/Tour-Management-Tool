const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
const {Schema}=mongoose;

     const imageSchema=new mongoose.Schema({
         imagePath:String,
         uploadPath:String,
         imageName:String,
         imageLabel:String
     });

     const Image=mongoose.model('Image',imageSchema);
     module.exports=Image;



