import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Collapsible from 'react-collapsible';

//Main export function

export default function DelhiAirportTaxi(){
     return(<>
             <HelmetProvider>
                 <TechnicalSEO/>
                 <div className="container-fluid">
                     <Header/>
                     <DelhiAirportTaxiBanner/>
                     <BreadCrumb/>
                     <Intro/>
                     <WhyChooseDelhiAirportTaxi/>
                     <Faqs/>
                     <WhyHireDelhiAirportTaxi/>
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
                <title>Delhi Airport Taxi Service - Hassle-Free Pickup & Drop</title>                
                <meta name="description" content="Book our Delhi airport taxi for safe & affordable travel. Our airport taxi Delhi service offers 24x7 pickup & drop from IGI Airport at the best prices."/>
                <link rel="canonical" href="https://aeiety.com/delhi-airport-taxi"/>
                <meta property="og:title" content="Delhi Airport Taxi Service - Hassle-Free Pickup & Drop"/>
                <meta property="og:url" content="https://aeiety.com/delhi-airport-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Book our Delhi airport taxi for safe & affordable travel. Our airport taxi Delhi service offers 24x7 pickup & drop from IGI Airport at the best prices."/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Delhi Airport Taxi Banner
function DelhiAirportTaxiBanner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <figure className="p-0 m-0">
                          <img src="https://i.postimg.cc/KvK2b8nf/delhi-airport-taxi.webp" className="img-fluid object-fit-cover w-100 p-0 m-0" alt="Delhi Airport Taxi Service"/>
                     </figure>
                </div>
           </div>
     </>);
}


