import { apihost } from "./apihost";
import { useEffect, useState } from "react";
import axios from "axios";

//Main export function
export default function UserDelete(props){
         const dId=props.id;
         const [msg1,setMsg1]=useState('');
         const [delName,setDelName]=useState('');
         const [delUserName,setDelUserName]=useState('');
         

         useEffect(()=>{
                 axios.get(apihost+"/adminDashboard/manage-users/user-delete/get-user-delete-data/?id="+dId)
                 .then(response=>{
                         if(response.data.flag===1){
                                 setDelName(response.data.name);
                                 setDelUserName(response.data.username);                            
                         }
                 })
                 .catch(error=>{
                         alert(error);
                 });
         },[dId]);
         //FUNCTIONS
         function SumbitUserDelete(e){
                 e.preventDefault();
                 if(!dId){
                         return;
                 }
                 
                 var du={
                         "delUid":dId
                 }; 
                 axios.post(apihost+"/adminDashboard/manage-users/user-delete/delete-user",du,
                 {headers:{'Content-Type':'application/json'}})
                 .then(response=>{
                         if(response.data.flag===1){
                                 setMsg1('User Successfully Deleted.....');
                         }else if(response.data.flag===0){
                                 setMsg1('Something Went Wrong, Try Again.....');  
                         }else if(response.data.flag==="err"){
                                 setMag1(errorMsg);
                         }
                 })
                 .catch(error=>{
                         alert(error);
                 });
         }
         
         return(<>
                 <div className="row p-1">
                         <div className="col-sm-12">
                                 <main className="bg-transparent">
                                         <span className="small text-danger">{msg1}</span>
                                         <section className="p-2">
                                                 <span className="fs-6">Do You Want to Delete User <b>{delName}</b> With Username <b>{delUserName}</b> ?</span> 
                                                 <form method="post" onSubmit={SumbitUserDelete}>                                                         
                                                         <div className="form-group">
                                                                 <button type="submit" className="submit">DELETE USER</button>
                                                         </div>
                                                 </form>                                          
                                         </section>
                                 </main>
                         </div>
                 </div>                
         </>);
}