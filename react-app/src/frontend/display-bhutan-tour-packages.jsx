import { apihost } from "../backend/apihost";
import { useState, useEffect, Fragment} from "react";
import axios from "axios";
//Main export
export default function DisplayBhutanTourPackages(){
     const[msg, setMsg]=useState('');
     const[showBhutanPackages,setShowBhutanPackages]=useState([]);

     useEffect(()=>{
         axios.get(apihost+"/bhutan-tour-packages")
         .then(response=>{
              if(response.data.flag==="0"){
                 setMsg("No Tour Packages Found.....");                 
              }else if(response.data.flag==="1"){
                 setShowBhutanPackages(response.data.result);
              }             
         })
         .catch(error=>{
            alert(error);
         });
     },[]);
      
      var listPackages=showBhutanPackages.map(tbp=>            
             <Fragment key={tbp._id}> 
                 <div className="card">
                     <div className="row">
                         <div className="col-sm-3">
                         {tbp.tourPackageCountry}
                         </div>
                         <div className="col-sm-3">
                         {tbp.tourPackageCountry}
                         </div>
                     </div>
                     
                 </div>
                 <br/>
             </Fragment>  
                 

                            
      );

     return(<>
         <div className="row">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                  <span className="small text-danger">{msg}</span>
                 <br/>                 
                 {listPackages}
             </div>
             <div className="col-sm-1"></div> 
         </div>
     </>);
}