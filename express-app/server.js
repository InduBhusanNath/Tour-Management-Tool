var express = require('express');
var server=express();
var routes=require('./routes/routes');
server.use('/',routes);
server.listen(5000,'0.0.0.0',()=>{
    console.log('Application Started At Port 5000');
})