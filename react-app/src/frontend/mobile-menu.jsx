import { useState } from "react";
import { Link } from "react-router";

//Main Export Function
export default function MobileMenu(){
     const [mobStatus,setMobStatus]=useState('hidden');
     const [triangleCab,setTriangleCab]=useState('\u25BE');
     const [cabStatus,setCabStatus]=useState('hidden');
     const [triangleSpecialTour,setTriangleSpecialTour]=useState('\u25BE');
     const [specialTourStatus,setSpecialTourStatus]=useState('hidden');
     
     
     //Show Menu
     function showMobMenu(){
         setMobStatus('shown');
     }
     //Hide Menu
     function hideMobMenu(){
         setMobStatus('hidden');
     }
     //Toggle Cabs
     function toggleCabs(){
         if(cabStatus==='hidden'){
             setCabStatus('shown');
             setTriangleCab('\u25B4');
         }else if(cabStatus==='shown'){
             setCabStatus('hidden');
             setTriangleCab('\u25BE');
         }
     }
     //Toggle Special Tours
     function toggleSpecialTours(){
         if(specialTourStatus==='hidden'){
             setSpecialTourStatus('shown');
             setTriangleSpecialTour('\u25B4');
         }else if(specialTourStatus==='shown'){
             setSpecialTourStatus('hidden');
             setTriangleSpecialTour('\u25BE');
         }
     }

     return(<>
         <div className="zindex-30">
             <main className="p-3">
                 <button className="rounded border-0 bg-info shadow" onClick={showMobMenu}>{'\u2630'}</button>
             </main>             
         </div>
         <div className={mobStatus}>
             <main className="mobile-menu background-whitesmoke shadow">
                 <button className="border-0 rounded bg-transparent fs-1 p-3" onClick={hideMobMenu}>{'\u274E'}</button>
                  {/*Logo*/}
                 <section className="text-center"><img src={"MainImages/logo.png"} className="img-fluid w-75 p-0 m-0" alt="Aeiety Trips"/></section>
                  {/*Cabs*/}
                 <section className="text-center">  
                     <ul className="list-group list-group-flush" onClick={toggleCabs}>
                        <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom">Cabs <span className="fs-2">{triangleCab}&nbsp;</span></li>
                     </ul>
                     <article className={cabStatus}>
                         <ul className="list-group list-group-flush">
                             <li className="list-group-item fs-4">Delhi</li>
                             <li className="list-group-item fs-4">Guwahati</li>
                         </ul> 
                     </article>                                                         
                 </section> 
                 {/*Special Tours*/}
                 <section className="text-center">
                     <ul className="list-group list-group-flush" onClick={toggleSpecialTours}>
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom" onClick={toggleSpecialTours}>Special Tours&nbsp;<span className="fs-2">{triangleSpecialTour}</span></li>
                     </ul>   
                     <article className={specialTourStatus}>
                          <ul className="list-group list-group-flush">
                             <li className="list-group-item fs-4">Adventure</li>
                             <li className="list-group-item fs-4">Eco</li>
                             <li className="list-group-item fs-4">Historical</li>
                         </ul>
                     </article>
                 </section>
                 {/*Travel Packages */}
                 <section className="text-center">
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom">Travel Packages</li>
                     </ul>  
                 </section>
                 {/*Cruises*/}
                 <section className="text-center">
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom">Cruises</li>
                     </ul>  
                 </section>
                 {/*Home*/}
                 <section className="text-center">
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom">HOME</li>
                     </ul>  
                 </section>
                 {/* About Us */}
                 <section className="text-center">
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom">About Us</li>
                     </ul>  
                 </section>
                 {/*Blogs*/}
                 <section className="text-center">
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom">Blogs</li>
                     </ul>  
                 </section>
                 {/* Places to Visit */}
                 <section className="text-center">
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom">Places to Visit</li>
                     </ul>  
                 </section>
                 {/* Contact Us */}
                 <section className="text-center">
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent  border-bottom">Contact Us</li>
                     </ul>  
                 </section>
                 <section className="text-center">
                     <ul className="list-group list-group-flush">
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent">&nbsp;</li>
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent">&nbsp;</li>
                         <li className="list-group-item text-decoration-none link-dark fs-2 bg-transparent">&nbsp;</li>
                     </ul>  
                 </section>              
             </main>                                   
         </div>                
     </>);
}

