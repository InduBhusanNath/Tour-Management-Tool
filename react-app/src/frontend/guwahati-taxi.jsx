import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Collapsible from 'react-collapsible';
import TaxiQuickBooking from "./taxi-quick-booking";
import TaxiChooseUs from "./taxi-choose-us";
import TaxiServiceDisplay from "./taxi-service-display";


export default function GuwahatiTaxi(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <GuwahatiTaxiBanner/>
                     <BreadCrumb/>
                     <Intro/>
                     <QuickCabBooking/>
                     <WhyChooseGuwahatiTaxi/>
                     <GuwahatiTaxiOfferings/>                     
                     <OutstationGuwahatiTaxi/>
                     <TopGuwahatiTaxiOutsationRoutes/>
                     <LocalGuwahatiTaxi/>
                     <GuwahatiVisitingPlaces/>                     
                     <Faqs/>
                     <GuwahatiTaxiExcellence/>                                   
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
                <title>Cab Service in Guwahati for Assam & NE With Budget Fares</title>                
                <meta name="description" content="Get the best cab service in Guwahati for local and outstation rides at reasonable fares. Book a Guwahati taxi for all places in Assam and northeastern states."/>
                <link rel="canonical" href="https://aeiety.com/guwahati-taxi"/>
                <meta property="og:title" content="Cab Service in Guwahati for Assam & NE With Budget Fares"/>
                <meta property="og:url" content="https://aeiety.com/guwahati-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Get the best cab service in Guwahati for local and outstation rides at reasonable fares. Book a Guwahati taxi for all places in Assam and northeastern states."/>
                <meta property="og:locale" content="en_GB"/>
            </Helmet>
     </>);
}
//Bannner
function GuwahatiTaxiBanner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <figure className="p-0 m-0">
                          <img src="https://i.postimg.cc/tR8X90vQ/Guwahati-Taxi-Banner.webp" alt="Aeiety Trips" className="img-fluid w-100 p-0 m-0"/>
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
                                    <li class="breadcrumb-item"><a href="/" className="link-secondary">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/aboutus" className="link-secondary">About Us</a></li>
                                    <li class="breadcrumb-item"><a href="/taxis" className="link-dark">Taxi</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Taxi Guwahati</li>
                               </ol>
                          </nav> 
                    </div>
              </div>
     </>);
}
//Body1
function Intro(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 text-center">
                     <h1>The Best Cab Service in Guwahati Makes the Difference</h1>
                </div>
                <div className="col-sm-2"></div> 
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>  
                <div className="col-sm-10 ">                     
                     <p className="font font22">
                          We at Aeiety Trips strive to make a difference. It makes our offerings stand apart from the rest. You can get the best cab service in Guwahati from Aeiety Trips. We dedicate our focused offering to benefit the customer the most.
                     </p>
                     <p className="font font22">
                          We provide affordable, timely, and safe cabs in Guwahati.  A proper understanding of the customer is behind our best Guwahati taxi service. We ensure smooth and efficient taxi trips. As such, you will encounter nil hassles in taxi booking in Guwahati.
                     </p>
                     <p className="font font22">
                          We continuously upgrade. Foreigners can get the best tourist taxi in Guwahati. Our efforts eradicate pain points and increase efficiency. Our local and outstation taxi service in Guwahati involves cabs of different types. You can get small, medium, or large for various needs.
                     </p>
                     <p className="font font22">
                          You can be sure of the best taxi Guwahati ride experience when you choose Aeiety Trips. We ensure the best cab service in Guwahati.
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

//Why Choose Us
function WhyChooseGuwahatiTaxi(){
      return(<>
           <div className="row background-lightyellow  p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Cab Service in Guwahati</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          We are aware that running a cab service in Guwahati is challenging. People from all over India and foreign countries come to the vibrant city. Many of them hire cabs in Guwahati to go from place to place in and outside the city. Providing them with personalized cab services needs careful planning and sincere efforts. Only that can give them the best cab experience. Therefore, we have carefully planned our Guwahati taxi service, looking at every possible scenario. As a result, our carefully and thoughtfully planned taxi Guwahati operations provide the best experience. That is why it makes sense to select our best cab service in Guwahati.
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
//Offerings
function GuwahatiTaxiOfferings(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Offerings of Our Best Cab Service in Guwahati</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          At Aeiety Trips, we planned our cab rental operation with due diligence. We considered every aspect of the customer. That enabled us to structure our excellent cab service in Guwahati to cater to all needs. Due to this, you can get a cab for any purpose. Our comprehensive Guwahati taxi operations include:
                     </p>
                     <p className="font font22">
                          <ul class="list-group list-group-flush">
                               <li class="list-group-item bg-transparent">
                                    &#x2705;&nbsp;Local taxis to institutions, offices, hotels, markets, hospitals, or entertainment entities within the city.
                               </li>
                               <li class="list-group-item bg-transparent">
                                    &#x2705;&nbsp;Outstation taxis to places outside the city. We run one-way and round-way cabs for all destinations within Assam, Arunachal Pradesh, and Meghalaya.
                               </li>
                               <li class="list-group-item bg-transparent">
                                    &#x2705;&nbsp;Airport transfers for picking up and dropping.
                               </li>
                               <li class="list-group-item bg-transparent">
                                    &#x2705;&nbsp;Sightseeing cabs for pleasure trips to destinations inside and outside the city. 
                               </li>
                          </ul>
                     </p>
                </div>
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



//Outstation
function OutstationGuwahatiTaxi(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Prefered Cab Service in Guwahati for Outstation Destinations</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          At Aeiety Trips, we provide excellent outstation cab service in Guwahati. It is helpful for foreigners who come to the city to explore other parts of Assam and northeast India. They can regard it as a dependable tourist taxi service in Guwahati. We know about the best hotels and tourist spots in the northeastern region. As such, we can act as a trusted guide, giving them a smooth trip experience apart from providing them with the best cabs in Guwahati. Due to our reliable guidance, tourists can travel smoothly.  We provide Guwahati taxi to all parts of Assam and the northeastern states of Arunachal Pradesh and Meghalaya.                    
                     </p>                                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Top Outstation Routes
function TopGuwahatiTaxiOutsationRoutes(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Top Outstation Taxi Service in Guwahati Routes</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <div className="card-group">
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Guwahati to Kaziranga taxi
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Guwahati to Shillong taxi
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0 border-end-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Guwahati to Sohra cab
                               </div>
                          </div>
                     </div>
                     <div className="card-group">
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Guwahati to Jorhat taxi
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Guwahati to Sivasagar cab
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0 border-end-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Guwahati to Dibrugarh taxi
                               </div>
                          </div>
                     </div>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}

//Local Taxi
function LocalGuwahatiTaxi(){
      return(<>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Excellent Cab Service in Guwahati for Local Trips</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          We provide cabs to any place to visit in Guwahati. Our dedicated local cab service in Guwahati can be the perfect option for tourists who want to travel inside the city. With many tourist places in Guwahati, foreigners and visitors from different regions in India can get many options. They can undergo the best sightseeing experience by hiring our dedicated Guwahati taxi service. With our comprehensive knowledge of the available Guwahati tour places, we can ensure customers a rich Guwahati tourism experience. Ancient temples, stunning river beaches, parks, waterfalls, a planetarium, a science museum, and an art museum are the attractive Guwahati tourist places. Our customer-centric taxi Guwahati covers all such locations.
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
                                    &#x2705;&nbsp;Corporate Tours
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
                                    &#x2705;&nbsp;<Link to="/guwahati-airport-taxi" className="text-decoration-none link-dark">Airport Transfers</Link>
                               </div>
                          </div>
                          <div className="card bg-transparent border-top-0 border-bottom-0 border-start-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Railway Station Transfers
                               </div>
                          </div>
                          <div className="card bg-transparent border-0">
                               <div className="card-body font font22">
                                    &#x2705;&nbsp;Customized Tours
                               </div>
                          </div>
                     </div>
                </div>
                <div className="col-sm-1"></div>                
           </div>      
      </>);
}
//Guwahati Places to Visit
function GuwahatiVisitingPlaces(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Places to Visit in Guwahati: Local Sightseeing Cab Service in Guwahati</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Umananda: World’s Smallest Riverine Island</h3>
                     <img src="https://i.ibb.co/R4hnCQd3/umananda.webp" alt="cab service in Guwahati" className="rounded shadow-sm img-fluid float-start m-1 p-0"/>
                     <p className="font font22">
                          <a href="https://en.wikipedia.org/wiki/Umananda_Temple" target="_blank" rel="noreferrer noopener" className="text-decoration-none link-danger">Umanada</a> speaks for itself. It distinguishes itself as the smallest among all revering islands across the world. It is also called Peacock Island. The island stands on the river Brahmaputra, flowing across the city. You can rent our local cab service in Guwahati to reach the bank. 
                     </p>
                     <p className="font font22">
                          The island is one of the attractive aspects of Guwahati tourism. Umanada sustains heavy footfall almost every day, and numerous people, including foreigners, come to experience its uniqueness. 
                     </p>
                     <p className="font font22">
                          An ancient Shiva temple stands on the island. However, Umanada is not an exclusive religious spot. It is a place to experience natural beauty. The surroundings around Umananda are majestic. The Brahmaputra river, with both banks and the city as the background, gives a beautiful view. Mesmerizing sight can remain in memory forever. Also, the peaceful atmosphere can bring calmness to the mind.
                     </p>
                     <p className="font font22">
                          Reaching Umananda can be quick and convenient. Hire our cab service in Guwahati. After deboarding from the taxi, visitors should board a ferry at the river bank to reach the island.Ferries run at frequent intervals, providing seamless connectivity between the island and the river bank. Interestingly, ferry travel can be another exciting experience. With the island in sight, the flowing river, and the natural beauty around, the experience can be unforgettable.
                     </p>
                     <h3>Nilachal Hill: the Abode of the Kamakhya Temple</h3>
                     <img src="https://i.ibb.co/PZ4NFxs5/kamakhya.webp" alt="Guwahati taxi service" className="rounded shadow-sm img-fluid float-start m-1 p-0"/>
                     <p className="font font22">
                          A fusion of natural beauty and spirituality attracts people from various parts of the world to the Nilachal Hills. The fame of Nilachal Hills in Guwahati has spread globally. That is due to the abode of the famous <a href="https://en.wikipedia.org/wiki/Kamakhya_Temple" target="_blank" rel="noreferrer noopener" className="text-decoration-none link-danger">Kamakhya</a> temple being on the hills. 
                     </p>
                     <p className="font font22">
                          The hills stand on the south bank of the river Brahmaputra. People from different parts of India and overseas countries regularly visit the temple. The presence of people from various places also creates vibrancy around.
                     </p>
                     <p className="font font22">
                          Renting a cab service in Guwahati is the best option to reach the temple. The Guwahati to Kamakhya taxi fare is moderate. The ride from the foothill to the temple will be exciting. The natural beauty and serenity will make you undergo a unique experience of the popular place to visit in Guwahati.
                     </p>
                     <h3>Srimanta Sankardev Kalakshetra—the Cultural Hub</h3>
                     <img src="https://i.ibb.co/hxbVLr5G/kalakshetra.webp" alt="Guwahati outstation cab services" className="rounded shadow-sm img-fluid float-start m-1 p-0"/>
                     <p className="font font22">
                          It is a cultural institution. There is a mix of educational aspects and excitement in Srimanta Sankardev Kalakshetra.
                     </p>
                     <p className="font font22">
                          Inside its premises, there is a cultural museum, park, library, restaurants, and theatre. It has become one of the most visited Guwahati tourist places. Its popularity has spread significantly. 
                     </p>
                     <p className="font font22">
                          Visitors can avail a cab service in Guwahati to reach the cultural institution. They can also opt for an hourly cab rental in Guwahati.
                     </p>
                     <h3>North Guwahati—the Land of Historical Temples</h3>
                     <img src="https://i.ibb.co/zVf4MP5Q/north-guwahati.webp" alt="local cabs in Guwahati" className="rounded shadow-sm img-fluid float-start m-1 p-0"/>
                     <p className="font font22">
                          The city’s part on the north bank of the river Brahmaputra is appealing. It is called North Guwahati. The calm atmosphere differentiates it from other parts of the city.There is a broad range of things to do in North Guwahati. Sightseeing, engaging in spirituality, and picnicking could be the preferred ones.
                     </p>
                     <p className="font font22">
                          Centuries-old temples testify to the richness of construction technology in ancient days. They were built by kings who ruled during the 17th and 18th centuries. As such, the temples are more than three hundred years old.
                     </p>
                     <p className="font font22">
                          Interestingly, the temples appear in good condition despite being that old. That speaks of the advanced construction technology in the past centuries.
                     </p>
                     <p className="font font22">
                          A visit to the temples can arouse spirituality apart from getting insights into the rich construction methodologies of the past. Also, visitors can spend time in a peaceful atmosphere to diminish stress.
                     </p>
                     <p className="font font22">
                          There are green areas and beautiful river banks to explore. These places are also popular picnic spots.
                     </p>
                     <p className="font font22">
                          Booking a cab service in Guwahati is a quick method to reach North Guwahati from the other bank. Besides, you will find other good options apart from cabs in Guwahati.
                     </p>
                     <p className="font font22">
                          Ferries run to and from North Guwahati at frequent intervals. That can be an exciting experience due to the sight of the banks and the river.
                     </p>
                     <p className="font font22">
                          Besides, the ropeway can be another exciting option for commuting to and from North Guwahati.
                     </p>
                     <h3>Basistha Temple</h3>
                     <img src="https://i.ibb.co/PGgcQ2xB/basistha.webp" alt="Guwahati cab service" className="rounded shadow-sm img-fluid float-start m-1 p-0"/>
                     <p className="font font22">
                          You can visit the famous Basistha Temple in Guwahati. It is mythologically relevant. You can hire our reliable cab service in Guwahati to reach the temple. It is around 2.9 km from the Basistha Charilai.
                     </p>
                     <p className="font font22">
                          King Raja Rajeswar of the Ahom dynasty built it in the 18th century.
                     </p>
                     <p className="font font22">
                          Book our trusted Guwahati taxi to reach the temple conveniently. You can enjoy the natural beauty around the temple, on Sandhyachal Hill. The surroundings are calm, peaceful, and natural. Interestingly, three rivers Sandhya, Kanta, and Lalita meet near the temple.
                     </p>
                     <h3>Garbhanga Waterfall: Adventure and Wildlife Meet</h3>
                     <p className="font font22">
                          You can plan to enjoy a waterfall in Guwahati. It is at Garbhanga in the city. Garhnanga is a wildlife sanctuary 15 km south of the city. You can reach there without any hassles by availing of our best cab service in Guwahati. 
                     </p>
                     <p className="font font22">
                          Interestingly, enjoying the scenic beauty of the waterfall is not the only activity at Garbhanga. You can enjoy picnics, watch birds, walk in the forest, and click photographs. Garbhanga is reachable by a Guwahati cab booking from Aeiety Trips.
                     </p>
                     <p className="font font22">
                          Notably, the forest reserve is also a place for adventure tourism. As such, you can engage in trekking. Nevertheless, it is a must-visit place in Guwahati.
                     </p>
                     <h3>Assam State Museum: Standing Since the British Era</h3>
                     <img src="https://i.ibb.co/350S2FV4/museum-guwahati.webp" alt="cabs in Guwahati" className="rounded shadow-sm img-fluid float-start m-1 p-0"/>
                     <p className="font font22">
                          If you are keen on experiencing things established during the pre-independence period, the Assam State Museum is the one to go. It is in Guwahati. You can hire our reliable cab service in Guwahati to reach the museum.
                     </p>                     
                     <p className="font font22">
                          Robert Reid, the then Governor of Assam, inaugurated the museum on 21 April 1940. It is a must-see thing in the city. Assam State Museum is near Dighalipukhuri. 
                     </p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <h3>Science Museum: Knowledge and Entertainment</h3>
                     <img src="https://i.ibb.co/LDND71Vb/science-centre.webp" alt="cab booking Guwahati" className="rounded shadow-sm img-fluid float-start m-1 p-0"/>
                     <p className="font font22">
                          It is located in Khanapara. You can hire our affordable cab service in Guwahati to reach the science museum. It allows you to learn many aspects of science. 
                     </p>
                     <p className="font font22">
                          In addition, you can participate in the science exhibitions and activities the museum organizes from time to time. Notably, you can enjoy the regular 3-D film shows on science in the museum. 
                     </p>
                     <p className="font font22">
                          There are picnic facilities inside the museum premises. As such, you can enjoy a picnic with your family there. The science museum is 32 km away from the airport. You can rent our airport taxi Guwahati to visit the National Science Centre.
                     </p>
                     <h3>Purva Tirupati Sri Balaji Temple</h3>
                     <img src="https://i.ibb.co/Qjmvtvw2/tirupati.webp" alt="Guwahati cab rental" className="rounded shadow-sm img-fluid float-start m-1 p-0"/>
                     <p className="font font22">
                          It is one of the most spectacular places to visit in Guwahati. Purva Tirupati Sri Balaji Temple has an eye-catching campus. Also, its location is convenient. You can book a cab service in Guwahati to go there. 
                     </p>
                     <p className="font font22">
                          The temple is near the main bus stand at Betkuchi locality in the city. The temple’s marvelous architectural style is South Indian. There is a well-maintained park with sitting facilities. Also, it will catch your eye.   In addition, there is an open-air restaurant inside the premises that serves South Indian food. Besides, there are parking facilities on the premises. 
                     </p>
                     <p className="font font22">
                          You can spend evenings there. If you want to go to the airport after visiting the temple, book a dedicated Guwahati airport taxi from Aeiety Trips.
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
                     <h2 className="text-center">FAQs : Cab Service in Guwahati</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lemonchiffon p-3">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">                     
                     <section className="font font22">
                          <Collapsible trigger="&#43;Which provides the best Guwahati taxi service?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    We at Aeiety Trips provide one of the best taxi Guwahati services.  
                               </p>      
                          </Collapsible>
                          <Collapsible trigger="&#43;Does Aeiety Trips provide hourly car rentals in Guwahati?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Yes, we do provide cabs on an hourly basis.
                               </p>      
                          </Collapsible>
                          <Collapsible trigger="&#43;What types of cars do Aeiety Trips provide?">                               
                               <p className="bg-warning rounded shadow-sm padding25">
                                    We provide compact, sedan, and luxury cars, depending on your needs. We also run SUVs. 
                               </p>      
                          </Collapsible>
                          <Collapsible trigger="&#43;Does Aeiety Trips provide a tourist taxi service in Guwahati?">
                               <p className="bg-warning rounded shadow-sm padding25">
                                    Yes, we provide tourists with exclusive cab service in the city. 
                               </p>      
                          </Collapsible>                           
                     </section>                          
                </div>                
                <div className="col-sm-2"></div>
           </div>                      
     </>);
}
//Guwahati Taxi Excellence
function GuwahatiTaxiExcellence(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Decode the Excellence of Our Cab Service in Guwahati </h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          We have dedicated time and effort to serve our customers in the best possible ways. And that resulted in the excellence of our cab service in Guwahati.
                     </p>
                     <h3>Timeliness</h3>
                     <p className="font font22">
                          Timely pickup is the assurance of our Guwahati taxi service. For this reason, you can board the taxi on time. As such, you can reach your destination as per your schedule.
                     </p>
                     <h3>Safety</h3>
                     <p className="font font22">
                          Safety is our focus which ensures customers encounter no unwanted situations during their rides. For this, we provide well-maintained cabs and ensure experienced drivers. We believe this is one of the most essential criteria for the best taxi service in Guwahati. With these initiatives, the probability of accidents is minimal. We are among those providers of cabs in Guwahati that have made timely servicing of cars and expert drivers mandatory for our operations.
                     </p>
                     <h3>Reasonable Fares</h3>
                     <p className="font font22">
                          Asking for reasonable fares is one of our guiding principles. So, we refrain from asking for excessive fares. That makes us the most reasonably-priced Guwahati cab service provider. In addition, we do not incorporate any hidden costs in our pricing structure.
                     </p>
                     <p className="font font22">
                          Notably, we are one of the providers of high-quality Guwahati taxi service.
                     </p>
                     <h3>Comprehensive Service</h3>
                     <p className="font font22">
                          In addition to providing the best local cab service in Guwahati, we run an excellent taxi service in Guwahati for outstation. If you are a foreigner looking for a reliable outstation taxi service in Guwahati, you can use our taxis in Guwahati. We provide cabs in Guwahati to any destination in Assam and northeastern states.
                     </p>
                     <p className="font font22">
                          We maintain good relationships with our customers. We believe that helps provide customer-centric Guwahati taxi services.
                     </p>
                     <p className="font font22">
                          You can easily book a cab service in Guwahati from us. There are no hassles in booking a cab from Aeiety Trips. You can submit the request form on our website. Alternatively, call, email, or WhatsApp us. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>

      </>);
}

