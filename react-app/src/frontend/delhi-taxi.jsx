import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Collapsible from 'react-collapsible';
import TaxiQuickBooking from "./taxi-quick-booking";
import TaxiServiceDisplay from "./taxi-service-display";

import YoutubeDelhiTaxi from "./youtube-delhi-taxi";


//Main export function
export default function DelhiTaxi(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <DelhiTaxiBanner/>                     
                     <BreadCrumb/>
                     <Body1/>
                     <QuickCabBooking/>
                     <TaxiServiceFeatures/>
                     <Body2/>
                     <Body3/>                     
                     <OutstationRoutes/>
                     <Body4/>
                     <Faqs/>  
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
                <title>Reliable Delhi Taxi | Affordable Taxi Service in Delhi</title>                
                <meta name="description" content="Looking for a trustworthy Delhi taxi ? Get affordable, reliable, and punctual taxi service in Delhi for local and outstation travel. Book your ride today!"/>
                <link rel="canonical" href="https://aeiety.com/delhi-taxi"/>
                <meta property="og:title" content="Taxi Service in Delhi by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/delhi-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about the excellent Delhi taxi service by Aeiety Trips."/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Bannner
function DelhiTaxiBanner(){
     return(<>
          <div className="row">
               <div className="col-sm-12 p-0 m-0">
                    <img src="https://i.postimg.cc/YSJ6JQx9/Delhi-Cab-Banner.webp" alt="Cab service in Delhi" className="img-fluid w-100 p-0 m-0"/>
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
function Body1(){
      return(<>
          
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 p-4 m-1">
                                                     
                
                     <h1 className="text-center">Trustworthy Delhi Taxi Service for Satisfying Rides</h1>
                     <p className="font font22">
                          You can end your search for a reliable Delhi taxi as you found us. We at Aeiety Trips strive to provide the most affordable and satisfying cab rides. We focus on easing and streamlining rides in the city's busy environment. With our comprehensive spectrum of offerings, we can provide a reliable taxi service in Delhi for all needs. Whether you need a cab for business travel, an official trip, a sightseeing tour, an airport transfer, or carrying a patient to the hospital, you will get a local taxi in Delhi. We also provide excellent Delhi outstation taxis to travel outside the city. A combination of safety, timeliness, reasonable pricing, and focus on customer satisfaction renders Aeiety Trips the number one choice.
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
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <TaxiQuickBooking/>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Service Features
function TaxiServiceFeatures(){
     return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Get a Delhi Taxi Based on Your Need and Budget </h2>
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
//Body2
function Body2(){
      return(<>
           <div className="row background-lemonchiffon">
                <div className="col-sm-1"></div>
                <div className="col-sm-10 p-4 m-1">
                     <h2>The Key Features of Our Dedicated Delhi Taxi Service</h2>
                     <p className="font font22">
                          We understand the city's busy nature. As such, we have structured our Delhi cab service to allow you to travel quickly. That is why picking up and dropping off on time is one of our core mandates. We strive to maximize customer satisfaction. We focus on understanding customer needs. That allows us to run customized cab rental services. Also, we have optimized our customer-centric taxi service in Delhi for outstation trips to streamline the high frequency of cab requirements for tours outside the city. With the facility of a quick taxi booking in Delhi, we give you the flexibility to avail of our trusted offerings from anywhere at any time. Notably, tourists can avail of our devoted cab rental service. We are aware of good accommodation facilities and the tourist spots. As such, they can have the best experience by hiring a taxi in Delhi with us. 
                     </p>
                     <p className="font font22 fw-bold">Timeliness</p>
                     <p className="font font22">
                          It is our foremost priority in our dedicated Delhi taxi service. We ensure that we pick you up at the scheduled time. We focus on allowing you to reach your destination on time, So you do not arrive late to work or miss the flight.
                     </p>
                     <p className="font font22 fw-bold">Safety</p>
                     <p className="font font22">
                          Safety is synonymous with Aeiety Trips, the provider of reliable cab service in Delhi. We ensure safe cab travel by implementing proven safety protocols. We deploy serviced cars and experienced drivers. These prevent any untoward incidents during taxi travel.  
                     </p>
                     <p className="font font22 fw-bold">Reasonable Pricing</p>
                     <p className="font font22">
                          With Aeiety Trips, the Delhi taxi fare depends on the distance traveled and the car type. There is no pricing parameter in addition to these. You need to pay the amount we quoted for the cab booking in Delhi. There is no additional payment or hidden costs. Notably, we ask for reasonable prices. We refrain from asking for excessive fares. As such, you will find fares for local and outstation taxi service in Delhi affordable. You need to pay the fixed fare agreed upon when you book a taxi in Delhi. We enable customers to get value for their money. 
                     </p>
                     <p className="font font22 fw-bold">Cleanliness</p>
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
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>FAQs</h2> 
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                     <section className="font font22">
                          <Collapsible trigger="&#43;Which cab service is the best in Delhi?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    Certain factors could be attributed to define the best cab services in Delhi. They are customer-centricity, timeliness, affordability, and safety. At Aeiety Trips, we have all of them. 
                               </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How do I book a taxi in Delhi?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    There are multiple methods for booking a Delhi cab. You can book a cab from Aeiety Trips by calling or Whatsapping us, submitting the taxi booking form on our website, emailing us, or sending a message from our website's Contact Us page. 
                               </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;Which is a reliable Delhi airport cab service?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    Reliability is a governing principle at Aeiety Trips. We provide dependable airport transfers in Delhi. 
                               </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How do I reschedule/cancel my cab booking?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    You can do that by informing us in advance. Remember, rescheduling or cancelation will attract a fee if done on the day of travel. That means you can do that up to the previous day of your trip free of cost.
                               </p>      
                         </Collapsible>
                     </section>
                </div>
                <div className="col-sm-5">
                     <section className="font font22">
                         <Collapsible trigger="&#43;What are the fares of tourist taxis in Delhi?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    There are no universal fares. They depend on the travel distance and the car type. 
                               </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How can I get a taxi for business tours?">
                              <p className="bg-warning rounded shadow-sm padding25">
                                    Contact Aeiety Trips. We provide excellent cab service for business trips.
                               </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;Does Aeiety Trips offer discounts?">
                              <p className="bg-warning rounded shadow-sm padding25">
                                    Yes, we do. We offer discounts to our frequent customers.  
                              </p>      
                         </Collapsible>
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>          
    </>);
}
//Routes
function OutstationRoutes(){
      return(<>
           <div className="row background-lemonchiffon padding25">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Top Outstation Routes</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon padding25">
                <div className="col-sm-1"></div>
                <div className="col-sm-5">

                     <section className="bg-warning text-center p-1 m-1 rounded-pill shadow font font22">Delhi to Agra taxi</section>
                     
                     <section className="bg-warning text-center p-1 m-1 rounded-pill shadow font font22">Delhi to Shimla cab</section>
                     
                     <section className="bg-warning text-center p-1 rounded-pill shadow-sm font font22">Delhi to Manali taxi</section>
                </div>
                <div className="col-sm-5">
                     <section className="bg-warning text-center p-1 m-1 rounded-pill shadow font font22">Delhi to Haridwar cab</section>
                     
                     <section className="bg-warning text-center p-1 m-1 rounded-pill shadow font font22">Delhi to Rishikesh taxi</section>
                     
                     <section className="bg-warning text-center p-1 rounded-pill shadow font font22">Delhi to Jaipur cab</section>
                </div>
                <div className="col-sm-1"></div>
          </div>
      </>);
}
//Body3
function Body3(){
     return(<>
          <div className="row background-lemonchiffon">
               <div className="col-sm-1"></div>
               <div className="col-sm-10 p-4 m-1">
                     <h2>Offerings of Our Top-Class Delhi Taxi Service</h2>
                     <p className="font font22">
                          We care about your trip. That is why we strive to make your taxi ride comfortable, safe, and affordable. With a trusted Delhi taxi service, we provide you with all your cab needs. It does not matter whether you need a taxi for local or outstation travel. We at Aeiety Trips provide a local taxi service in Delhi for rides within the city. As such, you can use our cabs for office visits, attending business meetings, sightseeing tours with your family, hospital visits, or airport transfers. Likewise, you can get Delhi outstation taxis to travel outside the city without hassles from Aeiety trips. We ensure you experience the best with our dedicated services. 
                     </p>
                    
              </div>
              <div className="col-sm-1"></div>
         </div>
     </>);
}
//Body4
function Body4(){
     return(<>
          <div className="row background-lemonchiffon">
               <div className="col-sm-1"></div>
               <div className="col-sm-10 p-4 m-1">
                     <h2 className="text-center">Top Visiting Places in Delhi: The Coverage of Our Local Delhi Taxi Service</h2>
                     <h3>Qutub Minar</h3>
                     <p className="font font22">
                          The sight of the tall and iconic Qutub Minar is mentally stimulating. When you look at it from a distance, the curiosity to know how it came into being will catch your mind. It has significant historical significance. We provide the best taxi service in Delhi to transport you to the iconic site.
                     </p>
                     <p className="font font22">
                          Its height is 72.5m (238 ft). As a result, it is the world's tallest brick-built Minaret. Interestingly, it has 379 steps, signifying marvels of the technology during the Mughal times. A Delhi taxi booking from Aeiety Trips can ease your travel to the site. You will also see various remains of structures built during the Mughal period within the vicinity of Qutub Minar. Hiring a taxi in Delhi is the best option to reach the historically relevant entity. 
                     </p>
                     <h3>Purana Qila (Old Fort)</h3>
                     <p className="font font22">
                          The testimony to the rich history is visible in the Purana Qila. Also called the Red Fort, it is one of the major attractions. It is a fort of the Mughal dynasty era. We provide a dependable taxi service in Delhi to transport people to and from the Purana Qila. 
                     </p>
                     <p className="font font22">
                          According to historical literature, Mughal Emperor Humayun and Surid Sultan Sher Shah Suri built it. The construction was completed in 1538. Reaching the iconic fort is easy with a taxi in Delhi. 
                     </p>
                     <p className="font font22">
                          Old Fort is near Pragati Maidan. You can get there without any hassles,  using our excellent Delhi taxi service. You can experience the rich history of the Old Fort by visiting it. 
                     </p>
                     <h3>Lotus Temple</h3>
                     <p className="font font22">
                          It is a prominent attraction in New Delhi. You can hire our local cab service in Delhi to visit Lotus Temple. Its structure is that of a lotus, hence the name. It is 34m in height. Construction of the Lotus Temple was completed in 1986. Interestingly, people of any religion can visit the Lotus Temple. It is near Nehru Place in New Delhi, at the Bahapur village. Although, all sorts of public transportation including the metro are available, renting a Delhi cab can be the most convenient transportation to Lotus Temple. After visiting, you can reach the nearby Nehru Place market by hiring a cab in Delhi. 
                     </p>
                     <h3>India Gate</h3>
                     <p className="font font22">
                          The iconic India Gate is a must-visit place in Delhi. It is a war memorial near Rajpath in New Delhi. India’s parliament is nearby. Booking a taxi in Delhi is the most convenient way to reach the place. The British set up India Gate in memory of soldiers who died in the First World War. The inauguration day was December February 12, 1931.
                     </p>
                     <p className="font font22">
                          The historically relevant war memorial is among the most sought-after tourist attractions in Delhi. Interestingly, you will get a good view of India’s parliament building from India Gate. You can hire our best Delhi taxi service to visit the war memorial. 
                     </p>
                     <p className="font font22">
                          You can relax there apart from viewing the iconic war memorial. Regular illumination between 19.00 hrs to 21.30 hrs every day attracts people to participate in it. Our trusted taxi service in Delhi can be the best option for reaching India Gate seamlessly.
                     </p>
                     <h3>Connaught Place</h3>
                     <p className="font font22">
                          People often call it CP. It is the main business and financial hub in New Delhi. In Connaught Place, you will find the major companies operating, entailing a corporate atmosphere. The place also has another name: Rajiv Chowk, which is associated with especially the metro station area. Our reliable cab service in Delhi also covers CP for up and up-and-down. 
                     </p>
                     <p className="font font22">
                          There are many shopping options, including nightlife. In addition to branded showrooms, you can go on a shopping spree in the famous Palika Bazaar, and the roadside shops.
                     </p>
                     <p className="font font22">
                          With many food outlets in Connaught Place, you will find numerous dining options. There are many branded restaurants and popular food outlets to choose from. Notably, some restaurants in CP started operations in the pre-independence period. You can reach CP from anywhere in the city by riding a taxi in Delhi. 
                     </p>
                     <p className="font font22">
                          For cinema lovers, CP is the place to go. You will find many cinema halls, including multiplexes. Notably, the Regal Cinema Hall is an iconic theatre, built in 1932. You can leave the task of transporting you to the theatre to our dependable Delhi cab booking. We will drop you at the cinema hall, and pick you up after the show.
                     </p>
                     <p className="font font22">
                          There is a beautiful large park in the middle of CP. You can relax there amid a busy environment. 
                     </p>
                     <p className="font font22">
                          Furthermore, Connaught Place is near to the famous astronomical observatory Jantar Mantar, built in 1724. In addition, CP is nearby to Barakhamba Road and Kasturba Gandhi Marg.
                     </p>
                     <h3>Jantar Mantar</h3>
                     <p className="font font22">
                          In Delhi, Jantar Mantar is a must-see thing. It was built in 1724 to carry out astronomical observations. Our best-in-class local Delhi taxi service can help make a trip there smoothly. It is one of the significant attractions in the city. People from within and outside the country come to visit the historical astronomical observatory. We provide excellent taxi service in Delhi to travel to such iconic and historically relevant sites.
                     </p>
                     <h3>Dilli Haat</h3>
                     <p className="font font22">
                          People, including foreigners, regularly throng Dilli Haat, opposite the INA market. Here, you can buy food, crafts, and textiles from other states of India.
                     </p>
                     <p className="font font22">
                          Inside Dilli Haat, people of the respective states operate state-wise stalls. You can eat traditional food, buy traditional crafts and clothes, and experience the cultures of different states. Our excellent offering of an affordable taxi in Delhi can drop you off at Dilli Haat. 
                     </p>
                     <h3>Humayun’s Tomb</h3>
                     <p className="font font22">
                          It is one of the major tourist attractions in Delhi. Notably, the Humayun’s Tomb is also a UNESCO Heritage Site. Our best taxi in Delhi can pick you up to visit the place. It displays the richness of the architectural technology that prevailed during the Mughal times. The marvelous tourist spot is in Nizamuddin East in New Delhi. 
                     </p>
                     <p className="font font22">
                          Interestingly, the magnificent monument, built in 1558, has not lost its charm even after centuries. You can go there by booking a Delhi taxi from Aeiety Trips. 
                     </p>
                     <p className="font font22">
                          Remarkably, the popular historical structure is built of red sandstone. Our best cab service in Delhi can be a good option. It can help you reach Humayun’s Tomb quickly. If you book a round trip, we will pick you up after your visit.
                     </p>
                     <h3>Lal Qila (Red Fort)</h3>
                     <p className="font font22">
                          Red Fort is the English translation of Lal Qila. It is a significant historical entity in Delhi. We run a dedicated local taxi service in Delhi to transport visitors to Red Fort, one of the most visited tourist places in Delhi. 
                     </p>
                     <p className="font font22">
                          The history behind its construction is significant. The shifting of the Mughal capital from Agra to Delhi triggered the need to construct the Red Fort. It functioned as the emperor's residence. You can experience its richness by visiting the historic fort. Also, you can avoid the traveling hassles by hiring our affordable taxi in Delhi. 
                     </p>
                     <p className="font font22">
                          Emperor Shah Jahan started the construction of Lal Qila on 12 May 1638. The construction attained completion on 6 April 1648. You can travel to the UNESCO World Heritage Site by booking a Delhi taxi from Aeiety Trips. 
                     </p>
                     <h3>Mehrauli Archaeological Park</h3>
                     <p className="font font22">
                          You will visualize India’s rich history when you step into the historically relevant park in southern Delhi. Mehrauli Archaeological Park is in South Delhi. Our local Delhi taxi service can be the best option to reach the park.
                     </p>
                     <p className="font font22">
                          The park is around one km away from the iconic Qutub Minar where more than a hundred historically relevant monuments are present. The length of human occupation of over one thousand years is another point of relevance.
                     </p>
                     <p className="font font22">
                           The historical Lal Kot built during the Tomar era is a remarkable thing to see in the park. It is the oldest fort in Delhi. Rent our local Delhi cab service to reach the park in less time. 
                     </p>
                     <p className="font font22">
                          In addition, there are forts built during the Mughal times in Mehrauli Archaeological Park. Visiting it can be educational and entertaining. You can rent our on-time taxi in Delhi to visit Mehrauli Archaeological Park in less time. 
                     </p>
                     <h3>The National Museum</h3>
                     <p className="font font22">
                          It is among the important places to visit in Delhi. Our reliable Delhi taxi service can transport you to Janpath Road. As such, you can reach the museum, established in 1949, smoothly.
                     </p>
                     <p className="font font22">
                          Visiting the National Museum will entail educative value. Hiring our affordable taxi in Delhi can be the best transportation to visit the museum. You will see around two lakh artworks inside the museum. Interestingly, some are more than five thousand years old. You will visualize the rich history of India by visiting the museum in the country's national capital. 
                     </p>
                     <p className="font font22">
                          After visiting the National Museum, you can rent our best taxi service in Delhi to visit the nearby places of importance, such as the India Gate and the Parliament.
                     </p>
                     <h3>Birla Temple</h3>
                     <p className="font font22">
                          It is located near Connaught Place. You can reach the temple conveniently by hiring our best cab service in Delhi. The entire temple premises are well-maintained and spectacular. In addition to the main temple, there is a beautiful garden inside the premises. Also, it is a popular tourist spot in Delhi. 
                     </p>
                     <p className="font font22">
                          Interestingly, it was the first large Hindu temple built in New Delhi. After your visit, you can return by a Delhi cab or shop in the vibrant Connaught Place. Other options could be visiting India Gate or Lodhi Garden. If you need to go to places, like Lajpat Nagar, book our best taxi in Delhi to reach there. Construction of the temple started in 1933 and completed in 1939. 
                     </p>
                     <h3>Akshardham Temple</h3>
                     <p className="font font22">
                          The temple is one of the iconic places in Delhi. Numerous people visit Akshardham Temple daily. You should also visit the temple. Traveling to the temple can be smooth by availing of our exclusive taxi service in Delhi. The temple is located in the Pandav Nagar of New Delhi. 
                     </p>
                     <p className="font font22">
                          Its inauguration was on 6 Nov 2005. The interior of the temple premises is magnificent and well-maintained. There are eateries and a retail that sells the works of the temple associates. The main temple is a spectacular artistic construction. In addition, there is a large park inside the temple campus. Our local Delhi taxi can be a convenient transportation to the temple. 
                     </p>
                     <p className="font font22">
                          If you are a tourist and want to visit Akshardham Temple straightaway from the hotel you are staying in, renting a 24/7 taxi in Delhi can be a good option.
                     </p>
                    
              </div>
              <div className="col-sm-1"></div>
         </div>
     </>);
}