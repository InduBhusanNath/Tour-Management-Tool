import { Link } from "react-router-dom";
import MobileMenu from "./mobile-menu";
export default function Header(){
     return(<>  
           <MobileMenuBar/> 
           <ExtraHeaderBar/>        
           <HeaderBar/>
     </>);
}
//Mobile Menu Bar
function MobileMenuBar(){
      return(<>
           <div className="row d-sm-block d-md-none d-lg-none background-blanchedalmond">
                <div className="col-sm-3"><MobileMenu/></div>
                <div className="col-sm-9"></div>
           </div>
      </>);
}
//Header Bar
function HeaderBar(){
      return(<>
           <div className="row padding10 background-blanchedalmond">
                <div className="col-sm-2"><Logo/></div>
                <div className="col-sm-7"><Nav/></div>
                <div className="col-sm-2"><RequestResponse/></div>
                <div className="col-sm-1"><Whatsapp/></div>
           </div>
      </>);
}
//Extra Header
function ExtraHeaderBar(){
      return(<>
           <div className="row background-bisque p-1">
                <div className="col-sm-4"><HelpLine/></div>                
                <div className="col-sm-4">
                     <BasicLinks/>                   
                </div>
                <div className="col-sm-4">
                     <section className="text-center font font18">
                          <nav>
                               <ul>
                                    <li>
                                         &#9993;&nbsp;trips.aeiety@gmail.com
                                    </li>
                               </ul>
                         </nav>
                    </section>
                </div>
          </div>
       
      </>);
}

function Logo(){
     return(<>
           <section className="text-center padding10">
                <Link to="/" className="text-decoration-none"><img src={process.env.PUBLIC_URL + 'MainImages/logo.png'} className="img-fluid w-75" alt="AeietyTrips"/></Link>
                
          </section>
     </>);
}
function Nav(){
     return(<>
          <nav className="font font20 text-center d-none d-sm-none d-md-none d-lg-block rounded-pill background-peachpuff">
              <ul>
                  <li><Link to="/" className="text-decoration-none text-dark padding5">&#x1F3E0;HOME</Link></li>
                  <li className="padding5">&nbsp;Taxi&#9662;
                         <ul>
                             <li><Link to="/delhi-taxi" className="text-decoration-none text-dark">Delhi</Link></li>
                             <li><Link to="/guwahati-taxi" className="text-decoration-none text-dark">Guwahati</Link></li>

                         </ul>
                  </li>
                  <li className="padding5">&nbsp;Tourism&#9662;
                         <ul>
                               
                               <li><Link to="/adventure-tourism" className="text-decoration-none text-dark">Adventure</Link></li>
                               <li><Link to="/eco-tourism" className="text-decoration-none text-dark">Eco</Link></li>
                               <li><Link to="/historical-tourism" className="text-decoration-none text-dark">Historical</Link></li>
                         </ul>
                  </li>
                  <li><Link to="/tour-packages-intro" className="text-decoration-none text-dark padding5">&nbsp;Tour Packages</Link></li>
                  <li><Link to="/#" className="text-decoration-none text-dark padding5">&nbsp;Cruises</Link></li>
                  
              </ul>
          </nav>
     </>);
}

function HelpLine(){
    return(<>
          <section className="text-center font font18"> 
                <nav>
                     <ul>
                          <li>
                               24x7&nbsp;Customer Care&nbsp;&nbsp;&#128222;&nbsp;<a href="tel:+919531393648" className="text-decoration-none text-dark">(+91)&nbsp;9531393648</a>
                          </li>
                     </ul>
                </nav>   
          </section>
         
             
         
    
    </>);
}

function RequestResponse(){
      return(<>
           <section className="bg-warning rounded-pill font font20 text-center padding5 shadow">            
           <Link to="/contactus" className="text-decoration-none text-dark">Request a Call</Link>
           </section>
      </>);
}
function Whatsapp(){
           return(<>
               <section className="text-center">
                     <a aria-label="Message AeietyTrips" href="https://wa.me/919531393648?text='Please%20get%20back%20to%20me%20for%20cab%20booking" className="whatsapp"> <img alt="Aeiety Trips" src={process.env.PUBLIC_URL + 'MainImages/whatsapp.png'}/></a>
               </section>           
           </>);  
}
function BasicLinks(){
      return(<>           
                <nav className="d-none d-sm-none d-md-none d-lg-block text-center font font18">
                     <ul>
                          <li><Link to="/aboutus" className="text-decoration-none text-dark padding5">About Us</Link></li>
                          <li><Link to="/contactus" className="text-decoration-none text-dark padding5">Contact Us</Link></li>
                          <li><Link to="/blog-page" className="text-decoration-none text-dark padding5">Blogs</Link></li>                          
                     </ul>
                </nav>           
      </>);
}
