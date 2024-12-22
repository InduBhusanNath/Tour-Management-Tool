import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
export default function EcoTourism(){
       return(<>
             <TechnicalSEO/>
             <div className="container-fluid">
                   <Header/>
                   <EcoTourismBanner/>
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
                <title>Eco Tourism: Browse Top Destinations for Sustainable Travel</title>                
                <meta name="description" content="Discover the best eco tourism destinations for your next sustainable travel. Delve into the hidden secrets of nature and support eco-friendly practices."/>
                <link rel="canonical" href="https://aeiety.com/eco-tourism"/>
                <meta property="og:title" content="Eco Tourism by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tourism"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about Eco Tourism by Aeiety Trips."/>
                <meta property="og:locale" content="en_GB" />
           </Helmet>  
  </>);  
}
//Banner
function EcoTourismBanner(){
  return(<>
       <div className="row">
            <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.postimg.cc/jqN55Y4C/Ecotourism-Banner.webp" alt="eco tourism" className="w-100 img-fluid p-0 m-0"/>
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
                                <li class="breadcrumb-item active" aria-current="page">Eco Tourism</li>
                           </ol>
                      </nav> 
                 </div>
           </div>
  </>);
}