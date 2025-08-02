import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
                 <DivingGear/>
                 <DivingBenefits/>
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
                 <img src="https://i.postimg.cc/BvwmFK2y/scubabanner.webp" alt="Our Scuba Diving in India Packages" className="w-100 img-fluid p-0 m-0"/>
            </div>
       </div>
  </>);
}
//Breadcrumb
function BreadCrumb(){
  return(<>
            <div className="row">
                 <div className="col-sm-12 background-lightblue">
                      <nav aria-label="breadcrumb">
                           <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>  
                                <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li> 
                                <li class="breadcrumb-item"><a href="/adventure-tours">About Us</a></li>                                    
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
           <div className="row background-lightblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center"> Plunge into Scuba Diving in India With Our Packages</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Intro
function Intro(){
     return(<>
           <div className="row background-lightblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Speaking broadly, it is an underwater activity. You can consider it an exploration, sport, or adventure. Whatever you call it, scuba diving in India is a fantastic adventure.
                     </p>
                     <p className="font font22">
                          It is appealing, educational, and benefits health. As such, there is an all-round result from the activity. Understandably, the activity involves diving into the sea or ocean.
                     </p>
                                         
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Diving Gear
function DivingGear(){
     return(<>
           <div className="row background-lightblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Underwater Diving: A Breakdown of Protective Gear</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          A scuba dive necessitates wearing protective gear. The list of essential equipment for underwater diving is:
                     </p>
                     <p className="font font22">
                          <ul>
                               <li><b>Diving Mask:</b> Enables seeing underwater</li>
                               <li><b>Snorkel:</b> Allows breathing underwater</li>
                               <li><b>Buoyancy Compensator:</b> Allows the diver to remain buoyant, neither sinks nor floats</li>
                               <li><b>Regulator:</b> Reduces air pressure from scuba tank to optimum breathing levels</li>
                               <li><b>Scuba Tank:</b> Carries air in compressed form for breathing underwater</li>
                               <li><b>Fins:</b> Enable paddling and manoeuvring by attaching to the feet.</li>
                          </ul>
                     </p>
                     <p className="font font22">
                          Protective gear frees scuba diving in India from dangers.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Diving Benefits
function DivingBenefits(){
      return(<>
           <div className="row background-lightblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Scuba Diving in India: Its Key Benefits</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Diving is not only a recreation or adventure. It has broader implications. Scuba diving in India can positively impact multiple dimensions of life.
                     </p>
                     <p className="font font22">
                          A scuba dive can entail physical, mental, and social benefits. As such, you gain a lot from the activity. Here are the principal advantages:
                     </p>
                     <h3>Underwater Diving : The Health Benefits</h3>
                     <p className="font font22">
                          <ul>
                               <li>An hour of diving can burn 390 to 788 calories of body fat. Continuous body movements act as an exercise to burn fat. As such, underwater diving can help to lose weight.</li>
                               <li>Physical activities underwater strengthen muscles and tone the body.</li>
                               <li>Slow and deep breaths with air from the apparatus improve breathing control and respiratory health. Also, a scuba dive can lead to a balanced heart rate. </li>
                               <li>The water environment lowers blood pressure. As such, a session of scuba diving in India can instill calmness in the body.</li>
                               <li>Movements of different body parts improve blood circulation.</li>
                               <li>Sea or ocean water improves skin health.</li>
                          </ul>
                     </p> 
                     <h3>Underwater Diving: The Mental Benefits</h3> 
                     <p className="font font22">
                          <ul>
                               <li>The environment inside the sea or ocean is captivating and thought-provoking. Also, it causes peace of mind. As such, underwater diving reduces stress.</li>
                               <li>Smoothly moving from one underwater spot to another is a kind of problem-solving. Underwater movement necessitates good decision-making. As such, scuba dives build confidence and self-esteem in the diver.</li>
                               <li>The sight of vegetation, marine species, coral reefs and other underwater entities can create broader perspectives on nature. As such, scuba diving in India can create a sense of bonding with nature.</li>
                          </ul>
                     </p>
                     <h3>Scuba Dive: The Social Benefits</h3> 
                     <p className="font font22">
                          <ul>
                               <li>Meeting various people can entail exchanging ideas. That could be a significant benefit from participating in a scuba dive.</li>
                               <li>Interacting with people of different cultures will allow understanding different facets of their cultures. Taking part in underwater diving entails substantial social benefits.</li>
                               <li>Scuba diving in India involves interacting with fellow divers. That improves communication skills. Also, the friend circle increases. </li>
                          </ul>
                     </p>                  
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
