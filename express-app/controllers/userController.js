const userModel=require('../models/userModel.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Create User
function createUser(req,res){  
      
    var originalPwd=req.body.n_password; 
    const salt = bcrypt.genSaltSync(saltRounds);
    const original_pwd=bcrypt.hashSync(originalPwd,salt);

    var newUser=new userModel({
        entryDate:req.body.n_entryDate,
        name:req.body.n_name,
        username:req.body.n_username,
        password:original_pwd,
        adminStatus:req.body.n_adminStatus,
        designation:req.body.n_designation,
        address:req.body.n_address    
      });   
      
      
      userModel.countDocuments({username:req.body.n_name}).then(rows=>{
            if(rows=="0"){
                   newUser.save().then(data=>{                         
                         res.send({
                               "flag":1,
                               "payload":data.username
                         });                              
                  })
                  .catch(error=>{
                         res.send({
                               "flag":0,
                               "payload":error
                         });
                  });
            }else if(rows=="1"){
                   res.send({
                         "flag":11                         
                   });
            }else if(rows>"1"){
                   res.send({
                         "flag":12
                   });
            }
      })
      .catch(error=>{
             res.send(error);
      });      
}
//Read Users
function readUsers(req,res){    
             var limit=2;
             var page=req.query.page;                   
            
            userModel.countDocuments().then(function(rows){
                   var totalRows=rows;
                   var totalPages=Math.ceil(totalRows/limit);
                         if(page<1){
                               page=1;
                         }else if(page>totalPages){
                               page=totalPages;
                         }
                   var offset=(page-1)*limit;
                    
                   
                   userModel.find({}).skip(offset).limit(limit).then(result=>{
                         res.send({
                               "userArray":result,
                               "lstPg":totalPages
                         });
                   }); 
            }); 
}

//Send User Details
function getUserDetails(req,res){
       userModel.findById(req.query.id,'username adminStatus')
       .then(result=>{
             res.send({
                   "usnm":result.username,
                   "usrSts":result.adminStatus
             });            
       })
       .catch(error=>{
             res.send({
                   "usrRole":error
             });
       });
        
}
//Change User Right
function changeUserRight(req,res){       
      userModel.findByIdAndUpdate(req.body.id,{adminStatus:req.body.n_changeUserRight},{new:true})
      .then(result=>{            
            res.send("User Right Changed to:"+" "+result.adminStatus+".....");             
      })
      .catch(error=>{
            res.send(error);
      });
}

                   
//Get Edit Users Data
function getUserUpdateData(req,res){       
       userModel.findById(req.query.id,'name username designation address')
       .then(result=>{
              if(result){
                   res.send({
                         "flag":1,
                         "n_name":result.name,
                         "n_username":result.username,
                         "n_designation":result.designation,
                         "n_address":result.address
                   });
              }else{
                   res.send({
                         "flag":0
                   });
              }
       })
       .catch(error=>{
             res.send({
                   "flag":"err",
                   "error":error
             });             
       });  
               
       
      
}
//Edit Users
function updateUser(req,res){
       userModel.findByIdAndUpdate(req.body.id,{name:req.body.n_updateName,username:req.body.n_updateUsername,designation:req.body.n_updateDesignation,address:req.body.n_updateAddress},{new:true})
       .then(result=>{
             if(result){
                   res.send({
                         "flag":1
                  });
             }else{
                   res.send({
                         "flag":0
                   });
             }
       })
       .catch(error=>{
                   res.send({
                         "flag":"err",
                         "err":error
                   });
       });

      

}

//Get Delete User Data
function getUserDeleteData(req,res){ 
       userModel.findById(req.query.id, 'name username')
       .then(result=>{
                   if(result){
                         res.send({
                               "flag":1,
                               "name":result.name,
                               "username":result.username
                         });
                   }else {
                         res.send({
                               "flag":0                               
                         });
                   }              
       })
       .catch(error=>{
                   res.send({
                         "flag":"err",
                         "errorMsg":error
                   });
       });
 }

//Delete User
function deleteUser(req,res){
             userModel.deleteOne({_id:req.body.delUid})
             .then(result=>{
                   if(result.acknowledged===true){
                         res.send({
                               "flag":1                         
                        });
                   }else{
                         res.send({
                               "flag":0
                         });
                   }                   
             })
             .catch(error=>{
                    res.send({
                         "flag":"err",
                         "errorMsg":error
                    });
             });
}


//Change Password By Admin
function changePasswordByAdmin(req,res){      
       
       const salt = bcrypt.genSaltSync(saltRounds);
       const hashedPwd = bcrypt.hashSync(req.body.n_newPasswordValue,salt);
       
       userModel.findByIdAndUpdate(req.body.id,{password:hashedPwd},{new:true})
       .then(result=>{
              if(result){
                   res.send({
                         "flag":1
                   });
              }else{
                   res.send({
                         "flag":0
                   });
              }
       })
       .catch(error=>{
             res.send({
                   "flag":"err",
                   "payload":error
             });
       });      
}

//Change Password By User
function changePasswordByUser(req,res){
        var n_chgpwdusername=req.body.n_chgpwdusername;
        var n_updatePassword=req.body.n_updatePassword;
        const salt = bcrypt.genSaltSync(saltRounds);
        const changed_pwd_by_user = bcrypt.hashSync(n_updatePassword,salt);

        const query={username:n_chgpwdusername};
        userModel.findOneAndUpdate(query,{$set:{password:changed_pwd_by_user}})
        .then(data=>{
             res.send("Password Successfully Changed.....");
        })
        .catch(error=>{
             res.send(error);
        });

        
}


module.exports={ 
       createUser,
       readUsers,
       getUserDetails,
       getUserUpdateData,
       getUserDeleteData,
       updateUser,       
       deleteUser,       
       changeUserRight,
       changePasswordByAdmin,
       changePasswordByUser
}
      







