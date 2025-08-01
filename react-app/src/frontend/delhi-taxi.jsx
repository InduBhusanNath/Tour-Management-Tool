import Header from "./header";
import Footer from "./footer";
import Accordion from 'react-bootstrap/Accordion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import TaxiQuickBooking from "./taxi-quick-booking";
import TaxiChooseUs from "./taxi-choose-us";
import TaxiServiceDisplay from "./taxi-service-display";




//Main export function
export default function DelhiTaxi(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <DelhiTaxiBanner/>                     
                     <BreadCrumb/>
                     <H1/>
                     <Intro/>
                     <QuickCabBooking/>   
                     <WhyChooseDelhiTaxi/>
                     <DelhiTaxiOfferings/>                   
                     <OutstationDelhiTaxi/>                                          
                     <DelhiTaxiOutstationRoutes/> 
                     <LocalDelhiTaxi/>
                     {/*<DelhiVisitingPlaces/>*/}                   
                     <Faqs/>
                     <DelhiTaxiPrinciples/>
                     <OtherTaxiRoutes/>                     
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
                <title>Delhi Taxi | 24/7 Local, Airport & Outstation Cab Booking</title>                
                <meta name="description" content="Explore our excellent Delhi taxi service. Get affordable, reliable, safe and timely taxis for local and outstation trips. Book a taxi in Delhi from us now!"/>
                <link rel="canonical" href="https://aeiety.com/delhi-taxi"/>
                <meta property="og:title" content="Delhi Taxi | 24/7 Local, Airport & Outstation Cab Booking"/>
                <meta property="og:url" content="https://aeiety.com/delhi-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Explore our excellent Delhi taxi service. Get affordable, reliable, safe and timely taxis for local and outstation trips. Book a taxi in Delhi from us now!"/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Bannner
function DelhiTaxiBanner(){
     return(<>
          <div className="row">
               <div className="col-sm-12 p-0 m-0">
                    <img src="https://i.postimg.cc/YSJ6JQx9/Delhi-Cab-Banner.webp" alt="Delhi cab" className="img-fluid w-100 p-0 m-0"/>
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
                                    <li class="breadcrumb-item"><a href="/" className="link-dark">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/aboutus" className="link-dark">About Us</a></li>
                                    <li class="breadcrumb-item"><a href="/taxis" className="link-dark">Taxi</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Taxi Delhi</li>
                               </ol>
                          </nav> 
                    </div>
              </div>
     </>);
}

//H1
function H1(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 p-0 m-1">
                     <h1 className="text-center">Book Your Delhi Taxi for Seamless City & Outstation Travel</h1>
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
                <div className="col-sm-10 p-0 m-1">
                     <p className="font font22">
                          Searching for a taxi, aren't you? We understand your focus is on reliability, safety, and timeliness. Our Delhi taxi service covers all of them. 
                     </p> 
                     <p className="font font22">
                          We simplify cab booking with round-the-clock availability. Additionally, the car rental service is suitable for all types of travel. As such, you can get a vehicle for local trips, outstation travel, and airport transfers. 
                     </p>
                     <p className="font font22">
                          You'll get cars with professional drivers. Moreover, fares are fair. We have a taxi in Delhi ready for you whenever you want it. 
                     </p> 
                     <p className="font font22">
                          If you are still unsure about which taxi service is the best in Delhi, put your concerns to rest. Aeiety Trips is the go-to cab operator. 
                     </p>
                     <p className="font font22">
                          Choose our excellent Delhi taxi agency with dedicated customer service. We are always on time. As such, your ride will be according to your scheduled departure. So, no stress.
                     </p>                    
                </div>
                <div className="col-sm-1"></div>
           </div>      
      </>);
}
//Quick Taxi Booking
function QuickCabBooking(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                     <TaxiQuickBooking/>
                </div>
                <div className="col-sm-2"></div>
           </div>
      </>);
}
//Choose Taxi
function WhyChooseDelhiTaxi(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Delhi Taxi Offerings</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                         Arbitrarily selecting a taxi is not a good practice. Instead, ensure that you get your expected values. With our Delhi taxi rentals, you can rest assured. So, there will be the benefits of well-serviced cars, expert drivers, and punctuality. We put together all our efforts to make your trip convenient and cost-effective.
                     </p> 
                     <h3>24/7 Taxi Service in Delhi</h3>
                     <p className="font font22">
                          Our car rental operations are uninterrupted. So, you can get a taxi at any time. Additionally, there will be flexibility in booking a cab quickly. For example, rescheduling is necessary if you change your trip plan at the last minute. Our timely taxi service in Delhi is available at any time. 
                     </p>
                     <h3>Affordable Cab Service in Delhi</h3>
                     <p className="font font22">
                          You could look at cab fares with mistrust. If so, dump your suspicion of excessive pricing. We implement transparent pricing policies without hidden charges. Our cab service in Delhi comes with fair and fixed fares. As a result, you will pay what is quoted beforehand.
                     </p>
                     <p className="font font22">
                          Customer-centricity is Aeiety Trips’ focal point. And, service quality is our prime benchmark. So, comfortable and inexpensive cab rides are ensured.
                     </p>
                     <h3>Tourist Taxi in Delhi</h3>
                     <p className="font font22">
                          Foreigners visiting the city can put their worries about finding a good taxi to rest. We make extra efforts to serve them in their travel matters. After assessing their needs, we provide them with personalized <Link to="https://delhitourism.gov.in/" className="link-danger text-decoration-none" target="_blank" rel="noopener noreferrer">tourist taxis in Delhi</Link>. Consequently, they can get cabs suited to their needs.  
                     </p>
                     <p className="font font22">
                          Our planned cab operations will entail the best experience. Again, our prompt support staff can solve their queries. And, they can effortlessly book a taxi in Delhi with our simple online cab booking facility. 
                     </p>
                     <p className="font font22">
                          So, if you are wondering how to find a trusted Delhi taxi for tourists, the answer could be Aeiety Trips.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <TaxiChooseUs/>
                </div>
                <div className="col-sm-2"></div>
           </div>
      
      </>);
}

