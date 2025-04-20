const userModel=require('../models/userModel.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

//Get Existing Password
async function passwordReset(req,res){
        var n_sessionUsername=req.body.n_sessionUsername;
        var n_currentPasswordValue=req.body.n_currentPasswordValue;
        var n_newPasswordValue=req.body.n_newPasswordValue;

        const currentPassword = bcrypt.hashSync(n_currentPasswordValue, salt);
        const newPassword = bcrypt.hashSync(n_newPasswordValue, salt);

        var getPwd=await userModel.find({username:n_sessionUsername},'password').exec();
        
        var isTrue=bcrypt.compareSync(n_currentPasswordValue,getPwd[0].password);
        if(isTrue===true){
               var countUsrPwd=await userModel.countDocuments({username:n_sessionUsername, password:getPwd[0].password}).exec(); 
               
               if(countUsrPwd===1){
                      const filter={username:n_sessionUsername};
                      const update={password:newPassword};

                      var isUpdated=await userModel.findOneAndUpdate(filter, update);
                      if(isUpdated){
                             res.send({
                                    "flag":1
                          });
                      }else{
                             res.send({
                                    "flag":"1-"
                             });
                      }
                       

               }else{
                      res.send({
                         "flag":"1+"
                     });
               }
        }else{
               res.send({
                      "flag":0
               });
        }
}

module.exports={
       passwordReset
}