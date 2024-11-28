import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Collapsible from 'react-collapsible';
import TaxiService from "./taxi-service";
import WhatYouGetFromUs from "./what-you-get-from-us";
import YoutubeDelhiTaxi from "./youtube-delhi-taxi";


//Main export function
export default function DelhiTaxi(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <DelhiTaxiBanner/>
                     <BreadCrumb/>
                     <Body1/>
                     <TaxiServiceFeatures/>
                     <Body2/>
                     <Faqs/>
                     <OutstationRoutes/>
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
//Bannner
function DelhiTaxiBanner(){
     return(<>
          <div className="row">
               <div className="col-sm-12 p-0 m-0">
                    <img src="https://i.ibb.co/z2RPvRq/Delhi-Cab-Banner.png" alt="Delhi Cab" className="img-fluid w-100 p-0 m-0"/>
               </div>
          </div>          
     </>);
}
//Breadcrumb
function BreadCrumb(){
     return(<>
               <div className="row">
                    <div className="col-sm-12 background-lemonchiffon">
                          <nav aria-label="breadcrumb">
                               <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/" className="link-dark">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/aboutus" className="link-dark">About Us</a></li>
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
                     <p className="font font24 fw-bold text-muted">Experience More Satisfaction and Zero Hassles </p>
                     <p className="font font22">
                          Cab service in Delhi by Aeiety Trips is more affordable and satisfying. We focus on easing and streamlining taxi rides in the city's busy environment. Due to our comprehensive spectrum of offerings, you will get local and outstation taxi service in Delhi for all needs. Whether you need a cab for business travel, an official trip, a sightseeing tour, an airport transfer, or carrying a patient to the hospital, you all get them from us. A combination of safety, timeliness, reasonable pricing, and focus on customer satisfaction renders Aeiety Trips the number one choice for satisfying Delhi taxi service.        
                     </p>
                     <p>
                          <button type="button" class="btn btn-warning shadow"><a href="/" className="action">Book Taxi in Delhi&nbsp;&#129146;</a></button> 
                     </p>
                </div>
                <div className="col-sm-3 p-4 m-1">
                    <section className="p-0">
                          <div className="card border-warning mb-3 text-dark bg-warning shadow-sm">
                               <div className="card-header text-center">
                                    <span className="fw-bold">QUICK BOOKING</span>
                               </div>
                               <div className="card-body text-center">
                                  Call/Whatsapp
                                  <br/>
                                  <span className="fw-bold">(+91)9531393648</span>
                               </div>
                          </div>
                     </section>
                     <section className="p-0">
                          <div className="card border-warning mb-3 text-dark bg-warning shadow-sm">
                               <div className="card-header border-0 text-center">
                                    <span className="fw-bold">Watch Videos</span>
                               </div>
                               <div className="card-body p-0 m-0 w-100 text-center">
                                    <YoutubeDelhiTaxi/>
                                    <a href="https://www.youtube.com/@aeiety-trips/videos" target="_blank" rel="noopener" className="text-decoration-none text-dark font font18">More Videos</a>
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
//Body2
function Body2(){
      return(<>
           <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 p-4 m-1">
                     <h2>The Key Features of Our Dedicated Cab Service in Delhi</h2>
                     <p className="font font22">
                          Our dedicated Delhi cab service focuses on maximizing customer satisfaction. We have structured our taxi service Delhi to suit the busy atmosphere of the city. Also, we have optimized our customer-centric cab service in Delhi for outstation trips to streamline the high frequency of cab requirements for tours outside the city. With the facility of a quick taxi booking Delhi, we give you the flexibility to book taxi from anywhere at any time. Notably, tourists can avail of our devoted Delhi airport cab service. They can book a cab beforehand to transport them to the hotel after landing at the Delhi airport. 
                     </p>
                     <p className="font font22 fw-bold">Safety</p>
                     <p className="font font22">
                          Safety is synonymous with Aeiety Trips, the provider of reliable cab service in Delhi. We ensure safe cab travel by implementing proven safety protocols. We deploy serviced cars and experienced drivers. These prevent any untoward incidents during taxi travel. 
                     </p>
                     <p className="font font22 fw-bold">Reasonable Pricing</p>
                     <p className="font font22">
                          Our cab fare depends on the traveled distance and the car type. There is no pricing parameter in addition to these. You need to pay the amount we quoted at the time of cab booking. There is no additional payment or hidden costs. Notably, we ask for reasonable prices. We refrain from asking for excessive fares. As such, you will find fares for local and outstation taxi service in Delhi affordable. Even our Delhi airport cab service is of fixed fare. 
                     </p>
                     <p className="font font22 fw-bold">Cleanliness</p>
                     <p className="font font22">
                          We ensure clean cars. That is why, your taxi travel becomes pleasant. The facility for quick taxi booking Delhi can allow you book taxi with ease.
                     </p>

               </div>
               <div className="col-sm-1"></div>
          </div>
      </>);
}
//FAQs
function Faqs(){
     return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>FAQs</h2> 
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                     <section className="font font22">
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
                     </section>
                </div>
                <div className="col-sm-5">
                     <section className="font font22">
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
                <div className="col-sm-1"></div>
           </div>          
    </>);
}
//Routes
function OutstationRoutes(){
      return(<>
           <div className="row background-lemonchiffon padding25">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Top Outstation Routes</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon padding25">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">

                     <section className="background-khaki text-center p-1 m-1 rounded-pill shadow-sm font font22">Delhi to Agra taxi</section>
                     
                     <section className="background-khaki text-center p-1 m-1 rounded-pill shadow-sm font font22">Delhi to Shimla cab</section>
                     
                     <section className="background-khaki text-center p-1 rounded-pill shadow-sm font font22">Delhi to Manali taxi</section>
                </div>
                <div className="col-sm-5">
                     <section className="background-khaki text-center p-1 m-1 rounded-pill shadow-sm font font22">Delhi to Haridwar cab</section>
                     
                     <section className="background-khaki text-center p-1 m-1 rounded-pill shadow-sm font font22">Delhi to Rishikesh taxi</section>
                     
                     <section className="background-khaki text-center p-1 rounded-pill shadow-sm font font22">Delhi to Jaipur cab</section>
                </div>
                <div className="col-sm-1"></div>
          </div>
      </>);
}