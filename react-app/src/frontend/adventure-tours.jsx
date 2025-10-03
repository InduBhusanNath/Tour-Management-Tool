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
                <title>Adventure Tour Packages in India | Holidays Full of Thrills</title>                
                <meta name="description" content="Discover top adventure tour packages in India. From scuba diving to paragliding, enjoy unforgettable adventure holidays tailored for thrill-seekers like you."/>
                <link rel="canonical" href="https://aeiety.com/adventure-tours"/>
                <meta property="og:title" content="Adventure Tour Packages in India | Holidays Full of Thrills"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tours"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Discover top adventure tour packages in India. From scuba diving to paragliding, enjoy unforgettable adventure holidays tailored for thrill-seekers like you."/>
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
                     <h1 className="text-center">Best Adventure Tour Packages in India for Thrilling Holidays</h1>
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
                         Exploration and joy can go together. To experience this, purchase adventure tour packages in India from us. They will give you opportunities to engage in exciting activities. As such, you will gain lifetime memories.   
                     </p>
                     <p className="font font22">
                          Such activities involve courageous physical ventures. So, you can experience the thrill you have been craving for. Interestingly, adventure holidays enable learning many new things. So, engage in exciting activities to experience fun and excitement. Also, the activities can help to discover a new version of you. 
                     </p>
                     <p className="font font22">
                          All you need to do is explore our curated adventure tour packages in India. After that, spot the one that meets your expectations and budget. You are done! Doors are open for a thrilling experience.
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
                     <h2 className="text-center">Types of Activities in Adventure Tour Packages in India</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Aeiety Trips is one of the best travel companies. We offer the best adventure tours in India at budget prices. Our comprehensive coverage of India’s destinations ensures exotic places. Also, you can choose activities according to your preferences.
                     </p>
                     
                     <h3>Mountain Expeditions</h3>
                     <p className="font font22">
                         These involve trekking or climbing in mountain ranges. In India, there are many spots for such activities, such as Himachal, Manali, Sikkim, Ladakh, etc.
                     </p>
                     <h3>Water Activities</h3>
                     <p className="font font22">
                         These include kayaking, surfing, rafting, water skiing, scuba diving, etc.
                     </p>
                     <h3>Aerial Ventures</h3>
                     <p className="font font22">
                         These activities happen in the air. Typical examples of such ventures are riding hot air balloons, zip lining,  paragliding, etc.
                     </p>
                     <h3>Jungle Safaris</h3>
                     <p className="font font22">
                          These activities include venturing inside jungles, usually in a jeep, to watch wild animals. 
                     </p>
                     <p className="font font22">
                          Remember, we provide best India travel packages at affordable prices. Again, our adventure tours in India are suitable for all types of such tours. As such, you can undertake such a trip solo, with family, or with a group of friends.
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
                     <h2 className="text-center">Why Choose Our Packages for Adventure Tour Packages in India </h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          You want to undergo the best experience. So, you must select the agency that sells India's best packages for adventure tours in India.  As such, selecting Aeiety Trips makes sense. Our thoughtful packages will help to activate the hidden explorer in you.
                     </p>
                     <p className="font font22">
                          Choose packages that suit you the best. As such, you gain unforgettable memories from our India adventure holidays. 
                     </p>
                     <p className="font font22">
                          Most importantly, we ensure a safe trip. For that, we provide the essential gear and equipment. Safety is our principal priority. Here are the principal reasons for investing in our exclusive packages.
                     </p>                     
                     <h3>Customization</h3>
                     <p className="font font22">
                          Our best-in-class <Link to="https://en.wikipedia.org/wiki/Adventure_travel" className="text-decoration-none link-danger" target="_blank" rel="noopener noreferrer">adventure tours</Link> in India are based on calculated metrics. Notably, our tailor-made packages ensure the best experience. They provide wholesome exploration, excitement, and learning in safe settings. We offer a broad range of India adventure holiday packages to choose from.
                     </p>
                     <p className="font font22">
                          As tastes and preferences differ among customers, we operate customized tours. Therefore, you will find an appropriate  trip of the kind with your favourite activities. As such, you can plan a solo, family, or group trip with our packages.
                     </p>
                     <h3>Expert and Experienced Guides</h3>
                     <p className="font font22">
                          Our tour guides are expert professionals. Due to experience, they know how to guide such tours.  As such, your participation in activities will be safe.
                     </p>
                     <h3>Hassle-Free</h3>
                     <p className="font font22">
                         Our personalized planning plays a big role in assuring hassle-free adventure tour packages in India. Our dedicated staff handles every aspect of your tour, from accommodation to permits. As such, you can focus on your trip with a free mind.
                     </p>
                     <h3>Affordable Pricing </h3>
                     <p className="font font22">
                         Pricing for our best packages for India adventure holidays is affordable. Again, we refrain from implementing hidden costs. As such, you need not pay anything other than the billed amount. We ensure the best value for your money.
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
                     <h2 className="text-center">FAQs: Adventure Tour Packages in India</h2>
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
                                         #1. What are adventure travels?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         These are trips with mildly challenging physical activities. They entail excitement and unique experiences. You can enjoy paragliding, trekking,scuba diving,  etc. during such tours. 
                                    </p>
                               </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #2. Are exploration activities safe?
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
                                         #3. Can I travel solo on adventure journeys?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Yes, you can. We will guide you with essential matters. 
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #4. What are the inclusions in India travel packages?
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
                                         #5. How can I book an adventure holiday package?
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
                                         #6. What level of physical fitness is required to participate in such activities?
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
                     <h2 className="text-center">Safety Considerations Before Choosing Adventure Tour Packages in India</h2>
               </div>
               <div className="col-sm-1"></div>
          </div>
          <div className="row background-cornsilk p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <p className="font font22">
                         The urge to push beyond the boundary will drive you in your travels. You will undergo memorable experiences. They could prompt you to go for adventure tour packages in India again. However, there is a guiding principle. You should not undermine carefulness.  
                     </p>
                     <p className="font font22">
                         At Aeiety Trips, our packages for adventure holidays ensure safety. That will make your exploration trip exciting and risk-free.
                     </p>
                     <p className="font font22">
                          Here is how we ensure safety:
                     </p>
                     
                     <p className="font font22">
                          <ul>
                               <li><b>Expert Guidance:</b> Our guides are well-trained professionals. They know the best practices of such activities. In addition, they are experts in emergency preparedness.</li>
                               <li><b>Reliable Gear:</b> We provide tried and tested gear for adventure tour packages in India. So, they are 100% safe. Also, they are customized for the respective environment.</li>
                               <li><b>Risk Management:</b>We manage risks. For that, we brief on the essentials before every trip. Also, we monitor the weather conditions. We allow going on such tours only in favorable weather.</li>
                               <li><b>Advice:</b> Your thrilling activities will be smooth, even if you are a newbie. We advise you on the best practices, packing checklists, and other essential matters. As such, you will experience the best.</li>
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
                     <h2 className="text-center">Best Time for Buying Adventure Tour Packages in India</h2>
                </div>
                <div className="col-sm-8"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          There is no particular time for such activities. The place and the activities dictate the best time for purchasing adventure tour packages in India. For example, May-June and September-November could be the right time for mountain activities. Skies are usually clear during these periods. Also, fine weather makes its presence felt.
                     </p>
                     <p className="font font22">
                          December-February is perfect for desert trips. Again, October-May could be the best time for water activities, such as scuba diving, kayaking, surfing, etc. So, choose our exclusive India adventure holidays accordingly. However, skipping the monsoon season for such activities could be a good idea. 
                     </p>
                     <p className="font font22">
                          Connect with our experts to learn about the best time. They will advise you on when to go for adventure tour packages in India.
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
                     <h2>Speak With Our Experts to Understand Adventure Tour Packages in India</h2>
               </div>
               <div className="col-sm-1"></div>
          </div>
          <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Why wait any longer to enjoy a challenging and inspiring tour? Browse our exclusive adventure holidays. Contact our representatives to advise you on the most suitable adventure tour packages in India for you. You can call our customer helpline or drop them a message.
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