import { apihost } from "./apihost";
import axios from "axios";


//Main export function
export default function SessionCheck(){
      var param=new URLSearchParams(window.document.location.search);
      var usr=param.get('user');
      var sendUsr={
           "user":usr
      }; 
      var dashboardHost=window.location.host;
      var dashboardPath=window.location.pathname;

      axios.post(apihost+"/adminDashboard",sendUsr)
      .then(response=>{
           if(response.data.flag==="1"){
                window.location.href="/adminDashboard"
           }else if(response.data.flag==="1+"){
                window.location.href="/adminLogin"
           }else if(response.data.flag==="err"){
                window.location.href="/adminLogin"              
           }

      })
      .catch(error=>{
           alert(error);
      });
      
      

      
      return(<>
         {usr}
      </>);
}