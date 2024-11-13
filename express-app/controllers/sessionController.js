const sessionModel=require('../models/sessionModel.js');
const dateTime=new Date();

//Check session
async function checkSession(req,res){
       res.send(req.session.user);       
 }

 module.exports={
       checkSession
 }