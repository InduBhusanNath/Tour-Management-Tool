const tourPackageModel=require('../models/tourPackageModel');
//Frontend Bhutan Tour Package Display
async function frontendTourPackageDisplay(req,res){
    var filter=req.query.filter;    
    var rows=await tourPackageModel.countDocuments({tourPackageCountry:filter});
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
//frontend tour package description
async function frontendTourPackageDescription(req,res){
     var tId=req.query.id;
     var rows=await tourPackageModel.countDocuments({_id:tId});
     if(rows==="0"){
         res.send({
            "flag":"0"
         });
         return;         
     }
     var result=await tourPackageModel.find({_id:tId});
     res.send({
         "tourPackageCategory":result.tourPackageCategory,
         "tourPackageCountry":result.tourPackageCountry,
         "tourPackageName":result.tourPackageName,
         "tourPackageDuration":result.tourPackageDuration,
         "tourPackageInclusions":result.tourPackageInclusions,
         "tourPackageActivities":result.tourPackageActivities,
         



     });

      
}
 module.exports={
     frontendTourPackageDisplay,
     frontendTourPackageDescription
 }