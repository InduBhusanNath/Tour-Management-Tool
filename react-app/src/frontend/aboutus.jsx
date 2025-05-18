import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function AboutUs(){
     return(<>  
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <Banner/>
                     <BreadCrumb/>
                     <Intro/>
                     <Description1/> 
                     <Description2/> 
                     <MissionVision/>                    
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
                <title>Expert Travel Consultant for Crafting Unforgettable Trips</title>                
                <meta name="description" content="Looking for a reliable travel consultant? Our expert trip planner can create memorable itineraries for exotic places and ensure the best experiences."/>
                <link rel="canonical" href="https://aeiety.com/aboutus"/>
                <meta property="og:title" content="Know Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/aboutus"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about Aeiety Trips."/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}

function Banner(){
      return(<> 
                <div className="row">
                     <div className="col-sm-12 p-0 m-0">
                          <img src="https://i.postimg.cc/Sx4CbyzZ/AboutUsBanner.webp" alt="Trip Planner" className="img-fluid w-100 p-0 m-0"/>
                     </div>
                </div>
                
      </>);
}

//Breadcrumb
function BreadCrumb(){
      return(<>
                <div className="row">
                     <div className="col-sm-12 background-lemonchiffon">
                          <nav aria-label="breadcrumb">
                               <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>                                    
                                    <li class="breadcrumb-item active" aria-current="page">About Us</li>
                               </ol>
                          </nav> 
                     </div>
               </div>
      </>);
}
//Intro
function Intro(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">An Excellent Travel Consultant  Offering You Tailored Tour Options</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Description1
function Description1(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div> 
                <div className="col-sm-10">
                     <p className="font font22">
                          Aeiety Trips is structured to provide the best experience to customers. With an array of thoughtful travel options, we provide customers the opportunity to get the appropriate trip solutions. Aeiety Trips is a customer-satisfying travel consultant.  We ensure our customers have the best quality cabs, reasonable fares, no hidden costs, timeliness, and high safety. Likewise, we provide curated tour packages at affordable prices to give customers the best experiences. In addition, we promote adventure, eco, and historical tourism to allow customers to undergo unique travel experiences. We are an excellent trip planner with expertise in structuring exciting tours to exotic destinations. 
                     </p>
                </div> 
                <div className="col-sm-1"></div>           
           </div>      
      </>);
}
//Description2
function Description2(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Local and Outstation Cabs</h2>
                     <p className="font font22">
                          At AeietyTrips, we provide cabs for local and outstation destinations. Therefore, customers can use our dedicated taxi service to travel to intra-city places and outside the city. Besides, they can use our cab service for sightseeing and business tours. Customers have the flexibility to choose cabs according to their needs. We provide small, medium, and luxury cabs at different fares, allowing customers to select the ones they need.
                     </p>
                     <h2>Tourism</h2>
                     <p className="font font22">
                          We provide adventure, eco, and historical tourism options. As such, customers can choose from various curated tourism packages. We, as a customer-centric travel consultant, can plan such tourism for them.
                     </p>
                     <h2>Travel Packages</h2>
                     <p className="font font22">
                          At Aeiety Trips, we provide excellent tour packages at various price points. As such, customers can find international package tours and domestic packages in our offerings. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
 } 

//MissionVision
function MissionVision(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                     <h2>Mission</h2>
                     <section className="font font22">                          
                          <ul>
                               <li>To remove pain points and fine-tune taxi travel</li>
                               <li>To provide unique, educative, and exciting trip experiences</li>                                   
                          </ul>
                     </section>                    
                </div>
                <div className="col-sm-5">
                     <h2>Vision</h2>
                     <section className="font font22">                          
                          <ul>
                               <li>To become one of the topmost cab service providers</li>
                               <li>To be one of the most preferred tour operators</li>                                   
                          </ul>
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

