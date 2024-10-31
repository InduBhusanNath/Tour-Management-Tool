import Header from "./header";
import Footer from "./footer";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import ContactUsMessage from "./contactus_message";
export default function ContactUs(){
       return(<>
                 <TechnicalSEO/>
                <div className="container-fluid">                         
                         <Header/>
                         <Banner/>
                         <BreadCrumb/>
                         <Body/>
                         <Footer/>                
                 </div>
       
       
       
       </>);
}
{/*Technical SEO*/}
function TechnicalSEO(){
        return(<>
                
                 <Helmet>
                         <meta charSet="utf-8"/>
                         <title>Cab Service in Guwahati| Book Taxi at Affordable Fares</title>                
                         <meta name="description" content="Book efficient cab service in Guwahati for local and outstation taxi tours. Affordable fares, timely pickup, and customer-centricity distinguish our cabs."/>
                         <link rel="canonical" href="https://aeiety.com/contactus"/>
                 </Helmet>
        
        </>);
   }
{/*Banner*/}
function Banner(){
        return(<>
                 <div className="row">
                         <div className="col-sm-12 p-0 m-0">
                               <img src="./MainImages/contactus.png" alt="AeietyTrips" className="img-fluid p-0 m-0"/>                                 
                         </div>
                 </div>
 
        </>);
}
{/*Breadcrumb*/}
function BreadCrumb(){
        return(<>
                  <div className="row bg-info bg-gradient">
                       <div className="col-sm-12">
                            <section className="p-0 font font16">
                            <Link to="/" className="text-decoration-none text-dark">HOME</Link>&gt;<Link to="/aboutus" className="text-decoration-none text-dark">About Us</Link>&gt;<Link to="/blog-page" className="text-decoration-none text-dark">Blogs</Link>&gt;Contact Us
                            </section>
                       </div>
                 </div>
        </>);
    }
{/*Body*/}
function Body(){
         return(<>
                 <div className="row">
                         <div className="col-sm-2"></div>
                         <div className="col-sm-8 padding25">
                                 <h1>We are Ready to Serve You. Get in Touch With Us to Book Taxi or Help You With a Trip Consultation.</h1>
                         </div>
                         <div className="col-sm-2"></div>
                </div>
                <div className="row">
                         <div className="col-sm-2"></div>
                         <div className="col-sm-4 padding25">
                                 <section className="background-lightskyblue padding10 rounded shadow">
                                         <ContactUsMessage/>
                                 </section>
                         </div>
                         <div className="col-sm-4">
                                 <section className="font font24 padding25">
                                        <p> &#127968;<br/>
                                        14A, Nirupama Enclave, Chilarai Path,Beltola,Guwahati,Assam, PIN:781029
                                        </p>
                                        <p>&#128241;<br/>
                                        (+91)8638576314
                                        </p>
                                        <p>&#128231;<br/>
                                        info.aeiety@gmail.com
                                        </p>
                                 </section>
                         </div>
                         <div className="col-sm-2"></div>
                </div>
        
         </>);
}