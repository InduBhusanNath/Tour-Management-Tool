import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Accordion from 'react-bootstrap/Accordion';

//Export Function
export default function ScubaDiving(){
     return(<>
         <HelmetProvider>
             <TechnicalSEO/>
             <div className="container-fluid">
                 <Header/>
                 <ScubaDivingBanner/>
                 <BreadCrumb/>
                 <H1/>
                 <Intro/>
                 <AboutScubaDiving/>
                 <DivingGear/>
                 <DivingBenefits/>
                 <ScubaSites/>
                 <FAQs/>                 
                 <Footer/>
             </div>
         </HelmetProvider>     
     </>);
}
//Technical SEO
function TechnicalSEO(){
  return(<>          
          <Helmet>
                <meta charSet="utf-8"/>
                <title>Scuba Diving in India | Book Best Underwater Diving Tours</title>                
                <meta name="description" content="Engage in the best scuba diving in India with expert-guided underwater diving tours. Explore coral reefs & marine life in Andaman, Goa, Lakshadweep & more. "/>
                <link rel="canonical" href="https://aeiety.com/scuba-diving"/>
                <meta property="og:title" content="Scuba Diving in India | Book Best Underwater Diving Tours"/>
                <meta property="og:url" content="https://aeiety.com/scuba-diving"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Engage in the best scuba diving in India with expert-guided underwater diving tours. Explore coral reefs & marine life in Andaman, Goa, Lakshadweep & more."/>
                <meta property="og:locale" content="en_GB" />
           </Helmet>  
  </>);  
}
//Banner
function ScubaDivingBanner(){
  return(<>
       <div className="row">
            <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.postimg.cc/v8gyhBWw/scubabanner.webp" alt="Our Scuba Diving in India Packages" className="w-100 img-fluid p-0 m-0"/>
            </div>
       </div>
  </>);
}
//Breadcrumb
function BreadCrumb(){
  return(<>
            <div className="row">
                 <div className="col-sm-12 background-ghostwhite">
                      <nav aria-label="breadcrumb">
                           <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>  
                                <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li> 
                                <li class="breadcrumb-item"><a href="/adventure-tours">Adventure Tours</a></li>                                    
                                <li class="breadcrumb-item active" aria-current="page">Scuba Diving</li>
                           </ol>
                      </nav> 
                 </div>
           </div>
  </>);
}
//H1
function H1(){
      return(<>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Plunge into Scuba Diving in India With Our Excellent Packages</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Intro
function Intro(){
     return(<>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Do you often feel the urge to experience the underwater world? Also, have you ever wondered what the inside of the sea or ocean looks like? If so, investing in a package for scuba diving in India can provide the answer.
                     </p>
                     <p className="font font22">
                          A scuba dive allows for the discovery and experience of the fascinating underwater world. Additionally, it is appealing, educational, and beneficial to health. As such, there can be an all-round result from the activity.
                     </p>
                     <p className="font font22">
                          We at Aeiety Trips provide excellent underwater diving packages at affordable prices. With our expert professionals, you will experience the best dive. Their guidance will eliminate your fear, if you have any.
                     </p>
                     <p className="font font22">
                          Our packages for scuba diving in India cover the country’s key locations. As such, you can have the option to dive at your favorite spot. So, choose our packages to undergo a memorable diving experience.
                     </p>
                    


                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//About Scuba Diving
function AboutScubaDiving(){
      return(<>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>A Bit About Scuba Diving in India</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Speaking broadly, it is an underwater activity. You can consider it an exploration, sport, or adventure. Whatever you call it, scuba diving in India is a fantastic adventure.
                     </p>
                     <p className="font font22">
                          Understandably, the activity involves diving into the sea or ocean. Notably, underwater diving requires the use of protective gear. And, it is a safe activity.
                     </p>
                     <p className="font font22">
                          Also, practice can help to master the activity quickly. Protective gear allows breathing and navigating underwater. And, anyone over the age of eight is eligible for a scuba dive.
                     </p>
                     <p className="font font22">
                          Training is essential before diving. You need to master the basics. Also, you can dive even if you do not know how to swim. Moreover, the activity can entail notable benefits. So, you have got the answer if you asked what scuba in India is all about.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Diving Gear
function DivingGear(){
     return(<>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Scuba Diving in India : A Breakdown of Protective Gear</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          A scuba dive necessitates wearing protective gear. The associated components allow breathing, seeing, moving, and staying warm inside water. As such, you can get ready to participate in scuba diving in India with the gear.
                     </p>
                     <p className="font font22">
                          The list of essential equipment for underwater diving is:
                     </p>
                     <p className="font font22">
                          <ul>
                               <li><b>Diving Mask:</b> Enables seeing underwater</li>
                               <li><b>Snorkel:</b> Allows breathing underwater</li>
                               <li><b>Buoyancy Compensator:</b> Allows the diver to remain buoyant, neither sinks nor floats</li>
                               <li><b>Regulator:</b> Reduces air pressure from scuba tank to optimum breathing levels</li>
                               <li><b>Scuba Tank:</b> Carries air in compressed form for breathing underwater</li>
                               <li><b>Fins:</b> Enable paddling and manoeuvring by attaching to the feet</li>
                          </ul>
                     </p>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Diving Benefits
function DivingBenefits(){
      return(<>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Benefits of Scuba Diving in India in a Nutshell</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Diving is not only a recreation or adventure. It has broader implications. Scuba diving in India can positively impact multiple dimensions of life.
                     </p>
                     <p className="font font22">
                          A scuba dive can entail physical, mental, and social benefits. As such, you gain a lot from the activity. Here are the principal advantages:
                     </p>
                     
                     <h3>Health Benefits</h3>
                     <p className="font font22">
                          <ul>
                               <li>An hour of diving can burn 390 to 788 calories of body fat. Continuous body movements act as an exercise to burn fat. As such, underwater diving can help to lose weight.</li>
                               <li>Physical activities underwater strengthen muscles and tone the body.</li>
                               <li>Slow and deep breaths with air from the apparatus improve breathing control and respiratory health. Also, a scuba dive can stabilize heart rate. </li>
                               <li>The water environment lowers blood pressure. As such, a session of scuba diving in India can instill calmness in the body.</li>
                               <li>Movements of different body parts improve blood circulation.</li>
                               <li>Sea or ocean water improves skin health.</li>
                          </ul>
                     </p> 
                     <h3>Mental Benefits</h3> 
                     <p className="font font22">
                          <ul>
                               <li>The environment inside the sea or ocean is captivating and thought-provoking. Also, it causes peace of mind. As such, underwater diving reduces stress.</li>
                               <li>Navigating underwater is akin to problem-solving. Underwater movement necessitates good decision-making. As such, scuba dives build confidence and self-esteem in the diver.</li>
                               <li>The sight of vegetation, marine species, coral reefs and other underwater entities can create broader perspectives on nature. As such, scuba diving in India can create a sense of bonding with nature.</li>
                          </ul>
                     </p>
                     <h3>Social Benefits</h3> 
                     <p className="font font22">
                          <ul>
                               <li>Meeting various people can entail exchanging ideas. That could be a significant benefit from participating in a scuba dive.</li>
                               <li>Interacting with people belonging to different cultures will allow understanding various cultural facets. Taking part in underwater diving entails substantial social benefits.</li>
                               <li>Scuba diving in India involves interacting with fellow divers. That improves communication skills. Also, the friend circle increases. </li>
                          </ul>
                     </p>                  
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

//Scuba Sites
function ScubaSites(){
      return(<>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>A Round Up of the Top Sites for Scuba Diving in India</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          The Bay of Bengal, the Indian Ocean, and the Arabian Sea are to the east, south, and west of India's vast coastline. As such, scuba diving in India takes place in various spots in the country. The shoreline extends approximately <Link to="https://en.wikipedia.org/wiki/Coastal_India" className="text-decoration-none link-danger" target="_blank" rel="noopener noreferrer">1,098.81 km</Link>.
                     </p>
                     <p className="font font22">
                          There are 40 such spots in the country. And, each has its charm. Interestingly, a scuba dive in the respective sites will entail unique experiences.
                     </p>
                     <p className="font font22">
                          You have the privilege of choosing a site for an underwater diving adventure. And, it could be in the country’s eastern, southern, and western parts. However, getting access to information about the spots is essential.
                     </p>
                     <p className="font font22">
                          To facilitate access, we carry detailed descriptions of the sites. Here are the spots for scuba diving in India to choose from:
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

//Faqs
function FAQs(){
      return(<>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>FAQs: Underwater Diving</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <Accordion flush>
                          <Accordion.Item eventKey="0">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #1. How can I learn about scuba diving in India?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Read this page. It provides essential information for a comprehensive understanding. 
                                    </p>
                               </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #2. Are charges for underwater diving high?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         No, they are not. The expense depends on the tour operator. Costs at Aeiety Trips are affordable.  
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item> 
                                               
                     </Accordion>                   
                </div>
                <div className="col-sm-2"></div>
           </div>      
      </>);
}

