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
                <meta name="description" content="Looking for a reliable travel consultant? Our expert trip planner can create memorable itineraries for exotic places and ensure the best experiences. "/>
                <link rel="canonical" href="https://aeiety.com/aboutus"/>
                <meta property="og:title" content="Expert Travel Consultant for Crafting Unforgettable Trips"/>
                <meta property="og:url" content="https://aeiety.com/aboutus"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Looking for a reliable travel consultant? Our expert trip planner can create memorable itineraries for exotic places and ensure the best experiences. "/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}

function Banner(){
      return(<> 
                <div className="row">
                     <div className="col-sm-12 p-0 m-0">
                          <figure className="p-0 m-0">
                               <img src="https://i.postimg.cc/YC4ftprY/AboutUsBanner.webp" alt="travel consultant,trip planner" className="img-fluid w-100 p-0 m-0"/>
                          </figure>
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
                     <h1 className="text-center">A Dedicated Travel Consultant, Offering You Tailored Tour Options</h1>
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
                          Aeiety Trips is a travel consultant, set up in November 2024. We strive to provide clients with the best experience. Our array of well-structured travel options allows customers to choose their dream trips.
                     </p>
                     <p className="font font22">
                          We ensure the best quality cab service. Reasonable fares, no hidden costs, timeliness, and high safety differentiate us.
                     </p>
                     <p className="font font22">
                          Likewise, we provide curated tour packages at affordable prices. In addition, we promote adventure, eco, and historical activities for unique experiences. We are an expert trip planner. Our expertise spans structuring exciting tours to exotic destinations.
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
                          At Aeiety Trips, we provide cabs for local and outstation destinations. Therefore, customers can use our dedicated taxi service to fulfill their needs. It helps them travel to intra-city places and outside the city.
                     </p>
                     <p className="font font22">
                          Besides, they can use our cab service for sightseeing and business tours. Customers have the flexibility to choose cabs according to their needs.
                     </p>
                     <p className="font font22">
                          We provide small, medium, and large cabs at different fares. Customers have the option to select the ones they need. They can expect expert advice on the type of car to choose from us, a dedicated travel consultant.
                     </p>
                     <h2>Travel Packages</h2>
                     <p className="font font22">
                          We provide excellent tour packages at various price points. Customers can find international package tours and domestic packages in our offerings. They can also ask us to curate tours for them. We are an expert trip planner. 
                     </p>
                     <h2>Special Tours</h2>
                     <p className="font font22">
                          We provide adventure, eco, and historical tours. As such, customers can choose from curated options. We, a competent travel consultant, can plan such tours for them.
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
                               <li>To remove pain points and fine-tune trips</li>
                               <li>To provide unique, educative, and exciting trip experiences</li>                                   
                          </ul>
                     </section>                    
                </div>
                <div className="col-sm-5">
                     <h2>Vision</h2>
                     <section className="font font22">                          
                          <ul>
                               <li>To become one of the topmost travel service providers</li>
                               <li>To broaden our offerings to provide customers with more tour options</li>                                   
                          </ul>
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

