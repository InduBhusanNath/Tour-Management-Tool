import Header from "./header";
import Footer from "./footer";
import ContactUsMessage from "./contactus_message";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import OurPrinciples from "./OurPrinciples";
import SpecialTourServices from "./special-tours-service";
import InternationalTourPackageCarousel from "./international-tour-package-carousel";
import { Link } from "react-router";




//Main export function
export default function HomePage(){
     return(<>
           <HelmetProvider>
           <TechnicalSEO/>
                <div className="container-fluid">                     
                     <Header/>
                     <Banner/>
                     <Intro/>                                       
                     <CabServiceHomePage/>
                     <TourPackageHomePage/>
                     <SpecialTours/>
                     <WhyChooseUs/> 
                     <CallToAction/>                                                                 
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
                <title>Best Travel Agency | Cabs, Tours, Cruises : Aeiety Trips </title>                
                <meta name="description" content="Explore the offerings of a trusted travel agency for cabs, tours and cruises. Plan your  trip with us for unforgettable travel experiences. Bag great deals!"/>
                <link rel="canonical" href="https://aeiety.com"/>
                <meta property="og:title" content="Best Travel Agency | Cabs, Tours, Cruises : Aeiety Trips "/>
                <meta property="og:url" content="https://aeiety.com/"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Explore the offerings of a trusted travel agency for cabs, tours and cruises. Plan your  trip with us for unforgettable travel experiences. Bag great deals!"/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Banner
function Banner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <figure className="p-0 m-0">                     
                          <img src="https://i.ibb.co/2YZg8gXf/Home-Banner.webp" alt="Aeiety Trips Travel Agency" className="img-fluid w-100 p-0 m-0"/>
                     </figure>                     
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
                     <h1 className="text-center">A Basket of Curated Travel Options Just for You</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-6">
                     <section >
                          <p className="font font22">
                               Welcome to Aeiety Trips. We are your dedicated travel consultant. As a premier travel agency, we offer exciting and satisfying travel options. Experience the best travel with us.
                          </p>
                          <p className="font font22">
                               You can choose anything from taxi services, tourism options, tour packages, or cruise services. We strive to give the most fulfilling travel experience. That is why we run our operations with customer-centric policies. 
                          </p>
                          <p className="font font22">
                               Our principal focus is your satisfaction, which is also the benchmark of our success. Our continuous emphasis on eliminating hassles and shortcomings has fine-tuned our services. As such, you will experience the best from whichever service you avail of from us. 
                          </p>
                          <p className="font font22">
                               We are committed to operating Aeiety Trips with the governing tenets of affordability, timeliness, safety, and customer satisfaction. 
                          </p>
                          <p className="font font22">
                              <Link to="/aboutus" className="text-decoration-none link-danger fw-bold">Know Us {"\u226B"}</Link>
                          </p>
                     </section>                                        
                </div>
                <div className="col-sm-5">
                     <figure className="p-0 m-0">
                          <img src="https://i.ibb.co/Zpps1HjQ/Offers-Rounded.webp" alt="travel agencies in Delhi" className="img-fluid w-100 p-0 m-0"/>
                     </figure>
                </div>
           </div>
      </>);
}
//Our Governing Principles
function OurGoverningPrinciples(){
      return(<>
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Our Principles Benefitting You</h2>
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
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                     <figure className="p-0 m-0">
                          <img src="https://i.ibb.co/ycZ6CXFg/Taxi-Types.webp" alt="travel agencies in Guwahati" className="img-fluid w-100 p-0 m-0"/>
                     </figure>
                </div>
                <div className="col-sm-6 p-3">
                     <h2 className="text-center p-3">Round-the-Clock Taxi Service for All Trips</h2>
                     <p className="font font24">
                          Excellence drives our cab rental services. Small, medium, and large cars to cater to all needs. We ensure that our customer-focused cab service is timely, comfortable, safe, and priced reasonably. We offer taxis for both local and out-of-town travel.
                     </p>
                     <p className="font font24">
                          <Link to="/taxis" className="text-decoration-none link-danger fw-bold">Taxi Services {"\u226B"}</Link>
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>           
           
      </>);
}
//Tour Package
function TourPackageHomePage(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div> 
                <div className="col-sm-10">
                     <h2 className="text-center">Tour Packages Taking You to Your Dream Places</h2>
                     <p className="font font24">
                          Exciting and satisfying trips to your dream destinations are just a call away. Our thoughtful tour packages are structured to provide exclusive tour options to your wonderlands. The flexibility to customize travel packages to your tastes and preferences makes them super exciting. And, reasonable pricing gives you value for your money. 
                     </p>                     
                </div> 
                <div className="col-sm-1"></div>           
           </div>            
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-2"></div> 
                <div className="col-sm-8">
                     <InternationalTourPackageCarousel/>
                </div> 
                <div className="col-sm-2"></div>           
           </div> 
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-6"></div>
                <div className="col-sm-4 text-end">
                     <p className="font font24">
                          <Link to="/tour-packages-intro" className="text-decoration-none link-danger fw-bold">All Tour Packages{"\u226B"}</Link>
                     </p>
                </div>
                <div className="col-sm-1"></div>
                
           </div>   
      </>);
}
//Tourism
function SpecialTours(){
      return(<>
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Special Tours for One-of-a-Kind Experiences</h2>                     
                </div>
                <div className="col-sm-1">                                         
                </div> 
           </div>  
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-4">                     
                     <p className="font font24">
                          Do you want to embark on a different journey that can entail new experiences and knowledge? If so, why not try our exclusive adventure, eco, and historical tour options?  
                     </p>
                </div>
                <div className="col-sm-7">                     
                     <p className="font font24">
                          <SpecialTourServices/>
                     </p>                     
                </div>                
                
           </div>               
      </>);
}


