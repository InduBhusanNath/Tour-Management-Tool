const tourPackageModel=require('../models/tourPackageModel');

//Create
async function createTourPackage(req,res){
    var createResults=await tourPackageModel.create({
         tourPackageCategory:req.body.n_tourPackageCategory,         
         tourPackageCountry:req.body.n_tourPackageCountry,
         tourPackageName:req.body.n_tourPackageName,
         tourPackageDuration:req.body.n_tourPackageDuration,
         tourPackageInclusions:req.body.n_tourPackageInclusions,
         tourPackageActivities:req.body.n_tourPackageActivities,
         tourPackageType:req.body.n_tourPackageType,
         tourPackagePriceBeforeDiscount:req.body.n_tourPackagePriceBeforeDiscount,
         tourPackageSellingPrice:req.body.n_tourPackageSellingPrice,
         tourPackageFeaturedImage:req.body.n_tourPackageFeaturedImage,
         tourPackageDescription:req.body.n_tourPackageDescription,
         tourPackageSeller:req.body.n_tourPackageSeller,
         tourPackageSellerDetails:req.body.n_tourPackageSellerDetails
     });
     if(!createResults){
         res.send("Failed to Submit Data, Please Try Again.....");
     }else{
         res.send("Data Submited Successfully.....");
     }
     
}
//Read Tour Package
async function readTourPackage(req,res){
      var pageNo;
      if(!req.query.page){
         pageNo="1";
      }else{
         pageNo=req.query.page;
      }
      var totalPages;
      var pageLimit=3;
      var offset; 
      var totalTourPackages;
      var rows=await tourPackageModel.countDocuments({});
      if(rows==="0"){
         res.json({
             "flag":"0",
             "result":[],
             "totalPages":"0",
             "totalTourPackages":"0"
         });
         return;
      }else if(rows<0){
        res.json({
             "flag":"-1",
             "result":[],
             "totalPages":"0",
             "totalTourPackages":"0"
         });
         return;
     }

     totalTourPackages=rows;             
     totalPages=Math.ceil(totalTourPackages/pageNo);                
     offset=(pageNo-1)*pageLimit; 
     var result=await tourPackageModel.find({}).skip(offset).limit(pageLimit).sort({tourPackageName:1});
     res.json({
         "flag":"1",         
         "result":result,
         "totalPages":totalPages,
         "totalTourPackages":totalTourPackages
     });
}
//Fetch Edit Data
async function fetchEditData(req,res){
     if(!req.query.eid){
        return;
     }

     var editData=await tourPackageModel.findById(req.query.eid).exec();
     if(editData){
         res.json({
             "flag":"1",
             "result":editData          
         });
     }else if(!editData){
         res.json({
             "flag":"0",
             "result":[]
         });
     }
}
//Update Tour Package
async function updateTourPackage(req,res){  
     var update={
         tourPackageCategory:req.body.n_editTourPackageCategory,
         tourPackageCountry:req.body.n_editTourPackageCountry,
         tourPackageName:req.body.n_editTourPackageName,
         tourPackageDuration:req.body.n_editTourPackageDuration,
         tourPackageInclusions:req.body.n_editTourPackageInclusions,
         tourPackageActivities:req.body.n_editTourPackageActivities,
         tourPackageType:req.body.n_editTourPackageType,
         tourPackagePriceBeforeDiscount:req.body.n_editTourPackagePriceBeforeDiscount,
         tourPackageSellingPrice:req.body.n_editTourPackageSellingPrice,
         tourPackageFeaturedImage:req.body.n_editTourPackageFeaturedImage,
         tourPackageDescription:req.body.n_editTourPackageDescription,
         tourPackageSeller:req.body.n_editTourPackageSeller,
         tourPackageSellerDetails:req.body.n_editTourPackageSellerDetails
                   
     }    
     var result=await tourPackageModel.findByIdAndUpdate(req.body.n_eId, update);
     if(result){
         res.send({
            "flag":"1"
         });
     }else{
        res.send({
            "flag":"-1"
         });
     }

}
//Fetch Delete Data
async function fetchDeleteData(req,res){     
     if(!req.query.did){
        return;
     }

     var deleteData=await tourPackageModel.findById(req.query.did).exec();
     if(deleteData){
         res.json({
             "flag":"1",
             "result": deleteData.tourPackageName        
         });
     }else if(!editData){
         res.json({
             "flag":"0",
             "result":""
         });
     }

}
//Delete Tour Package
async function deleteTourPackage(req,res){
     var result=await tourPackageModel.deleteOne({_id:req.query.n_did});
     if(result){
        res.send({
             "flag":"1"
        });
     }else {
        res.send({
            "flag":"0"
       });
     }
}
//Frontend Bhutan Tour Package Display
async function frontendBhutanTourPackageDisplay(req,res){
     var rows=await tourPackageModel.countDocuments({tourPackageCountry:'Bhutan'});
      if(rows==="0"){
         res.send({
             "flag":"0",
             "result":[]
         });
         return;
      }

      var result=await tourPackageModel.find({tourPackageCountry:'Bhutan'});
         res.send({
             "flag":"1",
             "result":result
         });


}
module.exports={
     createTourPackage,
     readTourPackage,
     fetchEditData,
     updateTourPackage,
     fetchDeleteData,
     deleteTourPackage,
     frontendBhutanTourPackageDisplay
}


