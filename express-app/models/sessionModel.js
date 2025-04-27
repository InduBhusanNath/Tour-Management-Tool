const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');

const sessionSchema=new mongoose.Schema({   
         sessionUser:{ type:String}, 
         loginStatus:{type:Number},          
         loginTime:{ type:Date },
         logoutTime:{ type:Date }         
});

const Session=mongoose.model('Session',sessionSchema);
module.exports=Session;