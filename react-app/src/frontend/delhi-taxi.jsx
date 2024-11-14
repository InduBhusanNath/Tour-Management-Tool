import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Collapsible from 'react-collapsible';
import TaxiService from "./taxi-service";


//Main export function
export default function DelhiTaxi(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <BreadCrumb/>
                     <Body1/>
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
                <link rel="canonical" href="https://aeiety.com/guwahati-taxi"/>
                <meta property="og:title" content="Taxi Service in Guwahati by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/guwahati-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about the excellent cab service in Guwahati by Aeiety Trips."/>
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
            <div className="row">
                <div className="col-sm-12">
                     
                     Cab service in Delhi is more affordable, efficient, and satisfying.                     
                   
                </div>
            </div>
      
      </>);
}