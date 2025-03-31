import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function AdventureTours(){
       return(
             <>
                <HelmetProvider>
                     <TechnicalSEO/>
                     <div className="container-fluid">
                          <Header/>
                          <AdventureTourismBanner/>
                          <BreadCrumb/>
                          <Intro/>
                          <AdventureTourTypes/>
                          <WhyChooseOurAdventureTours/>
                          <Footer/>
                     </div>  
                 </HelmetProvider>            
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
                 <div className="col-sm-12 background-azure">
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
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Spice Up With Amazing Adventure Tours in India</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font2vw">
                          Go on adventure tours in India with our guidance. That can be the perfect thing to do if you crave unique experiences. For that, we at Aeiety Trips have structured the best adventure trip packages. As such, you can engage in exciting activities to experience fun and excitement. Notably, undertaking such a trip can entail additional benefits. For example, you will get to put the courageous version of yourself into action. Also, you will explore and learn many new things. Our comprehensive coverage of adventure destinations in India ensures the exotic places. As such, you will enjoy a holistic thrill. Notably, we are one of the best adventure travel companies in India. Therefore, explore our service. Then, choose the appropriate package for you.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Types of Adventure Tours
function AdventureTourTypes(){
      return(<>
           <div className="row p-3 background-aliceblue">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Types of Adventure Tours in India</h2>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font2vw">
                          At Aeiety Trips, we offer a holistic spectrum of adventure tours in India. Therefore, you can choose activities according to your preferences. Also, our best adventure trip packages are aimed at all types of travelers. As such, you can undertake such a trip solo, with family, or with a group of friends. The adventure activities you can engage in:
                     </p>
                     <p className="font font2vw">
                          <ul>
                               <li>Trekking</li>
                               <li>Wildlife Safaris</li>
                               <li>Rafting</li>
                               <li>Paragliding</li>
                               <li>Mountain Biking</li>
                               <li>Rock Climbing</li>
                               <li>Caving</li>
                               <li>Skiing</li>
                          </ul>
                     </p>
                     <p className="font font2vw">
                          Due to our careful selection, you will find your favorite activities. Also, you can choose the best adventure destinations in India from our excellent packages.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Why Choose Adventure Trip Packages
function WhyChooseOurAdventureTours(){
      return(<>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Adventure Trip Packages</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font2vw">
                          Choose our best adventure tours in India for valid reasons. We at Aeiety Trips operate the best adventure trip packages with perfection. Also, our tailor-made tour packages will unleash the courageous explorer in you. As such, you can choose adventure holiday tours in India that suit you the best. 
                     </p>
                     <p className="font font2vw">
                          We ensure all-round thrilling experiences. As such, you gain unforgettable memories. Most importantly,  we ensure a safe trip. For that, we provide the essential adventure travel gear and equipment. Safety is our principal priority.
                     </p>
                     <h3>Curated Adventure Tours</h3>
                     <p className="font font2vw">
                          We offer a broad range of adventure tours in India. They are based on careful considerations. Notably, we ensure experience curated tours. They provide wholesome exploration, excitement, and learning in safe settings. 
                     </p>
                     <h3>Expert and Experienced Guides</h3>
                     <p className="font font2vw">
                          Our tour guides are expert professionals. Due to experience, they know how to guide such tours. India.  Due to their expertise, we ensure the best adventure trip packages in India.
                     </p>
                     <h3>Customization</h3>
                     <p className="font font2vw">
                          Thrills from different adventure tours in India are not alike. As such, we operate customized adventure tours. For that, we consider your tastes and preferences. Due to our customization, you will find an appropriate tour to your favorite adventure travel destinations in India from us. As such, consider a solo, family, or group trip with our packages.
                     </p>
                     <h3>Hassle-Free</h3>
                     <p className="font font2vw">
                          Our meticulous planning ensures hassle-free adventure holiday tours in India. Our dedicated staff handles every aspect of your tour , from accommodation to permits. As such, you can focus on your trip with a free mind.
                     </p>
                     <h3>Affordable Pricing </h3>
                     <p className="font font2vw">
                          Pricing for our best adventure trip packages in India is affordable. Also, we refrain from implementing hidden costs. As such, you need not pay anything other than the billed amount. We ensure the best value for your money. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}