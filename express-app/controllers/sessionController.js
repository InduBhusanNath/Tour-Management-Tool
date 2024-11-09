const sessionModel=require('../models/sessionModel.js');
const dateTime=new Date();

//Check session
async function checkSession(req,res){
       //var user=req.body.user;              
       //var rows=await sessionModel.countDocuments({userName:user});
       //if(rows=="0"){
             //await sessionModel.create({
                   //userName:user,
                   //isLoggedIn:"1",
                   //loginDateTime:dateTime,
                   //logoutDateTime:"",
                   //loggedInDuration:""
            //})
            //.then(result=>{
                   //res.json({
                        //"flag":"1"
                   //});
           // })  
            //.catch(error=>{
                  //res.json({
                        //"flag":"err"
                   //});
           // });          
       //}else if(rows!=0){
             //res.json({
                  //"flag":"1+"
             //});
      // }   
 }

 module.exports={
       checkSession
 }