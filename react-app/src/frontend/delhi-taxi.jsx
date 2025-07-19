import Header from "./header";
import Footer from "./footer";
import Accordion from 'react-bootstrap/Accordion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Collapsible from 'react-collapsible';
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
                     <DelhiTaxiExcellence/>
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
                <title>Delhi Taxi Booking | Best Rides | Timely | Fair Fares</title>                
                <meta name="description" content="Experience affordable, safe and comfortable Delhi taxi service. Excellent cabs are available for local and outstation trips. Book a taxi in Delhi from us now!"/>
                <link rel="canonical" href="https://aeiety.com/delhi-taxi"/>
                <meta property="og:title" content="Delhi Taxi Booking | Best Rides | Timely | Fair Fares"/>
                <meta property="og:url" content="https://aeiety.com/delhi-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Experience affordable, safe and comfortable Delhi taxi service. Excellent cabs are available for local and outstation trips. Book a taxi in Delhi from us now!"/>
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
                     <h1 className="text-center">Reliable Delhi Taxi Service You Can Count On, 24/7</h1>
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
                          Searching for a taxi, aren't you? And, your focus is on reliability, safety, and timeliness. Our excellent Delhi taxi service covers all of them.
                     </p> 
                     <p className="font font22">
                          We simplify cab booking with round-the-clock availability. Our dedicated cab rental service provides a comprehensive range of services, including local trips, outstation travel, and airport transfers. 
                     </p>
                     <p className="font font22">
                          You’ll get clean cars, professional drivers, and transparent pricing with no hidden fees. We provide timely cabs for all purposes. We have got a taxi in Delhi ready for you whenever you want it. 
                     </p> 
                     <p className="font font22">
                          If you are still wondering which is the best taxi service in Delhi? Put your confusion to rest. Choose our trusted Delhi taxi service, which is always on time. Your ride, your schedule, no stress.
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
                     <h2 className="text-center">Why Choose Our Delhi Taxi Service</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Selecting a cab should not be arbitrary. You must ensure that you get your expected values. With our trusted Delhi taxi service, you get what you expect. You will reap the benefits of well-serviced cars, expert drivers, and quick response times. We put together all our efforts to make your trip convenient and cost-effective.
                     </p> 
                     <h3>24/7 Taxi Service in Delhi</h3>
                     <p className="font font22">
                          Our cab rental operations run round-the-clock. So, you will get a taxi at any time. Likewise, there will be flexibility in quickly booking a cab if you reschedule your journey due to last-minute plans. Our timely taxi service in Delhi is available at any time. 
                     </p>
                     <h3>Affordable Cab Service in Delhi</h3>
                     <p className="font font22">
                          Dump your suspicion of excessive pricing if you look at cab fares with mistrust. We implement transparent pricing policies without hidden charges. Our affordable cab service in Delhi comes with fair and fixed fares. As a result, you need to pay what is fixed beforehand.
                     </p>
                     <p className="font font22">
                          Customer-centricity is Aeiety Trips’ focal point. And, service quality is our prime benchmark. So, comfortable, safe, and inexpensive cab rides are ensured.
                     </p>
                     <h3>Tourist Taxi Service in Delhi</h3>
                     <p className="font font22">
                          Foreigners visiting the city as tourists can put their worries of finding a good taxi to rest. We make extra efforts to serve them in their travel matters. After assessing their needs, we provide them with personalized tourist taxis in Delhi. Consequently, they can get cabs suiting to their needs.  
                     </p>
                     <p className="font font22">
                          They can effortlessly book a taxi in Delhi with our simple online cab booking facility. Safety, timeliness, reasonable pricing, and customer focus entail the best experience. Besides, our prompt customer service can solve their queries. 
                     </p>
                     <p className="font font22">
                          So, if you are wondering how to find a trusted Delhi taxi for tourists? The answer could be Aeiety Trips.
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
function DelhiTaxiExcellence(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">The Governing Principles of Our Delhi Taxi Service</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                
                     <p className="font font22">
                          Traffic in Delhi is busy. The city is the country's political capital. It is also one of India's largest commercial zones. Our Delhi taxi service can be the perfect option to travel smoothly in high traffic. 
                     </p>
                     <p className="font font22">
                          Fulfilling all types of customer needs is our principal motto. For that, we focus on understanding the emerging customer tastes and preferences. As a result, we can run customized taxi services in Delhi for every need. 
                     </p>
                     <p className="font font22">
                          The city is also a tourism hub. Numerous tourists arrive in Delhi every day. They need a dependable can rental service. Also, the frequency of taxi bookings to travel outside the city is high. Our planned cab operations streamline the strong demand. As such, every tourist can get a dependable taxi in Delhi from us. 
                     </p>
                     <h3>Timely Taxi Service in Delhi</h3>
                     <p className="font font22">
                          Timeliness is our foremost priority. Timely picking up and dropping off is one of our core mandates. We know the negative consequences of delays. As such, picking you up at the scheduled time is our assurance.
                     </p>
                     <p className="font font22">
                          Moreover, our drivers ensure that they reach their destination on time. Due to our timely taxi service in Delhi, you will not be late to work or miss the flight. Also, our Delhi taxi booking process is simple and quick.  
                     </p>
                     <h3>Safe Taxis in Delhi</h3>
                     <p className="font font22">
                          We regard the safety aspect seriously. We ensure safe cab travel by implementing proven safety protocols. We deploy serviced cars and experienced drivers.
                     </p>
                     <p className="font font22">
                          These prevent any untoward incidents during taxi travel. When you book a taxi in Delhi from us, you can put safety concerns to rest.
                     </p>
                     <h3>Fair Priced Delhi Taxi</h3>
                     <p className="font font22">
                          Our pricing parameters include the distance traveled and the car type. There are no additional factors beyond these. As such, you need to pay the amount quoted for the Delhi taxi booking. Notably, there are no hidden costs. 
                     </p>
                     <p className="font font22">
                          Our pricing is reasonable. We never ask for excessive fares. As such, you will get value for your money. 
                     </p>
                     <h3>Clean Delhi Taxi Cabs</h3>
                     <p className="font font22">
                          We ensure clean cars to prevent you from traveling in an unpleasant interior. That is why your travel becomes pleasant when you book Delhi taxi services from Aeiety Trips. Our vehicles are washed frequently to maintain cleanliness.
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
                                         Certain factors could be attributed to define the best cab services in Delhi. They are customer-centricity, timeliness, affordability, and safety. We at Aeiety Trips have all of them. 
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
                                         Let us know in advance. Remember, rescheduling or canceling will attract a fee if done on the day of travel.  
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
                          A cab can fulfill your travel needs within the city. We provide timely local taxi service in Delhi for city travel. As such, you can use our cab rental for office commutes, attending corporate meetings, hospital transfers, sightseeing tours, or airport transfers. Businesses can book our Delhi taxi rentals for official tours. 
                     </p>
                     <p className="font font22">
                          You can also get an airport taxi in Delhi from Aeiety Trips. Besides, our service suits the best for <Link to="https://delhitourism.gov.in/" className="link-danger text-decoration-none" target="_blank" rel="noopener noreferrer">tourists</Link> going to various places in the city. Clean cars and timely pickups will entail the best experience.
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
                                    &#x2705;&nbsp;Sightseeing
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
                          Traveling beyond the city is hassle-free. Thanks to Aeiety Trips. Our 24/7 outstation taxi service in Delhi provides smooth trips. 
                     </p>
                     <p className="font font22">
                          You can rely on our affordable Delhi taxi rentals. They are perfect for one-way or round trips to <Link to="https://uptourism.gov.in/en" className="link-danger text-decoration-none" target="_blank" rel="noopener noreferrer">outstation</Link> destinations. For example, traveling to cities like Agra, Jaipur or Shimla needs a dependable cab.
                     </p>
                     <p className="font font22">
                          With fixed fares and no hidden charges, trips become excellent. Various purposes might create a need to travel to the adjoining states. As such, a dependable taxi service in Delhi is essential.
                     </p>
                     <p className="font font22">
                          If you are a tourist, you could travel to neighboring states to visit tourist places. So, you need to book a reliable taxi in Delhi. Our experienced drivers can act as guides. They have in-depth knowledge of tourist places. 
                     </p>
                     <p className="font font22">
                          Again, you could need a Delhi outstation taxi for business tours if you are a corporate professional.
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
                     <h2 className="text-center">Our Top-Class Delhi Taxi Service Offerings </h2>                                        
              </div>
              <div className="col-sm-1"></div>
         </div>
         <div className="row background-lemonchiffon p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">                     
                     <p className="font font22">
                         We know the needs of every traveler are different. So, we personalized our offerings. That caters to every need and budget. Our trusted Delhi taxi service conforms to your preferences. And, the 24/7 cab rental is perfect for traveling within and outside the city. 
                     </p>
                     <p className="font font22">
                          Comfort, safety, and affordability could be the key reasons for choosing a taxi in Delhi from Aeiety Trips. And, these can give you mental peace. Your travel will be safe due to expert and experienced drivers. Also, clean cars prevent irritation from dirty interiors.
                     </p>
                     <p className="font font22">
                          We examine emerging customer tastes and preferences. As a result, we get the essential inputs to fulfill them. Our customized taxi service in Delhi suits all travel needs. 
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
//Delhi Places to Visit
function DelhiVisitingPlaces(){
     return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Top Visiting Places in Delhi: The Coverage of Our Local Delhi Taxi Service</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">                     
                     <h3>Qutub Minar</h3>
                     <img src="https://i.postimg.cc/50gbXPQB/Qutub-Minar.webp" alt="Delhi taxi" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          The sight of the tall and iconic Qutub Minar is mentally stimulating. When you look at it from a distance, the curiosity to know how it came into being will catch your mind. It has significant historical significance. We provide the best Delhi taxi booking to transport you to the iconic site.
                     </p>
                     <p className="font font22">
                          Its height is 72.5m (238 ft). As a result, it is the world's tallest brick-built Minaret. Interestingly, it has 379 steps, signifying marvels of the technology during the Mughal times. A taxi in Delhi from Aeiety Trips can ease your travel to the site. 
                     </p>
                     <p className="font font22">
                          You will also see various remains of structures built during the Mughal period within the vicinity of Qutub Minar. Hiring a taxi service in Delhi is the best option to visit the historically relevant entity. 
                     </p>
                     <h3>Purana Qila (Old Fort)</h3>
                     <img src="https://i.postimg.cc/5yt1Lw8Z/Purana-Qila.webp" alt="taxi Delhi" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          It is also called the Red Fort, one of the major attractions. It is of the Mughal period. We provide a dependable Delhi taxi service to transport people to and from the place.
                     </p>
                     <p className="font font22">
                          According to historical literature, Mughal Emperor Humayun and Surid Sultan Sher Shah Suri built it. The construction was completed in 1538. Reaching the iconic fort is easy by taxi in Delhi.
                     </p>
                     <p className="font font22">
                          The Old Fort is near Pragati Maidan. You can keep all hassles at bay while traveling to the place by hiring our local taxi service in Delhi. You can also visit the important entity and experience its rich history. 
                     </p>
                     <h3>Lotus Temple</h3>
                     <img src="https://i.postimg.cc/NF1C3p9r/Lotus-Temple.webp" alt="taxi service in Delhi" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          It is a prominent attraction in New Delhi. You can hire our Delhi taxi to visit Lotus Temple. Its structure is that of a lotus, hence the representation. It is 34m in height. Its construction was completed in 1986. 
                     </p>
                     <p className="font font22">
                          Interestingly, people of any religion can visit it. It is near Nehru Place in New Delhi, at the Bahapur village. Although all sorts of public transportation including the metro are available, renting a local taxi service in Delhi can be the most convenient transportation to Lotus Temple. 
                     </p>
                     <p className="font font22">
                          After visiting, you can reach the nearby Nehru Place market by hiring a taxi in Delhi. 
                     </p>
                     <h3>India Gate</h3>
                     <img src="https://i.postimg.cc/RVYnr4mK/India-Gate.webp" alt="Delhi cab service" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          It is a war memorial in New Delhi. Hiring a Delhi taxi can be the best way to travel to India Gate stands. It is near India’s parliament, in Rajpath. The British had set up India Gate. It is to commemorate the soldiers who lost their lives in the First World War. December February 12, 1931, was its inauguration day.
                     </p>
                     <p className="font font22">
                          The historically relevant war memorial is among the most sought-after tourist attractions in Delhi. Interestingly, you will get a good view of India’s parliament building from India Gate. You can hire our best taxi in Delhi service to visit the war memorial.
                     </p>
                     <p className="font font22">
                          You can relax there apart from viewing the iconic war memorial. Our trusted taxi service in Delhi can be the best option for reaching India Gate seamlessly.
                     </p>
                     <h3>Connaught Place</h3>
                     <p className="font font22">
                          People often call it CP. It is the main business and financial hub in New Delhi. In Connaught Place, you will find the major companies operating, entailing a corporate atmosphere. Our Delhi taxi operates there. The place also has another name: Rajiv Chowk, which is associated with the metro station area. Our reliable taxi service in Delhi also covers CP for up and up-and-down.
                     </p>
                     <p className="font font22">
                          There are many shopping options, including nightlife. In addition to branded showrooms, you can go on a shopping spree in the famous Palika Bazaar, and the roadside shops. Our best taxi in  Delhi can enable visiting them with ease.
                     </p>
                     <p className="font font22">
                          With many food outlets in Connaught Place, you will find numerous dining options. There are many branded restaurants and popular food outlets to choose from. Notably, some restaurants in CP started operations in the pre-independence period. You can reach CP by riding a Delhi taxi booked from Aeiety Trips from anywhere in the city.
                     </p>
                     <p className="font font22">
                          For cinema lovers, CP is the place to go with a taxi in Delhi. You will find many cinema halls, including multiplexes. Notably, the Regal Cinema Hall is an iconic theatre, built in 1932. You can leave the task of transporting you to the theatre to our dependable taxi booking in Delhi. We will drop you at the cinema hall, and pick you up after the show.
                     </p>
                     <p className="font font22">
                          There is a beautiful large park in the middle of CP. You can relax there amid a busy environment.In addition, CP is near Barakhamba Road and Kasturba Gandhi Marg. Hire our Delhi taxi to reach those places.
                     </p>
                     
                     <h3>Jantar Mantar</h3>
                     <img src="https://i.postimg.cc/13ZsVjcb/Jantar-Mantar.webp" alt="cab booking in Delhi" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          In Delhi, Jantar Mantar is a must-see thing. It was built in 1724 to carry out astronomical observations. Our best-in-class local Delhi taxi service can help make a trip there smoothly. 
                     </p>
                     <p className="font font22">
                          People from within and outside the country come to visit the historical astronomical observatory. It is one of the significant attractions in the city. We provide excellent taxi service in Delhi to travel to such iconic and historically relevant sites in a taxi in Delhi.
                     </p>
                     <p className="font font22">

                     </p>
                     <p>&nbsp;</p><p>&nbsp;</p>
                     <h3>Dilli Haat</h3>
                     <img src="https://i.postimg.cc/gkrRPk0D/Dilli-Haat.webp" alt="Delhi outstation taxis" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          People, including foreigners, regularly throng Dilli Haat, opposite the INA market. Here, you can buy food, crafts, and textiles from other states of India.
                     </p>
                     <p className="font font22">
                          Inside Dilli Haat, people of the respective states operate state-wise stalls. You can eat traditional food, buy traditional crafts and clothes, and experience the cultures of different states.
                     </p>
                     <p className="font font22">
                          Our excellent offering of an affordable taxi in Delhi can drop you off at Dilli Haat.
                     </p>
                     <p>&nbsp;</p>
                     <h3>Humayun’s Tomb</h3>
                     <img src="https://i.postimg.cc/CxsfGZrw/Humayun-Tomb.webp" alt="book taxi in Delhi " className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          Visiting there means getting the opportunity to visualize a UNESCO Heritage Site. Our best Delhi taxi can pick you up to visit the place. It displays the richness of the architectural technology that prevailed during the Mughal times. The marvelous tourist spot is in Nizamuddin in New Delhi.
                     </p>
                     <p className="font font22">
                          You can go there by booking a taxi in Delhi from Aeiety Trips. It came into existence in 1558. Interestingly, it has not lost its charm even after centuries.
                     </p>
                     <p className="font font22">
                          Remarkably, the popular historical structure is built of red sandstone. Our best taxi service in Delhi can be a good option. It can help you reach Humayun’s Tomb quickly. If you book a round trip, we will pick you up after your visit.
                     </p>
                     <h3>Lal Qila (Red Fort)</h3>
                     <img src="https://i.postimg.cc/HWhzM5GX/LalQila.webp" alt="taxi in Delhi" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          Red Fort is the English translation of Lal Qila. It is a significant historical entity in Delhi. We run a dedicated local Delhi taxi service to transport visitors to Red Fort, one of the most visited tourist places in Delhi.
                     </p>
                     <p className="font font22">
                          The history behind its construction is significant. Mughals changed their capital from Agra to Delhi. That triggered the need to build it. You can experience its richness by visiting the historic fort. Also, you can quickly travel to the historical entity by hiring our affordable taxi service in Delhi.
                     </p>
                     <p className="font font22">
                          Mughal Emperor Shah Jahan started the construction on 12 May 1638. It was also his residence. The construction attained completion on 6 April 1648. You can travel to the UNESCO World Heritage Site by booking a taxi in Delhi from Aeiety Trips. 
                     </p>
                     <h3>Mehrauli Archaeological Park</h3>
                     <img src="https://i.postimg.cc/05XnS4MV/Mehrauli-Park.webp" alt="Mehrauli Archaeological Park" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          You will visualize India’s rich history inside the historically relevant park in southern Delhi. Our local Delhi taxi service can be the best option to visit the park. The park is around one km from the iconic Qutub Minar where more than a hundred historically relevant monuments are present. The length of human occupation over one thousand years is another point of relevance. Mehrauli Archaeological Park is in the southern part of the city. 
                     </p>
                     <p className="font font22">
                          Inside the park, you will see things of historical relevance, such as the Tomar dynasty’s Lal Kot.It is the oldest fort in Delhi. Rent our local taxi service in Delhi to reach the park quickly. 
                     </p>
                     <p className="font font22">
                          In addition, forts were built during the Mughal times in Mehrauli Archaeological Park. Visiting it can be educational and entertaining. You can rent our on-time taxi in Delhi to visit Mehrauli Archaeological Park in less time. 
                     </p>
                     
                     <h3>The National Museum</h3>
                     <p className="font font22">
                          It is among the important places to visit in Delhi. Our reliable Delhi taxi service can transport you to Janpath Road. As such, you can reach the museum, established in 1949, smoothly.
                     </p>
                     <p className="font font22">
                          Visiting the National Museum will entail educational value. Hiring our affordable taxi in Delhi can be the best transportation to the museum. Inside the museum, you will see around two lakh artworks, some are more than five thousand years old. By visiting the museum in the country's national capital, you will realize how rich India's history is.  
                     </p>
                     <p className="font font22">
                          After visiting the National Museum, you can have good visiting options, such as the India Gate and the Parliament. Hire our best taxi service in Delhi to visit the nearby places.
                     </p>
                     <h3>Birla Temple</h3>
                     <img src="https://i.postimg.cc/gj30G5fG/Birla-Temple.webp" alt="delhi taxi" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          It is located near Connaught Place. You can reach the temple conveniently by hiring our best Delhi taxi. The spectacular and spacious temple will arouse your spiritual mind. In addition, there is a beautiful garden inside the boundary. It is recognized as a popular tourist spot in Delhi.
                     </p>
                     <p className="font font22">
                          Interestingly, it was the first Hindu temple built on a large scale in the city. After your visit, you can return by hiring our taxi service in Delhi or visit the classy Connaught Place. Other options could be visiting India Gate or Lodhi Garden. 
                     </p>
                     <p className="font font22">
                          More options could be hiring our best taxi in Delhi to visit Lajpat Nagar or Khan Market. The temple's construction ended in 1939 after starting in 1933.
                     </p>
                     <h3>Akshardham Temple</h3>
                     <img src="https://i.postimg.cc/fb1WXBv1/Akshar-Dham.webp" alt="taxi Delhi" className="img-fluid float-start rounded p-0 m-2"/>
                     <p className="font font22">
                          The temple is in the Pandav Nagar of New Delhi. You will see numerous people in Akshardham Temple daily. You should also visit the temple. You can ease your trip to the temple by booking our exclusive Delhi taxi service.
                     </p>
                     <p className="font font22">
                          6 November 2005 was the day the temple was inaugurated. There are eateries and a retail store that sells the works of the temple associates. Hire our excellent taxi service in Delhi to visit the place. The main temple is a spectacular artistic construction. In addition, there is a large park inside the temple campus. 
                     </p>
                     <p className="font font22">
                          Our 24/7 taxi in Delhi can take you to the temple.
                     </p>
                    
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
                </div>
                <div className="col-sm-2"></div>
           </div>
      </>);
}

