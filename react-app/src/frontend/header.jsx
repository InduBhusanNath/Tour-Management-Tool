import { Link } from "react-router-dom";
import MobileMenu from "./mobile-menu";
export default function Header(){
     return(<>  
           <MobileMenuBar/>        
           <HeaderBar/> 
           <NextHeaderBar/>   
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
//Next Header
function NextHeaderBar(){
      return(<>
           <div className="row background-blanchedalmond">
                <div className="col-sm-3"></div>
                <div className="col-sm-4"></div>
                <div className="col-sm-2"><span className="font font18"></span></div>
                <div className="col-sm-3"><HelpLine/></div>
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
                  <li><Link to="/" className="text-decoration-none text-dark">&#x1F3E0;HOME</Link></li>
                  <li>&nbsp;Taxi&#9662;
                         <ul>
                             <li><Link to="/delhi-taxi" className="text-decoration-none text-dark">Delhi</Link></li>
                             <li><Link to="/guwahati-taxi" className="text-decoration-none text-dark">Guwahati</Link></li>

                         </ul>
                  </li>
                  <li>&nbsp;Tourism&#9662;
                         <ul>
                               
                               <li><Link to="/adventure-tourism" className="text-decoration-none text-dark">Adventure</Link></li>
                               <li><Link to="/eco-tourism" className="text-decoration-none text-dark">Eco</Link></li>
                               <li><Link to="/relic-tourism" className="text-decoration-none text-dark">Historical</Link></li>
                         </ul>
                  </li>
                  <li><Link to="/#" className="text-decoration-none text-dark">&nbsp;Tour Packages</Link></li>
                  <li><Link to="/#" className="text-decoration-none text-dark">&nbsp;Cruises</Link></li>
                  
              </ul>
          </nav>
     </>);
}

function HelpLine(){
    return(<>
         <section className="text-center font font18">            
             Customer Care&nbsp;&nbsp;
             &#128222;&nbsp;<a href="tel:+919531393648" className="text-decoration-none text-dark">(+91) 9531393648</a>
             <br/>             
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
