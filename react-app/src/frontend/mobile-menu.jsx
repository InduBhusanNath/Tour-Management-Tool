import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu(){

    const [mobMenu,setMobMenu]=useState('hidden');
    function showMobMenu(){
         setMobMenu('shown');
    }
    function hideMobMenu(){
         setMobMenu('hidden');      
    }
   return(<>
         <div className="col-sm-12 background-blanchedalmond">
             <button className="show_btn" onClick={showMobMenu}>&equiv;</button>
             <section className={mobMenu}>
                 <button className="hide_btn" onClick={hideMobMenu}>&#10060;</button>
                 <section className="font font20">
                     <section className="row">
                         <section className="col-sm">
                             <Link to="/" className="text-decoration-none text-dark">HOME</Link>
                             <br/>
                             <Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>
                             <br/>
                             <Link to="/contactus" className="text-decoration-none text-dark">Contact Us</Link> 
                             <br/>
                             <Link to="/blog-page" className="text-decoration-none text-dark">Blogs</Link>

                         </section>
                     </section>
                     <section className="row">
                         <span className="fw-bold">Cab Services</span>
                         <br/>
                         <Link to="/delhi-taxi" className="text-decoration-none text-dark">Delhi</Link>
                         <br/>
                         <Link to="/guwahati-taxi" className="text-decoration-none text-dark">Guwahati</Link>

                     </section>
                 </section>
                
             </section>
         </div>
         
               
    </>);
}

