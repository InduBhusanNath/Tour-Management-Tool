const mongoose=require('mongoose');
const {Schema}=mongoose;

     const tourPackageSchema=new mongoose.Schema({
         tourPackageCategory:String,
         tourPackageCountry:String,
         tourPackageName:String,
         tourPackageDuration:String,
         tourPackageInclusions:String,
         tourPackageActivities:String,
         tourPackageType:String,
         tourPackagePriceBeforeDiscount:String,
         tourPackageSellingPrice:String,
         tourPackageFeaturedImage:String,
         tourPackageDescription:String,
         tourPackageSeller:String,
         tourPackageSellerDetails:String
     });

     const TourPackage=mongoose.model('TourPackage',tourPackageSchema);
     module.exports=TourPackage;
