import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Accordion from 'react-bootstrap/Accordion';
import ScubaDivingPackageList from "./scuba-diving-package-list";

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
                 <ScubaDivingPackageDisplay/>
                 <AboutScubaDivingPackages/>
                 <ScubaActivity/>
                 <DivingGear/>
                 <DivingBenefits/>
                 <ScubaSites/>
                 <FAQs/>
                 <Conclusion/> 
                 <InternalLinks/>                
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
                <title>Scuba Diving Packages | Tailored for Every Explorer </title>                
                <meta name="description" content="Discover customized scuba diving packages in India. Book excellent scuba trips to Andaman, Goa, or Lakshadweep and dive into pure adventure! Contact us now!"/>
                <link rel="canonical" href="https://aeiety.com/scuba-diving"/>
                <meta property="og:title" content="Scuba Diving Packages | Tailored for Every Explorer "/>
                <meta property="og:url" content="https://aeiety.com/scuba-diving"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Discover customized scuba diving packages in India. Book excellent scuba trips to Andaman, Goa, or Lakshadweep and dive into pure adventure! Contact us now!"/>
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
                     <h1 className="text-center">Tailored Scuba Diving Packages for Beginners to Pros</h1>
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
                          Do you often feel the urge to experience the underwater world? If so, investing in scuba diving packages can provide the answer. In other words, you will realize what the inside of the sea or ocean looks like. A scuba dive allows for the discovery and experience of the fascinating underwater world. 
                     </p>
                     <p className="font font22">
                          Additionally, scuba trips are appealing, educational, and beneficial to health. As such, there can be an all-round result from the activity. We at Aeiety Trips provide excellent underwater diving packages at affordable prices. With our expert professionals, you will experience the best dive. 
                     </p>
                     <p className="font font22">
                          Our scuba diving packages in India cover the country’s key locations. As such, you can have the option to dive at your favorite spot. So, choose our packages to undergo a memorable diving experience.
                     </p>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Scuba Diving Package List
