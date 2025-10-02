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
                     <H1/>
                     <Intro/>                     
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
                <title>Travel Consultant | Let Us Craft Unforgettable Trips for You</title>                
                <meta name="description" content="Are you looking for a reliable travel consultant? Our expert trip planner can create memorable itineraries for exotic places and ensure the best experiences."/>
                <link rel="canonical" href="https://aeiety.com/aboutus"/>
                <meta property="og:title" content="Travel Consultant | Let Us Craft Unforgettable Trips for You"/>
                <meta property="og:url" content="https://aeiety.com/aboutus"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Are you looking for a reliable travel consultant? Our expert trip planner can create memorable itineraries for exotic places and ensure the best experiences."/>
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
// H1
function H1(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1>A Top-Class Travel Consultant, Offering Tailored Tour Options</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

//Intro
function Intro(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Established in November 2024, Aeiety Trips offers exceptional travel experiences. We are a travel consultant. Our array of well-structured travel options gives customers the freedom to choose their dream trips. Top-quality service, reasonable pricing, adherence to timelines, and safety differentiate us.
                     </p>
                     <h2>Customer-First Philosophy</h2>
                     <p className="font font22">
                          We are a thoughtful trip planner. And, believing that everything ends with selling tour packages is not our ideology. Instead, our priority is fulfilling our clients' tastes and preferences. As such, our customers undergo truly amazing experiences.
                     </p>
                     <h2>Personalization</h2>
                     <p className="font font22">
                          Customization is a core element of our services. As such, we tailor package offerings to the individual preferences of customers. We suggest the best ideas as an expert travel advisor. Therefore, they gain new experiences and develop meaningful relationships. 
                     </p>
                     <h2>Broad Service Range of Services</h2>
                     <p className="font font22">
                          Our role as an expert trip planner extends to a wide range of travel offerings. We offer a wide array of travel options -- cabs, tour packages, special trips, and cruises. As such, customers can choose their favorite travel package. We frequently upgrade our travel offerings. That depends on emerging customer preferences. 
                     </p>
                     <h2>Safety</h2>
                     <p className="font font22">
                          We consider safety aspects seriously. Our careful travel advisory includes educating customers about the essential safety protocols. 
                     </p>
                     <h2>Maintaining Relationships</h2>
                     <p className="font font22">
                          For our travel consultancy, services are more than selling tour packages. It is also about building and maintaining long-term bonds with customers. That also strengthens our enthusiasm to do more. We believe that good relationships derive long-term mutual benefits.
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

