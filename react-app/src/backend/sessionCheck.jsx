import { apihost } from "./apihost";
import { useState } from "react";
import axios from "axios";

import { useEffect } from "react";


//Main export function
export default function SessionCheck(){
      const[sesId]=useState(Cookies.get('sessionId'));
      if(!sesId){
          window.location.href="/adminLogin";
      }
      
      return(<>
         {sesId} is Logged in 
      </>);
}