import { apihost } from "./apihost";
import { useEffect, useState } from "react";
import axios from "axios";

//Edit Tour Packages
export default function EditTourPackages({eId}){ 
     
     const id=eId;
     const[editMsg,setEditMsg]=useState('');
     const[editTourPackageCategory,setEditTourPackageCategory]=useState('');
     const[countryDisabled,setCountryDisabled]=useState(false);
     const[editTourPackageCountry,setEditTourPackageCountry]=useState('');
     const[editTourPackageName,setEditTourPackageName]=useState('');
     const[editTourPackageDuration,setEditTourPackageDuration]=useState('');
     const[editTourPackageInclusions,setEditTourPackageInclusions]=useState('');
     const[editTourPackageActivities,setEditTourPackageActivities]=useState('');
     const[editTourPackageType,setEditTourPackageType]=useState('');
     const[editTourPackagePriceBeforeDiscount,setEditTourPackagePriceBeforeDiscount]=useState('');
     const[editTourPackageSellingPrice,setEditTourPackageSellingPrice]=useState('');
     const[editTourPackageFeaturedImage,setEditTourPackageFeaturedImage]=useState('');
     const[editTourPackageDescription,setEditTourPackageDescription]=useState('');
     const[editTourPackageSeller,setEditTourPackageSeller]=useState('');
     const[editTourPackageSellerDetails,setEditTourPackageSellerDetails]=useState('');
   
        useEffect(()=>{ 
             if(!id){
                setEditMsg("Data Not Received.....");
            }else{
                 axios.get(apihost+"/adminDashboard/tour-packages/edit-data?eid="+id)
                 .then(response=>{
                    setEditTourPackageCategory(response.data.result.tourPackageCategory);
                    setEditTourPackageCountry(response.data.result.tourPackageCountry);
                    setEditTourPackageName(response.data.result.tourPackageName);
                    setEditTourPackageDuration(response.data.result.tourPackageDuration);
                    setEditTourPackageInclusions(response.data.result.tourPackageInclusions);
                    setEditTourPackageActivities(response.data.result.tourPackageActivities);
                    setEditTourPackageType(response.data.result.tourPackageType);
                    setEditTourPackagePriceBeforeDiscount(response.data.result.tourPackagePriceBeforeDiscount);
                    setEditTourPackageSellingPrice(response.data.result.tourPackageSellingPrice);
                    setEditTourPackageFeaturedImage(response.data.result.tourPackageFeaturedImage);
                    setEditTourPackageDescription(response.data.result.tourPackageDescription);
                    setEditTourPackageSeller(response.data.result.tourPackageSeller);
                    setEditTourPackageSellerDetails(response.data.result.tourPackageSellerDetails);
                    
                    
                    
            })
                 .catch(error=>{
                   alert(error);
            });
        }
        },[id]);
    
    //Update Tour Package
       function UpdateTourPackage(e){
             e.preventDefault();
             var update={
                   "n_eId":id,
                   "n_editTourPackageCategory":editTourPackageCategory,
                   "n_editTourPackageCountry":editTourPackageCountry,
                   "n_editTourPackageName":editTourPackageName,
                   "n_editTourPackageDuration":editTourPackageDuration,
                   "n_editTourPackageInclusions":editTourPackageInclusions,
                   "n_editTourPackageActivities":editTourPackageActivities,
                   "n_editTourPackageType":editTourPackageType,
                   "n_editTourPackagePriceBeforeDiscount":editTourPackagePriceBeforeDiscount,
                   "n_editTourPackageSellingPrice":editTourPackageSellingPrice,
                   "n_editTourPackageFeaturedImage":editTourPackageFeaturedImage,
                   "n_editTourPackageDescription":editTourPackageDescription,
                   "n_editTourPackageSeller":editTourPackageSeller,
                   "n_editTourPackageSellerDetails":editTourPackageSellerDetails

            }
             axios.post(apihost+"/adminDashboard/tour-packages/update",update)
             .then(response=>{
                   if(response.data.flag==="1"){
                        setEditMsg("Data Updated Successfully.....");
                   }else if(response.data.flag==="-1"){
                        setEditMsg("Something Went Wrong,Please Try Again.....");
                   }
             })
             .catch(error=>{
                  alert(error);
             });
      }
     
    return(<>
        <div className="row">
            <div className="col-sm-12">
             {editMsg} {id}
             <form method="post" onSubmit={UpdateTourPackage}>
                <div className="form-group">
                      <select className="form-select" n_name="n_editTourPackageCategory" value={editTourPackageCategory} onChange={(e)=>{setEditTourPackageCategory(e.target.value); if(e.target.value==='Domestic'){setCountryDisabled(true);setEditTourPackageCountry('India');}else{setCountryDisabled(false);setEditTourPackageCountry('0');}}}>
                            <option value="0">Tour Package Category</option>
                            <option value="Domestic">Domestic</option>
                            <option value="International">International</option>                              
                      </select>
                </div>
                <div className="form-group">
                      <select className="form-select" n_name="n_editTourPackageCountry" disabled={countryDisabled} value={editTourPackageCountry} onChange={(e)=>{setEditTourPackageCountry(e.target.value);}}>
                            <option value="0">Country</option>
                            <option value="India">India</option>
                            <option value="Bhutan">Bhutan</option>                              
                      </select>
                </div>
                <div className="form-group">
                      <label>Tour Package Name</label>
                      <input type="text" className="form-control" name="n_editTourPackageName" value={editTourPackageName} onChange={(e)=>{setEditTourPackageName(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Duration</label>
                      <input type="text" className="form-control" name="n_editTourPackageDuration" value={editTourPackageDuration} onChange={(e)=>{setEditTourPackageDuration(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Inclusions</label>
                      <input type="text" className="form-control" name="n_editTourPackageInclusions" value={editTourPackageInclusions} onChange={(e)=>{setEditTourPackageInclusions(e.target.value)}} />
                </div>
                <div className="form-group">
                      <label>Activities</label>
                      <input type="text" className="form-control" name="n_editTourPackageActivities" value={editTourPackageActivities} onChange={(e)=>{setEditTourPackageActivities(e.target.value);}}/>
                </div>                
                <div className="form-group">
                      <label>Tour Type</label>
                      <input type="text" className="form-control" name="n_editTourPackageType" value={editTourPackageType} onChange={(e)=>{setEditTourPackageType(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Price Before Discount INR(Leave Blank if No Discount)</label>
                      <input type="text" className="form-control" name="n_editTourPackagePriceBeforeDiscount" value={editTourPackagePriceBeforeDiscount} onChange={(e)=>{setEditTourPackagePriceBeforeDiscount(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Selling Price (INR)</label>
                      <input type="text" className="form-control" name="n_editTourPackageSellingPrice" value={editTourPackageSellingPrice} onChange={(e)=>{setEditTourPackageSellingPrice(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Featured Image</label>
                      <input type="text" className="form-control" name="n_editTourPackageFeaturedImage" value={editTourPackageFeaturedImage} onChange={(e)=>{setEditTourPackageFeaturedImage(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Package Description</label>
                      <textarea className="form-control" name="n_editTourPackageDescription" value={editTourPackageDescription} onChange={(e)=>{setEditTourPackageDescription(e.target.value)}}/>
                </div>
                <div className="form-group">
                      <label>Seller</label>
                      <input type="text" className="form-control" name="n_editTourPackageSeller" value={editTourPackageSeller} onChange={(e)=>{setEditTourPackageSeller(e.target.value);}}/>
                </div>
                <div className="form-group">
                      <label>Seller Details</label>
                      <input type="text" className="form-control" name="n_editTourPackageSellerDetails" value={editTourPackageSellerDetails} onChange={(e)=>{setEditTourPackageSellerDetails(e.target.value);}}/>
                </div>
                <br/>
                <div className="form-group">
                      <button type="submit" className="submit">Update Tour Package Details</button>
                </div>

          </form>     
            </div>
        </div>
    </>);
}