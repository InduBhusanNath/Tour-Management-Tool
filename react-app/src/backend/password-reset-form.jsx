import { apihost } from "./apihost";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PasswordResetForm({usrnm}){ 
     const[sessionUsername,setSessionUsername]=useState('');
     const[msg1,setMsg1]=useState('');
     const[msg2,setMsg2]=useState('');        
     const[typeCurrentPassword,setTypeCurrentPassword]=useState('password');
     const[currentPasswordValue,setCurrentPasswordValue]=useState('');
     const[isCheckedCurrentPassword,setIsCheckedCurrentPassword]=useState(false);
     const[typeNewPassword,setTypeNewPassword]=useState('password');    
     const[newPasswordValue,setNewPasswordValue]=useState('');
     const[isCheckedNewPassword,setIsCheckedNewPassword]=useState(false);

     useEffect(()=>{
         setSessionUsername(usrnm)
     },[usrnm]);

     //Handle Current Password Check
     function HandleCurrentPasswordCheck(){         

         if(typeCurrentPassword==='password'){
             setIsCheckedCurrentPassword(true);             
             setTypeCurrentPassword('text');
             return;
         }

         if(typeCurrentPassword==='text'){
             setIsCheckedCurrentPassword(false);             
             setTypeCurrentPassword('password');
             return;
         }           
     }
     //Handle New Password Check
     function HandleNewPasswordCheck(){         

         if(typeNewPassword==='password'){
             setIsCheckedNewPassword(true);             
             setTypeNewPassword('text');
             return;
        }
        if(typeNewPassword==='text'){
             setIsCheckedNewPassword(false);             
             setTypeNewPassword('password');
             return;
        } 
     }
     // Submit Password Reset
     function SubmitResetPassword(e){
         e.preventDefault();
         if(sessionUsername.length===0){
             setMsg1("Something Went Wrong, Relogin and Try Again.....");
             return;
         }
         if(currentPasswordValue.length===0){
             setMsg1("Type Your Existing Password.....");
             return;
         }
         if(newPasswordValue.length===0){
             setMsg2("Type Your New Password..... ");
             return;         
         }

         var pwdResetData={
             "n_sessionUsername":sessionUsername,
             "n_currentPasswordValue":currentPasswordValue,
             "n_newPasswordValue":newPasswordValue
         }

         //Post Password Reset Data
         axios.post(apihost+"/adminDashboard/password-reset",pwdResetData,
            {headers:{'Content-Type':'application/json'}}
         ).then(response=>{
              if(response.data.flag===0){
                 setMsg1("Type Your Existing Password Correctly.....");
                 return;
              }else if(response.data.flag==="1+"){
                 setMsg2("Duplicate Username/Password Detected, Operation Aborted.....");
                 return;
              }else if(response.data.flag==="1-"){
                 setMsg2("Something Went Wrong, Try Again.....");
                 return;
              }else if(response.data.flag===1){
                 setMsg2("Password Changed Successfully.....");
                 setCurrentPasswordValue('');
                 setNewPasswordValue('');                
                 return;
              }
         })
         .catch(error=>{ 
             alert(error);             
         });

    }
     return(<>
         <form method="post" onSubmit={SubmitResetPassword}>
             
             <div className="form-group p-1">
                     <input type="hidden" value={sessionUsername}  className="form-control" name="n_sessionUsername"/>
             </div>       
             <div className="form-group p-1">
                     <span className="small text-danger">{msg1}</span>
                     <input type={typeCurrentPassword} value={currentPasswordValue}  className="form-control" name="n_currentPasswordValue" placeholder="Type Your Current Password" onChange={(e)=>{setMsg1(''); setMsg2(''); setCurrentPasswordValue(e.target.value)}}/>
             </div>
             <div className="form-check">
                     <input type="checkbox" className="form-check-input" checked={isCheckedCurrentPassword} onChange={HandleCurrentPasswordCheck} />
                     <label>Show Password</label>
             </div>             
             <div className="form-group p-1">
                     <span className="small text-danger">{msg2}</span>
                     <input type={typeNewPassword} value={newPasswordValue}  className="form-control" name="n_newPasswordValue" placeholder="Type Your New Password" onChange={(e)=>{setMsg1(''); setMsg2(''); setNewPasswordValue(e.target.value)}}/>
             </div>
             <div className="form-check">
                     <input type="checkbox" className="form-check-input" checked={isCheckedNewPassword} onChange={HandleNewPasswordCheck} />
                     <label>Show Password</label>
             </div>
             <div className="form-group p-1">
                 <button type="submit" className="submit">CHANGE PASSWORD</button> 
             </div>                        
         </form>
     </>);
}