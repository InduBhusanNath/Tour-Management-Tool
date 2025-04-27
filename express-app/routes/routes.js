var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
const fileUpload = require('express-fileupload');


app.use(fileUpload());
app.use(cors());
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname,'../','../','react-app','build')));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended:true})); 



//CONTROLLERS

var userController=require('../controllers/userController.js');
var adminUserController=require('../controllers/adminUserController.js');
var sessionController=require('../controllers/sessionController.js');
var blogController=require('../controllers/blogController.js');
var contactUsMessageModel=require('../controllers/contactUsMessageController.js');
var autoCreateAdminController=require('../controllers/autoCreateAdminController.js');
var cabBookingController=require('../controllers/cabBookingController.js');
var tourismController=require('../controllers/tourismController.js');
var placesController=require('../controllers/placesController.js');
var imageController=require('../controllers/imageController.js');
var tourPackageController=require('../controllers/tourPackageController.js');
var frontendTourPackageController=require('../controllers/frontend-tour-package-controller.js');
var passwordResetController=require('../controllers/password-reset-controller.js');


/*Frontend GET*/
app.get('/api/bhutan-tour-packages',frontendTourPackageController.frontendTourPackageDisplay);
app.get('/api/bhutan-tour-package-description',frontendTourPackageController.frontendTourPackageDescription);

/* GET*/


//Login && Session

app.get('/api/adminDashboard/adminUsers',userController.readUsers);
app.get('/api/adminDashboard/check-user-session',sessionController.checkUserSession);
//app.get('/admin_logout',sessionController.adminLogOut);

//Password
//app.get('/api/adminDashboard/reset-current-password',userController.readUsers);


app.get('/api/adminDashboard/blogs/',blogController.readBlog);
app.get('/api/adminDashboard/blogs/blog-update',blogController.fetchBlogUpdateData);

app.get('/adminDashboard/contactus-messages/',contactUsMessageModel.readMessages);
app.get('/adminDashboard/cab-booking-data/',cabBookingController.readCabBooking);
app.get('/adminDashboard/manage-cab-booking/cab-booking-processing/get-cab-client-data/',cabBookingController.clientCabBooking);
app.get('/adminDashboard/tourism',tourismController.tourismDetailsRead);
app.get('/adminDashboard/tourism/tourism-edit',tourismController.tourismDetailsEdit);
app.get('/adminDashboard/places/',placesController.placeRead);
app.get('/adminDashboard/places/place-edit',placesController.placeEdit);
app.get('/adminDashboard/images/',imageController.ShowImages);
app.get('/api/adminDashboard/tour-packages/read',tourPackageController.readTourPackage);
app.get('/api/adminDashboard/tour-packages/edit-data',tourPackageController.fetchEditData);
app.get('/api/adminDashboard/tour-packages/delete-data',tourPackageController.fetchDeleteData);

//app.get('*', function (req, res) {
     //res.sendFile(path.join(__dirname,'../','../','react-app','build','index.html'));
//});
  app.get('/api',(req,res)=>{
        console.log("Api");
  });



/*POST*/
app.post('/api/adminLogin/create-auto-admin',autoCreateAdminController.createautoAdmin);
app.post('/api/adminLogin/check-admin-user',adminUserController.checkAdminUser);
//app.post('/api/adminLogin/check-session',sessionController.checkSession);

//USER MANAGEMENT 

app.post('/api/adminDashboard/manage-users/create-user',userController.createUser);
app.post('/adminDashboard/adminUsers/user_edit_data',userController.editUsersData);
app.post('/adminDashboard/adminUsers/user_edit',userController.editUsers); 
app.post('/adminDashboard/adminUsers/user_delete_data',userController.deleteUserData);
app.post('/adminDashboard/adminUsers/user_delete',userController.deleteUser); 
app.post('/adminDashboard/adminUsers/user_priviledge_data',userController.priviledgeUserData);
app.post('/adminDashboard/adminUsers/user_priviledge_data_change',userController.changeUserPriviledge);
app.post('/change_password',userController.changePassword);
app.post('/change_password_by_user',userController.changePasswordByUser);

app.post('/api/adminDashboard/blogs/write_blog',blogController.createBlog);
app.post('/api/adminDashboard/blogs/blog-update',blogController.updateBlog);
app.post('/api/adminDashboard/blogs/blog-delete',blogController.deleteBlog);
app.post('/contact-us-message',contactUsMessageModel.visitorMessage);
app.post('/adminDashboard/contactus-messages/delete-message/',contactUsMessageModel.deleteMessage);
app.post('/create-cab-booking/',cabBookingController.createCabBooking);
app.post('/update-cab-booking/',cabBookingController.updateCabBooking);
app.post('/get-delete-cab-booking-data/',cabBookingController.getDeleteCabBookingData);
app.post('/delete-cab-booking-data/',cabBookingController.deleteCabBookingData);
app.post('/create-tourism-details/',tourismController.tourismDetailsWrite);
app.post('/adminDashboard/tourism/tourism-update',tourismController.tourismDetailsUpdate);
app.post('/adminDashboard/tourism/tourism-delete',tourismController.tourismDetailsDelete);
app.post('/adminDashboard/places/place-write',placesController.placeWrite);
app.post('/adminDashboard/places/place-edit',placesController.placeUpdate);
app.post('/adminDashboard/places/place-delete',placesController.placeDelete);
app.post('/adminDashboard/images/',imageController.uploadImage);
app.post('/adminDashboard/images/delete-image',imageController.deleteImage);
app.post('/api/adminDashboard/tour-packages/create',tourPackageController.createTourPackage);
app.post('/api/adminDashboard/tour-packages/update',tourPackageController.updateTourPackage);
app.post('/api/adminDashboard/tour-packages/delete',tourPackageController.deleteTourPackage);

//Login & Session
app.post('/api/adminDashboard/password-reset',passwordResetController.passwordReset);
app.post('/api/adminDashboard/adminuser-logout',sessionController.adminLogOut);




module.exports = app;

