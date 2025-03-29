import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

export default function HistoricalTours(){
     return(<>
         <TechnicalSEO/>
         <div className="container-fluid">
             <Header/>
             <HistoricalTourismBanner/>
             <BreadCrumb/>
             <Intro/>
             <Footer/>
         </div>
     </>);
}

//Technical SEO
function TechnicalSEO(){
    return(<>          
            <Helmet>
                  <meta charSet="utf-8"/>
                  <title>Historical Tours in India : Best Heritage Travel Packages</title>                
                  <meta name="description" content="Explore our best historical tours in India to explore ancient sites. Our guided heritage tours in India will help to determine the richness of India’s past."/>
                  <link rel="canonical" href="https://aeiety.com/historical-tours"/>
                  <meta property="og:title" content="Historical Tours in India : Best Heritage Travel Packages"/>
                  <meta property="og:url" content="https://aeiety.com/historical-tours"/>
                  <meta property="og:image" content="https://aeiety.com/MainImages/logo.png"/>
                  <meta property="og:type" content="Web Page"/>
                  <meta property="og:description" content="Explore our best historical tours in India to explore ancient sites. Our guided heritage tours in India will help to determine the richness of India’s past."/>
                  <meta property="og:locale" content="en_GB" />
             </Helmet>  
    </>);  
}
//Banner
function HistoricalTourismBanner(){
    return(<>
         <div className="row">
              <div className="col-sm-12 p-0 m-0">
                   <img src="https://i.postimg.cc/0NfYhJbR/historicaltourism-Banner.webp" alt="historical tourism" className="w-100 img-fluid p-0 m-0"/>
              </div>
         </div>
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
                                  <li class="breadcrumb-item active" aria-current="page">Historical Tours</li>
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
                     <h1 className="text-center">The Best Historical Tours in India : Discover Stories of India's Past</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Why not go on historical tours in India to figure out how the past was? That can lead to an unforgettable experience. We at Aeiety Trips provide the best heritage tour packages for such trips. As such, you can choose among our curated heritage tours in India for a trip. Our guides will take you to all the historical places to visit in India. In addition, they will explain the facts behind the heritage sites. Therefore, you will understand the embedded stories of India’s rich past. Understandably, undertaking our best historical tours in India can entail entertainment and learning. Therefore, consider booking one of our best heritage tour packages to gain value.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}