//Breadcrumb
function BreadCrumb(){
    return(<>
              <div className="row background-lemonchiffon p-3">
                   <div className="col-sm-12">
                         <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                   <li class="breadcrumb-item"><a href="/" className="link-dark">Home</a></li>
                                   <li class="breadcrumb-item"><a href="/aboutus" className="link-dark">About Us</a></li>
                                   <li class="breadcrumb-item"><a href="/taxis" className="link-dark">Taxi</a></li>
                                   <li class="breadcrumb-item"><a href="/delhi-taxi" className="link-dark">Delhi Taxi</a></li>
                                   <li class="breadcrumb-item active" aria-current="page">Taxi Airport Delhi</li>
                              </ol>
                         </nav> 
                   </div>
             </div>
    </>);
}
//Intro
function Intro(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">The Best Delhi Airport Taxi — Your Ride, Right On Time</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          24/7 Delhi airport taxi service is one of our exclusive service lines. We at Aeiety Trips ensure smooth transfers at the Indira Gandhi International Airport. As such, you will have a seamless taxi service at the IGI airport. 
                     </p>
                     <p className="font font22">
                          Our best-in-class taxi service at Delhi airport is simple, on time, safe, and fairly priced. Therefore, using a reliable airport taxi Delhi will pose no hassles. You will get a cab whenever you need one. 
                     </p>
                     <p className="font font22">
                          We genuinely care about being on time. As such, our timely Delhi airport pickup and drop eliminates the risk of missing your flight or getting late for your scheduled work after landing. Therefore, book our best Delhi airport taxi service to experience the best.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Why Choose Us
 function WhyChooseDelhiAirportTaxi(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Delhi Airport Taxi</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Hiring the best Delhi airport taxi is essential. That way, you can have a smooth airport transfer. If you choose the wrong one, you might face consequences, like missing your flight or paying excessive fares. 
                     </p>
                     <p className="font font22">
                          Good taxi service at Delhi airport is also about peace of mind. We at Aeiety Trips provide the best Delhi airport transfer. 
                     </p>
                     <h3>Customer-Centricity</h3>
                     <p className="font font22">
                          We care for our customers. We strive to provide them with the best cab experience. For us, every customer is important. Due to this, we run the best taxi service at Delhi airport to create value for customers.
                     </p>
                     <h3>Timeliness</h3>
                     <p className="font font22">
                          The biggest thing we focus on is time. So, we do not fail to pick you up and drop you off as per schedule. So, the possibility of missing your flight does not arise. We will be right there when you book our airport taxi Delhi service. Our airport cabs Delhi operate round-the-clock.
                     </p>
                     <h3>Reasonable Pricing</h3>
                     <p className="font font22">
                          We have set reasonable pricing for our cabs. We are a provider of affordable cab service in Delhi. Also, our pricing is transparent. As such, there are no hidden or extra charges. You get value for your money. Notably, you can fix the fare with our best prepaid taxi Delhi airport. 
                     </p>
                     <h3>Expert Drivers</h3>
                     <p className="font font22">
                          We deploy experienced and trained drivers. As a result, our airport taxi Delhi is safe. Also, they know the routes well, apart from shortcuts and traffic. Say you booked a one-way taxi to Delhi airport, the driver will reach the IGI airport in a short time due to their knowledge of the best routes.
                     </p>
                     <h3>Safety</h3>
                     <p className="font font22">
                          Safety matters the most in our excellent taxi service at Delhi airport. Clean cars, frequent servicing, and polite drivers entail safety.
                     </p>
                     <h3>24/7 Customer Service</h3>
                     <p className="font font22">
                          We offer dedicated customer service round-the-clock. Remarkably, we do not implement bots to answer your queries. We provide a customer-friendly Delhi airport taxi service. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);      
}
//FAQs
function Faqs(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <h2 className="text-center">FAQs : Delhi Airport Taxi Service</h2>
                </div>
                <div className="col-sm-1"></div>
           </div> 
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <section className="font font22">
                          <Collapsible trigger="#1.#1. Can I book a Delhi airport taxi service in advance?">
                               <p className="p-2">
                                    Yes, you can. And, you can regard it as a dedicated offering of cabs to drop you at T1, T2, or T3 of the Indira Gandhi International Airport or pick you up from the terminals. You can pre-book cabs.
                               </p>
                          </Collapsible>
                          <Collapsible trigger="#2. What separates taxi service at Delhi airport from other taxis?">
                               <p className="p-2">
                                    The differences lie in specialized services for airport transfers. The services involved timely pickup, drop off, professional drivers, and fixed fares. Other cab services can involve wait times, late pick-up, or fare negotiation. 
                               </p>
                          </Collapsible>
                          <Collapsible trigger="#3. Does Aeiety Trips guarantee safety for airport taxis Delhi?">
                               <p className="p-2">
                                    Yes, we do. We deploy experienced, expert, and verified drivers. 
                               </p>
                          </Collapsible>
                          <Collapsible trigger="#4. What type of cars do Aeiety Trips provide for Delhi airport pickup and drop?">
                               <p className="p-2">
                                    We provide almost all types of cabs for airport transfers. As such, you can get small, medium, and large cars. Book the one appropriate for your needs. 
                               </p>
                          </Collapsible>
                          <Collapsible trigger="#5. Will the fares for taxi service at Delhi airport change?">
                               <p className="p-2">
                                    No, fares for our cabs do not change from the booking quotes.  
                               </p>
                          </Collapsible>
                     </section>                     
                </div>
                <div className="col-sm-1"></div>
           </div>      
      </>);
}
//Why Hire Airport Delhi Taxi
function WhyHireDelhiAirportTaxi(){
       return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <h2 className="text-center">Why Hire a Delhi Airport Taxi?</h2>
                </div>
                <div className="col-sm-1"></div>
           </div> 
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Carefulness is essential during your travel to or from the airport. Although public transport is available, hiring a Delhi airport taxi could be the best thing to do. You must carry luggage and navigate the traffic on the city's busy roads. As such, your travel to the Indira Gandhi International Airport could be stressful. Also, you could risk missing the flight. Again, you might reach IGI Airport, New Delhi, barely minutes before the closure of boarding. In that case, you will have to rush through the pre-boarding process. That will be confusing and stressful. However, the good thing is that you can avoid hassles by hiring a top-notch taxi service at Delhi airport. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div> 
       </>);
}