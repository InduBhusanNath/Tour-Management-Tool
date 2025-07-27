import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Accordion from 'react-bootstrap/Accordion';
import AdventureTourPackageDisplay from "./adventure-tour-packages";
export default function AdventureTours(){
       return(
             <>
                <HelmetProvider>
                     <TechnicalSEO/>
                     <div className="container-fluid">
                          <Header/>
                          <AdventureTourismBanner/>
                          <BreadCrumb/>
                          <H1/>
                          <Intro/>                          
                          <AdventureTourTypes/>
                          <AdventureTripPackages/>
                          <WhyChooseOurAdventureTours/>
                          <Faqs/>
                          <Consultation/>
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
                 <img src="https://i.postimg.cc/W3RgsGr1/adventure-tour.webp" alt="adventure tours in India" className="w-100 img-fluid p-0 m-0"/>
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
//H1
function H1(){
      return(<>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Captivating Adventure Tours in India: Unleash the Explorer in You</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

//Intro
function Intro(){
      return(<>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          You must try out something different. Why not go for a trip that calls for thrilling physical activities? We offer exciting adventure tours in India to give you a memorable experience.
                     </p>
                     <p className="font font22">
                          Such trips could be the perfect thing if you crave unique experiences. Also, forget the fear of the challenges from adventure activities. With our guidance, you can enjoy them easily.
                     </p>
                     <p className="font font22">
                          Aeiety Trips provides India's best adventure travel packages at affordable prices. So, engage in exciting activities to experience fun and excitement. Notably, we are one of the best adventure travel companies in India.
                     </p>
                     <p className="font font22">
                          Such tours can entail additional benefits. For example, you can put the courageous version of yourself into action. Additionally, you will experience and learn many new things.
                     </p>
                     <p className="font font22">
                          Our comprehensive coverage of adventure destinations in India ensures exotic places. As such, you will enjoy a holistic thrill. Therefore, explore our adventure tours in India. Then, choose the appropriate package for you. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

//Types of Adventure Tours
function AdventureTourTypes(){
      return(<>
           <div className="row background-honeydew p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Our Adventure Tour Packages: Curated for the Best Experience</h2>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          At Aeiety Trips, the focus is on enabling you to experience the best. Furthermore, we consider emerging customer preferences. We offer a holistic spectrum of adventure tours in India at affordable prices. 
                     </p>
                     <p className="font font22">
                          You can choose activities according to your preferences. Also, our best adventure trip packages are suitable for all types of such tours. As such, you can undertake such a trip solo, with family, or with a group of friends. 
                     </p>                     
                     <p className="font font22">
                          Due to our careful selection, you will find your favorite activities. Also, you can choose the best adventure destinations in India from our excellent packages.
                     </p>
                     <p className="font font22">
                          The adventure activities you can engage in:
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Adventure Packages
function AdventureTripPackages(){
      return(<>
           <div className="row background-honeydew p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <AdventureTourPackageDisplay/>
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
                     <p className="font font22">
                          You want to undergo the best experience. So, you must select the best agency. There can be valid reasons for choosing India's best adventure travel packages from Aeiety Trips. 
                     </p>
                     <p className="font font22">
                          We operate the best adventure tours in India  with perfection. Also, our tailor-made tour packages will unleash the courageous explorer in you. As such, you can choose adventure holiday tours in India that suit you the best. 
                     </p>
                     <p className="font font22">
                          We ensure all-round thrilling experiences. As such, you gain unforgettable memories. Most importantly,  we ensure a safe trip. For that, we provide the essential adventure travel gear and equipment. Safety is our principal priority.
                     </p>
                     <h3>Curated Adventure Tours</h3>
                     <p className="font font22">
                           We offer a broad range of adventure tours in India. They are based on careful considerations. Notably, we ensure experience curated tours. They provide wholesome exploration, excitement, and learning in safe settings. 
                     </p>
                     <h3>Expert and Experienced Guides</h3>
                     <p className="font font22">
                          Our tour guides are expert professionals. Due to experience, they know how to guide such tours.  As such, we ensure the best adventure trip packages in India.
                     </p>
                     <h3>Customization</h3>
                     <p className="font font22">
                          Thrills from different adventure tours in India are not alike. As such, we operate customized adventure tours. For that, we consider your tastes and preferences. Due to our customization, you will find an appropriate tour to your favorite adventure travel destinations in India from us. As such, consider a solo, family, or group trip with our packages.
                     </p>
                     <h3>Hassle-Free</h3>
                     <p className="font font22">
                          Our meticulous planning ensures hassle-free adventure holiday tours in India. Our dedicated staff handles every aspect of your tour , from accommodation to permits. As such, you can focus on your trip with a free mind.
                     </p>
                     <h3>Affordable Pricing </h3>
                     <p className="font font22">
                          Pricing for our best adventure trip packages in India is affordable. Also, we refrain from implementing hidden costs. As such, you need not pay anything other than the billed amount. We ensure the best value for your money. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

//Consultation
function Consultation(){
     return(<>
          <div className="row background-aliceblue p-3">
               <div className="col-sm-3"></div>
               <div className="col-sm-6">
                    <div class="d-grid gap-2">
                         <a class="btn btn-warning" href="/contactus" role="button">Contact Our Experts for a Free Consultation</a>
                    </div>
               </div>
               <div className="col-sm-3"></div>
          </div>
     </>);
}
//FAQs
function Faqs(){
      return(<>
           <div className="row background-azure p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <Accordion flush>
                          <Accordion.Item eventKey="0">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #1. What are adventure tours in India?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         These involve mildly challenging physical activities. For example, scuba diving, paragliding, trekking etc.They entail excitement and unique experiences. 
                                    </p>
                               </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #2. Are adventure activities safe?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                        Top-class tour operators deploy certified guides, provide good safety equipment, and provide safety briefings. So, they are safe.
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item>                        
                     </Accordion>                   
                </div>
                <div className="col-sm-2"></div>
           </div>      
      </>);
}