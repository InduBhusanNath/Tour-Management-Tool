const userModel=require('../models/userModel.js');
const sessionModel=require('../models/sessionModel.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');
const bcrypt = require('bcrypt');
const loginDateTime=new Date();

   
//Admin Login
async function checkAdminUser(req,res){
     
      var userName=req.body.userName; 
      var originalPassword=req.body.userPassword;
      
      if(!userName){
         res.send({
             "flag":404
         });
         return;
      }
      
      var countUsers=await userModel.countDocuments({username:userName}); 
      if(countUsers===0){
         res.send({"flag":"User=0"});
         return;
      }else if(countUsers>1){
         res.send({"flag":"User>0"});
         return;
      }else if(countUsers===1){
         //Check the Password
         var getPwd=await userModel.findOne({username:userName},'password').exec();
         var chkPwd=await bcrypt.compare(originalPassword,getPwd.password);         
         if(chkPwd===false){
             res.send({"flag":"Pwd>-1"});
             return;        
         }else if(countUsers===1 && chkPwd===true){
             var valUsr=await userModel.countDocuments({username:userName, password:getPwd.password, adminStatus:'Admin'}); 
             if(valUsr===1){
                 userValidated(userName);
             }else{
                 res.send({
                     "flag":"Non-Admin"
                 });
             }
         }

         async function userValidated(adm){
            
             var isSession=await sessionModel.countDocuments( { $or:[{sessionUser:''},{sessionUser:adm,loginStatus:1}]});
                 
                         if(isSession===0){
                             var sessionCreate=await sessionModel.create({sessionUser:adm, loginStatus:1, loginTime:loginDateTime});
                    
                                 if(sessionCreate){
                                         res.send({
                                                 "flag":"Session:1"
                                         });
                                 }else if(!sessionCreate){                    
                                         res.send({
                                                 "flag":"Session:-1"
                                         });                         
                                 }
                         } 

                 
                 if(isSession===1){
                    res.send({
                        "flag":"Session:1+"
                     });
                 }

                 if(isSession>1){
                    res.send({
                        "flag":"Session:>1"
                     });
                 }
             
         }
         
 }
  
}




module.exports={
      checkAdminUser           
}