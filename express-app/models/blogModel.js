const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
const {Schema}=mongoose;

     const blogSchema=new mongoose.Schema({
         blogDate:Date,
         blogTitle:String,
         blogMetaDescription:String,
         blogHeading:String,
         blogAuthor:String,
         blogBody:String,
         blogFeaturedImageLink:String,
         blogFeaturedContent:String

     });

     const Blog=mongoose.model('Blog',blogSchema);
     module.exports=Blog;



