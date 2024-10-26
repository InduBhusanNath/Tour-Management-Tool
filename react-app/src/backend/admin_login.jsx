import {url} from './url';
import {Helmet} from "react-helmet";
import {useState} from "react";
import axios from "axios";

//Export Component

export default function AdminLogin(){     
     return(
             <>             
                 <div className="container-fluid">
                     <TechnicalSeo/>  
                     <CreateDummyUser/>
                     <Body1/>
                 </div>
             </>     );
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
   


//Create Dummy User for First Login
function CreateDummyUser(){ 
     const [autoUser]=useState('1');
     const[msg1,setMsg1]=useState('Click on the Button to Create a Dummy Username/Password if You Are a First-Time User.')
      var usr={
         "flag":autoUser
      }
      function HandleAutoUser(e){  
         e.preventDefault();    
         axios.post(url+"/adminLogin/create-auto-admin",usr)
         .then(response=>{
             setMsg1(response.data);
         })
         .catch(error=>{
             setMsg1(error);
         });       
      
      }

     
     return(<>
         <div className="row">
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

//Body
function Body1(){
    return(<>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-5">
                <section className="padding25">
                    <p className="text-center">
                            <img src={process.env.PUBLIC_URL+'MainImages/logo.png'} alt=" "/>
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
     const [sessionUserId, setSessionUserId]=useState('');
     const [sessionAdminStatus,setSessionAdminStatus]=useState('');

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

     var adm_usr=new FormData();
     adm_usr.append('userName',adminEmail);
     adm_usr.append('userPassword',adminPassword);
     axios.post(url+"/adminLogin/check_admin_user",adm_usr,{headers:{'Content-Type':'application/json'}})
     .then(response=>{
         var admUserData=response.data;
         if(admUserData.flag==="1"){             
             setRes("Allowing Access.....");
             axios.get(url+"/admin_session/?user="+adminEmail)
             .then(response=>{
                     var userSession=response.data;                  
             })
             .catch(error=>{
                 alert(error);
             });
                
             //setTimeout(()=>{
                 //window.location.assign(url+"/adminDashboard");
            //},2000);
            //return;
            
            

         }else if(admUserData.flag==="0"){
              setRes("No Combination of Such Username/Password.....");
              return;
         }else if(admUserData.flag==="1+"){
              setRes("Duplicate Username Suspected.....");
              return;
         }else if(admUserData.flag==="0+"){
             setRes("Type the Correct Password.....");
             return;
         }else if(admUserData.flag==="err"){
             setRes("Errors Detected, Please Try Again.....");
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
                     <h1 className="text-center">ADMIN LOGIN</h1>
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
                     <a href="forgotPassword" className="font font20 text-decoration-none">Forgot Password</a>
             </section>       
     </>);
}

