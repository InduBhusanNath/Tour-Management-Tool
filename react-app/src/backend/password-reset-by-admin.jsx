import { apihost } from "./apihost";
import { useState } from "react";
import axios from "axios";
//Main Export Function
export default function PasswordResetByAdmin(props){
     const id=props.id;
     const [msg1,setMsg1]=useState('');
     const [newPasswordType,setNewPasswordType]=useState('password');    
     const [newPasswordValue,setNewPasswordValue]=useState('');
     const [isCheckedNewPassword,setIsCheckedNewPassword]=useState(false);
     
     //FUNCTIONS
     
     //Handle Check
     function HandleNewPasswordCheck(){ 
             if(isCheckedNewPassword===false){
                 setIsCheckedNewPassword(true);
                 setNewPasswordType('text');
                 
             }else if(isCheckedNewPassword===true){
                 setIsCheckedNewPassword(false); 
                 setNewPasswordType('password');
             }            
     }
     function SubmitPasswordResetByAdmin(e){
             e.preventDefault();
             if(!id){
                 return;
             }

             //VALIDATIONS
             if(!newPasswordValue){
                      setMsg1('Type New Password.....');
                      return;
             }

             var np={
                     "id":id,
                     "n_newPasswordValue":newPasswordValue
             }
             axios.post(apihost+"/adminDashboard/manage-users/password-reset-by-admin/change-password-by-admin",np,
             {headers:{'Content-Type':'application/json'}})
             .then(request=>{
                         if(request.data.flag===1){
                                 setMsg1('Password Changed Successfully.....');
                         }else if(request.data.flag===0){
                                 setMsg1('Could Not Change Password,Try Again.....');
                         }else if(request.data.flag==="err"){
                                 setMsg1(request.data.payload);
                         }
                  
             })
             .catch(error=>{
                     alert(error);
             });             
     }
     return(<>
             <div className="row p-1">
                     <div className="col-sm-12">
                             <span className="small text-danger">{msg1}</span>
                             <form method="post" onSubmit={SubmitPasswordResetByAdmin}>
                                     <div className="form-group p-1">
                                             <label>New Password</label>                     
                                             <input type={newPasswordType} className="form-control" value={newPasswordValue}  name="n_newPasswordValue" onChange={(e)=>{setMsg1(''); setNewPasswordValue(e.target.value)}}/>
                                     </div>
                                     <div className="form-check">
                                             <input type="checkbox" className="form-check-input" checked={isCheckedNewPassword} onChange={HandleNewPasswordCheck} />
                                             <label>Show Password</label>
                                     </div>
                                     <div className="form-group p-1">
                                             <button type="submit" className="submit">RESET PASSWORD</button> 
                                     </div>  
                             </form>                                                    
                     </div>
             </div>
     </>);
}
