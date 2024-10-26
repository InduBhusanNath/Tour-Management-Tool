const blogModel=require('../models/blogModel.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
const express = require('express');







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
        console.log(newBlog)
       
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
      var pageLimit=1;
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
                 console.log(result)
             });


      }
      
      
      
            
          

      
} 

//Display Blog

function edit_displayBlog(req,res){
       eblgId=req.query.blgId;
       blogModel.findOne({_id:eblgId}).then(results=>{

            res.json(
                  {
                   "flag":"1",
                   "eBlog_Id":results._id,
                   "eBlogDate":results.blogDate,
                   "eBlogTitle":results.blogTitle,
                   "eBlogMetaDescription":results.blogMetaDescription,
                   "eBlogHeading":results.blogHeading,
                   "eBlogAuthor":results.blogAuthor,
                   "eBlogBody":results.blogBody,
                   "eBlogFeaturedImageLink":results.blogFeaturedImageLink,
                   "eBlogFeaturedContent":results.blogFeaturedContent
                  });
            
            
            
            
       }).catch(error=>{
                 res.json({"result":"Something Went Wrong, Please Try Again....."
            })
       });
}      
 

 
//Update Blog Content
function edit_blogContent(req,res){
       var ubId=req.body.ublgId;
       var ubtitle=req.body.edit_n_blogTitle;
       var ubmetadesc=req.body.edit_n_blogMetaDescription;
       var ubheading=req.body.edit_n_blogHeading;
       var ubauthor=req.body.edit_n_blogAuthor;
       var ubbody=req.body.edit_n_blogBody;
       var ubfeaturedImageLink=req.body.edit_n_featuredImageLink;
       var ubfeaturedContent=req.body.edit_n_featuredContent;
      
      blogModel.findByIdAndUpdate(ubId,{blogTitle:ubtitle,blogMetaDescription:ubmetadesc,blogHeading:ubheading,blogAuthor:ubauthor,blogBody:ubbody,blogFeaturedImageLink:ubfeaturedImageLink,blogFeaturedContent:ubfeaturedContent})
      .then(result=>{
             res.send("Blog Successfully Updated.....");
      }).catch(error=>{
            res.send("Something Went Wrong, Please Try Again.....");
      });
      
}
      
//Delete Blog Content
function delete_blogContent(req,res){
       var dbId=req.body.dltBlgId;
       blogModel.deleteOne({_id:dbId}).then(result=>{
             res.send("Blog Deleted Successfully.....");

       })
       .catch(error=>{
             res.send(error);
       });      

}    


       
        
       



module.exports={
       createBlog:createBlog,      
       readBlog:readBlog,
       edit_displayBlog:edit_displayBlog,
       edit_blogContent:edit_blogContent,
       delete_blogContent:delete_blogContent
      
}

