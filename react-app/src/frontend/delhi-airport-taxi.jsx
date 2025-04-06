import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
                     <h1 className="text-center">Delhi Airport Taxi — Your Ride, Right On Time</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Travelling can be exhausting — but finding a Delhi airport taxi shouldn’t add to that stress. Whether you’ve just landed at IGI Airport or need to catch a flight, we’re here to make your airport travel super easy, comfortable, and absolutely hassle-free.
                     </p>
                     <p className="font font22">
                          We believe booking an airport taxi Delhi should feel simple, clear, and reliable. No confusing pricing. No last-minute drama. Just clean cabs, polite drivers, and on-time pick-up & drop — always.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}