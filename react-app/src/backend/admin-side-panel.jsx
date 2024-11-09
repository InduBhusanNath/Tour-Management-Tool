import { useState } from "react";
import { Link } from "react-router-dom";
//Main export function
export default function AdmSidePanel(){
    const [togle,setTogle]=useState('+');
    const [display,setDisplay]=useState('hidden')
    function Settings(){
        if(togle==='+'){
            setTogle('-');
            setDisplay('visible');
        }else{
            setTogle('+');
            setDisplay('hidden');
        }
       
     }
     return(<>
        <table className="table font font18">
            <tbody>
                <tr>
                     <td className="bg-transparent">&nbsp;<Link to="/adminDashboard/" className="action fw-bold">&#127968;&nbsp;DASHBOARD</Link></td>                                 
                </tr>
                <tr>
                     <td className="bg-transparent">&nbsp;<Link to="/adminDashboard/manage-cab-booking/" className="action">Cabs</Link></td> 
                </tr>
                <tr>
                     <td className="bg-transparent">&nbsp;<Link to="/adminDashboard/blogs/" className="action">Blogs</Link></td> 
                </tr>
                <tr>
                     <td className="bg-transparent">&nbsp;<Link to="/adminDashboard/contactus-messages/" className="action">Contact Us Messages</Link></td> 
                </tr>
                <tr>
                     <td className="bg-transparent">&nbsp;<Link to="/adminDashboard/tourism/" className="action">Tourism</Link></td> 
                </tr>
                <tr>
                     <td className="bg-transparent">&nbsp;<Link to="/adminDashboard/places/" className="action">Places</Link></td> 
                </tr>
                <tr>
                     <td className="bg-transparent">&nbsp;<Link to="/adminDashboard/images/" className="action">Images</Link></td> 
                </tr>
            </tbody>
            <button className="collapse_button w-75 fw-bold" onClick={Settings}>&#9967;&nbsp;Settings</button><span className="text-end w-25">{togle}</span>
                 <section className={display}>
                     <section className="text-left">
                         <span className="bg-transparent">&#128101;&nbsp;<Link to="/adminDashboard/adminUsers/" className="action">Users</Link></span>   
                     </section>
                 </section>   
        </table>
     
     </>);

   }