//Why Choose Us
function WhyChooseUs(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <h2 className="text-center">Why Choose Aeiety Trips?</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          There can be justifiable reasons behind selecting us. We are a travel agency dedicated to offering you satisfying travel options. At Aeiety Trips, we maintain trust in our services. Our operating policies revolve around the customer.
                     </p>
                     <p className="font font22">
                           We take ample care to eliminate customers' pain points. That helps us to fine-tune our operations, giving them the best experience. Customer satisfaction is the focus of every aspect of our dedicated operations. 
                     </p> 
                     <p className="font font22">
                          Therefore, experience our best-in-class services and gain a lifetime memory. 
                     </p>                                        
                </div>
                <div className="col-sm-1"></div>
           </div> 
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <OurPrinciples/>
                </div>
                <div className="col-sm-1"></div>
           </div> 
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Affordability</h3>
                     <p className="font font22">
                          Affordability is one core tenet of our thoughtful pricing structure. We refrain from charging excessive and unreasonable prices, ensuring customers get value for their money. In addition, our pricing structure is free of any hidden costs.
                     </p>
                     <h3>Timeliness</h3>
                     <p className="font font22">
                          Timeliness is a characteristic feature of our operations. Therefore, customers are not susceptible to the consequences of late arrivals. We do not fail to pick up on time.
                     </p>
                     <h3>Safety</h3>
                     <p className="font font22">
                          Safety is a serious consideration. We provide well-serviced cars with trained and experienced drivers. As such, the probability of vehicle breakdown or accidents becomes minimal.  
                     </p>
                     <h3>Satisfaction</h3>
                     <p className="font font22">
                          Customer-centricity and transparency are among our core features. We ensure the best deals for our customers, ensuring their satisfaction. We are an excellent travel agency with curated services.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>                     
      </>);
}
//CTA
function CallToAction(){
      return(<>
           <div className="row background-palegoldenrod p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-6">
                    <h2 className="text-center p-3">Want to Go on Your Dream TRIP?</h2>
                    <section className="rounded p-3">
                          <p className="font font22">
                               If so, let us assist you. Why not contact us? Our representatives are ready to support. They will help you decide on the tour that suits you the best. Not only that. The dedicated representatives will even guide you in choosing your dream destinations and tailor your trip to your preferences.  
                          </p>
                          <p className="font font22">
                               Fill and submit the form alongside. Or, call us. We will revert soon.
                          </p>
                    </section>
                </div>
                <div className="col-sm-4">
                     <section className="background-powderblue shadow rounded p-3">
                          <ContactUsMessage/>
                     </section>                    
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}