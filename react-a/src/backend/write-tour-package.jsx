import { apihost } from "./apihost";
import { useState } from "react";
import axios from "axios";

export default function WriteTourPackage(){
    const[mesSubmit,setMesSubmit]=useState('');
    const[tourPackageCategory,setTourPackageCategory]=useState('0');
    const[countryDisabled,setCountryDisabled]=useState(false);
    const[tourPackageCountry,setTourPackageCountry]=useState('0');
    const[tourPackageName,setTourPackageName]=useState('');
    const[tourPackageDuration,setTourPackageDuration]=useState('');
    const[tourPackageInclusions,setTourPackageInclusions]=useState('');
    const[tourPackageActivities,setTourPackageActivities]=useState('');
    const[tourPackageType,setTourPackageType]=useState('');
    const[tourPackagePriceBeforeDiscount,setTourPackagePriceBeforeDiscount]=useState('');
    const[tourPackageSellingPrice,setTourPackageSellingPrice]=useState('');
    const[tourPackageFeaturedImage,setTourPackageFeaturedImage]=useState('');
    const[tourPackageDescription,setTourPackageDescription]=useState('');
    const[tourPackageSeller,setTourPackageSeller]=useState('');
    const[tourPackageSellerDetails,setTourPackageSellerDetails]=useState('');

    function SubmitTourPackage(e){
       e.preventDefault();
          if(tourPackageCategory==='0'){
             setMesSubmit("Type Category.....");
             return;
          }
          if(tourPackageCountry==='0'){
             setMesSubmit("Type Country.....");
             return;
          }
          if(!tourPackageName){
             setMesSubmit("Type Package Name.....");
             return;
          }
          if(!tourPackageDuration){
             setMesSubmit("Type Duration.....");
             return;
          }
          if(!tourPackageSellingPrice){
             setMesSubmit("Type Selling Price.....");
             return;
          }
          if(!tourPackageFeaturedImage){
             setMesSubmit("Include Featured Image.....");             
             return;
          }
          if(!tourPackageDescription){
             setMesSubmit("Type Package Description.....");             
             return;
          }
          axios.post(apihost+"/adminDashboard/tour-packages/create",create)
          .then(response=>{
                setMesSubmit(response.data);          
           })
          .catch(error=>{
                alert(error);
           });
    }

    var create={
          "n_tourPackageCategory":tourPackageCategory,
          "n_tourPackageCountry":tourPackageCountry,
          "n_tourPackageName":tourPackageName,
          "n_tourPackageDuration":tourPackageDuration,
          "n_tourPackageInclusions":tourPackageInclusions,
          "n_tourPackageActivities":tourPackageActivities,
          "n_tourPackageType":tourPackageType,
          "n_tourPackagePriceBeforeDiscount":tourPackagePriceBeforeDiscount,
          "n_tourPackageSellingPrice":tourPackageSellingPrice,
          "n_tourPackageFeaturedImage":tourPackageFeaturedImage,
          "n_tourPackageDescription":tourPackageDescription,
          "n_tourPackageSeller":tourPackageSeller,
          "n_tourPackageSellerDetails":tourPackageSellerDetails
    }    
    return(<>
          <span className="text-danger small">{mesSubmit}</span>
          <form method="post" onSubmit={SubmitTourPackage}>
                <div className="form-group">
                      <select className="form-select" n_name="n_tourPackageCategory" value={tourPackageCategory} onChange={(e)=>{setTourPackageCategory(e.target.value); if(e.target.value==='Domestic'){setCountryDisabled(true);setTourPackageCountry('India');}else{setCountryDisabled(false);setTourPackageCountry('0');}}}>
                            <option value="0">Tour Package Category</option>
                            <option value="Domestic">Domestic</option>
                            <option value="International">International</option>                              
                      </select>
                </div>
                <div className="form-group">
                      <select className="form-select" n_name="n_tourPackageCountry" disabled={countryDisabled} value={tourPackageCountry} onChange={(e)=>{setTourPackageCountry(e.target.value);}}>
                            <option value="0">Country</option>
                            <option value="India">India</option>
                            <option value="Bhutan">Bhutan</option>                              
                      </select>
                </div>
                <div className="form-group">
                      <label>Tour Package Name</label>
                      <input type="text" className="form-control" name="n_tourPackageName" value={tourPackageName} onChange={(e)=>{setTourPackageName(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Duration</label>
                      <input type="text" className="form-control" name="n_tourPackageDuration" value={tourPackageDuration} onChange={(e)=>{setTourPackageDuration(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Inclusions</label>
                      <input type="text" className="form-control" name="n_tourPackageInclusions" value={tourPackageInclusions} onChange={(e)=>{setTourPackageInclusions(e.target.value)}} />
                </div>
                <div className="form-group">
                      <label>Activities</label>
                      <input type="text" className="form-control" name="n_tourPackageActivities" value={tourPackageActivities} onChange={(e)=>{setTourPackageActivities(e.target.value);}}/>
                </div>                
                <div className="form-group">
                      <label>Tour Type</label>
                      <input type="text" className="form-control" name="n_tourPackageType" value={tourPackageType} onChange={(e)=>{setTourPackageType(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Price Before Discount INR(Leave Blank if No Discount)</label>
                      <input type="text" className="form-control" name="n_tourPackagePriceBeforeDiscount" value={tourPackagePriceBeforeDiscount} onChange={(e)=>{setTourPackagePriceBeforeDiscount(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Selling Price (INR)</label>
                      <input type="text" className="form-control" name="n_tourPackageSellingPrice" value={tourPackageSellingPrice} onChange={(e)=>{setTourPackageSellingPrice(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Featured Image</label>
                      <input type="text" className="form-control" name="n_tourPackageFeaturedImage" value={tourPackageFeaturedImage} onChange={(e)=>{setTourPackageFeaturedImage(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Package Description</label>
                      <textarea className="form-control" name="n_tourPackageDescription" value={tourPackageDescription} onChange={(e)=>{setTourPackageDescription(e.target.value)}}/>
                </div>
                <div className="form-group">
                      <label>Seller</label>
                      <input type="text" className="form-control" name="n_tourPackageSeller" value={tourPackageSeller} onChange={(e)=>{setTourPackageSeller(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Seller Details</label>
                      <input type="text" className="form-control" name="n_tourPackageSellerDetails" value={tourPackageSellerDetails} onChange={(e)=>{setTourPackageSellerDetails(e.target.value);}}/>
                </div>
                <br/>
                <div className="form-group">
                      <button type="submit" className="submit">Submit Tour Package Details</button>
                </div>

          </form>     
   </>);
}