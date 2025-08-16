import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";

//Main export function
export default function DelhiSightseeingTaxi(){
     return(<> 
         <HelmetProvider>
             <TechnicalSEO/>
             <div className="container-fluid">
                <Header/>
                 {/*<DelhiSightSeeingCabBanner/>*/}
                <BreadCrumb/>
                <H1/>
                <Intro/>
                <DelhiVisitingPlaces/>
                <LalQila/>
                <QutubMinar/>
                <PuranaQila/>
                <LotusTemple/>
                <IndiaGate/>
                <ConnaughtPlace/>
                <JantarMantar/>
                <DilliHaat/>
                <HumayunTomb/>
                <MehrauliArchaeologicalPark/>
                <TheNationalMuseum/>
                <BirlaTemple/>
                <AkshardhamTemple/>
                <OtherTaxiRoutes/>
                <Footer/>
             </div>
         </HelmetProvider>
     </>)
}


//Technical SEO
function TechnicalSEO(){
     return(<>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Delhi Sightseeing Cab | Places to Visit in Delhi City Tour</title>                
                <meta name="description" content="Book your Delhi sightseeing cab to explore the top places to visit in Delhi. Discover must-see attractions with a comfortable Delhi city tour with our taxis."/>
                <link rel="canonical" href="https://aeiety.com/delhi-taxi"/>
                <meta property="og:title" content="Delhi Sightseeing Cab | Places to Visit in Delhi City Tour"/>
                <meta property="og:url" content="https://aeiety.com/delhi-taxi"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Book your Delhi sightseeing cab to explore the top places to visit in Delhi. Discover must-see attractions with a comfortable Delhi city tour with our taxis."/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>     
     </>);
}
//Bannner
function DelhiSightSeeingCabBanner(){
     return(<>
          <div className="row">
               <div className="col-sm-12 p-0 m-0">
                    <img src="" alt="" className="img-fluid w-100 p-0 m-0"/>
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
                                     <li class="breadcrumb-item"><a href="/delhi-taxi" className="link-dark">Delhi Taxi</a></li>
                                     <li class="breadcrumb-item active" aria-current="page">Delhi Sightseeing Taxi</li>
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
                <div className="col-sm-10">
                     <h1>Ride a Delhi Sightseeing Cab to the Top Places to Visit in Delhi</h1>
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
                <div className="col-sm-10">
                     <p className="font font22">
                          Many attractive spots are present in India’s capital city. You must explore them. Renting a reliable Delhi sightseeing cab can be a great decision.
                     </p>
                     <p className="font font22">
                          Yes, you will find good public transportation in the city. However, your travel could be uncomfortable. Metros and city buses are often crowded. Therefore, a cab can make your tour to the important places to visit in Delhi easier. 
                     </p>
                     <p className="font font22">
                          You can experience a comfortable Delhi city tour with our cabs. Our excellent service can streamline your travel. In addition, our reasonable fares give value for money. Furthermore, our pickups are on time. 
                     </p>
                     <p className="font font22">
                          Therefore, hire a Delhi sightseeing cab from Aeiety Trips. That will allow traveling to the places to visit in Delhi conveniently.
                     </p>
                     
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
                     <h2>Popular Places to Visit in Delhi All Year Round</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          There will be no seasonal constraints to your travel. So, any time can be perfect for Delhi local sightseeing. Vibrancy remains intact at the tourist places to visit in Delhi throughout the year. 
                     </p>
                     <p className="font font22">
                          Notably, you will find visitors in Delhi tourist places almost every day. So, embark upon a Delhi city tour with us.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Lal Qila
function LalQila(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Lal Qila(Red Fort)</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">              
                          <img src="https://i.postimg.cc/HWhzM5GX/LalQila.webp" alt="Delhi darshan by car to Lal Quila" className="img-fluid rounded shadow p-0 m-2"/>
                          <figcaption className="text-center">Lal Qila, New Delhi</figcaption>
                     </figure>       
                     <p className="font font22">
                          Red Fort is the English translation of Lal Qila. It is a significant historical entity in Delhi. We run a dedicated local Delhi sightseeing cab service to transport visitors to the Red Fort. It is one of the most popular tourist places to visit in Delhi.
                     </p>
                     <p className="font font22">
                          Its construction has a remarkable historical angle. The Mughals changed their capital from Agra to Delhi. That triggered the need to build it. You can experience its richness by visiting the historic fort. Also, you can quickly travel to the historical entity by hiring our affordable taxi service. 
                     </p>
                     <p className="font font22">
                          Mughal Emperor Shah Jahan started the construction on 12 May 1638. It was also his residence. The construction attained completion on 6 April 1648. You can travel to the UNESCO World Heritage Site by booking a taxi in Delhi from Aeiety Trips. 
                     </p>
                     <p className="font font22">
                          The Red Fort should be a must-include in your Delhi city tour. 
                     </p>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Qutub Minar
function QutubMinar(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Qutub Minar</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/50gbXPQB/Qutub-Minar.webp" alt="Delhi one day tour package by car toQutub Minar" className="img-fluid rounded shadow p-0 m-2"/>
                          <figcaption className="text-center">Qutub Minar, New Delhi</figcaption>
                     </figure>
                     <p className="font font22">
                          The sight of the tall and iconic Qutub Minar is mentally stimulating. When you look at it from a distance, the curiosity to know how it came into being will catch your mind. It has significant historical significance. We provide the best Delhi sightseeing cab service to transport you to the iconic sites.
                     </p>
                     <p className="font font22">
                          Its height is 72.5m (238 ft). As a result, it is the world's tallest brick-built Minaret. Interestingly, it has 379 steps, signifying the marvels of the technology during the Mughal times. It is one of the most important places to visit in Delhi. 
                     </p>
                     <p className="font font22">
                          You will also see various remains of structures built during the Mughal period within the vicinity of Qutub Minar. Hiring a Delhi city tour is the best option to visit the historically relevant sites. 
                     </p>                                                         
                </div>                
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Purana Qila
function PuranaQila(){
      return(<>
          <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Purana Qila(Old Fort)</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/5yt1Lw8Z/Purana-Qila.webp" alt="Delhi local sightseeing to Purana Qila" className="img-fluid rounded shadow p-0 m-2"/>
                          <figcaption className="text-center">Purana Qila, New Delhi</figcaption>
                     </figure>
                     <p className="font font22">
                          It is also called the Red Fort, one of the major attractions. It is of the Mughal period. We provide dependable Delhi sightseeing cab rentals to transport people to and from the place.
                     </p>
                     <p className="font font22">
                          According to historical literature, Mughal Emperor Humayun and Surid Sultan Sher Shah Suri built it. The construction was completed in 1538. And, it is among the best places to visit in Delhi.
                     </p>
                     <p className="font font22">
                          The Old Fort is near Pragati Maidan. You can keep all hassles at bay while traveling to the place by hiring our local Delhi city tour cab. You can also visit the important entity and experience its rich history. 
                     </p>
                                                           
                </div>
                <div className="col-sm-1"></div>
           </div>      
      </>);
}

//Lotus Temple
function LotusTemple(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Lotus Temple</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/NF1C3p9r/Lotus-Temple.webp" alt="car for Delhi darshan and Lotus Temple" className="img-fluid shadow rounded p-0 m-2"/>
                          <figcaption className="text-center">Lotus Temple, New Delhi</figcaption>
                     </figure>
                     <p className="font font22">
                          It is a prominent attraction in New Delhi. You can hire a Delhi sightseeing cab from us to visit the Lotus Temple. Its structure is that of a lotus, hence the representation. It is 34m in height. Its construction was completed in 1986. 
                     </p>
                     <p className="font font22">
                          Interestingly, people of any religion can visit it. It is near Nehru Place in New Delhi, at the Bahapur village. Although all sorts of public transportation, including the metro, are available, renting a local taxi service in Delhi can be the most convenient way to get to the Lotus Temple. 
                     </p>
                     <p className="font font22">
                          It is one of the most popular places to visit in Delhi. After visiting, you can reach the nearby Nehru Place market by hiring a Delhi city tour cab. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//India Gate
function IndiaGate(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>India Gate</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/RVYnr4mK/India-Gate.webp" alt="Delhi city tour to India Gate" className="img-fluid shadow rounded p-0 m-2"/>                          
                          <figcaption className="text-center">India Gate, New Delhi</figcaption>
                     </figure>
                     <p className="font font22">
                          It is a war memorial in New Delhi. Hiring a Delhi sightseeing cab can be the best way to travel to the India Gate stands. It is near India’s parliament, in Rajpath. The British had set up the India Gate. It is to commemorate the soldiers who lost their lives in the First World War. February 12, 1931, was its inauguration day.
                     </p>
                     <p className="font font22">
                          The historically relevant war memorial is among the most sought-after tourist attractions in Delhi. Interestingly, you will get a good view of India’s parliament building from India Gate. You can hire our top-rated taxi in Delhi service to visit the war memorial.
                     </p>
                     <p className="font font22">
                          It is among the most important places to visit in Delhi. Also, you can relax there apart from viewing the iconic war memorial. Our trusted Delhi city tour cab can be the best option for reaching the India Gate seamlessly.
                     </p>
                                        
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Connaught Place
function ConnaughtPlace(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Connaught Place</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          People often call it CP. It is the main business and financial hub in New Delhi. In Connaught Place, you will find the major companies operating, entailing a corporate atmosphere. And, the place also has another name: Rajiv Chowk, which is associated with the metro station area. Our reliable Delhi sightseeing cab service also covers CP for up and down.
                     </p> 
                     <p className="font font22">
                          There are many shopping options, including nightlife. In addition to branded showrooms, you can go on a shopping spree in the famous Palika Bazaar and the roadside shops. Our best taxi in  Delhi can enable visiting them with ease. 
                     </p>
                     <p className="font font22">
                          With many food outlets in Connaught Place, you will find numerous dining options. There are many branded restaurants and popular food outlets to choose from. Notably, some restaurants in CP started operations in the pre-independence period. You can reach CP by riding a Delhi taxi booked from Aeiety Trips from anywhere in the city. It is among the oldest places to visit in Delhi.
                     </p>
                     <p className="font font22">
                          For cinema lovers, CP is the place to go with a taxi in Delhi. Many cinema halls, including multiplexes, are available. Notably, the Regal Cinema Hall is an iconic theatre, built in 1932. You can leave the task of transporting you to the theatre to our dependable taxi booking in Delhi. We will drop you off at the cinema hall and pick you up after the show.
                     </p>
                     <p className="font font22">
                          There is a beautiful, large park in the middle of CP. You can relax there amid a busy environment.
                     </p>
                     <p className="font font22">
                          In addition, Barakhamba Road and Kasturba Gandhi Marg are nearby. Hire our Delhi tour cab to reach those places.
                     </p>
                        
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Jantar Mantar
function JantarMantar(){
      return(<>
          <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Jantar Mantar</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/13ZsVjcb/Jantar-Mantar.webp" alt="Delhi tourist cab service to Jantar Mantar" className="img-fluid shadow rounded p-0 m-2"/>                          
                          <figcaption className="text-center">Jantar Mantar, New Delhi</figcaption>
                     </figure> 
                     <p className="font font22">
                          In Delhi, Jantar Mantar is a must-see. It was built in 1724 to carry out astronomical observations. Our best-in-class local Delhi sightseeing cab service can help make a trip there smooth. 
                     </p> 
                     <p className="font font22">
                          The historical astronomical observatory sustains footfalls of people from within and outside the country. It is one of the educational and historically relevant places to visit in Delhi. We provide excellent Delhi city tour cabs to travel to Jantar Mantar.
                     </p>                  
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Dilli Haat
function DilliHaat(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Dilli Haat</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/gkrRPk0D/Dilli-Haat.webp" alt="Dilli Haat is one of the places to visit in Delhi" className="img-fluid shadow rounded p-0 m-2"/>                          
                          <figcaption className="text-center">Dilli Haat, New Delhi</figcaption>
                     </figure> 
                     <p className="font font22">
                          People, including foreigners, regularly throng Dilli Haat, opposite the INA market. Here, you can buy food, crafts, and textiles from other states of India.
                     </p> 
                     <p className="font font22">
                          Inside Dilli Haat, people of the respective states operate state-wise stalls. You can eat traditional food, buy traditional crafts and clothes, and experience the cultures of different states. 
                     </p>    
                     <p className="font font22">
                          Our excellent offering of an affordable Delhi sightseeing cab service can drop you off at Dilli Haat.
                     </p>        
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Humayun’s Tomb
function HumayunTomb(){
      return(<>
          <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Humayun’s Tomb</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                    <figure className="float-start">
                          <img src="https://i.postimg.cc/CxsfGZrw/Humayun-Tomb.webp" alt="Humayun’s Tomb of historic Delhi places " className="img-fluid shadow rounded p-0 m-2"/>                          
                          <figcaption className="text-center">Humayun’s Tomb, New Delhi</figcaption>
                     </figure>                      
                     <p className="font font22">
                          Visiting there means getting the opportunity to visualize a UNESCO Heritage Site. Our best Delhi city tour taxis can pick you up to visit the place. Interestingly, you will come to know that architectural technology during the Mughal times was remarkably advanced. The marvelous tourist spot is in Nizamuddin in New Delhi. 
                     </p> 
                     <p className="font font22">
                          The spot is among the most popular places to visit in Delhi. It came into existence in 1558. Interestingly, it has not lost its charm even after centuries.
                     </p>
                     <p className="font font22">
                          Remarkably, the popular historical structure is built of red sandstone. Our best Delhi sightseeing cab service can help you reach Humayun’s Tomb quickly. If you book a round trip, we will pick you up after your visit.
                     </p>             
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Mehrauli Archaeological Park
function MehrauliArchaeologicalPark(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Mehrauli Archaeological Park</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/05XnS4MV/Mehrauli-Park.webp" alt="Mehrauli Archaeological Park of Delhi tourist places" className="img-fluid shadow rounded p-0 m-2"/>                          
                          <figcaption className="text-center">Mehrauli Archaeological Park, New Delhi</figcaption>
                     </figure>
                     <p className="font font22">
                          Testimony of India’s rich history is the historically relevant park in southern Delhi. Our local Delhi sightseeing cab service can be the best option to visit the park. The park is around one km from the iconic Qutub Minar, where more than a hundred historically relevant monuments are present. The length of human occupation over one thousand years is another point of relevance. Mehrauli Archaeological Park is in the southern part of the city. 
                     </p> 
                     <p className="font font22">
                          You will see historical relevance, such as the Tomar dynasty’s Lal Kot. It is one of the oldest places to visit in Delhi. Notably, forts were built during the Mughal times in Mehrauli Archaeological Park.                          
                     </p>  
                     <p className="font font22">  
                          Visiting it can be educational and entertaining. You can rent our on-time Delhi city tour cab to visit the Mehrauli Archaeological Park in less time.                        
                     </p>                  
                </div>
                <div className="col-sm-1"></div>
           </div>
     </>);
}
//The National Museum
function TheNationalMuseum(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>The National Museum</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     
                     <p className="font font22">
                          It is among the important places to visit in Delhi. Our reliable Delhi sightseeing cab service can transport you to Janpath Road. As such, you can reach the museum, established in 1949, quickly.Visiting the National Museum will entail educational value. Hiring our affordable Delhi city tour taxi can be the best transportation to the museum. 
                     </p> 
                     <p className="font font22">
                          Inside it, you will see around two lakh artworks. Interestingly, some of which are more than five thousand years old. 
                     </p> 
                     <p className="font font22">
                          By visiting the museum, you will realize how rich India's history is.  So, include it in the list of places to visit in Delhi. After visiting the National Museum, you can have good visiting options, such as the India Gate and the Parliament. 
                     </p>               
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Birla Temple
function BirlaTemple(){
      return(<>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Birla Temple</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/gj30G5fG/Birla-Temple.webp" alt="Delhi tour package" className="img-fluid shadow rounded p-0 m-2"/>                          
                          <figcaption className="text-center">Birla Temple, New Delhi</figcaption>
                     </figure>
                     <p className="font font22">
                          It is located near Connaught Place. You can reach the temple conveniently by hiring our best Delhi sightseeing cab service. The spectacular and spacious temple will arouse your spiritual mind. In addition, there is a beautiful garden inside the boundary. It is recognized as one of the popular places to visit in Delhi.
                     </p>
                     <p className="font font22">
                          Interestingly, it was the first Hindu temple built on a large scale in the city. After your visit, you can return by hiring our taxi service in Delhi or visit the classy Connaught Place. Other options could be visiting the India Gate or Lodhi Garden. 
                     </p>
                     <p className="font font22">
                          More options could be hiring our best Delhi city tour taxi to visit Lajpat Nagar or Khan Market. The temple's construction ended in 1939 after starting in 1933.
                     </p>                  
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Akshardham Temple
function AkshardhamTemple(){
      return(<>
          <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h3>Akshardham Temple</h3>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-lightyellow p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <figure className="float-start">
                          <img src="https://i.postimg.cc/fb1WXBv1/Akshar-Dham.webp" alt="Akshardham Temple of Delhi tourism places" className="img-fluid shadow rounded p-0 m-2"/>                          
                          <figcaption className="text-center">Akshardham Temple, New Delhi</figcaption>
                     </figure>
                     <p className="font font22">
                          The temple is in the Pandav Nagar of New Delhi. You will see numerous people in the Akshardham Temple daily. You should also visit the temple. You can ease your trip to the temple by booking our exclusive Delhi sightseeing cab service.
                     </p>
                     <p className="font font22">
                          6 November 2005 was the day the temple was inaugurated. There are eateries and a retail store that sells the works of the temple associates. Hire our excellent taxi service in Delhi to visit the place. The main temple is a spectacular artistic construction. In addition, a large park is inside the temple campus.                          
                     </p>
                     <p className="font font22">
                          Our 24/7 Delhi city tour can transport you to the temple. It is one of the popular places to visit in Delhi all year round. 
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
                     <section className="bg-warning bg-gradient rounded shadow text-left fs-3 p-2 m-2"><Link to="/delhi-airport-taxi" className="text-decoration-none link-dark">{'\u2705'} Airport Taxi Delhi</Link></section>
                     <section className="bg-warning bg-gradient rounded shadow text-left fs-3 p-2 m-2"><Link to="/delhi-taxi" className="text-decoration-none link-dark">{'\u2705'} Taxi Service in Delhi</Link></section>
                </div>
                <div className="col-sm-2"></div>
           </div>
      </>);
}

