import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";

//Main export function

export default function GuwahatiAirportTaxi(){
     return(<>
             <HelmetProvider>
                 <TechnicalSEO/>
                 <div className="container-fluid">
                     <Header/>
                     <GuwahatiAirportTaxiBanner/>
                     <BreadCrumb/>
                     <Intro/>
                     <WhyChooseGuwahatiAirportTaxi/>
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
                <title>Guwahati Airport Taxi for Best Rides to City & Beyond</title>                
                <meta name="description" content="Do you need a good Guwahati Airport Taxi? Book our 24/7 taxi service at Guwahati airport, which offers timely pickups and the most affordable fares. "/>
                <link rel="canonical" href="https://aeiety.com/guwahati-airport-taxi"/>
                <meta property="og:title" content="Guwahati Airport Taxi for Best Rides to City & Beyond"/>
                <meta property="og:url" content="https://aeiety.com/guwahati-airport-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Do you need a good Guwahati Airport Taxi? Book our 24/7 taxi service at Guwahati airport, which offers timely pickups and the most affordable fares. "/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Delhi Airport Taxi Banner
function GuwahatiAirportTaxiBanner(){
     return(<>
     <h1>Banner Ghy</h1>
     </>);
}


//Breadcrumb
function BreadCrumb(){
    return(<>
              <div className="row">
                   <div className="col-sm-12">
                         <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                   <li class="breadcrumb-item"><a href="/" className="link-dark">Home</a></li>
                                   <li class="breadcrumb-item"><a href="/aboutus" className="link-dark">About Us</a></li>
                                   <li class="breadcrumb-item"><a href="/taxis" className="link-dark">Taxi</a></li>
                                   <li class="breadcrumb-item"><a href="/guwahati-taxi" className="link-dark">Guwahati Taxi</a></li>
                                   <li class="breadcrumb-item active" aria-current="page">Guwahati Airport Delhi</li>
                              </ol>
                         </nav> 
                   </div>
             </div>
    </>);
}
//Intro
function Intro(){
      return(<>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">The Best Guwahati Airport Taxi Awaits to Serve You</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                            At Aeiety Trips, providing a dependable Guwahati airport taxi is one of our core cab services. Understandably, coming to the airport and going out of it are challenging. The good thing is that you can avoid them with our dedicated taxi service at Guwahati airport for rides within or outside the city.
                     </p>
                     <p className="font font22">
                          We provide reliable and hassle-free taxi service. As such, we are identified as the best <Link to="/guwahati-taxi" className="text-decoration-none link-danger">cab service in Guwahati</Link>. Also, we ensure comfortable, timely, and safe cab rides. Notably, our Guwahati airport cab fare is affordable. Therefore, a Guwahati airport cab booking from Aeiety Trips will entail the best experience.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
     </>)
}
//Why Choose Us
function WhyChooseGuwahatiAirportTaxi(){
      return(<>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Guwahati Airport Taxi Service</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          There can be many merits in choosing our Guwahati airport taxi service. As such, you will experience the best in your transfer at the Lokpriya Gopinath Bordoloi International Airport. Therefore, choose our taxi service at Guwahati airport for transfers. A few factors make us the best choice for an airport taxi Guwahati.
                     </p>
                     <h3>Timely Pickup</h3>
                     <p className="font font22">
                          At Aeiety Trips, picking up on time is one of our fundamental mandates. So, you will board a cab as per your scheduled time. As such, you will leave for the airport on time. Due to timely boarding, you will reach the airport as scheduled. Therefore, you need not worry about missing a flight or having hassles before boarding a flight. Therefore, consider a Guwahati airport cab booking from us.
                     </p>
                     <h3>Expert Drivers</h3>
                     <p className="font font22">
                          One of our key components of efficiency is our expert and experienced drivers. Due to them, we can assure efficient cab rides. They know the best routes. As such, they can drive to Lokpriya Gopinath Bordoloi Airport quickly. Due to their knowledge of the shortcuts, they can reach the airport even during traffic jams. Also due to them, we can provide the Guwahati airport taxi service.
                     </p>
                     <h3>Safe</h3>
                     <p className="font font22">
                          When you ride in our taxis, you can remain rest assured of high safety. We provide well-serviced cars. As such, the breakdown possibility is very low. Even if that happens by chance, we will arrange an alternate car quickly. In addition, our experienced drivers negate the possibility of accidents. As a result, you can ride a safe taxi service at Guwahati airport. 
                     </p>
                     <h3>24x7 Customer Support</h3>
                     <p className="font font22">
                          We provide dedicated customer support round the clock. So, you can resolve your queries should they occur. Interestingly, we do not use bots. For example, you might ask for a Guwahati airport cab booking. Likewise, you could ask about Guwahati airport prepaid taxi fare for your trip. Our customer support will answer all of them. 
                     </p>
                     <h3>Affordable Pricing</h3>
                     <p className="font font22">
                          We price cab fares in affordable ranges. As such, you get the best prices. We do not implement any hidden costs. We consider two factors for our pricing—car type and distance travelled. And, there is nothing beyond them. Therefore, our Guwahati airport taxi service gives value for your money.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}