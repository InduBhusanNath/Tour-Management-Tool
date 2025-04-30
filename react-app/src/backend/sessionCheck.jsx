import { apihost } from "./apihost";
import { useState } from "react";
import axios from "axios";
import PasswordResetForm from "./password-reset-form";


//Main export function
export default function SessionCheck(){
     const usrSes=localStorage.getItem("isLoggedIn");      
     const[sesId]=useState(usrSes);     
     const[name,setName]=useState('');
     const[userName,setUserName]=useState('');
     const[adminStatus,setAdminStatus]=useState('');
     const[designation,setDesignation]=useState('');
     const[address,setAddress]=useState('');  
     //Dropdown
     const[triangle,setTriangle]=useState('\u25BC');
     const[plus,setPlus]=useState('\u2795');
     const[profileDropdownVisibility,setprofileDropdownVisibility]=useState('hidden');
     const[passwordResetVisibility,setpasswordResetVisibility]=useState('hidden');  
        //localStorage.setItem("isLoggedIn",'');
        if(!sesId){
             window.location.href="/adminLogin";
             return;
         }
       axios.get(apihost+"/adminDashboard/check-user-session/?ssn="+sesId)
       .then(response=>{
             setName(response.data.name);            
             setUserName(response.data.username);
             setAdminStatus(response.data.adminStatus);
             setDesignation(response.data.designation);
             setAddress(response.data.address);
       })
       .catch(error=>{
          alert(error);
       });
       //Show Profile Menu
       function ShowProfileMenu(){
             if(profileDropdownVisibility==='hidden'){
                setTriangle('\u25B2');
                setprofileDropdownVisibility('shown');                                
            }else if(profileDropdownVisibility==='shown'){                
                setprofileDropdownVisibility('hidden');
                setTriangle('\u25BC');  
            }
       }
       //Show Password Reset
       function ShowPasswordReset(){
             if(passwordResetVisibility==='hidden'){
                setPlus('\u2796');
                setpasswordResetVisibility('shown');
             }
             if(passwordResetVisibility==='shown'){
               setPlus('\u2795');
               setpasswordResetVisibility('hidden');
            }
       }

       //Admin Log Out
       function AdminLogOut(e){
             e.preventDefault();
             var loggedUsr={
                   "n_sesId":sesId
             }
             
             axios.post(apihost+"/adminDashboard/adminuser-logout",loggedUsr,
             {headers:{'Content-Type':'application/json'}})
             .then(response=>{
                   
                   if(!response.data.flag){
                         localStorage.setItem("isLoggedIn",'');
                         window.location.href="/adminLogin";
                         return;
                   }else if(response.data.flag==="1+"){
                         return;
                   }else if(response.data.flag===0){
                         alert("Something Went Wrong, Try Again.....");
                         return;
                   }else if(response.data.flag===1){
                         localStorage.setItem("isLoggedIn",'');
                         window.location.href="/adminLogin";
                         return;
                   }
             })
             .catch(error=>{
                   alert(error);
             });
       }
       
      return(<>
           <a href="javascript:void(0);" className="text-decoration-none font font16 fw-bold link-primary" onClick={ShowProfileMenu}>{name}</a>&nbsp;{triangle}
           {/*Profile Menu */}
            <section className={profileDropdownVisibility}>
                   <section className="dropdown font font14">
                         <table className="table">
                               <tbody>
                                     <tr>
                                           <td className="bg-transparent text-start fw-bold">NAME</td>
                                           <td className="bg-transparent text-start">{name}</td>
                                     </tr>
                                     <tr>
                                           <td className="bg-transparent text-start fw-bold">ADMIN STATUS</td>
                                           <td className="bg-transparent text-start">{adminStatus}</td>
                                     </tr>
                                     <tr>
                                           <td className="bg-transparent text-start fw-bold">USER NAME</td>
                                           <td className="bg-transparent text-start">{userName}</td>
                                     </tr>
                                     <tr>
                                           <td className="bg-transparent text-start fw-bold">DESIGNATION</td>
                                           <td className="bg-transparent text-start">{designation}</td>
                                     </tr>
                                     <tr>
                                           <td className="bg-transparent text-start fw-bold">ADDRESS</td>
                                           <td className="bg-transparent text-start">{address}</td>
                                     </tr>
                               </tbody>
                         </table>
                         {/*Change Password*/}
                         <section>
                               <a href="javascript:void(0);" className="text-decoration-none font font16 fw-bold link-primary" onClick={ShowPasswordReset}>CHANGE PASSWORD&nbsp;{plus}</a>
                               <section className={passwordResetVisibility}>
                                     <PasswordResetForm usrnm={userName}/>
                               </section>
                          </section>
                          {/*Log Out*/}
                          <section>
                               <form method="post" onSubmit={AdminLogOut}>
                                     <div className="form-group p-1">
                                           <input type="hidden" value={sesId}  className="form-control" name="n_sesId"/>
                                     </div>
                                     <div className="form-group p-1">
                                           <button type="submit" className="submit">LOG OUT</button> 
                                     </div>  
                               </form>
                          </section>
                   </section>               
                
            </section>
      </>);
}