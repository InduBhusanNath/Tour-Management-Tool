import { apihost } from "../backend/apihost";
import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import parse from 'html-react-parser';
import ContactUsMessage from "./contactus_message" 

//Main Export Function
export default function BhutanTourPackageDescription(){
     
     
    return(<>
       <div className="container-fluid background-aliceblue">
          <TopBar/>
          <PackageData/>         
       </div>    
    </>)
}
//Top Bar
function TopBar(){
    return(<>
       <div className="row">
          <div className="col-sm-4">
             <Link to="/bhutan-tour-packages" className="text-decoration-none link-dark font24">&#128281;</Link>
            
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4"></div>
       </div>    
    </>);
}
//Extract Data
function PackageData(){
    const [msg,setMsg]=useState('');    
    const[tourPackageCategory,setTourPackageCategory]=useState('');
    const[tourPackageCountry,setTourPackageCountry]=useState('');
    const[tourPackageName,setTourPackageName]=useState('');
    const[tourPackageDuration,setTourPackageDuration]=useState('');
    const[tourPackageInclusions,setTourPackageInclusions]=useState('');
    const[tourPackageActivities,setTourPackageActivities]=useState('');
    const[tourPackageType,setTourPackageType]=useState('');    
    const[tourPackageSellingPrice,setTourPackageSellingPrice]=useState('');
    const[tourPackageDescription,setTourPackageDescription]=useState('');
    
    const params=new URLSearchParams(window.location.search);
    const tId=params.get("packageId")
    useEffect(()=>{
       axios.get(apihost+"/bhutan-tour-package-description?id="+tId)
       .then(response=>{
          if(response.data.flag==="0"){
             setMsg("Something Went Wrong, Please Try Again.....");
             return;
          }
          setTourPackageCategory(response.data.tourPackageCategory);
          setTourPackageCountry(response.data.tourPackageCountry);
          setTourPackageName(response.data.tourPackageName);
          setTourPackageDuration(response.data.tourPackageDuration);
          setTourPackageInclusions(response.data.tourPackageInclusions);
          setTourPackageActivities(response.data.tourPackageActivities);
          setTourPackageType(response.data.tourPackageType);  
          setTourPackageSellingPrice(response.data.tourPackageSellingPrice);
          setTourPackageDescription(response.data.tourPackageDescription);                    
       })
       .catch(error=>{
          alert(error)
       });
   },[tId]);
   
    
    
    return(<>
       <div className="row background-lemonchiffon p-3">
          <div className="col-sm-1"></div>
          <div className="col-sm-8">
             <span className="text-danger small">{msg}</span>
             <br/>
             <h1 className="text-center">{tourPackageName}</h1>
             {parse(tourPackageDescription)};
              
          </div>
          <div className="col-sm-3">
             <section className="border border-warning-subtle border-1 rounded-top text-center shadow-sm">
                <span className="font font24 fw-bold text-danger">Interested?</span>
                <br/>
                <span className="font font18 text-success">Drop Us a Message</span>                
             </section>
             <section className="border border-warning-subtle border-1 rounded-bottom shadow-sm">
                   <ContactUsMessage />
                   <br/>
                   <section className="text-center">
                      <span className="font font18 text-success fw-bold">We Will Get Back to You!</span>
                   </section>
             </section>
            
          </div>
       </div>   
   </>);

}