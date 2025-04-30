import { apihost } from "./apihost";
import { useEffect, useState } from "react";
import axios from "axios";


//Main Export Function
export default function UpdateUserRight(props){
     const id=props.id;
     const [msg1,setMsg1]=useState('');
     const [usrNm,setUsrNm]=useState('');
     const [usrStatus,setUsrStatus]=useState('');
     const [changeUserRight,setChangeUserRight]=useState('');

     useEffect(()=>{
        axios.get(apihost+"/adminDashboard/manage-users/update-user-right/get-user-details/?id="+id)
        .then(response=>{
             setUsrNm('');             
             setUsrNm(response.data.usnm);             
             setUsrStatus('');             
             setUsrStatus(response.data.usrSts);
        })
        .catch(error=>{
            alert(error)
        });
     },[id]);
     
     //FUNCTIONS
     function UpdateUserRole(e){
             e.preventDefault();
             //Validations
             if(!changeUserRight){
                 setMsg1("Select the User Role.....");
                 return;
             }

             var cur={
                 "id":id,
                 "n_changeUserRight":changeUserRight
            }

             axios.post(apihost+"/adminDashboard/manage-users/update-user-right/change-user-right", cur,
             {headers:{'Content-Type':'application/json'}})
             .then(response=>{
                setMsg1(" ");
                setMsg1(response.data);
             })
             .catch(error=>{
                     alert(error);
             });

             
            
     }
      
     return(<>
             <div className="row p-3">
                 <div className="col-sm-12">
                     <span className="small text-danger">{msg1}</span>
                     <form method="post" onSubmit={UpdateUserRole}>
                             <label>Select User Role[{usrNm}]</label>
                             <select className="form-select form-select-sm" value={usrStatus} name="n_changeUserRight" onChange={(e)=>{setChangeUserRight(e.target.value); setMsg1(" ")}}>                                       
                                 <option value="Admin">Admin</option>
                                 <option value="Non-Admin">Non-Admin</option>
                             </select>
                         <button type="submit" className="submit">CHANGE RIGHT</button>
                     </form>                    
                 </div>
             </div>
     </>);
}



/*

     const [msg1,setMsg]=useState('');
     const [userRightFormVisibility,setUserRightFormVisibility]=useState('shown');

     //FUNCTIONS
     //Hide Form
     function HideUpdateUserRoleForm(){
             setUserRightFormVisibility('hidden');
     }
     
     //Change User Right
     function UpdateUserRole(e){
        e.preventDefault();
        
       //Validate
        if(!changeUserRight){
            setMsg1("Select User Right.....");
            return;
        }
        var cur={
            "id":id,
            "n_changeUserRight":changeUserRight
        }
        axios.post(apihost+"/adminDashboard/manage-users/change-user-right", cur,
           {headers:{'Content-Type':'application/json'}})
        .then(response=>{
                setMsg1(" ");
                setMsg1(response.data);
        })
        .catch(error=>{
            alert(error);
        });
        setId('')
        setChangeUserRight('')
        return;             
    }  
     return(<>
             <div className="row p-3">
                 <div className="col-sm-12">
                      
                      
                      <section className="popup">                                          
                          <button className="hide_btn" onClick={HideUpdateUserRoleForm}>&#10060;</button>
                          <span className="small text-danger">{msg1}</span> 
                          <form method="post" onSubmit={UpdateUserRole}>
                                  <select className="form-select form-select-sm" name="n_changeUserRight" defaultValue="0" onChange={(e)=>{setChangeUserRight(e.target.value);}}>                                         
                                          <option value="0">Select User Right</option>
                                          <option value="Admin">Admin</option>
                                          <option value="Non-Admin">Non-Admin</option>
                                   </select>
                                   <button type="submit" className="submit">CHANGE RIGHT</button>
                           </form>                     
                      </section> 
                  </main> 
          </div>
      </div>
</>);

axios.get(apihost+"/adminDashboard/manage-users/get-username?id="+id)
                .then(response=>{   
                     setUsrNm(''); 
                     if(!usrNm){
                         setUsrNm(response.data.usrRole); 
                     }
                     if(usrNm===response.data.usrRole){
                         setUserRightFormVisibility('shown');
                         setMsg2("Change Right for:"+" "+usrNm)                          
                     }                                                               
                 })
                .catch(error=>{
                     alert(error);
                });

*/