//Excellence
function DelhiTaxiPrinciples(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">The Governing Principles of Our Delhi Taxi Operations</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                
                     <p className="font font22">
                          Traffic in Delhi is busy. The city is the country's political capital. Moreover, it is also one of India's largest commercial zones. Our Delhi taxi offerings can be the perfect option for traveling smoothly in high traffic. 
                     </p>
                     <p className="font font22">
                          Fulfilling all types of customer needs is our principal motto. For that, we focus on understanding emerging customer tastes and preferences. As a result, we can run customized taxi services in Delhi for every need. 
                     </p>
                     <p className="font font22">
                          The city is also a tourism hub. Therefore, numerous tourists arrive in Delhi every day. They need a dependable can rental service. Also, the frequency of taxi bookings to travel outside the city is high. Our planned cab operations streamline the strong demand. As such, every tourist can get a dependable taxi in Delhi from us. 
                     </p>
                     <p className="font font22">
                          We strive to fulfill the needs of travelers. Due to this, our Delhi taxi service ensures reliability in every aspect of cab travel.
                     </p>
                     <h3>Timely Taxi Service in Delhi</h3>
                     <p className="font font22">
                          Timeliness is our foremost priority. Timely pick up and drop off is one of our core mandates. Due to our timely taxi service in Delhi, you will not be late for work or miss the flight. We know the negative consequences of delays. As such, picking you up at the scheduled time is our assurance.
                     </p>
                     <p className="font font22">
                          Moreover, our drivers ensure that they reach their destination on time. Also, our Delhi taxi booking process is simple and quick.  
                     </p>
                     <h3>Safe Taxis in Delhi</h3>
                     <p className="font font22">
                          We take the safety aspect seriously. So, proven safety protocols insulate rides from dangers. In addition, we deploy serviced cars and experienced drivers. 
                     </p>
                     <p className="font font22">
                          These prevent any untoward incidents during taxi travel. When you book a taxi in Delhi from us, safety concerns should not bother you.
                     </p>
                     <h3>Fair-Priced Delhi Taxi</h3>
                     <p className="font font22">
                          Our pricing parameters include the distance traveled and the car type. There are no additional factors beyond these. As such, you need to pay the amount quoted for the Delhi taxi booking. Notably, there are no hidden costs. 
                     </p>
                     <p className="font font22">
                          Our pricing is reasonable. We never ask for excessive fares. As such, you will get value for your money. 
                     </p>
                     <h3>Clean Delhi Taxi Cabs</h3>
                     <p className="font font22">
                          We ensure clean cars to prevent you from traveling in an unpleasant interior. As a result, your travel becomes pleasant when you book Delhi taxi services from Aeiety Trips. Our vehicles are serviced frequently to maintain safety and cleanliness.
                     </p>

               </div>
               <div className="col-sm-1"></div>
          </div>
      </>);
}
//FAQs
function Faqs(){
     return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">FAQs : Delhi Taxi Booking</h2> 
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                     <Accordion flush>
                          <Accordion.Item eventKey="0">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #1. Why should I hire a cab in Delhi?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         You will find excellent public transportation in the city. Yet, booking a cab is advantageous. You will reap the benefits of comfort and safety. 
                                    </p>
                               </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #2. How can I get a taxi for business tours?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Contact Aeiety Trips. We provide excellent cab service for business trips. 
                                    </p>
                               </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #3.Which is the best Delhi cab service?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Certain factors could be attributed to defining the best cab services in Delhi. They are customer-centricity, timeliness, affordability, and safety. We at Aeiety Trips have all of them.
                                    </p>
                               </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="3">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #4. How do I change my travel schedule or cancel my cab booking in Delhi?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Let us know in advance. Please note that you must pay a fee if you reschedule or cancel on the day of travel. 
                                    </p>
                               </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="4">
                               <Accordion.Header>
                                    <span className="font font22">
                                         #5. Does Aeiety Trips offer cab rental discounts?
                                    </span>
                               </Accordion.Header>                                    
                               <Accordion.Body>
                                    <p className="font font22">
                                         Yes, we do. We offer discounts if you frequently book a taxi in Delhi from us. 
                                    </p>
                               </Accordion.Body>
                          </Accordion.Item>
                     </Accordion>               
                </div>                
                <div className="col-sm-2"></div>
           </div>          
    </>);
}
//Local Taxi
function LocalDelhiTaxi(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Local Delhi Taxi Rentals</h3>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                     
                     <p className="font font22">
                          A cab can fulfill your travel needs within the city. We provide on-time local taxi service in Delhi for city travel. As such, you can use our cab rental for intra-city travel. For example, office commutes, attending corporate meetings, or hospital transfers.
                     </p>
                     <p className="font font22">
                          You can use our cabs for Delhi sightseeing tours. Also, businesses can book our Delhi taxi rentals for official tours. 
                     </p>
                     <p className="font font22">
                          Our service eases tourists who travel to various places in the city. Our customer-centric offerings will entail the best experience. You can also get an airport taxi in Delhi from Aeiety Trips.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <div className="card-group">
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;<Link to="/delhi-sightseeing-taxi" className="text-decoration-none link-dark">Sightseeing</Link>
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Corporate Trips
                               </div>
                          </div>
                          <div className="card bg-transparent border-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Hospital Transfers
                               </div>
                          </div>
                     </div>
                     <div className="card-group">
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;<Link to="/delhi-airport-taxi" className="text-decoration-none link-dark">Airport Transfers</Link>
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Railway Station Transfers
                               </div>
                          </div>
                          <div className="card bg-transparent border-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Personalized Trips
                               </div>
                          </div>
                     </div>
                </div>
                <div className="col-sm-1"></div>                
           </div>
      
      </>);
}
//Outstation Service
function OutstationDelhiTaxi(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Delhi Outstation Taxis</h3> 
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                                    
                     <p className="font font22">
                          Traveling beyond the city is hassle-free. Thanks to Aeiety Trips. Our outstation taxi service in Delhi provides smooth trips. 
                     </p>
                     <p className="font font22">
                          You can rely on our excellent Delhi taxi rentals. You can book them for one-way or round-trip to outstation destinations.
                     </p>
                     <p className="font font22">
                          With no hassles, trips become excellent. Various purposes might create a need to travel to the adjoining states. As such, a dependable taxi service in Delhi is essential.
                     </p>
                     <p className="font font22">
                          If you are a tourist, you could travel to neighboring states to visit tourist places. So, you need to book a reliable taxi in Delhi. Our experienced drivers can act as guides. They have in-depth knowledge of tourist places. 
                     </p>
                     <p className="font font22">
                          Again, you might need a Delhi outstation taxi for business tours.  We provide excellent corporate taxis to business professionals.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      
      </>);
}

