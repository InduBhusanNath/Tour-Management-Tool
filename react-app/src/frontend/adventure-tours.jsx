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
                     <div className="container-fluid background-khaki">
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
                          <BestAdventureTourTime/>
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
                <title>Adventure Tours in India | Explore Thrilling Getaways </title>                
                <meta name="description" content="Embark on adventure tours in India with curated adventure travel packages.From scuba diving to paragliding, enjoy tailor-made trips for every thrill seeker."/>
                <link rel="canonical" href="https://aeiety.com/adventure-tours"/>
                <meta property="og:title" content="Adventure Tours in India | Explore Thrilling Getaways"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tours"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Embark on adventure tours in India with curated adventure travel packages.From scuba diving to paragliding, enjoy tailor-made trips for every thrill seeker."/>
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
            <div className="row background-cornsilk">
                 <div className="col-sm-12">
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
                     <h1 className="text-center">Best Adventure Tours in India with Exclusive Packages</h1>
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
                          Trying out something different has its charm. Isn’t it? So, embark on an adventure tour in India with us for a truly memorable experience. In other words, such a package can be the perfect thing if you crave unique experiences. That way, you will experience the thrill of courageous physical activities.
                     </p>
                     <p className="font font22">
                          Such tours can entail multiple benefits. For example, you can put the brave version of yourself into action. Additionally, adventure travel packages let you experience and learn many new things. So, engage in exciting activities to experience fun and excitement. 
                     </p>
                     <p className="font font22">
                          All you need to do is explore our curated India adventure tours. After that, spot the one that meets your expectations and budget. You are done! Doors are open for a thrilling experience.
                     </p>                    
                     
                     <section className="p-3">
                          <AdventureTourPackageDisplay/>
                     </section>
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
                     <h2 className="text-center">Types of Activities in Adventure Tours in India</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Aeiety Trips is one of the best adventure travel companies in India. We offer a holistic spectrum of adventure tours in India at budget prices. Our comprehensive coverage of India’s adventure destinations ensures exotic places. Also, you can choose activities according to your preferences.
                     </p>
                     <p className="font font22">
                          The focus is on enabling you to experience the best. Furthermore, we take into account emerging customer preferences. Also, forget the fear of the challenges from adventure activities. With our guidance, you can enjoy adventure travel packages to the fullest.
                     </p>
                     <p className="font font22">
                          Due to our careful selection, you will find your favorite activities. Also, you can choose the best destinations from our excellent packages. Types of adventure activities you can engage in include:
                     </p>
                     <h3>Mountain Expeditions</h3>
                     <p className="font font22">
                          These involve trekking or climbing in mountain ranges. In India, there are many spots for such activities, such as Himachal, Manali, Sikkim, Ladakh, etc.
                     </p>
                     <h3>Water Activities</h3>
                     <p className="font font22">
                          These activities include rafting, water skiing, kayaking, surfing, scuba diving, etc.
                     </p>
                     <h3>Aerial Ventures</h3>
                     <p className="font font22">
                          These activities happen in the air. Examples are paragliding, riding hot air balloons, zip lining, etc.
                     </p>
                     <h3>Jungle Safaris</h3>
                     <p className="font font22">
                          These activities include venturing inside jungles, usually in a jeep, to watch wild animals. 
                     </p>
                     <p className="font font22">
                          Remember, we provide India's best adventure packages at affordable prices. Again, our adventure tours in India are suitable for all types of such tours. As such, you can undertake such a trip solo, with family, or with a group of friends.
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
                     <h2 className="text-center">Why Choose Our Adventure Travel Packages</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          You want to undergo the best experience. So, you must select the agency that sells India's best adventure packages. That can be valid reasons for choosing Aeiety Trips. Our tailor-made tour packages will unleash the hidden explorer in you. In other words, we ensure all-round thrilling experiences. 
                     </p>
                     <p className="font font22">
                          Purchase adventure holiday tours in India that suit you the best. As such, you gain unforgettable memories. 
                     </p>
                     <p className="font font22">
                         Most importantly,  we ensure a safe trip. For that, we provide the essential gear and equipment. Safety is our principal priority. Here are the principal reasons for investing in our exclusive adventure packages.
                     </p>
                     
                     <h3>Customization</h3>
                     <p className="font font22">
                          Our best-in-class <Link to="https://en.wikipedia.org/wiki/Adventure_travel" className="text-decoration-none link-danger" target="_blank" rel="noopener noreferrer">adventure tours</Link> in India are based on calculated metrics. Notably, our tailor-made tours ensure the best experience. They provide wholesome exploration, excitement, and learning in safe settings. We offer a broad range of adventure travel packages to choose from.
                     </p>
                     <p className="font font22">
                          As tastes and preferences differ among customers, we operate customized tours. Due to this, you will find an appropriate tour to your favorite adventure travel destinations in India from us. As such, plan a solo, family, or group trip with our packages.
                     </p>
                     <h3>Expert and Experienced Guides</h3>
                     <p className="font font22">
                          Our tour guides are expert professionals. Due to experience, they know how to guide such tours. As such, your participation in activities will be safe.
                     </p>
                     <h3>Hassle-Free</h3>
                     <p className="font font22">
                          Our meticulous planning plays a big role. That ensures hassle-free adventure holiday tours in India. Our dedicated staff handles every aspect of your tour, from accommodation to permits. As such, you can focus on your trip with a free mind.
                     </p>
                     <h3>Affordable Pricing </h3>
                     <p className="font font22">
                          Pricing for our best adventure travel packages is affordable. Also, we refrain from implementing hidden costs. As such, you need not pay anything other than the billed amount. We ensure the best value for your money.
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
                     <h2 className="text-center">FAQs: Adventure Trip Packages</h2>
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
                     <h2 className="text-center">Safety Considerations Before Adventure Tours in India</h2>
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
                     <p className="font font22">
                          <ul>
                               <li><b>Expert Guidance:</b> Our guides are well-trained professionals. They know the best practices of adventure activities. In addition, they are experts in emergency preparedness.</li>
                               <li><b>Reliable Gear:</b> We provide tried and tested gear for adventure tours in India. So, they are 100% safe. Also, they are customized for the respective environment.</li>
                               <li><b>Risk Management:</b> We manage risks. For that, we brief on the essentials before every trip. Also, we monitor the weather conditions. We allow going on adventure tours only in favorable weather.</li>
                               <li><b>Advice:</b> Your adventure activities will be smooth, even if you are a newbie. We advise you on the best practices, packing checklists, and other essential matters. As such, you will experience the best.</li>
                          </ul>
                     </p>
               </div>
               <div className="col-sm-1"></div>
          </div>
      </>);
}
//Best Time for Adventure
function BestAdventureTourTime(){
      return(<>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                     <h2 className="text-center">Best Time for Adventure Tours in India</h2>
                </div>
                <div className="col-sm-8"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          There is no particular time for such activities. The place and the activities dictate the best time for adventure tours in India. For example, May-June and September-November could be the right time for mountain activities. Skies are usually clear during these periods. Also, fine weather makes its presence felt.
                     </p>
                     <p className="font font22">
                          December-February is perfect for desert trips. Again, October-May could be the best time for water activities, such as scuba diving, kayaking, surfing, etc. So, choose our exclusive adventure holiday packages accordingly. However, skipping the monsoon season for adventure activities could be a good idea. 
                     </p>
                     <p className="font font22">
                          Get in touch with our experts if you want to know about the best time. They will advise you on when to go on adventure tours in India.
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
                     <h2>Speak With Our Experts to Understand Adventure Tours in India</h2>
               </div>
               <div className="col-sm-1"></div>
          </div>
          <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                         Why wait any longer to enjoy a challenging and inspiring tour? Browse our exclusive adventure travel packages. Contact our representatives to advise you on the most suitable adventure tours in India for you. You can call our customer helpline or drop a message.
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