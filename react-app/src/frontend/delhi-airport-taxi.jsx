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
                <link rel="canonical" href="https://aeiety.com/delhi-airport-taxi"/>
                <meta property="og:title" content="Taxi Service in Delhi by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/delhi-airport-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about the excellent Delhi airport taxi service by Aeiety Trips."/>
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