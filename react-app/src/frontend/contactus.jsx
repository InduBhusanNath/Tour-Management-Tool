import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactUsMessage from "./contactus_message";
//Contact Us
export default function ContactUs(){
       return(<>
                 <HelmetProvider>
                         <TechnicalSEO/>
                         <div className="container-fluid">                         
                                 <Header/>
                                 <Banner/>
                                 <BreadCrumb/>
                                 <Intro/>
                                 <Description1/>
                                 <Footer/>                
                         </div>
                 </HelmetProvider>                 
         </>);
}
//Technical SEO
function TechnicalSEO(){
        return(<>                
                <Helmet>
                         <meta charSet="utf-8"/>
                         <title>Contact Aeiety Trips | Solve Your Queries, Let Us Help You</title>                
                         <meta name="description" content="Get in touch with us to resolve your queries, learn more about our services, or discover how we can plan the best trip for realizing your dream vacation."/>
                         <link rel="canonical" href="https://aeiety.com/contactus"/>
                         <meta property="og:title" content="Contact Aeiety Trips"/>
                         <meta property="og:url" content="https://aeiety.com/contactus"/>
                         <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                         <meta property="og:type" content="Web Page"/>
                         <meta property="og:description" content="Contact Aeiety Trips."/>
                         <meta property="og:locale" content="en_GB" />
               </Helmet>
        
        </>);
 }
//Banner
function Banner(){
        return(<>
                 <div className="row">
                         <div className="col-sm-12 p-0 m-0">
                               <img src="https://i.postimg.cc/P5MZtBWd/Contact-Us-Banner.webp" alt="Contact Aeiety Trips" className="img-fluid w-100 p-0 m-0"/>                                 
                         </div>
                 </div>
        </>);
}
//Breadcrumb
function BreadCrumb(){
        return(<>
                 <div className="row background-azure">
                         <div className="col-sm-12">                                 
                                 <nav aria-label="breadcrumb">
                                         <ol class="breadcrumb">
                                                 <li class="breadcrumb-item"><a href="/">Home</a></li>
                                                 <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li>
                                                 <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                                         </ol>
                                 </nav> 
                         </div>
                 </div>
        </>);
    }
 //Intro
 function Intro(){
         return(<>
                 <div className="row background-azure p-3">
                         <div className="col-sm-1"></div>
                         <div className="col-sm-10">
                                 <h1>Get in Touch With Us to Assist You in Every Aspect of Your Trip</h1>
                                 <p className="font font24 text-center">
                                         Whether it is Cab Booking or Trip Consultation, We are Ready to Serve You
                                 </p>
                         </div>
                         <div className="col-sm-1"></div>
                 </div>         
         </>);
 }
//Body
function Description1(){
         return(<>
                 
                <div className="row background-azure p-3">   
                         <div className="col-sm-1"></div>                      
                         <div className="col-sm-4 padding25">
                                 <section>
                                         <p className="font font24 fw-bold">MESSAGE US</p>
                                         <p className="font font22">If you want to know more about our services, get answers to your queries, express interest in our services or inform us of any issues, message us by submiting this form. We will assess your message, and get back to you.</p>

                                 </section>
                                 <section className="background-lightskyblue padding5 rounded shadow">
                                         <ContactUsMessage/>
                                 </section>
                         </div>
                         <div className="col-sm-4 padding25">
                                 <section>
                                         <p className="font font24 fw-bold">CUSTOMER CARE</p>
                                         <p className="font font22">Our dedicated customer care is available 24/7. Call or Whatsapp our customer care if you want to book a taxi or trip, reschedule or cancel your trip, resolve any issues, or get answers to your queries. </p>
                                         <p className="font font24">&#128241;&nbsp;(+91)&nbsp;9531393648</p>
                                         <p className="font font24">&#128231;&nbsp;trips.aeiety@gmail.com</p>
                                 </section>
                                 <p>&nbsp;</p>
                                 <section>
                                         <p className="font font24 fw-bold">HEAD OFFICE</p>
                                         <p className="font font22">
                                                 14A, Nirupama Enclave,
                                                 <br/>
                                                 Chilarai Path,Beltola,
                                                 <br/>
                                                 Guwahati,Assam, PIN:781029
                                         </p>

                                 </section>
                         </div>
                         <div className="col-sm-2 padding25">
                                 <section>
                                         <p className="font font24 fw-bold">FOLLOW US ON SOCIAL MEDIA</p>
                                         <p className="font font22">
                                                 <a href="https://www.facebook.com/aeietytrips" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                         <img src="https://i.ibb.co/wybGyY7/facebook.png" alt="https://www.facebook.com/aeietytrips" className="img-fluid p-0 m-0"/>
                                                 </a>                                                                                                 
                                         </p>
                                 </section>
                                 <section>
                                         <p className="font font24 fw-bold">SUBSCRIBE TO OUR YOUTUBE CHANNEL</p>
                                         <p className="font font22">
                                                 <a href="https://www.youtube.com/@aeiety-trips" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                                         <img src="https://i.ibb.co/ZL25CPH/youtube.png" alt="https://www.youtube.com/@aeiety-trips" className="img-fluid p-0 m-0"/>
                                                 </a> 
                                         </p>
                                 </section>
                         </div>
                         <div className="col-sm-1"></div>
                </div>
        
         </>);
}