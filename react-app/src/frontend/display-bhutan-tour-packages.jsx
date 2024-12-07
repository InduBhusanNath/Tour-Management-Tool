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
                 <div className="row">
                     <div className="col">
                        <img src={tbp.tourPackageFeaturedImage} className="img-fluid w-100" alt="Bhutan Travel Packages"/>
                     </div>
                     <div className="col">
                         <div className="table">
                             <tbody>
                                 <tr>
                                     <td className="font font22 fw-bold">Country</td>
                                     <td className="font font22">{tbp.tourPackageCountry}</td>
                                 </tr>
                                 <tr>
                                     <td className="font font22 fw-bold">Package</td>
                                     <td className="font font22">{tbp.tourPackageName}</td>
                                 </tr>
                                 <tr>
                                     <td className="font font22 fw-bold">Duration</td>
                                     <td className="font font22">{tbp.tourPackageDuration}</td>
                                 </tr>
                                 <tr>
                                     <td className="font font22 fw-bold">Inclusions</td>
                                     <td className="font font22">{tbp.tourPackageInclusions}</td>
                                 </tr>
                                 <tr>
                                     <td className="font font22 fw-bold">Activities</td>
                                     <td className="font font22">{tbp.tourPackageActivities}</td>
                                 </tr>
                                 <tr>
                                     <td className="font font22 fw-bold">Category</td>
                                     <td className="font font22">{tbp.tourPackageType}</td>
                                 </tr>
                             </tbody>
                         </div>                         
                     </div>
                     <div className="col">
                         <div className="table">
                             <tbody>
                                <tr>
                                     <td>&nbsp;</td>
                                     <td>&nbsp;</td>
                                </tr>
                                <tr>
                                     <td>&nbsp;</td>
                                     <td>&nbsp;</td>
                                </tr>
                                <tr>
                                     <td className="font font22 fw-bold">Price</td>
                                     <td className="font font22">{tbp.tourPackageSellingPrice}</td>
                                </tr>
                                <tr>
                                     <td className="font font22"><a href={"/bhutan-tour-package-description/?packageId="+tbp._id} className="text-decoration-none link-dark">Details</a></td>
                                </tr>
                            </tbody>
                         </div>                         
                     </div>
                 </div>
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