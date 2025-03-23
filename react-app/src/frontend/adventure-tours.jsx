import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
export default function AdventureTours(){
       return(
             <>
                 <TechnicalSEO/>
                 <div className="container-fluid">
                          <Header/>
                          <AdventureTourismBanner/>
                          <BreadCrumb/>
                          <Intro/>
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
                <title>Adventure Tours in India | Engage in Thrilling Activities</title>                
                <meta name="description" content="Discover the best adventure tours in India with top adventure trip packages in India. Trek, raft, and explore breathtaking landscapes for a unique thrill."/>
                <link rel="canonical" href="https://aeiety.com/adventure-tours"/>
                <meta property="og:title" content="Adventure Tours in India | Engage in Thrilling Activities"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tours"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Discover the best adventure tours in India with top adventure trip packages in India. Trek, raft, and explore breathtaking landscapes for a unique thrill."/>
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
//Intro
function Intro(){
      return(<>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Spice Up With Amazing Adventure Tours in India</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Go on adventure tours in India with our guidance. That can be the perfect thing to do if you crave unique experiences. For that, we at Aeiety Trips have structured the best adventure trip packages in India. As such, you can engage in exciting activities to experience fun and excitement. Notably, undertaking such a trip can entail additional benefits. For example, you will get to put the courageous version of yourself into action. Also, you will explore and learn many new things. Our comprehensive coverage of adventure destinations in India ensures the exotic places. As such, you will enjoy a holistic thrill. Notably, we are one of the best adventure travel companies in India. Therefore, explore our service. Then, choose the appropriate package for you. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
