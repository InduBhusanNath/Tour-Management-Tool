import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";

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
     <h1>Banner</h1>
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
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">The Best Delhi Airport Taxi — Your Ride, Right On Time</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          24x7 Delhi airport taxi service is one of our exclusive service lines. We at Aeiety Trips ensure smooth transfers at the Indira Gandhi International Airport. As such, you get a seamless taxi facility at the IGI airport. 
                     </p>
                     <p className="font font22">
                          Our best-in-class taxi service at Delhi airport is simple, on time, safe, and fairly priced. Therefore, availing of a reliable airport taxi Delhi will pose no hassles. You will get a cab whenever you need one. 
                     </p>
                     <p className="font font22">
                          We genuinely care about being on time. As such, our timely Delhi airport pickup and drop eliminates the risk of missing your flight or getting late to your scheduled work after landing. Therefore, book our best Delhi airport taxi service to experience the best.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Why Choose Us
 function WhyChooseDelhiAirportTaxi(){
      return(<>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Delhi Airport Taxi</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Hiring the best Delhi airport taxi is essential. That can give you the best experience. Notably, you need to ensure the best service. If you choose the wrong one, you might face consequences, like missing your flight or paying excessive fares. 
                     </p>
                     <p className="font font22">
                          Good taxi service at Delhi airport is also about peace of mind. We at Aeiety Trips provide the best Delhi airport transfer. 
                     </p>
                     <h3>Customer-Centricity</h3>
                     <p className="font font22">
                          We care for customers. So, we strive for their best cab experience. For us, every customer is important. Due to this, we run the best taxi service at Delhi airport to create values for customers.
                     </p>
                     <h3>Timeliness</h3>
                     <p className="font font22">
                          The biggest thing we focus on is time. We pick up on time. So, the possibility of missing your flight does not arise. So when you book our airport taxi Delhi service, we will be right there, exactly when you need us. Our airport cabs Delhi operate round-the-clock.
                     </p>
                     <h3>Reasonable Pricing</h3>
                     <p className="font font22">
                          We have set reasonable pricing for our cabs. In fact, we are a provider of affordable <Link to="/delhi-taxi" className="text-decoration-none link-danger">cab service in Delhi</Link>. Also, our pricing is transparent. As such, there are no hidden or extra charges. You get value for your money. Notably, you can fix the fare with our best prepaid taxi Delhi airport. 
                     </p>
                     <h3>Expert Drivers</h3>
                     <p className="font font22">
                          Our airport taxi Delhi drivers are experienced and trained. As a result, they can drive safely. Also, they know the routes well. And, they know the shortcuts and traffic. Say you booked a one-way taxi to Delhi airport, the driver will reach the IGI airport in a short time due to their knowledge of the best routes.
                     </p>
                     <h3>Safety</h3>
                     <p className="font font22">
                          Safety matters the most in our excellent taxi service at Delhi airport. Clean cars, frequent servicing, and polite drivers entail safety.
                     </p>
                     <h3>24x7 Customer Service</h3>
                     <p className="font font22">
                          We offer dedicated customer service round-the-clock. Remarkably, we do not implement bots to answer your queries. We provide a customer-friendly Delhi airport taxi service. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);      
}