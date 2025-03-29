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
                <title></title>                
                <meta name="description" content=""/>
                <link rel="canonical" href="https://aeiety.com/guwahati-airport-taxi"/>
                <meta property="og:title" content="Airport Taxi Service in Guwahati by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/guwahati-airport-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about the excellent Guwahati airport taxi service by Aeiety Trips."/>
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
                   <div className="col-sm-12 background-lemonchiffon">
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