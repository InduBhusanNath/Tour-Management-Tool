import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

export default function HistoricalTourism(){
     return(<>
         <TechnicalSEO/>
         <div className="container-fluid">
             <Header/>
             <HistoricalTourismBanner/>
             <BreadCrumb/>
             <Footer/>
         </div>
     </>);
}

//Technical SEO
function TechnicalSEO(){
    return(<>          
            <Helmet>
                  <meta charSet="utf-8"/>
                  <title>Historical Tourism: Discover the Best Heritage Sites</title>                
                  <meta name="description" content="Visualize the past with our best historical tourism destinations. Iconic heritage sites will help you determine the richness of the ancient civilizations."/>
                  <link rel="canonical" href="https://aeiety.com/historical-tourism"/>
                  <meta property="og:title" content="Historical Tourism by Aeiety Trips"/>
                  <meta property="og:url" content="https://aeiety.com/historical-tourism"/>
                  <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                  <meta property="og:type" content="Web Page"/>
                  <meta property="og:description" content="Learn about Historical Tourism by Aeiety Trips."/>
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
                                  <li class="breadcrumb-item active" aria-current="page">Historical Tourism</li>
                             </ol>
                        </nav> 
                   </div>
             </div>
    </>);
}