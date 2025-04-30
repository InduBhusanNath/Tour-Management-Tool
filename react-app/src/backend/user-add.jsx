import {apihost} from './apihost';
import { useState } from "react";
import axios from "axios";
import DateObject from "react-date-object";
//Add Users
export default function AddUsers(){
         //Set the Current Date
         var date = new DateObject();
         var currentDate=date.format("YYYY/MM/DD");

         const [msg1,setMsg1]=useState('');
         const [entryDate]=useState(currentDate);
         const [visibilityAddUserForm,setVisibilityAddUserForm]=useState('hidden');
         const [name,setName]=useState('');
         const [errorName,setErrorName]=useState('');
         const [username,setUsername]=useState('');
         const [errorUsername,setErrorUsername]=useState('');
         const [passwordType,setPasswordType]=useState('password');
         const [password,setPassword]=useState('');
         const [errorPassword,setErrorPassword]=useState('');
         const [chk,setChk]=useState(false);
         const [nonAdmin]=useState('Non-Admin');
         const [designation,setDesignation]=useState('');
         const [address,setAddress]=useState('');

          
         
    
        //FUNCTIONS
    
         //Show User Form
         function ShowUserForm(){         
                 setVisibilityAddUserForm('shown'); 
                 return;      
        }
         //Hide Admin User Form
        function HideUserForm(){        
                 setVisibilityAddUserForm('hidden');
                 setName('');
                 setErrorName('');
                 setUsername('');
                 setErrorUsername('');
                 setPassword('');
                 setErrorPassword('');
                 setDesignation('');
                 setAddress('');
                 return; 
         }
         
         //Show Hide Password
         function ShowHidePwd(e){
                 setChk(e.target.checked);                 
                 if(chk===false){
                         setPasswordType('text');
                 }else {
                         setPasswordType('password');
                 }
                 
                 return;
        }
         //Post Users
         function PostUsers(e){
                 e.preventDefault();
                 //Validations
                 if(!name){
                         setErrorName('Type the Name of User.....');
                         return;
                 }
                 if(!username){
                         setErrorUsername('Type Username.....');
                         return;                 
                 }
                 if(!password){
                         setErrorPassword('Type Password.....');
                         return;
                 }
                 if(!nonAdmin){
                         setMsg1('Something is Wrong,Contact Your IT Team.....');
                         return;
                 }

                 var cu={
                         "n_entryDate":entryDate,
                         "n_name":name,
                         "n_username":username,
                         "n_password":password,
                         "n_adminStatus":nonAdmin,
                         "n_designation":designation,
                         "n_address":address
                        };
                 axios.post(apihost+"/adminDashboard/manage-users/user-add/create-user",cu,
                 {headers: {'Content-Type':'application/json'}})
                 .then(response=>{
                         if(response.data.flag===1){
                                 setName('');
                                 setUsername('');
                                 setPassword('');
                                 setDesignation('');
                                 setAddress('');
                                 setMsg1(response.data.payload+" "+"is created successfully.....");
                         }else if(response.data.flag===0){
                                 setMsg1("Error Detected:"+" "+response.data.payload);                                 
                         }else if(response.data.flag===11){
                                 setMsg1("User Already Exists.....");
                         }else if(response.data.flag===12){
                                 setMsg1("Opeartion Aborted:Duplicate User");
                        }
                 })
                 .catch(error=>{
                         alert(error)                         
                 });                 
         }

 return(<>
         {/* Button to Show Add Users Form*/}
         <div className="row p-3">
                 <div className="col-sm-4">
                         <button className="button" onClick={ShowUserForm}>&#10133;&nbsp;Users</button>
                 </div>
                 <div className="col-sm-4"></div>
                 <div className="col-sm-4"></div>
         </div>
         {/* Form to Add Users */}
         <div className="row p-3">
                 <div className="row p-3">
                         <div className="col-sm-1"></div>
                         <div className="col-sm-10">
                                 <main className={visibilityAddUserForm}>                                         
                                         <section className="popup">
                                                <button className="hide_btn" onClick={HideUserForm} >&#10060;</button>
                                                <h5 className="fs-3 text-center fw-bold">Add Users</h5>
                                                <span className="small text-danger">{msg1}</span>
                                                <form method="post" onSubmit={PostUsers}>
                                                        <div className="form-group">
                                                                 <input type="text" className="form-control" name="n_entryDate" value={entryDate} readOnly/>
                                                        </div>
                                                        <div className="form-group">
                                                                 <label>Name</label>
                                                                 <input type="text" className="form-control" name="n_name" value={name} onChange={(e)=>{setName(e.target.value);}}/>
                                                                 <span className="text-danger small">{errorName}</span>       
                                                        </div>
                                                        <div className="form-group">
                                                                 <label>EMail/Username</label>
                                                                 <input type="email" className="form-control" name="n_username" value={username} onChange={(e)=>{setUsername(e.target.value);}}/>
                                                                 <span className="text-danger small">{errorUsername}</span>       
                                                        </div>
                                                        <div className="form-group">
                                                                 <label>Password</label>
                                                                 <input type={passwordType} className="form-control" name="n_password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/> 
                                                                 <span className="text-danger small">{errorPassword}</span>       
                                                        </div>
                                                        <div className="form-check">
                                                                 <input  type="checkbox" checked={chk} className="form-check-input" onChange={ShowHidePwd}/>
                                                                 <label>&nbsp;Show Password</label> 
                                                        </div> 
                                                        <div className="form-group">
                                                                 <label>Admin Status</label>
                                                                 <input type="text" className="form-control" name="n_adminStatus" value={nonAdmin} readOnly/>       
                                                        </div>                                                        
                                                         <div className="form-group">
                                                                 <label>Designation</label>
                                                                 <input type="text" className="form-control" name="n_designation" value={designation} onChange={(e)=>{setDesignation(e.target.value)}}/>       
                                                         </div>
                                                         <div className="form-group">
                                                                 <label>Address</label>
                                                                 <textarea  className="form-control" name="n_address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
                                                         </div>                                                        
                                                        <div className="form-group">
                                                                 <button type="submit" className="submit">ADD USER</button>
                                                        </div>                                                         
                                                </form>

                                         </section>
                                        
                                 </main>
                         </div>
                         <div className="col-sm-1"></div>
                 </div>
         </div>
         
 </>);}
