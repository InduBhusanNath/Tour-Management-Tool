import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';
import TaxiService from "./taxi-service";
import YoutubeGuwahatiTaxi from "./youtube-guwahati-taxi";
import WhatYouGetFromUs from "./what-you-get-from-us";

export default function GuwahatiTaxi(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <GuwahatiTaxiBanner/>
                     <BreadCrumb/>
                     <Body1/>
                     <TaxiServiceFeatures/>
                     <Faqs/>
                     <Body2/>
                     <Body3/>                 
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
                <title>Cab Service in Guwahati-Local, Outstation, Airport Bookings</title>                
                <meta name="description" content="Get dedicated cab service in Guwahati from Aeiety Trips. We provide safe, smooth and timely Guwahati taxi service at affordable prices for local and outstation."/>
                <link rel="canonical" href="https://aeiety.com/guwahati-taxi"/>
                <meta property="og:title" content="Taxi Service in Guwahati by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/guwahati-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about the excellent cab service in Guwahati by Aeiety Trips."/>
                <meta property="og:locale" content="en_GB"/>
            </Helmet>
     </>);
}
//Bannner
function GuwahatiTaxiBanner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <img src="https://i.ibb.co/4mXDNqh/Cab-Guwahati-Banner.png" alt="Guwahati Cab" className="img-fluid w-100 p-0 m-0"/>
                </div>
           </div>          
      </>);
}
//Breadcrumb
function BreadCrumb(){
     return(<>
               <div className="row">
                    <div className="col-sm-12 bg-light bg-gradient">
                          <nav aria-label="breadcrumb">
                               <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Taxi Guwahati</li>
                               </ol>
                          </nav> 
                    </div>
              </div>
     </>);
}
//Body1
function Body1(){
      return(<>
           <div className="row background-lemonchiffon">
                <div className="col-sm-1"></div>  
                <div className="col-sm-7 p-4 m-1">
                     <h1>CAB SERVICE IN GUWAHATI&#9889;</h1>
                     <p className="font font24 fw-bold">We Made it Affordable,Timely, Hassle-Free</p>
                     <p className="font font22">
                          Cab service in Guwahati by Aeiety Trips is synonymous with a firm dedication to providing customers with the best Guwahati taxi service. With affordable fares, timely pickup, and nil hassles, we ensure smooth and efficient taxi trips. We at Aeiety Trips distinguish ourselves through timeliness, understanding of the customer, our efforts to eradicate pain points, and efficiency. Our customer-centric local and outstation taxi service in Guwahati provides cabs of different types: small, medium, or luxury for various needs. You can get the best taxi Guwahati ride experience when you choose Aeiety Trips.     
                     </p>
                     <p>
                          <button type="button" class="btn btn-warning shadow"><a href="/" className="action">Book Taxi Guwahati&nbsp;&#129146;</a></button> 
                     </p>
                     
                </div>
                <div className="col-sm-3 p-4 m-1">                     
                     
                     <section className="p-1">
                          <div className="card border-info mb-3 text-dark bg-info text-center shadow-sm">
                               <div className="card-header">
                                    <span className="fw-bold">QUICK BOOKING</span>
                               </div>
                               <div className="card-body">
                                  Call/Whatsapp
                                  <br/>
                                  <span className="fw-bold">(+91)9531393648</span>
                               </div>
                          </div>
                     </section>
                     <section className="p-1">
                          <YoutubeGuwahatiTaxi/>
                     </section>
                </div>
                <div className="col-sm-1"></div>
          </div>

      </>);
}
//Service Features
function TaxiServiceFeatures(){
      return(<>
           <TaxiService/>
      </>);
}
//FAQs
function Faqs(){
      return(<>
           
           <div className="row background-lightyellow padding25">
                <div className="col-sm-1"></div>
                <div className="col-sm-7">
                     <section className="font font22">
                          <h2>FAQs</h2> 
                          <Collapsible trigger="&#43;What are Aeiety Trips' offerings for its taxi service in Guwahati?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Aeiety Trips provides local taxis, outstation cabs, airport transfers, and hourly rentals. 
                               </p>      
                          </Collapsible>
                          <Collapsible trigger="&#43;What types of vehicles do Aeiety Trips provide?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Aeiety Trips provides local taxis, outstation cabs, airport transfers, and hourly rentals. 
                               </p>      
                          </Collapsible>  
                          <Collapsible trigger="&#43;Can I book a cab in advance?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Yes, you can. Call, WhatsApp, or Email us to book a taxi in advance. Alternatively, you can submit the taxi booking form on our website.  
                               </p>      
                          </Collapsible>
                          <Collapsible trigger="&#43;Can I cancel/reschedule my taxi booking?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Yes, you can. Let us know about your cancelation or rescheduling by informing us in advance.   
                               </p>      
                          </Collapsible>                          
                          <Collapsible trigger="&#43;Which is the best tourist taxi service in Guwahati?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                   Aeiety Trips is the one that provides exclusive cab service in Guwahati for tourists. Our knowledge of tourist places in Guwahati and outside the city eliminates the possibility of tourists missing out on such attractions. Likewise, our awareness of good hotels can help tourists to stay comfortably, according to their budgets. 
                               </p>      
                          </Collapsible>
                          <Collapsible trigger="&#43;Is there any taxi service at Guwahati airport?">
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Yes, there is. Aeiety Trips provides Guwahati airport cab service. We provide taxis to pick up and drop off at the airport. 
                               </p>      
                          </Collapsible>
                          <Collapsible trigger="&#43;What are Guwahati outstation taxi service rates?">
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Fares for outstation cab service in Guwahati depend on the type of car and distance. We at Aeiety Trips provide cabs for outstation destinations of all places in Assam and the northeastern states of Arunachal Pradesh and Meghalaya. As such, you can get Guwahati to Shillong taxi, Guwahati to Tawang cab, Guwahati to Jorhat taxi, Guwahati to Kaziranga taxi, and others. 
                               </p>      
                          </Collapsible>
                     </section>
                </div>
                <div className="col-sm-3">                     
                     <section>
                         <WhatYouGetFromUs/>
                     </section>             
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
                     <div className="col-sm-10 p-3">
                          <h2>Inclusions of the Best Cab Service in Guwahati</h2>
                          <section className="font font22">
                               <p>We are aware that running a cab service in Guwahati is challenging. People from all over India and foreign countries come to the vibrant city. Many of them hire cabs for going from place to place in and outside the city. Providing them with personalized cab services needs careful planning and sincere efforts. Only that can give them the best cab experience. Therefore, we have carefully planned our taxi service in Guwahati, looking at every possible scenario. Our comprehensive Guwahati taxi service includes:</p>
                               <p>
                                  <ul>
                                      <li><b>Local taxis</b> to institutions, offices, hotels, markets, hospitals, or entertainment entities within the city.</li>
                                      <li><b>Outstation taxis</b> to places outside the city. We run one-way and round-way cabs for all destinations within Assam, Arunachal Pradesh, and Meghalaya. </li>
                                      <li><b>Airport transfers</b> for picking up and dropping.</li>
                                      <li><b>Sightseeing cabs</b>for pleasure trips to destinations inside and outside the city.  </li>
                                  </ul>
                               </p>
                          </section>
                          <h2>The Excellence in Our Guwahati Taxi Service</h2>
                          <section className="font font22">
                               <p>We have dedicated time and effort to serve our customers in the best possible ways. And that resulted in the excellence of our cab service in Guwahati.</p>
                               <p>Timely pickup is the assurance of our Guwahati taxi service. For this reason, you can board the taxi on time. As such, you can reach your destination as per your schedule.</p>
                               <p>Safety is our focus which ensures customers encounter no unwanted situations during their rides. For this, we provide well-maintained cabs and ensure experienced drivers. We believe this is one of the most essential criteria for the best taxi service in Guwahati. With these initiatives, the probability of accidents is minimal. We are among those taxi operators in Guwahati that have made timely servicing of cars and expert drivers mandatory for our operations.</p>
                               <p>Asking for reasonable fares is our principle. So, we refrain from asking for excessive fares. That makes us the most reasonably-priced Guwahati cab service provider. In addition, we do not incorporate any hidden costs in our pricing structure. </p>
                               <p>Notably, we are one of the taxi operators in Guwahati, offering high-quality Guwahati taxi service. </p>
                               <p>In addition to providing the best local taxi service in Guwahati, we run an excellent taxi service in Guwahati for outstation. If you are a foreigner looking for a reliable outstation taxi service in Guwahati,you can use our taxis in Guwahati. We provide cabs in Guwahati to any destination in Assam and northeastern states.</p>
                               <p>We maintain good relationships with our customers. We believe good relationships matter in providing customer-centric Guwahati cab services.</p>
                               <p>You can easily book a taxi in Guwahati from us. There are no hassles in booking a cab from AeietyTrips. You can submit the request form on our website, call, or email us directly. Alternatively, you can WhatsApp us.</p>
                               
                          </section>

                     </div>
                     <div className="col-sm-1"></div>

                </div>                
      
      </>);
}
//Taxi Service

