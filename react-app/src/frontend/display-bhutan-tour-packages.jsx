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
                 <div className="card-group shadow-sm">
                     <div className="card rounded-left bg-light">
                         <div className="card-body p-0 m-0">
                             <img src={tbp.tourPackageFeaturedImage} className="img-fluid w-100 h-100 rounded-left" alt="Bhutan Travel Packages"/>
                         </div>
                     </div>
                     <div className="card bg-light">
                         <div className="card-body p-0 m-0">
                             <section className="font font20 p-2">
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
                     </div>
                     <div className="card rounded-right bg-light">
                         <div className="card-body p-0 m-0">
                             <section className="font font20 text-center p-2">
                                 <span className="fw-bold text-muted p-1">&nbsp;</span><span className="p-1">&nbsp;</span>
                                 <br/>                             
                                 <span className="text-muted p-1">Starting Price</span>
                                 <br/>
                                 <span className="p-1 text-danger fw-bold">USD &nbsp;{tbp.tourPackageSellingPrice}/Person</span>
                                  <br/>                             
                                 <span className="fw-bold text-muted p-1"><a href={"/bhutan-tour-package-description/?packageId="+tbp._id} className="text-decoration-none link-info"><button type="button" class="btn btn-warning shadow-sm"><span className="font font22 fw-bold">Details&#129154;</span></button></a></span>
                                 <br/>
                             </section>
                         </div>
                     </div>
                 </div>     
             </Fragment> 
                            
      );

     return(<>
         <div className="row background-aliceblue p-1">
             <div className="col-sm-2"></div>
             <div className="col-sm-8">
                 <span className="small text-danger">{msg}</span>
                 <br/>                
                 {listPackages}
                 <br/>
             </div>
             <div className="col-sm-2"></div> 
         </div>
     </>);
}