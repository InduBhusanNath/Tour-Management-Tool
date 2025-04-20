const sessionModel=require('../models/sessionModel.js');
const userModel=require('../models/userModel.js');
const logoutDateTime=new Date();


//Check session
async function checkUserSession(req,res){    
       var sn=req.query.ssn;      
       var countSession=await sessionModel.countDocuments({sessionUser:sn});
       if(countSession===1){
           var ssnData = await userModel.find({ username:sn}, 'name username adminStatus designation address').exec();
           
           res.send({
                "flag":1,
                "name":ssnData[0].name,
                "username":ssnData[0].username,
                "adminStatus":ssnData[0].adminStatus,
                "designation":ssnData[0].designation,
                "address":ssnData[0].address
           });
           
       }else{
           res.send({
                "flag":0,                
           });
       }      
        
 }
 //Admin Log Out
 async function adminLogOut(req,res){
      
      var filter={sessionUser:req.body.n_sesId}; 
      var update={logoutTime:logoutDateTime};

      var isLoggedOut=await sessionModel.countDocuments({filter,logoutTime:''}).exec();
      
      if(isLoggedOut===0){
           var isUpdated= await sessionModel.findOneAndUpdate(filter, update);
           if(isUpdated){
                res.send({
                     "flag":1
                });
           }else{
                res.send({
                     "flag":0
                });
           }
      }else {
           res.send({
                "flag":"1+"
           });
      }
      
      
 }

 module.exports={
      checkUserSession,
      adminLogOut
 }