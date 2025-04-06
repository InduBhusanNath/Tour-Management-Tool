import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
                          We provide reliable and hassle-free taxi service. As such, we are identified as the best cab service in Guwahati. Also, we ensure comfortable, timely, and safe cab rides. Notably, our Guwahati airport cab fare is affordable. Therefore, a Guwahati airport cab booking from Aeiety Trips will entail the best experience.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
     </>)
}