import { apihost } from "./apihost";
import { useEffect, useState } from "react";
import axios from "axios";


//Delete Tour Packages
export default function DeleteTourPackages({delId}){
     const id=delId;
     const[deleteMsg,setDeleteMsg]=useState('');
     const[deleteTourPackageName,setDeleteTourPackageName]=useState('');
     useEffect(()=>{
         axios.get(apihost+"/adminDashboard/tour-packages/delete-data?did="+id)
         .then(response=>{
             if(response.data.flag==="1"){
                 setDeleteTourPackageName(response.data.result);                 
             }else if(response.data.flag==="0"){
                 setDeleteMsg("Something Went Wrong, Please Try Again.....");                 
             }
             
            
         })
         .catch(error=>{
             alert(error);
         });
     },[delId]);
     //Submit Delete Form
         function RemoveTourPackage(e){
             e.preventDefault();
             axios.post(apihost+"/adminDashboard/tour-packages/delete?n_did="+id)
             .then(response=>{
                 if(response.data.flag==="1"){
                     setDeleteMsg("Tour Package Deleted Successfully.....");
                 }else if(response.data.flag==="0"){
                    setDeleteMsg("Something Went Wrong, Please Try Again.....");                     
                 }                
             })
             .catch(error=>{
                alert(error)
             });
    
     }
     return(<>
             <span className="small text-danger">{deleteMsg}</span>
             <br/>
             <span className="text-dark fw-bold">Do You Want to Delete the Tour Package {deleteTourPackageName} ? </span>
             <br/>
             <form method="post" onSubmit={RemoveTourPackage}>                 
                <div className="form-group">
                      <button type="submit" className="submit">Delete Tour Package</button>
                </div>

             </form>
     </>);
}
     