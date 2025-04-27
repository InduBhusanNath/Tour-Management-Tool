const sessionModel=require('../models/sessionModel.js');
const userModel=require('../models/userModel.js');
const logoutDateTime=new Date();


//Check session
async function checkUserSession(req,res){    
       var sn=req.query.ssn;    
       var countSession=await sessionModel.countDocuments({sessionUser:sn,loginStatus:1});
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
      
      var isLoggedOut=await sessionModel.countDocuments({sessionUser:req.body.n_sesId,loginStatus:1}).exec();
      console.log(isLoggedOut)
      
      if(isLoggedOut===1){
           var isUpdated= await sessionModel.findOneAndUpdate({sessionUser:req.body.n_sesId,loginStatus:0,logoutTime:logoutDateTime});
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