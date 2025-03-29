import { useState } from "react";
import { Link } from "react-router";

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
                         <table className="table table-info table-hover">
                             <thead>
                                 <tr>
                                    <th scope="col" className="text-center"><Link to="/taxis" className="font font24 text-decoration-none link-dark fw-bold">Cabs</Link></th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td className="text-center"><Link to="/delhi-taxi" className="font font24 text-decoration-none link-dark">Delhi</Link></td>
                                 </tr>
                                 <tr>
                                     <td className="text-center"><Link to="/guwahati-taxi" className="font font24 text-decoration-none link-dark">Guwahati</Link></td>
                                 </tr>
                             </tbody>
                         </table>
                         <table className="table table-info table-hover">
                             <thead>
                                 <tr>
                                    <th scope="col" className="text-center"><Link to="/tour-packages-intro" className="font font24 text-decoration-none link-dark fw-bold">Tour Packages</Link></th>
                                 </tr>
                             </thead>
                             <tbody>
                                 <tr>
                                     <td className="text-center"><Link to="/bhutan-tour-packages" className="font font24 text-decoration-none link-dark">Bhutan Tour Packages</Link></td>
                                 </tr>
                             </tbody>

                         </table>
                         <table className="table table-info table-hover">
                            <tbody>
                                 <tr>
                                     <td className="text-center"><Link to="/" className="font font24 text-decoration-none link-dark">HOME</Link></td>
                                 </tr>
                                 <tr>
                                     <td className="text-center"><Link to="/aboutus" className="font font24 text-decoration-none link-dark">About Us</Link></td>
                                 </tr>
                                 <tr>
                                     <td className="text-center"><Link to="/contactus" className="font font24 text-decoration-none link-dark">Contact Us</Link></td>
                                 </tr>
                                 <tr>
                                     <td className="text-center"><Link to="/blog-page" className="font font24 text-decoration-none link-dark">Blogs</Link></td>
                                 </tr>
                             </tbody>
                         </table>
                 </section>
         </div>
         
               
    </>);
}

