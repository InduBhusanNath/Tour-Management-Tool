const blogModel=require('../models/blogModel.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');


//Create Blog
function createBlog(req,res){       
       var blog_date=req.body.n_blogDate; 
       var n_blogTitle=req.body.n_blogTitle;
       var n_blogMetaDescription=req.body.n_blogMetaDescription;                   
       var n_blogHeading=req.body.n_blogHeading;
       var n_blogAuthor=req.body.n_blogAuthor;
       var n_blogBody=req.body.n_blogBody;
       var n_featuredImageLink=req.body.n_featuredImageLink;
       var n_featuredContent=req.body.n_featuredContent;
          
       
            
       
       var newBlog=new blogModel({
           blogDate:blog_date,
           blogTitle:n_blogTitle,
           blogMetaDescription:n_blogMetaDescription,
           blogHeading:n_blogHeading,           
           blogAuthor:n_blogAuthor,
           blogBody:n_blogBody,
           blogFeaturedImageLink:n_featuredImageLink,
           blogFeaturedContent:n_featuredContent
       });
        
       
       newBlog.save().then(result=>{
            res.send("New Blog Created Successfully.....");
       }).catch(error=>{
            res.send("Could Not Create Blog, Please Try Again.....");
       });

       
 }

 

       
//Read Blog


async function readBlog(req,res){
     
      var pageNo;
      
      if(!req.query.page){
            pageNo=1;
      }else{
            pageNo=req.query.page;
      }     
     
      var totalPages;
      var pageLimit=5;
      var offset; 
      var totalBlogs;

      await blogModel.countDocuments({}).then(rows=>{
            if(rows===0){
                  res.json({
                        "flag":"0",
                        "data":[],
                        "totalPages":"0",
                        "totalBlogs":"0"
                  }); 
            }else if(rows<0){
                  res.json({
                        "flag":"-1",
                        "data":[],
                        "totalPages":"0",
                        "totalBlogs":"0"
                  });
            }else{
                  rowCount(rows);
            }
      }).catch(error=>{
            res.json({
                  "flag":"error",
                  "data":[],
                   "totalPages":"0",
                   "totalBlogs":"0"
  
                
            });
      });

       async function rowCount(rows){
             totalBlogs=rows;             
             totalPages=Math.ceil(totalBlogs/pageNo);             
             offset=(pageNo-1)*pageLimit; 
             blogModel.find({}).skip(offset).limit(pageLimit).sort({blogDate:-1})
             .then(result=>{
                  res.json({    
                        "flag":"success",
                         "data":result,
                         "totalPages":totalPages,
                         "totalBlogs":totalBlogs
                  }); 
             })
             .catch(error=>{
                  res.json({
                        "flag":"error",
                        "data":[],
                        "totalPages":"0",
                        "totalBlogs":"0"
                 });
                 
             });


      }
      
      
      
            
          

      
} 

//Get Update Data
async function fetchBlogUpdateData(req,res){
        var eId=req.query.blgId; 
        var eData=await blogModel.findById(eId).exec();
        if(!eData){
            res.send({
                  flag:"0"
            });
             return;
        }
        res.send({
              eBlgId:eData._id,
              eBlgDate:eData.blogDate,
              eBlgTitle:eData.blogTitle,
              eBlgMetaDescription:eData.blogMetaDescription,
              eBlgHeading:eData.blogHeading,
              eBlgAuthor:eData.blogAuthor,
              eBlgBody:eData.blogBody,
              eBlgFeaturedImageLink:eData.blogFeaturedImageLink,
              eBlgFeaturedContent:eData.blogFeaturedContent
        });
} 
//Update Blog
async function updateBlog(req,res){
       var query={
             blogTitle:req.body.updteBlogTitle,
             blogMetaDescription:req.body.updteblogMetaDescription,
             blogHeading:req.body.updteBlogHeading,
             blogAuthor:req.body.updteBlogAuthor,
             blogBody:req.body.updteBlogBody,
             blogFeaturedImageLink:req.body.updteBlogFeaturedImageLink,
             blogFeaturedContent:req.body.updteBlogFeaturedContent
      };
      var updtBlg=await blogModel.findByIdAndUpdate(req.body.updteBlogId,query).exec();
       if(!updtBlg){
             res.send("Could Not Update Blog, Please Try One.....");
       }else{
             res.send("Blog Updated Successfully.....");
       }
      
}
       
//Delete Blog
async function deleteBlog(req,res){      
       var DelBlg=await blogModel.deleteOne({_id:req.body.n_blgDelId});
       if(!DelBlg){
             res.send("Something Went Wrong, Please Try Again.....");
       }else{
             res.send("Blog Deleted.....");
       }
      

}


module.exports={
       createBlog,      
       readBlog,
       fetchBlogUpdateData,
       updateBlog,
       deleteBlog      
}

