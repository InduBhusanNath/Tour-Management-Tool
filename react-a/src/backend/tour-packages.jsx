import { apihost } from "./apihost";
import { useEffect, useState } from "react";
import WriteTourPackage from "./write-tour-package";
import EditTourPackages from "./edit-tour-packages";
import DeleteTourPackages from "./delete-tour-packages";
import axios from "axios";
export default function TourPackages(){
     return(<>
         <>
             <div className="container-fluid">
                 <ShowWriteTourPackage/>
                 <DisplayTourPackages/>                  
             </div>
         </>      
     </>);
}
//Show Write Tour Package
function ShowWriteTourPackage(){
     const[displayWrite,setDisplayWrite]=useState('hidden');

     //Show Form
     function ShowWriteForm(){
         setDisplayWrite('shown');    
         return;     
     }
     //Hide Form
     function HideWriteForm(){
        setDisplayWrite('hidden');    
        return;     
    }
     return(<>
         <div className="row">
         <div className="col-sm-12">
             <button className="button" onClick={ShowWriteForm}>Write Tour Package</button>
             <section className={displayWrite}> 
                 <section className="popup">
                     <button className="hide_btn" onClick={HideWriteForm}>&#10060;</button>
                     <WriteTourPackage/>
                     
                 </section>
             </section>
         </div>
         </div>
     
     </>);     
}

//Display Tour Packages
function DisplayTourPackages(){
     const[readmsg,setreadmsg]=useState('');
     const[result,setResult]=useState([]);
     const[totalPages,setTotalPages]=useState('');
     const[eId,setEId]=useState('');
     const[displayEdit,setDisplayEdit]=useState('hidden');  
     const[dId,setDId]=useState('');
     const[displayDelete,setDisplayDelete]=useState('hidden');     
     
     
     let params = new URLSearchParams(window.document.location.search);
     let pg = params.get("page");
     if(!pg){
         pg="1";
     }else if(pg<0){
         pg="1";
     }
     const nextUrl="?page="+(parseInt(pg)+1);         
     const prevUrl="?page="+(parseInt(pg)-1);
     const lastUrl="?page="+totalPages;
     const firstUrl="?page="+1;
     
     useEffect(()=>{
         axios.get(apihost+"/adminDashboard/tour-packages/read/?page="+pg)
        .then(response=>{
             if(response.data.flag==="0"){
                 setreadmsg("No Tour Package Found in Database.....");
                 return;
             }else if(response.data.flag==="-1"){
                 setreadmsg("Something Went Wrong, Please Try Again.....");
                 return;             
            }else if(response.data.flag==="1"){
                 setreadmsg(response.data.totalTourPackages+" Packages Found.....");
                 setTotalPages(response.data.totalPages);
                 setResult(response.data.result||[]);                 
                 return; 
            }
        })
        .catch(error=>{
             alert(error);
        });
     },[pg]);
     
     
     
     var showData=result.map(sd=>{
         return <tr key={sd._id}>
             <td>{sd.tourPackageCategory}</td>
             <td>{sd.tourPackageCountry}</td>
             <td>{sd.tourPackageName}</td>
             <td>{sd.tourPackageDuration}</td>
             <td>{sd.tourPackageInclusions}</td>
             <td>{sd.tourPackageActivities}</td>
             <td>{sd.tourPackageType}</td>
             <td>{sd.tourPackagePriceBeforeDiscount}</td>
             <td>{sd.tourPackageSellingPrice}</td>
             <td>{sd.tourPackageFeaturedImage}</td>
             <td>{sd.tourPackageDescription}</td>
             <td>{sd.tourPackageSeller}</td>
             <td>{sd.tourPackageSellerDetails}</td>
             <td><button className="button" onClick={()=>{setEId(sd._id);setDisplayEdit('shown');}} >&#128393;</button></td>
             <td><button className="button" onClick={()=>{setDId(sd._id);setDisplayDelete('shown');}}>&#128465;</button></td>
         </tr>

     });
     
     
     
     return(<>
         <div className="row">             
             <div className="col-sm-12">
                 <span className="text-danger small">{readmsg}</span>
                 <table className="table table-hover">
                     <thead>
                         <tr>
                             <th scope="col" className="text-center">CATEGORY</th>
                             <th scope="col" className="text-center">COUNTRY</th> 
                             <th scope="col" className="text-center">PACKAGE NAME</th> 
                             <th scope="col" className="text-center">DURATION</th>
                             <th scope="col" className="text-center">INCLUSIONS</th> 
                             <th scope="col" className="text-center">ACTIVITIES</th>
                             <th scope="col" className="text-center">TYPE</th>
                             <th scope="col" className="text-center">PRICE BEFORE DISCOUNT(INR)</th>
                             <th scope="col" className="text-center">SELLING PRICE(INR)</th> 
                             <th scope="col" className="text-center">FEATURED IMAGE LINK</th>
                             <th scope="col" className="text-center">DESCRIPTION</th>
                             <th scope="col" className="text-center">SELLER</th>
                             <th scope="col" className="text-center">SELLER DETAILS</th>  
                             <th scope="col" className="text-center">EDIT</th>  
                             <th scope="col" className="text-center">DELETE</th>                                
                         </tr>
                         </thead>                       

                         <tbody> 
                             {showData}                              
                         </tbody>
                     </table>
                     <span>   
                          <a href={firstUrl}>First Page</a> &nbsp;&nbsp; <a href={prevUrl}>&laquo;Prev</a> &nbsp;&nbsp;<a href={nextUrl}>Next&raquo;</a> &nbsp;&nbsp;<a href={lastUrl}>Last Page</a> 
                     </span>  
             </div>
             {/* Edit Component */}
             <section className={displayEdit}>
                 <section className="popup">
                     <button className="hide_btn" onClick={()=>{setDisplayEdit('hidden');}}>&#10060;</button>                 
                     <EditTourPackages eId={eId}/>
                 </section>                 
             </section>
             <section className={displayDelete}>
                 <section className="popup">
                     <button className="hide_btn" onClick={()=>{setDisplayDelete('hidden');}}>&#10060;</button> 
                     <DeleteTourPackages delId={dId}/>
                 </section>
             </section>
         </div>
     </>);
}

 

