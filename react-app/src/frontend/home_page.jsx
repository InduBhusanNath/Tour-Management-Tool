import Header from "./header";
import Footer from "./footer";
import CabBooking from "./cab_booking";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Collapsible from 'react-collapsible';
import OurPrinciples from "./OurPrinciples";
import TourismServices from "./tourism-service";
import InternationalTourPackageCarousel from "./international-tour-package-carousel";
import { Link } from "react-router-dom";
import CabTypes from "./cab-types";



//Main export function
export default function HomePage(){
     return(<>
           <HelmetProvider>
           <TechnicalSEO/>
                <div className="container-fluid">                     
                     <Header/>
                     <Banner/>
                     <Intro/>
                     <OurGoverningPrinciples/>                     
                     <CabServiceHomePage/>
                     <TourPackageHomePage/>
                     <TourismHomePage/>
                     <WhyChooseUs/>                                          
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
                <title>Aeiety Trips: Book Cab, Tour, Cruise from #1 Travel Agency</title>                
                <meta name="description" content="Experience the best satisfaction with our travel agency—excellent cab services, exciting tour packages, and luxurious cruises. Plan your dream travel with us!"/>
                <link rel="canonical" href="https://aeiety.com"/>
                <meta property="og:title" content="Cabs, Tourism, Package Tours by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about the excellent Cabs, Tourism, Package Tours by Aeiety Trips."/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Banner
function Banner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <img src="https://i.postimg.cc/ryn8Crjs/Home-Page-Aeiety.webp" alt="Aeiety Trips" className="img-fluid w-100 p-0 m-0"/>                     
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
                     <h1 className="text-center">We Present You With A Basket of Travel Options </h1>
                     <p className="font font24 text-center">
                          We Care for You, We Understand You, Your Satisfaction is Our Success
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          We at Aeiety Trips work dedicatedly to enable you to experience the best travel. As a premier travel agency, we offer exciting and satisfying travel options. You can choose anything from taxi services, tourism options, tour packages, or cruise services. We strive to give the most fulfilling travel experience. That is why we run our operations with customer-centric policies. Our principal focus is your satisfaction, which is also the benchmark of our success. Our continuous emphasis on eliminating hassles and shortcomings has fine-tuned our services. As such, you will experience the best from whichever service you avail of from us. We are committed to operating Aeiety Trips with the governing tenets of affordability, timeliness, safety, and customer satisfaction.
                     </p>                                        
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Our Governing Principles
function OurGoverningPrinciples(){
      return(<>
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">The Principles We Stand Upon</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <OurPrinciples/>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Cab Service 
function CabServiceHomePage(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Taxi Service</h2>
                     <p className="font font24">
                          Excellence drives our cab rental services. We ensure that our customer-focused can service is timely, comfortable, safe, and priced reasonably. We provide taxis for all needs.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>           
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>                
                <div className="col-sm-10 p-0 m-0">
                     <CabTypes/>
                </div>  
                <div className="col-sm-1"></div>                  
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-6"></div>
                <div className="col-sm-4 text-end">
                     <Link to="/taxi-service" className="text-decoration-none link-dark">
                          <span className="fs-4 text-danger fw-bold rounded p-2">Taxi Service&#129146;</span>
                     </Link>
                </div>
                <div className="col-sm-1"></div>
                
           </div>
      </>);
}
//Tour Package
function TourPackageHomePage(){
      return(<>
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div> 
                <div className="col-sm-10">
                     <h2 className="text-center">Tour Packages</h2>
                     <p className="font font24">
                          Exciting and satisfying trips to your dream destinations are just a call away. Our thoughtful tour packages are structured to provide exclusive tour options to your wonderlands.
                     </p>
                </div> 
                <div className="col-sm-1"></div>           
           </div>            
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-2"></div> 
                <div className="col-sm-8">
                     <InternationalTourPackageCarousel/>
                </div> 
                <div className="col-sm-2"></div>           
           </div> 
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-6"></div>
                <div className="col-sm-4 text-end">
                     <Link to="/tour-packages-intro" className="text-decoration-none link-dark">
                          <span className="fs-4 text-danger fw-bold rounded p-2">All Tour Packages&#129146;</span>
                     </Link>
                </div>
                <div className="col-sm-1"></div>
                
           </div>   
      </>);
}
//Tourism
function TourismHomePage(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Special Tourism</h2>
                     <p className="font font24">
                          Do you want to embark on a different journey that can entail new experiences and knowledge? If so, why not try our exclusive adventure, eco, and historical tourism options?  
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                     <TourismServices/>
                </div>
                <div className="col-sm-2"></div>
           </div>      
      </>);
}


//Why Choose Us
function WhyChooseUs(){
      return(<>
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <h2 className="text-center">Why Choose Aeiety Trips?</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <section className="font font22">
                          <p>
                               There can be justifiable reasons behind selecting us. We are a travel agency dedicated to offering you satisfying travel options. At Aeiety Trips, we maintain trust in our services. Our operating policies revolve around the customer. We take ample care to eliminate customers' pain points. That helps us to fine-tune our operations, giving them the best experience. Customer satisfaction is the focus of every aspect of our dedicated operations.
                          </p>
                          <p>
                               Affordability is the core tenant of our thoughtful pricing structure. We refrain from charging excessive and unreasonable prices, ensuring customers get value for their money. In addition, our pricing structure is free of any hidden costs.
                          </p>
                          <p>
                               Timeliness is a characteristic feature of our operations. Therefore, customers are not susceptible to the consequences of late arrivals.
                          </p>
                          <p>
                               At Aeiety Trips, customer-centricity and transparency are among the core features. We ensure the best deals for our customers without hassles, entailing their satisfaction. We are an excellent travel agency with curated services. Therefore, experience our best-in-class services and gain a lifetime memory.
                          </p>
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>              
      </>);
}