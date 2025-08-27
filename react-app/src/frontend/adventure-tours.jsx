import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
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
                          {/*<AdventureTripPackages/>*/}
                          <WhyChooseOurAdventureTours/>
                          <Faqs/>
                          <SafetyConsiderations/>
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
                <title>Adventure Tour Packages in India | Beat Challenges, Spice Up</title>                
                <meta name="description" content="Plan your next thrill with adventure tour packages in India and experience the best adventure tours in India, from mountain treks to coastal dives and beyond."/>
                <link rel="canonical" href="https://aeiety.com/adventure-tours"/>
                <meta property="og:title" content="Adventure Tour Packages in India | Beat Challenges, Spice Up"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tours"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Plan your next thrill with adventure tour packages in India and experience the best adventure tours in India, from mountain treks to coastal dives and beyond."/>
                <meta property="og:locale" content="en_GB"/>
           </Helmet>  
  </>);  
}
//Banner
function AdventureTourismBanner(){
  return(<>
       <div className="row">
            <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.postimg.cc/Vv3rjqF7/adventurebanner.webp" alt="Adventure Tour Packages in India by Aeiety Trips" className="w-100 img-fluid p-0 m-0"/>
            </div>
       </div>
  </>);
}
//Breadcrumb
function BreadCrumb(){
  return(<>
            <div className="row">
                 <div className="col-sm-12 background-cornsilk">
                      <nav aria-label="breadcrumb">
                           <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>  
                                <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li>                                    
                                <li class="breadcrumb-item active" aria-current="page">Adventure Tours</li>
                           </ol>
                      </nav> 
                 </div>
           </div>
  </>);
}
//H1
function H1(){
      return(<>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Curated Adventure Tour Packages in India at Budget Prices</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

//Intro
function Intro(){
      return(<>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                     
                     <p className="font font22">
                          Trying out something different has its charm. Isn’t it? Then, why not go for a trip that calls for thrilling physical activities? We offer excellent adventure tour packages in India to give you a memorable experience.
                     </p>
                     <section className="p-3">
                          <AdventureTourPackageDisplay/>
                     </section>
                     <p className="font font22">
                          Investing in the packages can be the perfect thing to do if you crave unique experiences. Also, forget the fear of the challenges from adventure activities. With our guidance, you can enjoy adventure tours in India to the fullest.
                     </p>
                     <p className="font font22">
                          Such tours can entail multiple benefits. For example, you can put the courageous version of yourself into action. Additionally, you will experience and learn many new things.
                     </p>
                     <p className="font font22">
                          So, engage in exciting activities to experience fun and excitement. Notably, Aeiety Trips is one of the best adventure travel companies in India. And, we provide India's best adventure travel packages at affordable prices. 
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
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Types of Activities in Our Adventure Tour Packages in India </h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          At Aeiety Trips, the focus is on enabling you to experience the best. Furthermore, we take into account emerging customer preferences. We offer a holistic spectrum of adventure tour packages in India at affordable prices. 
                     </p>
                     <p className="font font22">
                          You can choose activities according to your preferences. Also, our adventure tours in India are suitable for all types of such tours. As such, you can undertake such a trip solo, with family, or with a group of friends. 
                     </p>
                     <p className="font font22">
                          Due to our careful selection, you will find your favorite activities. Also, you can choose the best adventure destinations in India from our excellent packages.
                     </p>
                     <p className="font font22">
                          Types of adventure activities you can engage in include mountain expeditions, water activities, aerial ventures, jungle safaris, and desert excursions. 
                     </p>
                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Adventure Packages
function AdventureTripPackages(){
      return(<>
           <div className="row background-cornsilk p-3">
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
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Adventure Tour Packages in India</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          You want to undergo the best experience. So, you must select the best agency. There can be valid reasons for choosing India's best adventure travel packages from Aeiety Trips. 
                     </p>
                     <p className="font font22">
                          Our tailor-made tour packages will unleash the courageous explorer in you. As such, you can choose adventure holiday tours in India that suit you the best. Also, we operate the best adventure tours in India  with perfection. 
                     </p>
                     <p className="font font22">
                          We ensure all-round thrilling experiences. As such, you gain unforgettable memories. Most importantly,  we ensure a safe trip. For that, we provide the essential <Link to="https://en.wikipedia.org/wiki/Adventure_travel" className="text-decoration-none link-danger" target="_blank" rel="noopener noreferrer">adventure travel</Link> gear and equipment. Safety is our principal priority.
                     </p>
                     <h3>Curated Adventure Tours</h3>
                     <p className="font font22">
                          Our best-in-class adventure travel packages are based on careful metrics. Notably, our curated tours ensure the best experience. They provide wholesome exploration, excitement, and learning in safe settings. We offer a broad range of adventure tours in India to choose from.
                     </p>
                     <h3>Expert and Experienced Guides</h3>
                     <p className="font font22">
                          Our tour guides are expert professionals. Due to experience, they know how to guide such tours.  As such, we ensure the best adventure travel guides.
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
                          Pricing for our best adventure tour packages in India is affordable. Also, we refrain from implementing hidden costs. As such, you need not pay anything other than the billed amount. We ensure the best value for your money. 
                     </p>
                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}


//FAQs
function Faqs(){
      return(<>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                     <h2>FAQs : Adventure Trip Packages</h2>
                </div>
                <div className="col-sm-8"></div>
           </div>
           <div className="row background-cornsilk p-3">
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
                          <Accordion.Item eventKey="2">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #3. Can I travel solo on adventure travels?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Yes, you can. Our assistance will put you at ease. 
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #4. What are the inclusions in adventure travel packages?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Please check our package details for the inclusions.
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item> 
                          <Accordion.Item eventKey="4">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #5. How can I book an adventure journey?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         You can book on our website. Or, a customer service rep can book one for you. 
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item> 
                          <Accordion.Item eventKey="5">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #6. What level of physical fitness is required to participate in adventure activities?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         You need to have at least a certain level of fitness. You can ask one of our experts for an explanation.  
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item>                           
                     </Accordion>                   
                </div>
                <div className="col-sm-2"></div>
           </div>      
      </>);
}
//Safety
function SafetyConsiderations(){
      return(<>
           <div className="row background-cornsilk p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h2>Safety Considerations Before Adventure Tours</h2>
               </div>
               <div className="col-sm-1"></div>
          </div>
          <div className="row background-cornsilk p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <p className="font font22">
                          The urge to push beyond the boundary will drive you in your adventure travel. You will undergo memorable experiences. They could prompt you to go for adventure tours in India again. However, there is a guiding principle. You should not undermine carefulness.  
                     </p>
                     <p className="font font22">
                          At Aeiety Trips, our adventure travel packages ensure safety. That will make your adventure trip exciting and risk-free.
                     </p>
                     <p className="font font22">
                          Here is how we ensure safety:
                     </p>
                     <h3>Expert Guides</h3>
                     <p className="font font22">
                          Our guides are well-trained professionals. They know the best practices of adventure trips. In addition, they are experts in emergency preparedness. 
                     </p>
                     <h3>Reliable Gear</h3>
                     <p className="font font22">
                          We provide tried and tested gear for adventure travel. So, they are 100% sage. Also, they are customized for the respective environment.
                     </p>
                     <h3>Risk Management</h3>
                     <p className="font font22">
                          We manage risks. For that, we brief on the essentials before every trip. Also, we monitor the weather conditions. We allow going on adventure tours only in favorable weather.
                     </p>
                     <h3>Advice</h3>
                     <p className="font font22">
                           Your adventure activities will be smooth, even if you are a newbie. We advise you on the best practices, packing checklists, and other essential matters. As such, you will experience the best.
                     </p>
                     
               </div>
               <div className="col-sm-1"></div>
          </div>
      </>);
}

//Consultation
function Consultation(){
     return(<>
           <div className="row background-cornsilk p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h2>Speak With Our Experts</h2>
               </div>
               <div className="col-sm-1"></div>
          </div>
          <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Why wait any longer to enjoy a challenging and inspiring tour? Browse our exclusive adventure tour packages in India. Contact our representatives to advise you on the most suitable adventure tour in India for you. You can call our customer helpline or drop a message.
                     </p>
                </div>
                <div className="col-sm-1"></div>
          </div>
          <div className="row background-cornsilk p-3">
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