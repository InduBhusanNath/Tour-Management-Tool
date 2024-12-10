import { apihost } from "../backend/apihost";
import { useState, useEffect, Fragment} from "react";
import axios from "axios";
//Main export
export default function DisplayBhutanTourPackages(){
     const[msg, setMsg]=useState('');
     const[showBhutanPackages,setShowBhutanPackages]=useState([]);
     const[tourPackage]=useState('Bhutan');

     useEffect(()=>{
         axios.get(apihost+"/bhutan-tour-packages?filter="+tourPackage)
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
                 <div className="row background-palegoldenrod rounded shadow-sm p-2 m-2">
                     <div className="col p-1 m-0 w-25">
                        <img src={tbp.tourPackageFeaturedImage} className="img-fluid w-100 h-100 rounded shadow-sm" alt="Bhutan Travel Packages"/>
                     </div>
                     <div className="col p-1 m-0 w-50">
                         <section className="font font20">
                             <span className="fw-bold text-muted p-1">Country:</span><span className="p-1">{tbp.tourPackageCountry}</span>
                             <br/>
                             <span className="fw-bold text-muted p-1">Package:</span><span className="p-1">{tbp.tourPackageName}</span>
                             <br/>
                             <span className="fw-bold text-muted p-1">Duration:</span><span className="p-1">{tbp.tourPackageDuration}</span>
                             <br/>
                             <span className="fw-bold text-muted p-1">Activities:</span><span className="p-1">{tbp.tourPackageActivities}</span>
                             <br/>
                             <span className="fw-bold text-muted p-1">Category:</span><span className="p-1">{tbp.tourPackageType}</span>

                         </section>                                          
                     </div>
                     <div className="col p-1 m-0 w-25">
                         <section className="font font20 text-center">
                             <span className="fw-bold text-muted p-1">&nbsp;</span><span className="p-1">&nbsp;</span>
                             <br/>                             
                             <span className="text-muted p-1">Starting Price</span>
                             <br/>
                             <span className="p-1 text-danger fw-bold">USD &nbsp;{tbp.tourPackageSellingPrice}/Person</span>
                             <br/>                             
                             <span className="fw-bold text-muted p-1"><a href={"/bhutan-tour-package-description/?packageId="+tbp._id} className="text-decoration-none link-info"><button type="button" class="btn btn-warning shadow-sm">Details&#11166;</button></a></span>
                             <br/>
                         </section>                                                  
                     </div>
                 </div>
             </Fragment> 
                            
      );

     return(<>
         <div className="row">
             <div className="col-sm-2"></div>
             <div className="col-sm-8">
                  <span className="small text-danger">{msg}</span>
                 <br/>                 
                 {listPackages}
             </div>
             <div className="col-sm-2"></div> 
         </div>
     </>);
}