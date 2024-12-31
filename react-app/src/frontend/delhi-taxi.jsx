import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Collapsible from 'react-collapsible';
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
                     <TaxiServiceFeatures/>
                     <Body2/>                     
                     <Faqs/>                     
                     <Body3/>                     
                     <OutstationRoutes/>
                     <Body4/>
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
                <title>Delhi Taxi| Always on Time, Satisfying, Affordable Prices</title>                
                <meta name="description" content="Searching for a trusted and efficient Delhi taxi service? Discover what makes us a preferred provider of Delhi airport taxi and cab service in Delhi."/>
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
                    <img src="https://i.postimg.cc/BQYrCvxm/Delhi-Cab-Banner.webp" alt="Delhi Cab" className="img-fluid w-100 p-0 m-0"/>
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
           <div className="row background-lemonchiffon">
                <div className="col-sm-1"></div>
                <div className="col-sm-7 p-4 m-1">
                     <h1>We Provide You With Reliable Delhi Taxi Rides &#9889;</h1>
                     <p className="font font24 fw-bold text-muted">Experience More Satisfaction and Zero Hassles </p>
                     <p className="font font22">
                          Cab travel provided by Aeiety Trips is more affordable and satisfying. We focus on easing and streamlining taxi rides in the city's busy environment. Due to our comprehensive spectrum of offerings, you will get a reliable Delhi taxi for all your needs. Whether you need a cab for business travel, an official trip, a sightseeing tour, an airport transfer, or carrying a patient to the hospital, you will get local and outstation taxi service in Delhi from us. A combination of safety, timeliness, reasonable pricing, and focus on customer satisfaction renders Aeiety Trips the number one choice. We also serve satisfying Delhi airport taxi transfers.  
                     </p>
                     <p>
                          <button type="button" class="btn btn-warning shadow"><a href="/" className="action">Book Taxi in Delhi&nbsp;&#129146;</a></button> 
                     </p>
                </div>
                <div className="col-sm-3 p-4 m-1">
                    <section className="p-0">
                          <div className="card border-warning mb-3 text-dark bg-warning shadow-sm">
                               <div className="card-header text-center">
                                    <span className="fw-bold">QUICK BOOKING</span>
                               </div>
                               <div className="card-body text-center">
                                  Call/Whatsapp
                                  <br/>
                                  <span className="fw-bold">(+91)9531393648</span>
                               </div>
                          </div>
                     </section>
                     <section className="p-0">
                          <div className="card border-warning mb-3 text-dark bg-warning shadow-sm">
                               <div className="card-header border-0 text-center">
                                    <span className="fw-bold">Watch Videos</span>
                               </div>
                               <div className="card-body p-0 m-0 w-100 text-center">
                                    <YoutubeDelhiTaxi/>
                                    <a href="https://www.youtube.com/@aeiety-trips/videos" target="_blank" rel="noopener" className="text-decoration-none text-dark font font18">More Videos</a>
                               </div>
                               
                          </div>
                          
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>      
      </>);
}
//Service Features
function TaxiServiceFeatures(){
     return(<>
           <div className="row background-lemonchiffon">
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
                     <h2>The Key Features of Our Dedicated Cab Service in Delhi</h2>
                     <p className="font font22">
                          Our dedicated Delhi cab service focuses on maximizing customer satisfaction. We have structured our taxi service Delhi to suit the busy atmosphere of the city. Also, we have optimized our customer-centric cab service in Delhi for outstation trips to streamline the high frequency of cab requirements for tours outside the city. With the facility of a quick taxi booking Delhi, we give you the flexibility to book taxi from anywhere at any time. Notably, tourists can avail of our devoted Delhi airport cab service. They can book a cab beforehand to transport them to the hotel after landing at the Delhi airport. 
                     </p>
                     <p className="font font22 fw-bold">Timeliness</p>
                     <p className="font font22">
                          It is our foremost priority. We ensure that we pick you up at the scheduled time. Our focus is to allow you to reach your destination on time. That way, you do not arrive late to work or miss the flight. 
                     </p>
                     <p className="font font22 fw-bold">Safety</p>
                     <p className="font font22">
                          Safety is synonymous with Aeiety Trips, the provider of reliable cab service in Delhi. We ensure safe cab travel by implementing proven safety protocols. We deploy serviced cars and experienced drivers. These prevent any untoward incidents during taxi travel. 
                     </p>
                     <p className="font font22 fw-bold">Reasonable Pricing</p>
                     <p className="font font22">
                          Our cab fare depends on the traveled distance and the car type. There is no pricing parameter in addition to these. You need to pay the amount we quoted at the time of cab booking. There is no additional payment or hidden costs. Notably, we ask for reasonable prices. We refrain from asking for excessive fares. As such, you will find fares for local and outstation taxi service in Delhi affordable. Even our Delhi airport cab service is of fixed fare. 
                     </p>
                     <p className="font font22 fw-bold">Cleanliness</p>
                     <p className="font font22">
                          We ensure clean cars. That is why, your taxi travel becomes pleasant. The facility for quick taxi booking Delhi can allow you book taxi with ease.
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
                                    The definition of the best cab services in Delhi encompasses customer-centricity, timeliness, affordability, and safety. At Aeiety Trips, we have all of them.  
                              </p>      
                         </Collapsible>
                         <Collapsible trigger="&#43;How do I book a taxi in Delhi?">                               
                              <p className="bg-warning rounded shadow-sm padding25">
                                    You can book a taxi in Delhi in many ways. You can book a cab from Aeiety Trips by calling or Whatsapping us, submitting the taxi booking form on our website, emailing us, or sending a message from our website's  Contact Us page.  
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

                     <section className="background-transparent text-center p-1 m-1 rounded-pill shadow-sm font font22">Delhi to Agra taxi</section>
                     
                     <section className="background-transparent text-center p-1 m-1 rounded-pill shadow-sm font font22">Delhi to Shimla cab</section>
                     
                     <section className="background-transparent text-center p-1 rounded-pill shadow-sm font font22">Delhi to Manali taxi</section>
                </div>
                <div className="col-sm-5">
                     <section className="background-transparent text-center p-1 m-1 rounded-pill shadow-sm font font22">Delhi to Haridwar cab</section>
                     
                     <section className="background-transparent text-center p-1 m-1 rounded-pill shadow-sm font font22">Delhi to Rishikesh taxi</section>
                     
                     <section className="background-transparent text-center p-1 rounded-pill shadow-sm font font22">Delhi to Jaipur cab</section>
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
                     <h2>Offerings of Our Top-Class Cab Service in Delhi</h2>
                     <p className="font font22">
                           We care for you. As such, you continuously strive to give you a solution for all needs. It does not matter whether you need a taxi for local or outstation travel. We at Aeiety Trips can provide that to you. Our local taxi service in Delhi includes cabs for rides within the city. As such, you can use our cabs for office visits, attending business meetings, sightseeing tours with your family, hospital visits, or airport transfers. Likewise, you can get a dedicated outstation cab service in Delhi to travel outside the city without hassles from Aeiety trips.
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
                     <h2 className="text-center">Top Visiting Places in Delhi</h2>
                     <h3>Qutub Minar</h3>
                     <p className="font font22">
                          The sight of the tall and iconic Qutub Minar is mentally stimulating. When you look at it from a distance, the curiosity to know how it came into being will catch your mind. It has significant historical significance. We provide the best taxi service in Delhi to transport you to the iconic site. 
                     </p>
                     <p className="font font22">
                          Its height is 72.5m (238 ft). As a result, it is the world's tallest brick-built Minaret. Interestingly, it has 379 steps. A Delhi cab booking from Aeiety Trips can ease your travel to the site.
                     </p>
                     <h3>Purana Qila (Old Fort)</h3>
                     <p className="font font22">
                          The testimony to the history is visible in the Purana Qila. Also called the Red Fort, it is one of the major attractions. It is a fort of the Mughal dynasty era. We provide a dependable taxi service in Delhi to transport people to and from the Purana Qila. 
                     </p>
                     <p className="font font22">
                          According to the historical literature, Mughal Emperor Humayun and Surid Sultan Sher Shah Suri built it. The construction was completed in 1538. 
                     </p>
                     <p className="font font22">
                           Old Fort is near Pragati Maidan. You can get there without any hassles by using our excellent Delhi taxi service. You can experience the rich history of the Old Fort by visiting it. 
                     </p>
                     <h3>Lotus Temple</h3>
                     <p className="font font22">
                          It is a prominent attraction in New Delhi. You can hire our local cab service in Delhi to visit Lotus Temple. Its structure is that of a lotus, hence the name. It is 34m in height. Construction of the Lotus Temple was completed in 1986. Interestingly, people of any religion can visit the Lotus Temple.  
                     </p>
                     <h3>India Gate</h3>
                     <p className="font font22">
                          The iconic India Gate is a must-see entity in Delhi. It is a war memorial near Rajpath of New Delhi. India’s parliament is nearby. The British set up India Gate in memory of soldiers who died in the First World War. The inauguration day was December February 12, 1931.
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
                          With many food outlets in Connaught Place, you will find numerous dining options. There are many branded restaurants and popular food outlets to choose from. Notably, some restaurants in CP started operations in the pre-independence period. 
                     </p>
                     <p className="font font22">
                          For cinema lovers, CP is the place to go. You will find many cinema halls, including multiplexes. Notably, the Regal Cinema Hall is an iconic theatre, built in 1932. You can leave the task of transporting you to the theatre to our dependable Delhi cab booking. We will drop you at the cinema hall, and pick you up after the show.
                     </p>
                     <p className="font font22">
                          There is a beautiful large park at the center of CP. You can relax there amid a busy environment. 
                     </p>
                     <p className="font font22">
                          Furthermore, Connaught Place hosts the famous astronomical observatory Jantar Mantar, built in 1724. In addition, CP is nearby to Barakhamba Road and Kasturba Gandhi Marg.
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
                          Inside Dilli Haat, people of the respective states operate state-wise stalls. You can eat traditional food, buy traditional crafts and clothes, and experience the cultures of different states. Our excellent taxi service in Delhi can drop you off at Dilli Haat. 
                     </p>
                     <h3>Humayun’s Tomb</h3>
                     <p className="font font22">
                          It is one of the major tourist attractions in Delhi. Notably, the Humayun’s Tomb is also a UNESCO Heritage Site. It displays the richness of the architectural technology that prevailed during the Mughal times. The marvelous tourist spot is in Nizamuddin East in New Delhi. 
                     </p>
                     <p className="font font22">
                          Interestingly, the magnificent monument, built in 1558, has not lost its charm even after centuries. You can go there by booking a Delhi taxi from Aeiety Trips. 
                     </p>
                     <p className="font font22">
                          Remarkably, the popular historical structure is built of red sandstone. Our best cab service in Delhi can be a good option. It can help you reach  Humayun’s Tomb quickly. If you book a round trip, we will pick you up after your visit.
                     </p>
                     <h3>Lal Qila (Red Fort)</h3>
                     <p className="font font22">
                          Red Fort is the English translation of Lal Qila. It is a significant historical entity in Delhi. We run a dedicated local taxi service in Delhi to transport visitors to Red Fort, one of the most visited tourist places in Delhi. 
                     </p>
                     <p className="font font22">
                          The history behind its construction is significant. The shifting of the Mughal capital from Agra to Delhi triggered the need to construct the Red Fort. It functioned as the emperor's residence. 
                     </p>
                     <p className="font font22">
                          Emperor Shah Jahan started the construction of Lal Qila on 12 May 1638. The construction attained completion on 6 April 1648. You can travel to the UNESCO World Heritage Site by booking a Delhi taxi from Aeiety Trips. 
                     </p>
                     <h3>Mehrauli Archaeological Park</h3>
                     <p className="font font22">
                          Stepping into the Mehrauli Archaeological Park will take you back into the rich history of India. You can rent our affordable cab service in Delhi to visit the popular historical site in South Delhi.  It is around one kilometer away from the iconic Qutub Minar. You will find more than historically relevant monuments in the park. Interestingly, the place has been occupied for over 1,000 years. That indicates the importance of the Mehrauli Archaeological Park. Hiring our local Delhi taxi service can allow you to reach the park in less time. Inside the Mehrauli Archaeological Park, you will see the ancient Lal Kot built during the Tomar era. Interestingly, that is the oldest fort in Delhi. In addition, there are forts built by the Khalji, Tughlaq, Lodhi, and Mughal dynasties. Visiting the Mehrauli Archaeological Park can be educative and entertaining.
                     </p>
                     <h3>The National Museum</h3>
                     <p className="font font22">
                          It is among the important places to visit in Delhi. Our reliable Delhi taxi service can transport you to Janpath Road. As such, you can reach the museum, established in 1949, smoothly. Visiting the National Museum will entail educative value. You will see around two lakh artworks inside the museum. Interestingly, some are more than five thousand years old. You will visualize the rich history of India by visiting the museum in the country's national capital. After visiting the National Museum, you can rent our best taxi service in Delhi to visit the nearby places of importance, such as the India Gate and the Parliament.
                     </p>
                    
              </div>
              <div className="col-sm-1"></div>
         </div>
     </>);
}