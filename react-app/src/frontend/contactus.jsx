import Header from "./header";
import Footer from "./footer";
import {Helmet} from "react-helmet";
import ContactUsMessage from "./contactus_message";
//Contact Us
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
//Technical SEO
function TechnicalSEO(){
        return(<>
                
                 <Helmet>
                         <meta charSet="utf-8"/>
                         <title>Cab booking at Affordable Fares: Reliable, Safe, Timely </title>                
                         <meta name="description" content="Searching for dependable cab booking? Book taxi at affordable fare and undergo the best cab travel experience. Our customer service is available 24/7. "/>
                         <link rel="canonical" href="https://aeiety.com/contactus"/>
                 </Helmet>
        
        </>);
   }
//Banner
function Banner(){
        return(<>
                 <div className="row">
                         <div className="col-sm-12 p-0 m-0">
                               <img src="./MainImages/contactus.png" alt="AeietyTrips" className="img-fluid w-100"/>                                 
                         </div>
                 </div>
        </>);
}
//Breadcrumb
function BreadCrumb(){
        return(<>
                 <div className="row">
                         <div className="col-sm-12 bg-light bg-gradient">                                 
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
//Body
function Body(){
         return(<>
                 <div className="row">
                         <div className="col-sm-1"></div>
                         <div className="col-sm-10 padding25">
                                 <h1>Get in Touch With Us to Assist You in Every Aspect of Your Trip. Whether it is Cab Booking or Trip Consultation, We are Ready to Serve You.</h1>
                         </div>
                         <div className="col-sm-1"></div>
                </div>
                <div className="row">   
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
                                         <p className="font font22">Our dedicated customer care is available 24/7. Call or Whatsapp our customer care if you want to reschedule or cancel your trip, resolve any issues, or answers to your queries. </p>
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
                                                 <a href="https://www.facebook.com/aeietytrips" className="text-decoration-none">
                                                         <img src="https://i.ibb.co/wybGyY7/facebook.png" alt="https://www.facebook.com/aeietytrips" className="img-fluid p-0 m-0"/>
                                                 </a>                                                                                                 
                                         </p>
                                 </section>
                                 <section>
                                         <p className="font font24 fw-bold">SUBSCRIBE TO OUR YOUTUBE CHANNEL</p>
                                         <p className="font font22">
                                                 <a href="https://www.youtube.com/@aeiety-trips" className="text-decoration-none">
                                                         <img src="https://i.ibb.co/ZL25CPH/youtube.png" alt="https://www.youtube.com/@aeiety-trips" className="img-fluid p-0 m-0"/>
                                                 </a> 
                                         </p>
                                 </section>
                         </div>
                         <div className="col-sm-1"></div>
                </div>
        
         </>);
}