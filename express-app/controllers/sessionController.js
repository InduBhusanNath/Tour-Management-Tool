const userModel=require('../models/userModel.js');


//Create Session

function adminSession(req, res){
      var sessionId=req.query.user;
      res.send(sessionId)
     //var sessionId=req.session.user;
     //userModel.find({username:sessionId}).then(data=>{
         //res.json(data);
     //});      
}
//Admin Log Out
function adminLogOut(req,res){     
      console.log(req.session.user); 
      req.session.destroy(err=>{
           if(err){
                res.send("-1");
           }else{
                res.send("1");
           }
      });
}

module.exports={
      adminSession, adminLogOut
}