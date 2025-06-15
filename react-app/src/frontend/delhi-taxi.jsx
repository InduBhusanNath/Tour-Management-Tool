import Header from "./header";
import Footer from "./footer";
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
                     <Intro/>
                     <QuickCabBooking/>   
                     <WhyChooseDelhiTaxi/>
                     <DelhiTaxiOfferings/>                   
                     <OutstationDelhiTaxi/>                                          
                     <DelhiTaxiOutstationRoutes/> 
                     <LocalDelhiTaxi/>
                     <DelhiVisitingPlaces/>                    
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
                <title>Delhi Taxi Service With No Hassles, No Excessive Fares</title>                
                <meta name="description" content="Explore our excellent Delhi taxi service. Get affordable, reliable, safe and timely taxis for local and outstation trips. Contact us to book a taxi in Delhi."/>
                <link rel="canonical" href="https://aeiety.com/delhi-taxi"/>
                <meta property="og:title" content="Delhi Taxi Service With No Hassles, No Excessive Fares"/>
                <meta property="og:url" content="https://aeiety.com/delhi-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Explore our excellent Delhi taxi service. Get affordable, reliable, safe and timely taxis for local and outstation trips. Contact us to book a taxi in Delhi."/>
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

//Body
function Intro(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 p-0 m-1">
                     <h1 className="text-center">Best Delhi Taxi Service for On-Time and Satisfying Rides</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 p-0 m-1">
                     <p className="font font22">
                          Now, you found us. So, stop your search here. You have found the best Delhi taxi service. We at Aeiety Trips strive to provide the most affordable and satisfying cab rides. We ease and streamline rides in busy traffic. Focussing on customers’ needs, we offer a reliable taxi service in Delhi for all purposes.
                     </p> 
                     <p className="font font22">
                          We can provide a local taxi in Delhi. It could be for business travel, an official trip, a sightseeing tour, an airport transfer, or carrying a patient to the hospital. We also provide excellent Delhi outstation taxis for traveling outside the city.
                     </p>
                     <p className="font font22">
                          Delhi receives numerous tourists. We provide them with a reliable tourist taxi in Delhi. Our dedicated customer service can help them with taxi bookings in Delhi.
                     </p>
                     <p className="font font22">
                          Aeiety Trips combines safety, timeliness, reasonable pricing, and customer focus. As such, we are the number one Delhi taxi service choice. Choose us if you want to hire a taxi in Delhi.
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
                          We care about your trip. So, we put together all our efforts to make it convenient and cost-effective. Therefore, we ensure a trusted Delhi taxi service. Affordable pricing, timeliness, comfortability, and safety make customers feel the best.  
                     </p> 
                     <h3>Affordable Taxi in Delhi</h3>
                     <p className="font font22">
                          Customer-centricity is the focal point of Aeiety Trips. We cater to all your cab needs. That is why we can claim to run a convenient taxi in Delhi. Therefore, you can get an affordable taxi for outstation or local travel. Notably, the rides are comfortable, safe, and inexpensive.
                     </p>
                     <h3>Tourist Taxi Service in Delhi</h3>
                     <p className="font font22">
                          We make extra efforts to serve foreigners in their travel matters. At Aeiety Trips, we carefully assess their needs. It allows us to provide them with excellent tourist taxi service. As such, they get comfortable cabs in Delhi. Our simple online cab booking in Delhi facilitates them to quickly book a taxi in Delhi.
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
                     <h2 className="text-center">The Excellence of Our Dedicated Delhi Taxi Service</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                
                     <p className="font font22">
                          We understand the city's busy nature. As such, we have structured our Delhi taxi service to allow you to travel quickly. That is why picking up and dropping off on time is one of our core mandates. We strive to maximize customer satisfaction. We focus on understanding customer needs. That allows us to run customized cab rental services. Also, we have optimized our customer-centric taxi service in Delhi for outstation trips to streamline the high frequency of cab requirements for tours outside the city. With the facility of a quick taxi booking in Delhi, we give you the flexibility to avail of our trusted offerings from anywhere at any time. Notably, tourists can avail of our devoted cab rental service. We, an excellent Delhi taxi service provider, know good accommodation facilities and tourist spots. As such, they can have the best experience by hiring a taxi in Delhi with us. 
                     </p>
                     <h3>Timeliness</h3>
                     <p className="font font22">
                          It is our foremost priority in our dedicated Delhi taxi service. We ensure that we pick you up at the scheduled time. We focus on allowing you to reach your destination on time, So you do not arrive late to work or miss the flight.
                     </p>
                     <h3>Safety</h3>
                     <p className="font font22">
                          Safety is synonymous with Aeiety Trips, the provider of reliable cab service in Delhi. We ensure safe cab travel by implementing proven safety protocols. We deploy serviced cars and experienced drivers. These prevent any untoward incidents during taxi travel.  
                     </p>
                     <h3>Reasonable Pricing</h3>
                     <p className="font font22">
                           With Aeiety Trips, the Delhi taxi fare depends on the distance traveled and the car type. There is no pricing parameter in addition to these. You need to pay the amount we quoted for the cab booking in Delhi. There is no additional payment or hidden costs. Notably, we ask for reasonable prices. We refrain from asking for excessive fares. As such, you will find fares for local and outstation taxi service in Delhi affordable. You need to pay the fixed fare agreed upon when you book a taxi in Delhi. We enable customers to get value for their money. 
                     </p>
                     <h3>Cleanliness</h3>
                     <p className="font font22">
                          We ensure clean cars to prevent you from traveling in an unpleasant interior. That is why your travel becomes pleasant when you book taxi in Delhi from Aeiety Trips. Our vehicles are washed frequently to maintain cleanliness. 
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
                     <h2 className="text-center">FAQs : Delhi Taxi</h2> 
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                     <section className="font font22">
                          <Collapsible trigger="&#43;Which is the best Delhi cab service?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Certain factors could be attributed to define the best cab services in Delhi. They are customer-centricity, timeliness, affordability, and safety. We at Aeiety Trips have all of them.                              
                               </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How do I change my travel schedule or cancel my cab booking in Delhi?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Let us know in advance. Remember, rescheduling or canceling will attract a fee if done on the day of travel. 
                               </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How can I get a taxi for business tours?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Contact Aeiety Trips. We provide excellent cab service for business trips.                                   
                               </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;Does Aeiety Trips offer discounts?">
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Yes, we do. We offer discounts if you frequently book a taxi in Delhi from us. 
                               </p>      
                         </Collapsible>                         
                     </section>
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
                     <h3>Local Delhi Taxi Service</h3>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                     
                     <p className="font font22">
                          We at Aeiety Trips offer a local taxi service in Delhi for rides within the city. As such, you can use our cabs for office visits, attending business meetings, sightseeing tours with your family, hospital visits, or airport transfers. Businesses can book a Delhi taxi from us for official tours. A taxi booking in Delhi can help to carry a patient to the hospital. You can ride our taxi in Delhi for sightseeing within the city.  You can also get an airport taxi in Delhi from Aeiety Trips. Our service is perfect for <a href="https://delhitourism.gov.in" target="_blank" rel="noreferrer noopener" className="text-decoration-none link-danger">tourists</a> going to various places in the city. 
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
                          You can get a dedicated outstation taxi service in Delhi to travel outside the city without hassles from Aeiety trips. People travel to the adjoining states for various purposes. As such, they need a dedicated Delhi taxi service. Tourists often book cabs in Delhi for outstation tours. They go to the neighboring states to visit tourist places. People also need a taxi in Delhi for business tours in the adjoining states. We run a one-way and round-trip taxi service in Delhi for outstation tours. Our operations preserve our principles of affordability, timeliness, safety, and comfortability. Our excellent drivers also act as guides due to their in-depth knowledge.
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
                     <h2 className="text-center">Offerings of Our Top-Class Delhi Taxi Service</h2>                                        
              </div>
              <div className="col-sm-1"></div>
         </div>
         <div className="row background-lemonchiffon p-3">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">                     
                     <p className="font font22">
                          You will get a Delhi taxi service based on your needs and budget from Aeiety Trips. We run dedicated cab operations in the city. The city’s environment is busy. People need cabs for various needs. Taxi service in Delhi is essential for traveling in or outside the city. At Aeiety Trips, we care for customers. We ensure the best cab experience for them. That is why, we structured our operations to provide comfort, safety, and timeliness at reasonable fares. We continuously strive to understand emerging customer tastes and preferences. We work dedicatedly to fulfill them. Our dedicated cab operations can provide you with a taxi in Delhi for all types of travel.
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

