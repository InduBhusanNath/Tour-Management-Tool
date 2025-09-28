import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Accordion from 'react-bootstrap/Accordion';


export default function ScubaDivingAndaman(){
     return(<>         
             <HelmetProvider>
                 <TechnicalSEO/>
                 <div className="container-fluid">
                     <Header/>
                     <ScubaDivingAndamanBanner/>
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
                <title>Scuba Diving in Andaman | Best Spots, Costs & Packages</title>                
                <meta name="description" content="Experience scuba diving in Andaman like never before! Explore vibrant coral reefs, spot turtles and rays. Book our exclusive Andaman scuba packages today."/>
                <link rel="canonical" href="https://aeiety.com/adventure-tours"/>
                <meta property="og:title" content="Scuba Diving in Andaman | Best Spots, Costs & Packages"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tours"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Experience scuba diving in Andaman like never before! Explore vibrant coral reefs, spot turtles and rays. Book our exclusive Andaman scuba packages today."/>
                <meta property="og:locale" content="en_GB"/>
           </Helmet>  
  </>);  
}
//Banner
function ScubaDivingAndamanBanner(){
  return(<>
       <div className="row">
            <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.ibb.co/qSgnB7k/scubadiving-ANDAMANBanner.webp" alt="Scuba Diving in Andaman by Aeiety Trips" className="w-100 img-fluid p-0 m-0"/>
            </div>
       </div>
  </>);
}
//Breadcrumb
function BreadCrumb(){
  return(<>
            <div className="row background-cornsilk">
                 <div className="col-sm-12">
                      <nav aria-label="breadcrumb">
                           <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>  
                                <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li>
                                <li class="breadcrumb-item"><a href="/adventure-tours">Adventure Tours</a></li>
                                <li class="breadcrumb-item"><a href="/scuba-diving">Scuba Diving Packages</a></li>                                    
                                <li class="breadcrumb-item active" aria-current="page">Scuba Diving in Andaman</li>
                           </ol>
                      </nav> 
                 </div>
           </div>
  </>);
}