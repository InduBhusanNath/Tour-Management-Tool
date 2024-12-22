import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
export default function AdventureTourism(){
       return(
             <>
                 <TechnicalSEO/>
                 <div className="container-fluid">
                       <Header/>
                       <AdventureTourismBanner/>
                       <BreadCrumb/>
                       <Footer/>
                 </div>              
             </>   
       );
}
//Technical SEO
function TechnicalSEO(){
  return(<>          
          <Helmet>
                <meta charSet="utf-8"/>
                <title>Adventure Tourism: Top Destinations, Exciting Experiences</title>                
                <meta name="description" content="Experience the thrill of adventure tourism. Participate in exciting activities at top adventure travel destinations. Unleash the courageous explorer in you."/>
                <link rel="canonical" href="https://aeiety.com/adventure-tourism"/>
                <meta property="og:title" content="Adventure Tourism by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tourism"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about Adventure Tourism by Aeiety Trips."/>
                <meta property="og:locale" content="en_GB" />
           </Helmet>  
  </>);  
}
//Banner
function AdventureTourismBanner(){
  return(<>
       <div className="row">
            <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.postimg.cc/tCK848DR/Adventure-Tourism-Banner.webp" alt="adventure tourism" className="w-100 img-fluid p-0 m-0"/>
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
                                <li class="breadcrumb-item active" aria-current="page">Adventure Tourism</li>
                           </ol>
                      </nav> 
                 </div>
           </div>
  </>);
}
