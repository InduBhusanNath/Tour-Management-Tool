import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Collapsible from 'react-collapsible';

//Main export function
export default function Cruises(){
     return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <CruiseBanner/>
                     <BreadCrumb/>
                     <H1/>
                     <Intro/>
                     <WhatIsOnOffer/>
                     <FeaturedDestinations/>
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
                <title>Unforgettable Cruises in India: Top Packages by River & Sea</title>                
                <meta name="description" content="Discover the best cruises in India. Explore our top-rated river and sea India cruise packages, with luxury ships, and curated itineraries across India."/>
                <link rel="canonical" href="https://aeiety.com/cruises"/>
                <meta property="og:title" content="Unforgettable Cruises in India: Top Packages by River & Sea"/>
                <meta property="og:url" content="https://aeiety.com/cruises"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Discover the best cruises in India. Explore our top-rated river and sea India cruise packages, with luxury ships, and curated itineraries across India."/>
                <meta property="og:locale" content="en_GB"/>
            </Helmet>
     </>);
}
//Banner
function CruiseBanner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <figure className="p-0 m-0">
                          <img src="https://i.postimg.cc/m2QX52cZ/cruisebanner.webp" alt="Aeiety Trips" className="img-fluid w-100 p-0 m-0"/>
                     </figure>                     
                </div>
           </div>          
      </>);
}

//Breadcrumb
function BreadCrumb(){
     return(<>
               <div className="row">
                    <div className="col-sm-12 background-ghostwhite">
                          <nav aria-label="breadcrumb">
                               <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/" className="link-secondary">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/aboutus" className="link-secondary">About Us</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Cruises</li>
                               </ol>
                          </nav> 
                    </div>
              </div>
     </>);
}
//H1
function H1(){
      return(<>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Cruises in India: Explore Stunning River and Sea Voyages</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Intro
function Intro(){
      return(<>           
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Why not go for the exceptional? You can find yourself in a dream world. Luxurious ambience, scenic waterways, and world-class offerings make India Cruises the appropriate choice. 
                     </p>
                     <p className="font font22">
                          Comfort and class will define your voyage on our world-class ships. You might choose a tranquil river voyage or a lavish sea escape. You will experience curated offerings. There will be world-class service, excellent suites, and delicious food. 
                     </p>
                     <p className="font font22">
                          Our amazing cruise deals in India are a privilege for you. Embark upon amazing river and sea cruises on luxury ships.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//What is on the Offer
function WhatIsOnOffer(){
      return(<>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">What Is on the Offer: India Cruises with Style, Comfort & Unmatched Value</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          At Aeiety Trips, we curate the finest India Cruises — from serene river journeys to indulgent sea adventures — tailored for those who expect seamless luxury and exceptional value for their time.
                     </p>
                     <p className="font font22">
                          Experience the timeless beauty of India aboard our handpicked river cruises, gliding through the Ganges, Brahmaputra, or the backwaters of Kerala in refined comfort. Or set sail on our luxury sea cruises across the Arabian Sea and Bay of Bengal, with private suites, gourmet dining, and hand-crafted itineraries built around your preferences.
                     </p>
                     <p className="font font22">
                          Each journey is more than a voyage — it’s a statement. With Aeiety Trips, you gain access to exclusive cruise deals in India that combine elite service, cultural richness, and stress-free planning — ensuring every moment of your trip is as meaningful as it is memorable.
                     </p>
                     <p className="font font22">
                          Discover how India Cruises can redefine your idea of luxury travel — with experiences built entirely around your expectations.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      
      </>);
}
//Featured Destination
function FeaturedDestinations(){
      return(<>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Featured Destinations on India Cruises</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-ghostwhite p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          At Aeiety Trips, we offer a carefully curated selection of destinations that showcase the richness and diversity of India Cruises. Our itineraries include sacred journeys along the Ganges, where ancient cities like Varanasi and Kolkata unfold in a blend of tradition and grandeur. In the south, the tranquil backwaters of Kerala provide a peaceful escape through lush landscapes and timeless villages. For those drawn to the sea, our experiences include the vibrant shores of Goa, the dramatic Konkan coastline, and the pristine beauty of the Andaman Islands. Each route is crafted to balance luxury, cultural immersion, and scenic discovery. With personalized service and access to premium cruise deals in India, we ensure that every voyage delivers more than just travel — it delivers lasting impressions, elegantly wrapped in comfort.
                     </p>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Why Choose Us
function WhyChooseUs(){
      return(<>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Aeiety Trips for India Cruises</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-whitesmoke p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          At Aeiety Trips, we believe luxury is not about excess — it’s about experience. Our approach to India Cruises is built on personalization, precision, and a deep understanding of what discerning travelers truly value: comfort, culture, and curated detail.
                     </p>
                     <p className="font font22">
                          We don’t sell trips — we craft journeys. Whether it’s a slow cruise through the backwaters of Kerala or a sea-bound escape to the Andamans, every itinerary is thoughtfully selected to reflect India’s diversity while ensuring your time is spent in effortless comfort. We focus on creating intimate, meaningful travel experiences that are never rushed, never off-the-shelf.
                     </p>
                     <p className="font font22">
                          As a boutique agency, we give you what larger operators can’t — direct attention, honest recommendations, and access to exclusive cruise deals in India that align with your tastes. With Aeiety Trips, you’re not just booking a cruise. You’re choosing a partner who’s committed to elevating every moment of your journey.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
