import { apihost } from "./apihost";
import { useEffect, useState } from "react";
import axios from "axios";
import PasswordResetByAdmin from "./password-reset-by-admin";
//Main Export function 
export default function UpdateUserProfile(props){     
      const editId=props.id;      
      const [msg1,setMsg1]=useState('');      
      const [updateName,setUpdateName]=useState('');
      const [errorUpdateName,setErrorUpdateName]=useState('');
      const [updateUsername,setUpdateUsername]=useState('');
      const [errorUpdateUsername,setErrorUpdateUsername]=useState('');
      const [updateDesignation,setUpdateDesignation]=useState('');
      const [errorUpdateDesignation,setErrorUpdateDesignation]=useState('');
      const [updateAddress,setUpdateAddress]=useState('');
      const [errorUpdateAddress, setErrorUpdateAddress]=useState(''); 
      const [plus,setPlus]=useState('\u2795');
      const [passwordResetByAdminFormVisibility,setPasswordResetByAdminFormVisibility]=useState('hidden');
      
      //Get User Edit Data
      useEffect(()=>{
           if(!editId){
               return;           
          }
           axios.get(apihost+"/adminDashboard/manage-users/user-profile-update/get-user-update-data/?id="+editId)
           .then(response=>{
                 if(response.data.flag===1){
                     setUpdateName(response.data.n_name); 
                     setUpdateUsername(response.data.n_username); 
                     setUpdateDesignation(response.data.n_designation);
                     setUpdateAddress(response.data.n_address);
                 }else if(response.data.flag===0){                     
                     setMsg1("Something Went Wrong, Try Again.....");
                 }else if(response.data.flag==="err"){
                     setMsg1(response.data.error);
                 }

           })
           .catch(error=>{
                 alert(error);
           });

      },[editId]);


      //Submit User Update
      function SubmitUserUpdate(e){
           e.preventDefault();
           //Validation
           if(!updateName){
                setErrorUpdateName('Name Field Cannot be Blank.....');
           }
           if(!updateUsername){
                setErrorUpdateUsername('Username Field Cannot be Blank.....');
           }
                   
           var uu={
                "id":editId,
                "n_updateName":updateName,
                "n_updateUsername":updateUsername,
                "n_updateDesignation":updateDesignation,
                "n_updateAddress":updateAddress
           }
           if(!uu.id){
                setMsg1('ID Not Found.....');
                return;
           }
           axios.post(apihost+"/adminDashboard/manage-users/user-profile-update/update-user",uu,
           {headers:{'Content-Type':'application/json'}})
           .then(request=>{
                     if(request.data.flag===1){
                          setMsg1('User Updated Successfully.....');
                     }else if(request.data.flag===0){
                          setMsg1('Something Went Wrong, Try Again.....');
                     }else if(request.data.flag==="err"){
                          setMsg1(request.data.err);
                     }
           })
           .catch(error=>{
                alert(error);
           });         

      }
      //Show Password Reset By AdminForm
      function ShowPasswordResetByAdminForm(){
           if(passwordResetByAdminFormVisibility==='hidden'){
               setTimeout(()=>{
                    setPasswordResetByAdminFormVisibility('shown');
                    setPlus('\u2796');
               },500);
           }else if(passwordResetByAdminFormVisibility==='shown'){
                setTimeout(()=>{
                     setPasswordResetByAdminFormVisibility('hidden');
                     setPlus('\u2795');
                },500);
           }
      }

      return(<>
                <div className="row p-1">
                     <div className="col-sm-12">
                          <span className="small text-danger">{msg1}</span>
                          <form method="post" onSubmit={SubmitUserUpdate}>
                              <div className="form-group">                                
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="n_updateName" value={updateName} onChange={(e)=>{setUpdateName(e.target.value)}}/>
                                    <span className="text-danger small">{errorUpdateName}</span>      
                               </div>
                               <div className="form-group">
                                    <label>EMail/Username</label>
                                    <input type="email" className="form-control" name="n_updateUsername" value={updateUsername} onChange={(e)=>{setUpdateUsername(e.target.value)}}/>
                                    <span className="text-danger small">{errorUpdateUsername}</span>       
                               </div>
                               <div className="form-group">
                                         <label>Designation</label>
                                         <input type="text" className="form-control" name="n_updateDesignation" value={updateDesignation} onChange={(e)=>{setUpdateDesignation(e.target.value)}}/>
                                         <span className="text-danger small">{errorUpdateDesignation}</span>       
                               </div>
                               <div className="form-group">
                                         <label>Address</label>
                                         <textarea  className="form-control" name="n_updateAddress" value={updateAddress} onChange={(e)=>{setUpdateAddress(e.target.value)}}/>
                                         <span className="text-danger small">{errorUpdateAddress}</span>
                               </div>
                               <div className="form-group">
                                    <button type="submit" className="submit">UPDATE USER</button>
                               </div>
                          </form>
                     </div>
                </div>
                <div className="row p-2">
                     <div className="col-sm-12">
                          <main>
                               <section className="bg-warning p-1" onClick={ShowPasswordResetByAdminForm}>
                                         <a href="javascript:void(0);" className="text-decoration:none link-dark fs-6 fw-bold">Reset Password{plus}</a>
                               </section>
                               <section className={passwordResetByAdminFormVisibility}>
                                    <PasswordResetByAdmin id={editId}/>
                               </section>
                          </main>
                     </div>
                </div>
      </>)
}