function ScubaDivingPackageDisplay(){
      return(<>
           <div className="row background-ghostwhite p-3">
           <div className="col-sm-1"></div>
           <div className="col-sm-10">
               <section className="p-3">
                     <ScubaDivingPackageList/>
                </section>
           </div>
           <div className="col-sm-1"></div>
      </div>
      </>);      
}
//About Scuba Diving
function AboutScubaDivingPackages(){
      return(<>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>A Bit About Our All-Inclusive Scuba Diving Packages</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          There are differences between an average dive and an unforgettable adventure. Examining our scuba diving packages is a good idea. The assessment will allow you to understand how we can make a difference. Our scuba trips are tailored for new and seasoned divers. 
                     </p>
                     <h3>Scuba Trips Suit Beginners to Pros</h3>
                     <p className="font font22">
                          Our scuba diving packages cater to the needs of all divers, from beginners to pros. There will be proper guidance for first-timers. Experienced divers can get their preferred options. We customize scuba trips to ensure safety and fun. 
                     </p>
                     <h3>Tailored Scuba Trips</h3>
                     <p className="font font22">
                          Every diver has unique preferences. That is why we customize our scuba diving packages to fulfill divers’ objectives. Therefore, you have the flexibility to choose scuba trips according to your plan.
                     </p>
                     <h3>Solo, Group, and Family Scuba Trips</h3>
                     <p className="font font22">
                          You can plan for solo, group, or family tours. Our tailored scuba diving packages provide such facilities. They allow diving solo or together. Such scuba trips take enjoyment to the next level. 
                     </p>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//ScubaActivity
function ScubaActivity(){
      return(<>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                     <div className="col-sm-10">
                          <h2>Main Activity in Scuba Diving Packages</h2>
                     </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                     <div className="col-sm-10">
                          <p className="font font22">
                               Speaking broadly, the activity involves diving into the sea or ocean. You can consider scuba diving packages as a means to engage in exploration, sport, or adventure. Nevertheless, the activity is a fantastic adventure. And, it is a safe activity.
                          </p>
                          <p className="font font22">
                               Notably, underwater diving during scuba trips requires the use of protective gear. It allows breathing and navigating inside water.  And, anyone over the age of 12 is eligible for a scuba dive. Also, practice can help to master the activity quickly. 
                          </p>
                          <p className="font font22">
                               Training is essential before diving. You need to master the basics. Moreover, the activity can entail notable benefits. So, you have got the answer if you asked what scuba diving packages are all about.
                          </p>
                     </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Diving Gear
function DivingGear(){
     return(<>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Scuba Diving Packages: A Breakdown of Protective Gear</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          A scuba dive necessitates wearing protective gear. As such, knowing about the gear before booking scuba diving packages is meaningful. The associated components enable breathing, sight, movement, and maintaining body temperature while submerged in water.  Thus, you can plan to participate in scuba trips in India with the gear.
                     </p>
                     <p className="font font22">
                          The list of essential equipment for underwater diving is:
                     </p>                     
                     <p className="font font22">
                          <ul>
                               <li><b>Diving Mask:</b> Enables seeing underwater</li>
                               <li><b>Snorkel:</b> Allows breathing underwater</li>
                               <li><b>Buoyancy Compensator:</b> Allows the diver to remain buoyant, neither sinks nor floats</li>
                               <li><b>Regulator:</b> Reduces the air pressure from the scuba tank to optimum breathing levels</li>
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
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Benefits of Scuba Trips in a Nutshell</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                         Diving is not only a recreation or adventure. It has broader implications. Scuba trips in India can positively impact multiple dimensions of life. A scuba dive can entail physical, mental, and social benefits. As such, you gain a lot from the activity. Here are the principal advantages:
                     </p>                                       
                     <h3>Health Benefits</h3>
                     <p className="font font22">
                          <ul>
                               <li>An hour of diving can burn 390 to 788 calories of body fat. Continuous body movements exercise the body to burn fat. As such, scuba trips can help to lose weight.</li>
                               <li>Physical activities underwater strengthen muscles and tone the body.</li>
                               <li>Slow and deep breaths with air from the apparatus improve breathing control and respiratory health. Also, a scuba dive can stabilize heart rate.</li>
                               <li>The water environment lowers blood pressure. As such, a session of scuba diving in India can instill calmness in the body.</li>
                               <li>Movements of different body parts improve blood circulation.</li>
                               <li>Sea or ocean water improves skin health.</li>
                          </ul>
                     </p> 
                     <h3>Mental Benefits</h3> 
                     <p className="font font22">
                          <ul>
                               <li>The environment inside the sea or ocean is captivating and thought-provoking. Also, it causes peace of mind. As such, underwater diving reduces stress.</li>
                               <li>Navigating underwater is akin to problem-solving. Underwater movement necessitates good decision-making. As such, scuba trips build confidence and self-esteem in the diver.</li>
                               <li>The sight of vegetation, marine species, coral reefs, and other underwater entities can create broader perspectives on nature. As such, scuba diving in India can create a sense of bonding with nature.</li>
                          </ul>
                     </p>
                     <h3>Social Benefits</h3> 
                     <p className="font font22">
                          <ul>
                               <li>Meeting various people can entail exchanging ideas. That could be a significant benefit from participating in a scuba dive.</li>
                               <li>Interacting with people belonging to different cultures will allow understanding various cultural facets. Taking part in underwater diving entails substantial social benefits.</li>
                               <li>Tours included in scuba diving packages involve interacting with fellow divers. That improves communication skills. Also, the friend circle increases.</li>
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
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Top Spots Included in Scuba Diving Packages </h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Along India's enormous coastline, the Bay of Bengal is to the east. The Indian Ocean is to the south. The Arabian Sea is to the west. As such, scuba diving packages include various spots in the country. The shoreline extends approximately <Link to="https://en.wikipedia.org/wiki/Coastal_India" className="text-decoration-none link-danger" target="_blank" rel="noopener noreferrer">1,098.81 km</Link>.
                     </p>
                     <p className="font font22">
                          There are 40 such spots in the country. And, each has its charm. Interestingly, scuba trips in the respective sites will entail unique experiences.
                     </p>
                     <p className="font font22">
                          You have the privilege of choosing a site for an underwater diving adventure. And, it could be in the country’s eastern, southern, and western parts. However, getting access to information about the spots is essential before booking scuba diving packages.
                     </p>
                     <p className="font font22">
                          To facilitate access, we carry detailed descriptions of the sites. Here are the spots for scuba diving in India to choose from:
                     </p>                     
                     <h3>Andaman</h3>
                     <p className="font font22">
                          Clear waters and amazing underwater entities are standout features of the Andaman Islands. It is one of the most sought-after places for underwater diving. Andaman's popular diving sites are:
                     </p>
                     <p className="font font22">
                          <ul className="list-group list-group-horizontal-sm">
                               <li className="list-group-item bg-transparent">Swaraj Dweep (erstwhile Havelock Island)</li>
                               <li className="list-group-item bg-transparent">North Bay Island</li>
                               <li className="list-group-item bg-transparent">Neil Island</li>
                               <li className="list-group-item bg-transparent">Port Blair</li>
                          </ul>
                     </p>
                     <h3>Pondicherry</h3>
                     <p className="font font22">
                           It is another popular destination for scuba diving in India. Pondicherry has marine species and corals. Pondicherry's diving sites are:
                     </p>
                     <p className="font font22">
                          <ul className="list-group list-group-horizontal-sm">
                               <li className="list-group-item bg-transparent">Aravind’s Wall</li>
                               <li className="list-group-item bg-transparent">The Ravines</li>
                               <li className="list-group-item bg-transparent">The Hole</li>
                               <li className="list-group-item bg-transparent">Temple Reef</li>
                          </ul>
                     </p>
                     <h3>Lakshadweep</h3>
                     <p className="font font22">
                          Lakshadweep's islands make a difference with their intriguing corals and clear waters. The spots are among the best places for scuba diving in India. The popular ones are:
                     </p>
                     <p className="font font22">
                          <ul className="list-group list-group-horizontal-sm">
                               <li className="list-group-item bg-transparent">Agatti</li>
                               <li className="list-group-item bg-transparent">Kavaratti</li>
                               <li className="list-group-item bg-transparent">Bangaram</li>
                               <li className="list-group-item bg-transparent">Minicoy</li>
                               <li className="list-group-item bg-transparent">Kadmat</li>
                          </ul>
                     </p>
                     <h3>Gujarat</h3>
                     <p className="font font22">
                          Beautiful aquatic entities make underwater diving on the Shivrajpur beach of Dwarka, Gujarat, enjoyable.
                     </p>
                     <h3>Karnataka</h3>
                     <p className="font font22">
                          Netrani is a fantastic site for scuba dives. It is also called the heart of India’s underwater diving. The site is in the state’s Uttara Kannada district. 
                     </p>
                     <h3>Chennai</h3>
                     <p className="font font22">
                          Kovalam, Rameswaram, and Pamban Island are the underwater diving sites in Chennai. They have clear waters, wrecks, and corals.
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
                     <h2>FAQs: Scuba Diving Packages</h2>
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
                                         #1. How can I know the landscape of scuba diving in India?
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
                                         #2. Are the charges for underwater diving high?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         No, the costs are not expensive. The expense depends on the tour operator. Costs at Aeiety Trips are affordable.
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item> 
                          <Accordion.Item eventKey="2">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #3. Is prior experience necessary to book scuba diving packages?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         No, experience is not necessary. Experienced and newbies can book such packages.
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item> 
                          <Accordion.Item eventKey="3">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #4. Is there an age limit for scuba trips?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                        Yes, a minimum of 12 years is the restriction.
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #5. What health preconditions are necessary for scuba diving?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Yes, there are preconditions, such as heart diseases, asthma, or other such health issues. It is good to get a doctor’s certificate before engaging in underwater diving.
                                    </p>
                               </Accordion.Body> 
                          </Accordion.Item>  
                                               
                     </Accordion>                   
                </div>
                <div className="col-sm-2"></div>
           </div>      
      </>);
}
//Conclusion
function Conclusion(){
      return(<>
          <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Book Our Exclusive Scuba Diving Packages: Go on Your Dream Adventure</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">

                </div>
                <div className="col-sm-1"></div>
           </div>      
      </>);
}
//Links
function InternalLinks(){
      return(<>
           <div className="row bg-light bg-gradient p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Adventure Offerings at Aeiety Trips</h2>
                </div>
                <div className="col-sm-1"></div>
           </div> 
          <div className="row bg-light bg-gradient p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <p className="font font22">
                          <ul className="list-group list-group-horizontal-sm">
                               <li className="list-group-item bg-transparent">{'\u2705'}<Link to="/adventure-tours" className="text-decoration-none link-success">Adventure Packages</Link></li>
                               <li className="list-group-item bg-transparent">{'\u2705'}<Link to="/scuba-diving" className="text-decoration-none link-success">India Scuba Diving</Link></li>
                               <li className="list-group-item bg-transparent">{'\u2705'}<Link to="/scuba-diving-in-andaman" className="text-decoration-none link-success">Andaman Scuba Packages</Link></li>                               
                          </ul>
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div> 
      </>);
}

