import { apihost } from "../backend/apihost";
import axios from "axios";
import { useEffect } from "react";
export default function BhutanTourPackageDescription(){
     const params=new URLSearchParams(window.location.search);
     const tId=params.get("packageId")
     useEffect(()=>{
         axios.get(apihost+"/bhutan-tour-package-description?id="+tId)
         .then(response=>{
            alert(response.data)
         })
         .catch(error=>{
            alert(error)
         });
     },[tId]);
     
    return(<>Ji</>)
}