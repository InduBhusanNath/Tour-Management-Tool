
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb');

const sessionSchema=new mongoose.Schema({     
     userName:String,
     isLoggedIn:String,
     loginDateTime:Date,
     logoutDateTime:Date,
     loggedInDuration:String
});

const Session=mongoose.model('Session',sessionSchema);
module.exports=Session;