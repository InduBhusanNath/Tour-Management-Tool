import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Collapsible from 'react-collapsible';
import TaxiService from "./taxi-service";
import WhatYouGetFromUs from "./what-you-get-from-us";


//Main export function
export default function DelhiTaxi(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <BreadCrumb/>
                     <Body1/>
                     <TaxiServiceFeatures/>
                     <Faqs/>
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
                <title>Cab Service in Delhi-Satisfying Rides at Reasonable Prices</title>                
                <meta name="description" content="Searching for a trusted and efficient cab service in Delhi? Discover what makes us a preferred provider of Delhi taxi service. Book taxi for a satisfying ride."/>
                <link rel="canonical" href="https://aeiety.com/delhi-taxi"/>
                <meta property="og:title" content="Taxi Service in Delhi by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/delhi-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about the excellent cab service in Delhi by Aeiety Trips."/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
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
                                    <li class="breadcrumb-item active" aria-current="page">Taxi Delhi</li>
                               </ol>
                          </nav> 
                    </div>
              </div>
     </>);
}

//Body
function Body1(){
      return(<>
           <div className="row background-lemonchiffon">
                <div className="col-sm-1"></div>
                <div className="col-sm-7 p-4 m-1">
                     <h1>Cab Service in Delhi&#9889;</h1>
                     <p className="font font24 fw-bold">Experience More Satisfaction and Zero Hassles </p>
                     <p className="font font22">
                          Cab service in Delhi by Aeiety Trips is more affordable and satisfying. We focus on easing and streamlining taxi rides in the city's busy environment. Due to our comprehensive spectrum of offerings, you will get local and outstation taxi service in Delhi for all needs. Whether you need a cab for business travel, an official trip, a sightseeing tour, an airport transfer, or carrying a patient to the hospital, you all get them from us. A combination of safety, timeliness, reasonable pricing, and focus on customer satisfaction renders Aeiety Trips the number one choice for satisfying Delhi taxi service.        
                     </p>
                     <p>
                          <button type="button" class="btn btn-warning shadow"><a href="/" className="action">Book Taxi in Delhi&nbsp;&#129146;</a></button> 
                     </p>
                </div>
                <div className="col-sm-3 p-4 m-1">
                     <section className="p-1">
                          <div className="card border-info mb-3 text-dark bg-info text-center shadow-sm">
                               <div className="card-header">
                                    <span className="fw-bold">QUICK BOOKING</span>
                               </div>
                               <div className="card-body">
                                  Call/Whatsapp
                                  <br/>
                                  <span className="fw-bold">(+91)9531393648</span>
                               </div>
                          </div>
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>      
      </>);
}
//Service Features
function TaxiServiceFeatures(){
     return(<>
          <TaxiService/>
     </>);
}
//FAQs
function Faqs(){
     return(<>
          
          <div className="row background-lightyellow padding25">
               <div className="col-sm-1"></div>
               <div className="col-sm-7">
                    <section className="font font22">
                         <h2>FAQs</h2> 
                         <Collapsible trigger="&#43;Which cab service is the best in Delhi?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    The definition of the best cab services in Delhi encompasses customer-centricity, timeliness, affordability, and safety. At Aeiety Trips, we have all of them.  
                              </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How do I book a taxi in Delhi?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    You can book a taxi in Delhi in many ways. You can book a cab from Aeiety Trips by calling or Whatsapping us, submitting the taxi booking form on our website, emailing us, or sending a message from our website's  Contact Us page.  
                              </p>      
                         </Collapsible>  
                         <Collapsible trigger="&#43;Which is a reliable Delhi airport cab service?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    Reliability is a governing principle at Aeiety Trips. We provide dependable airport transfers in Delhi.   
                              </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How do I reschedule/cancel my cab booking?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    You can do that by informing us in advance. Remember, rescheduling or cancelation will attract a fee if done on the day of travel. That means you can do that up to the previous day of your trip free of cost.   
                              </p>      
                         </Collapsible>                          
                         <Collapsible trigger="&#43;What are the fares of tourist taxis in Delhi?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    There are no universal fares. They depend on the travel distance and the car type.  
                              </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How can I get a taxi for business tours?">
                              <p className="bg-warning rounded shadow-sm padding25">
                                    Contact Aeiety Trips. We provide excellent cab service for business trips. 
                              </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;Does Aeiety Trips offer discounts?">
                              <p className="bg-warning rounded shadow-sm padding25">
                                    Yes, we do. We offer discounts to our frequent customers.  
                              </p>      
                         </Collapsible>
                    </section>
               </div>
               <div className="col-sm-3">                     
                    <section>
                        <WhatYouGetFromUs/>
                    </section>             
               </div>                 
               <div className="col-sm-1"></div>               
         </div>
    </>);
}