//Outstation Routes
function DelhiTaxiOutstationRoutes(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Top Outstation Delhi Taxi Routes</h3>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10"> 
                     <div className="card-group">
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Delhi to Agra taxi
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Delhi to Shimla cab
                               </div>
                          </div>
                          <div className="card bg-transparent border-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Delhi to Manali taxi
                               </div>
                          </div>
                     </div>
                     <div className="card-group">
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Delhi to Haridwar cab
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Delhi to Rishikesh taxi
                               </div>
                          </div>
                          <div className="card bg-transparent border-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Delhi to Jaipur cab
                               </div>
                          </div>
                     </div>                                   
                </div>
                <div className="col-sm-1"></div>
          </div>
      </>);
}
//Body3
function DelhiTaxiOfferings(){
     return(<>
          <div className="row background-lemonchiffon p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h2 className="text-center">Features of Our Delhi Taxi Bookings</h2>                                        
              </div>
              <div className="col-sm-1"></div>
         </div>
         <div className="row background-lemonchiffon p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">                     
                     <p className="font font22">
                          People book cabs for various needs. They vary among customers. As such, we have structured our offerings for every need and budget. Our trusted Delhi taxi operations conform to your preferences. Also, the anytime cab rental service allows booking at any time.
                     </p>
                     <p className="font font22">
                          Comfort, safety, and affordability are the vital parameters. And, these can give you mental peace during your cab trip. Therefore, book a taxi in Delhi from Aeiety Trips. Your travel will be safe due to expert and experienced drivers. Also, clean cars prevent irritation from dirty interiors. 
                     </p>
                     <p className="font font22">
                          We examine emerging customer tastes and preferences. As a result, we get the essential inputs to fulfill them. Our customized taxi service in Delhi caters to all your travel needs. 
                     </p>                    
              </div>
              <div className="col-sm-1"></div>
         </div>
         <div className="row background-lemonchiffon p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">                     
                     <TaxiServiceDisplay/>                    
              </div>
              <div className="col-sm-1"></div>
         </div>
     </>);
}

//Other Taxi Routes

function OtherTaxiRoutes(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Other Taxi Routes</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                     <section className="bg-warning bg-gradient rounded shadow text-left fs-3 p-2 m-2"><Link to="/guwahati-taxi" className="text-decoration-none link-dark">{'\u2705'}Guwahati Taxi</Link></section>
                     <section className="bg-warning bg-gradient rounded shadow text-left fs-3 p-2 m-2"><Link to="/guwahati-airport-taxi" className="text-decoration-none link-dark">{'\u2705'}Guwahati Airport Taxi</Link></section>
                </div>
                <div className="col-sm-4">
                     <section className="bg-warning bg-gradient rounded shadow text-left fs-3 p-2 m-2"><Link to="/delhi-airport-taxi" className="text-decoration-none link-dark">{'\u2705'} Delhi Airport Taxi</Link></section>
                     <section className="bg-warning bg-gradient rounded shadow text-left fs-3 p-2 m-2"><Link to="/delhi-sightseeing-taxi" className="text-decoration-none link-dark">{'\u2705'} Delhi Sightseeing Taxi</Link></section>
                </div>
                <div className="col-sm-2"></div>
           </div>
      </>);
}