//Body3
function Body3(){
      return(<>
                <div className="row background-lemonchiffon">
                          <div className="col-sm-1"></div>
                          <div className="col-sm-10 p-3">
                                    <h2>Excellent Taxi Service in Guwahati for Local Trips</h2>
                                    <section className="font font22">
                                         <p>
                                              We provide cabs to any place to visit in Guwahati. With many tourist places in Guwahati, foreigners and visitors from different places in India can get many options. They can undergo the best sightseeing experience by hiring our dedicated cab service in Guwahati. With our comprehensive knowledge of the available Guwahati tour places, we can ensure customers a rich Guwahati tourism experience.
                                         </p>
                                         <p>
                                         Ancient temples, stunning river beaches, parks, waterfalls, a planetarium, a science museum, and an art museum are the attractive Guwahati tourist places. Our customer-centric taxi service in Guwahati covers all such locations.
                                         </p>
                                    </section>
                                    <section className="font font22">
                                         <h3>Umananda-the Smallest Island in the World</h3>                                     
                                         <p><img src="https://i.ibb.co/0BK1MbZ/umananda-final.png" rel="noopener" alt="Umananda island" className="rounded shadow-sm img-fluid float-start m-1 p-1"/>
                                            The <a href="https://en.wikipedia.org/wiki/Umananda_Temple" target="_blank" className="text-decoration-none text-dark">Umananda</a> island is one of the best places to visit in Guwahati. Notably, it is the smallest river island in the world. Umananda is also a key component of Guwahati tourism.
                                         </p>
                                         <p>
                                            The island stands on the river Brahmaputra, flowing across the city. Being the smallest island does not mean it is devoid of human activities. Instead, Umananda attracts foreign tourists and other people. As such, it receives significant footfalls regularly.
                                         </p>
                                         <p>
                                            There is an ancient Shiva temple on the island. Numerous devotees come to the temple to offer their prayers regularly.
                                         </p>
                                         <p>
                                           In addition, the surroundings all around Umananda are majestic. The beautiful view of the Brahmaputra river, with both banks and the city as the background, provides a mesmerizing sight that can remain in memory forever. Also, the peaceful atmosphere could bring calmness to the mind.
                                         </p>
                                         <p> 
                                           Reaching Umananda can be quick and convenient by hiring a Guwahati taxi service. After deboarding from the taxi, visitors should board a ferry at the river bank to reach the island.
                                         </p>
                                         <p>
                                           Ferries run at frequent intervals, providing seamless connectivity between the island and the river bank. Interestingly, the ferry travel can be another exciting experience. With the island in sight, the flowing river, and the natural beauty around, the experience can be unforgettable.
                                         </p>
                                         <h3>Nilachal Hill-- the Abode of the Kamakhya Temple</h3>
                                         <p>
                                            A fusion of natural beauty and spirituality attracts people from various parts of the world to the Nilachal Hills. The hills stand on the south bank of the river Brahmaputra.
                                         </p>
                                         <p>
                                           The fame of Nilachal Hills in Guwahati has spread globally due to the abode of the famous <a href="https://en.wikipedia.org/wiki/Kamakhya_Temple" rel="noopener" target="_blank" className="text-decoration-none text-dark">Kamakhya</a> temple being on the hills.
                                         </p>
                                         <p>
                                           People from different parts of India and overseas countries regularly visit the temple. The presence of people from various places also creates vibrancy around.
                                         </p>
                                         <p>
                                           The best option to reach the temple is to rent a Guwahati taxi. The ride from the foothill to the temple can be an exciting experience. The natural beauty and serenity of the entire Nilachal hills make it an attractive place to visit in Guwahati.
                                         </p>
                                         <h3>Srimanta Sankardev Kalakshetra—the Cultural Hub</h3>
                                         <p><img src="https://i.ibb.co/6NchkY6/kalakshetra.png" alt="Kalakshetra" className="rounded shadow-sm img-fluid float-end m-1 p-1"/>
                                            Visiting the Srimanta Sankardev Kalakshetra in Guwahati can be educative and exciting. It is a cultural institution that gives insights into the cultural heritage of Assam. In addition, other educative aspects of the institution make it an exciting place to visit in Guwahati.
                                         </p>
                                         <p>
                                            Srimanta Sankardev Kalakshetra consists of a cultural museum, a park, a library, restaurants, and a theatre.
                                         </p>
                                         <p>
                                            It has become one of the most visited Guwahati tourist places due to the widespread popularity of the cultural institution.
                                         </p>
                                         <p>
                                            Visitors can avail of a Guwahati cab service to reach the cultural institution.
                                         </p>
                                         <h2>North Bank of River Brahmaputra—the Land of Ancient Temples</h2>
                                         <p>
                                           The city’s part on the north bank of the river Brahmaputra is popularly known as North Guwahati. It is different from the rest of Guwahati due to the calm atmosphere.
                                         </p>
                                         <p>
                                             North Guwahati has many things to do. The options include sightseeing, engaging in spirituality, and picnicking. Due to the broad range of activity options, North Guwahati is one of the best places to visit in Guwahati.
                                         </p>
                                         <p>
                                            Centuries-old temples can give a glimpse of the richness of construction technology during the ancient days.
                                         </p>
                                         <p>
                                            Temples in North Guwahati were built by kings who ruled during the 17th and 18th centuries. As such, the temples are more than three hundred years old.
                                         </p>
                                         <p>
                                           Interestingly, the temples appear in good condition despite being that old. And that speaks of the advanced construction technology in the past centuries.
                                         </p>
                                         <p>
                                           A visit to the temples can arouse spirituality apart from getting insights into the rich construction methodologies of the past. Also, visitors can spend time in a peaceful atmosphere to diminish stress.
                                         </p>
                                         <p>
                                           There are green areas and beautiful river banks to explore. These places are also popular picnic spots.
                                         </p>
                                         <p>
                                           Availing of a taxi service in Guwahati is a quick option to reach North Guwahati from the other bank. During the taxi travel, you will get the opportunity to cross the spectacular Brahmaputra river over the iconic Saraighat bridge. 
                                         </p>
                                         <p>
                                            In addition to taxis, there are other exciting options to reach North Guwahati. 
                                         </p>
                                         <p>
                                            Ferries run to and from North Guwahati at frequent intervals. That can be an exciting experience due to the sight of the banks and the river. 
                                         </p>
                                         <p>
                                            Besides, the ropeway can be another exciting option for commuting to and from North Guwahati. 
                                         </p>
                                    </section>

                          </div>
                          <div className="col-sm-1"></div>
                </div>          
      </>);
}