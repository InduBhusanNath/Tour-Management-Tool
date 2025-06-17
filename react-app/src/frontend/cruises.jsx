import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Collapsible from 'react-collapsible';

//Main export function
export default function Cruises(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <CruiseBanner/>
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
                <title>Unforgettable Cruises in India: Top Packages by River & Sea</title>                
                <meta name="description" content="Discover the best cruises in India. Explore our top-rated river and sea India cruise packages, with luxury ships, and curated itineraries across India."/>
                <link rel="canonical" href="https://aeiety.com/cruises"/>
                <meta property="og:title" content="Unforgettable Cruises in India: Top Packages by River & Sea"/>
                <meta property="og:url" content="https://aeiety.com/cruises"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Discover the best cruises in India. Explore our top-rated river and sea India cruise packages, with luxury ships, and curated itineraries across India."/>
                <meta property="og:locale" content="en_GB"/>
            </Helmet>
     </>);
}
//Banner
function CruiseBanner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <figure className="p-0 m-0">
                          <img src="https://i.postimg.cc/m2QX52cZ/cruisebanner.webp" alt="Aeiety Trips" className="img-fluid w-100 p-0 m-0"/>
                     </figure>                     
                </div>
           </div>          
      </>);
}

//Breadcrumb
function BreadCrumb(){
     return(<>
               <div className="row">
                    <div className="col-sm-12 background-ghostwhite">
                          <nav aria-label="breadcrumb">
                               <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/" className="link-secondary">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/aboutus" className="link-secondary">About Us</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Cruises</li>
                               </ol>
                          </nav> 
                    </div>
              </div>
     </>);
}
//Intro
function Intro(){
      return(<>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1>Cruises in India: Explore Stunning River and Sea Voyages</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}