import { apihost } from "./apihost";
import {Helmet} from "react-helmet";
import {useState,useEffect} from "react";
import axios from "axios";


//Export Component

export default function AdminLogin(){     
     return(
             <>             
                 <div className="container-fluid">
                     <TechnicalSeo/> 
                     <AlreadyLoggedinRedirection/>                    
                     <CreateDummyUser/>
                     <SessionCreation/>
                 </div>
             </>     
             );
}

//Technical SEO

function TechnicalSeo(){
     return(<>
         <Helmet>
             <html lang="en"/>
             <title>Admin Login</title>
             <body className="background-lightgoldenrodyellow"/>
         </Helmet>
     </>);
}

//Redirection for Already Logged In

function AlreadyLoggedinRedirection(){  
     //localStorage.removeItem("isLoggedIn");
     if(localStorage.getItem("isLoggedIn")==="undefined"){

     }else if(!localStorage.getItem("isLoggedIn")){

     }else if(!!localStorage.getItem("isLoggedIn") && localStorage.getItem("isLoggedIn")!=="undefined"){
         setTimeout(()=>{
              window.location.href="/adminDashboard";
         },1);
        
        
     }
     return(<></>);         
}

//Create Dummy User for First Login
function CreateDummyUser(){ 
     const [autoUser]=useState('1');
     const[msg1,setMsg1]=useState('Click on the Button to Create a Dummy Username/Password if You Are a First-Time User.')
      var usr={
         "flag":autoUser
      }
      function HandleAutoUser(e){  
         e.preventDefault();    
         axios.post(apihost+"/adminLogin/create-auto-admin",usr)
         .then(response=>{
             setMsg1(response.data);
         })
         .catch(error=>{
             setMsg1(error);
         });       
      
      }

     
     return(<>
         <div className="row p-3">
                 <div className="col-sm-6">
                         <form method="post" onSubmit={HandleAutoUser}>
                                 <input type="hidden" className="form-control" name="n_autoUser" value={autoUser}/>
                                 <button className="button">Create Dummy Admin User</button>
                         </form>
                         <br/>
                         <span className="small text-danger">{msg1}</span>
                 </div>
                 <div className="col-sm-6"></div>
         </div>        
         
     </>);   

}


//Create Session
function SessionCreation(){
    return(<>
        <div className="row p-3">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <section className="padding25">
                    <p className="text-center">
                            <img src={"/MainImages/logo.png"} alt="Aeiety Trips"/>
                    </p>
                    
                    <p className="font font28 fw-bold text-center">ADMIN PANEL LOGIN</p>
                    <p className="font font24 fw-bold">Instructions</p>
                    <p className="font font22">
                        <ul>
                            <li>Login to the Admin Panel with the alloted username & password</li>
                            <li>The username is your official email id</li>
                            <li>If you forgot the passord, set a new password through the Forgot Password link</li>
                            <li>Inform the management if you encounter issues in logging into the Admin Panel</li>
                        </ul>
                    </p>

                </section>
            </div>
            <div className="col-sm-5">
                <section className="padding25">
                    <AllowAcces/>
               </section>
            </div>
            <div className="col-sm-1"></div>
        </div>
    </>);
}
//Allow Access

function AllowAcces(){
    
     const [adminEmail,setAdminEmail]=useState("");
     const [errorAdminEmail, setErrorAdminEmail]=useState("");
     const [adminPassword,setAdminPassword]=useState("");
     const [errorAdminPassword,seterrorAdminPassword]=useState("");
     const [passwordType,setPasswordType]=useState("password");
     const [checked, setChecked]=useState(false);
     const [res,setRes]=useState('');
     const [autousr,setAutousr]=useState('');

     
     
     

     //Show/Hide Password
     function ShowPassword(e){         
         e.preventDefault();        
         if(passwordType==='password'){            
             setChecked(!checked);
             setPasswordType('text');
            return;
        }
        setPasswordType('password');
        setChecked(checked);        
   }
   //Submit Form

   function HandleSubmit(e){
     //Validation 
     e.preventDefault();
     if(!adminEmail){
         setErrorAdminEmail('Please Type Your Username.....');
         return;
     }
     var pwd=adminPassword;
     if(pwd.length===0){
        seterrorAdminPassword("Please Enter Your Password.....");
        return;
     }

     var admUsr=new FormData();
     admUsr.append("userName",adminEmail);
     admUsr.append("userPassword",adminPassword);

     
     
     axios.post(apihost+"/adminLogin/check-admin-user",admUsr,
     {headers:{'Content-Type':'application/json'}})
     .then(response=>{
         if(response.data.flag==="User=0"){
             setRes("No Such User Exists.....");
             return;
         }else if(response.data.flag==="User>0"){
             setRes("Duplicate Username Suspected.....");
             return;
         }else if(response.data.flag==="Pwd>-1"){ 
             setRes("Type the Correct Password.....");
             return;
         }else if(response.data.flag==="Session:1"){             
             //Storing Login Data, Granting Access
             localStorage.setItem("isLoggedIn",adminEmail);             
             setRes("Allowing Access.....");
             setTimeout(()=>{
                window.location.assign("/adminDashboard/");
             },1000);
             
         }else if(response.data.flag==="Session:-1"){
             setRes("Could Not Create Session,Try Again.....");
             return;
         }else if(response.data.flag==="Session:1+"){
             setRes("Session Already Exists.....");
             setTimeout(()=>{
                window.location.assign("/adminDashboard/");
             },200);
             return;
         }else if(response.data.flag==="Session:>1"){
             setRes("Multiple Sessions Detected, Access Denied.....");
             return;
         }else if(response.data.flag==="Non-Admin"){
             setRes("Non-Admin Status: Access Denied.....");
             return;
         }
     })
     .catch(error=>{
        setRes(error);
     });        
 }
 
 
 
     return(<>
          
             <section>
                     <span className="text-danger small padding10">{autousr}</span>
             </section>
             <br/>
             <section className="bg-transparent shadow-sm border border-warning-subtle rounded">
                    <br/>                           
                     <h2 className="text-center">ADMIN LOGIN</h2>
                     <br/>
                     <span className="text-danger small">{res}</span>
                     <form method="post" onSubmit={HandleSubmit}>
                             <div className="form-group">                        
                                     <label>&#128100;&nbsp;Username&nbsp;[Official EMail]</label>
                                     <input type="email" className="form-control" name="n_adminEmail" value={adminEmail} placeholder="Username eg. xyx@abc.com" onChange={(e)=>{setAdminEmail(e.target.value)}}/>
                                     <span className="text-danger small">{errorAdminEmail}</span>
                             </div>                                                
                             <div className="form-group">
                                     <label>&#128274;&nbsp;Password</label>                               
                                     <input type="password" className="form-control" name="n_adminPassword" value={adminPassword} onChange={(e)=>{setAdminPassword(e.target.value)}}/>
                                     <span className="text-danger small">{errorAdminPassword}</span>
                             </div>
                             <div className="form-check">
                                     <input type="checkbox" value={checked}  className="form-check-input" name="n_showPassword"  onChange={ShowPassword}/>
                                     <label>Show Password</label>
                             </div>
                             <br/>
                             <div className="form-group">
                                     <button  type="submit" className="submit">Login</button>
                             </div>                                 
                     </form>
             </section>
             <section>
                     <br/>
                     <a href="forgotPassword" className="font font20 text-decoration-none link-danger">Forgot Password</a>
             </section>       
     </>);
}

