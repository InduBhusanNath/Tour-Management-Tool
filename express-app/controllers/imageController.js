
const imageModel=require('../models/imageModel');
const { unlinkSync } = require('node:fs');
const path = require('path');


//upload image
function uploadImage(req,res){

    if(!req.file){
        var rd={
            "flag":"Could Not Upload File. Please Try Again.....",
            "img":""
        }
         res.json(rd);
    }else{
         var filePath='http://localhost:5000/images/'+req.file.originalname;
         var newImage=new imageModel({
             imagePath:filePath,
             imageName:req.file.originalname,
             imageLabel:req.body.n_imageLabel
         });
         newImage.save().then(result=>{
             var rd={
                 "flag":req.file.originalname+" Uploaded Successfully.....",
                 "img":filePath
             }           
            res.send(rd); 

         })
    }
}

//Display Image
async function ShowImages(req,res){
     var pageNo; 
     if(!req.query.page){
        pageNo=1;
     }else{
        pageNo=req.query.page;
     } 
     var totalPages;
     var pageLimit=2;
     var offset; 
     var totalImages; 
     totalImages=rows;             
     totalPages=Math.ceil(totalImages/pageNo);             
     offset=(pageNo-1)*pageLimit;     
     
      var rows=await imageModel.countDocuments({}).exec();
      if(!rows){
             var rd1={
                "flag":"No Image Found in Database.....",
                "result":[]
            }
             res.json(rd1);
      }else{
             var result= await imageModel.find({}).skip(offset).limit(pageLimit).sort({imageName:1}).exec();
             var rd1={
                 "flag":"",
                  "result": result
             }
             res.json(rd1);
      }
}

//Delete Image
async function deleteImage(req,res){         
       var delId=req.body.n_delId;       
       var delImg= await imageModel.findOne({_id:delId},'imageName').exec(); 
       if(!delImg){
           res.send("image Does Not Exist.....");
           return;
       } 
       var delPath=path.join(__dirname,'../','public','images',delImg.imageName)
       console.log(delPath)
        try {
              unlinkSync(delPath); 
              imageModel.deleteOne({ _id: delId }).then(result=>{
               res.send(delImg.imageName+" "+"Deleted Successfully.....");                
            })            
             
         } catch (err) {
             res.send("Something Went Wrong, Please Try Again.....");
         }
         
 }
module.exports={
    uploadImage,ShowImages,deleteImage
}