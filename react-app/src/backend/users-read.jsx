import { apihost } from "./apihost";
import { useState,useEffect} from "react";
import axios from "axios";
import UpdateUserRight from "./update-user-right";
import UserUpdateProfile from "./user-profile-update";
import UserDelete from "./user-delete";


//Main Export Function
export default function ReadUsers(){
         const [msg1,setMsg1]=useState('');         
         const [users,setUsers]=useState([]);
         const [id,setId]=useState('');
         const [userRightFormVisibility,setUserRightFormVisibility]=useState('hidden');
         const [userProfileUpdateFormVisibility,setUserProfileUpdateFormVisibility]=useState('hidden');
         const [userDeleteFormVisibility,setUserDeleteFormVisibility]=useState('hidden');
         const [lastPage,setLastPage]=useState('');

         const urlprms=new URLSearchParams(window.location.search);
         const pageNo=urlprms.get("page");     
     
              //Setting Page Numbers for Pagination
         var pg;     
                 if(!pageNo){
                         pg=1;                                  
                 }else{
                         pg=pageNo;                       
              }
         var firstPage="/adminDashboard/manage-users/?page=1";
         var endPage="/adminDashboard/manage-users/?page="+lastPage;
         var currentPage=pg+" "+"of"+" "+lastPage;
         var nextPage="/adminDashboard/manage-users/?page="+((parseInt(pg)+1));
         var previousPage="/adminDashboard/manage-users/?page="+((parseInt(pg)-1));
          
         var first=<a href={firstPage}>First</a>;
         var prev=<a href={previousPage}>Previous</a>;
         var next=<a href={nextPage}>Next</a>;
         var last=<a href={endPage}>Last</a>;
         

         //Retieve Users
         useEffect(()=>{
                 axios.get(apihost+"/adminDashboard/manage-users/users-read?page="+(parseInt(pg)))
                 .then(response=>{
                         if(Array.isArray(response.data.userArray)){
                                 setUsers(response.data.userArray);
                         }else {
                                 setUsers([]);
                         }
                         setLastPage(response.data.lstPg);                         
                 })
                 .catch(error=>{
                         alert(error)
                 });
         },[pg]);
         
         //FUNCTIONS
         //Show User Role Changing Form
         function ShowUpdateUserRightForm(e){                                                   
                 var clickedId1=e.target.name;
                 setId(clickedId1);
                 if(id===clickedId){
                     setUserRightFormVisibility('shown');
                 }
         }
         //Hide User Role Changing Form
         function HideUpdateUserRightForm(){
                 if(userRightFormVisibility==='shown'){
                         setUserRightFormVisibility('hidden');
                         setId('');
                 }                 
         }
         //Show User Profile Update Form
         function ShowUserProfileUpdateForm(e){
                  var clickedId2=e.target.name;
                         setId(clickedId2);
                         if(id===clickedId2){
                                 setUserProfileUpdateFormVisibility('shown');
                         }                                          
         }

         //Hide User Profile Update Form
         function HideUserProfileUpdateForm(){
                 setUserProfileUpdateFormVisibility('hidden');
                 setId('');
         }

         //Show Delete Users Form
         function ShowUserDeleteForm(e){
                 var clickedId3=e.target.name;
                 setId(clickedId3); 
                 if(id===clickedId3){
                         setUserDeleteFormVisibility('shown');
               }                
         }

         //Hide User Delete Form
         function HideUserDeleteForm(){
                 setUserDeleteFormVisibility('hidden')
         }

         
 
         

         //List Users
         const listUsers=users.map(us=>{
             return(
                 <tr key={us._id}>  
                     <td className="text-center bg-transparent">{us.adminStatus}</td>
                     <td className="text-center bg-transparent">{us.entryDate}</td>
                     <td className="text-center bg-transparent">{us.name}</td>
                     <td className="text-center bg-transparent">{us.username}</td>
                     <td className="text-center bg-transparent">{us.designation}</td>
                     <td className="text-center bg-transparent">{us.address}</td>
                     <td className="text-center bg-transparent"><a href="javascript:void(0);" name={us._id} className="text-decoration-none link-danger" onClick={ShowUpdateUserRightForm}>&#x271C;</a></td>
                     <td className="text-center bg-transparent"><a href="javascript:void(0);" name={us._id} className="text-decoration-none link-danger" onClick={ShowUserProfileUpdateForm}>&#128393;</a></td>
                     <td className="text-center bg-transparent"><a href="javascript:void(0);" name={us._id} className="text-decoration-none link-danger" onClick={ShowUserDeleteForm}>&#10060;</a></td>
                 </tr>
             );
         });
         
     return(<>
             <div className="row p-3">
                 
                 <div className="col-sm-12">
                         <span className="small text-danger">{msg1}</span>
                         <table className="table table-hover">
                             <thead>
                                     <tr>                                         
                                         <th scope="col" className="text-center bg-warning">ROLE</th>
                                         <th scope="col" className="text-center bg-warning">DATE</th>
                                         <th scope="col" className="text-center bg-warning">NAME</th>
                                         <th scope="col" className="text-center bg-warning">USERNAME</th>                         
                                         <th scope="col" className="text-center bg-warning">DESIGNATION</th>
                                         <th scope="col" className="text-center bg-warning">ADDRESS</th>
                                         <th scope="col" className="text-center bg-warning">RIGHT</th>
                                         <th scope="col" className="text-center bg-warning">UPDATE</th>
                                         <th scope="col" className="text-center bg-warning">DELETE</th>
                                     </tr>
                             </thead>
                             <tbody>
                                     {listUsers}
                             </tbody>
                         </table>
                         {/*Pagination */}
                         <main className="text-center fs-6">{first}&nbsp;&nbsp;{prev}&nbsp;&nbsp;{currentPage}&nbsp;&nbsp;{next}&nbsp;&nbsp;{last}</main>   
                         {/*User Right Changing Form*/}
                         <main className={userRightFormVisibility}>
                                 <section className="popup">
                                         <button className="hide_btn" onClick={HideUpdateUserRightForm}>&#10060;</button>
                                         <UpdateUserRight id={id}/>
                                 </section>
                         </main>
                         {/*User Profile Update Form*/}
                         <main className={userProfileUpdateFormVisibility}>
                                 <section className="popup">
                                         <button className="hide_btn" onClick={HideUserProfileUpdateForm}>&#10060;</button>
                                         <UserUpdateProfile id={id}/>
                                 </section>
                         </main>
                         {/*Delete User Form*/} 
                         <main className={userDeleteFormVisibility}>
                                 <section className="popup">
                                         <button className="hide_btn" onClick={HideUserDeleteForm}>&#10060;</button>
                                         <UserDelete id={id}/>                                
                                 </section>
                         </main> 
                 </div>                             
             </div>                
     </>);
}
