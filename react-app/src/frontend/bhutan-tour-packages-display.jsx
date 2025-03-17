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
                 setMsg("");  
              }             
         })
         .catch(error=>{
            alert(error);
         });
     },[]);
      
      var listPackages=showBhutanPackages.map(tbp=>                       
             <Fragment key={tbp._id}> 
                 <div className="row rounded shadow-sm p-0 m-0 border border-warning border-2">
                     <div className="col-sm-4 bg-info-subtle p-0 m-0">
                         <section>
                             <img src={tbp.tourPackageFeaturedImage} className="img-fluid w-100 h-100 rounded-left" alt="Bhutan Travel Packages"/>
                        </section>                        
                     </div>
                     <div className="col-sm-5 background-lightgoldenrodyellow p-0 m-0">
                         <section className="font font20 p-2">
                             <div className="table">
                                 <tbody>
                                     <tr>
                                         <td className="text-left bg-transparent border-0"><span className="fw-bold text-muted p-0">Country:</span></td>
                                         <td className="text-left bg-transparent border-0"><span className="p-0">{tbp.tourPackageCountry}</span></td>
                                     </tr>
                                     <tr>
                                         <td className="text-left bg-transparent border-0"><span className="fw-bold text-muted p-0">Package:</span></td>
                                         <td className="text-left bg-transparent border-0"><span className="p-0">{tbp.tourPackageName}</span></td>
                                     </tr>
                                     <tr>
                                         <td className="text-left bg-transparent border-0"><span className="fw-bold text-muted p-0">Duration:</span></td>
                                         <td className="text-left bg-transparent border-0"><span className="p-0">{tbp.tourPackageDuration}</span></td>
                                     </tr>
                                     <tr>
                                         <td className="text-left bg-transparent border-0"><span className="fw-bold text-muted p-0">Activities:</span></td>
                                         <td className="text-left bg-transparent border-0"><span className="p-1">{tbp.tourPackageActivities}</span></td>
                                     </tr>
                                     <tr>
                                         <td className="text-left bg-transparent border-0"><span className="fw-bold text-muted p-1">Category:</span></td>
                                         <td className="text-left bg-transparent border-0"><span className="p-1">{tbp.tourPackageType}</span></td>
                                     </tr>
                                 </tbody>
                             </div>
                         </section>
                     </div>
                     <div className="col-sm-3 background-palegoldenrod p-0 m-0">
                         <section className="font font20 text-center p-2">
                             <span className="fw-bold text-muted p-1">&nbsp;</span><span className="p-1">&nbsp;</span>
                             <br/> 
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
                                    
             </Fragment> 
                            
      );

     return(<>
         {listPackages}
     </>);
}