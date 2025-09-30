import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router";
import Accordion from 'react-bootstrap/Accordion';


export default function ScubaDivingAndaman(){
     return(<>         
             <HelmetProvider>
                 <TechnicalSEO/>
                 <div className="container-fluid">
                     <Header/>
                     <ScubaDivingAndamanBanner/>
                     <BreadCrumb/>
                     <H1/>
                     <Intro/>
                     <WhyScubaDivingAndaman/>
                     <BestSites/>
                     <BestTime/>
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
                <title>Scuba Diving in Andaman | Best Spots, Costs & Packages</title>                
                <meta name="description" content="Experience scuba diving in Andaman like never before! Explore vibrant coral reefs, spot turtles and rays. Book our exclusive Andaman scuba packages today."/>
                <link rel="canonical" href="https://aeiety.com/adventure-tours"/>
                <meta property="og:title" content="Scuba Diving in Andaman | Best Spots, Costs & Packages"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tours"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Experience scuba diving in Andaman like never before! Explore vibrant coral reefs, spot turtles and rays. Book our exclusive Andaman scuba packages today."/>
                <meta property="og:locale" content="en_GB"/>
           </Helmet>  
  </>);  
}
//Banner
function ScubaDivingAndamanBanner(){
  return(<>
       <div className="row">
            <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.ibb.co/qSgnB7k/scubadiving-ANDAMANBanner.webp" alt="Scuba Diving in Andaman by Aeiety Trips" className="w-100 img-fluid p-0 m-0"/>
            </div>
       </div>
  </>);
}
//Breadcrumb
function BreadCrumb(){
  return(<>
            <div className="row background-cornsilk">
                 <div className="col-sm-12">
                      <nav aria-label="breadcrumb">
                           <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>  
                                <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li>
                                <li class="breadcrumb-item"><a href="/adventure-tours">Adventure Tours</a></li>
                                <li class="breadcrumb-item"><a href="/scuba-diving">Scuba Diving Packages</a></li>                                    
                                <li class="breadcrumb-item active" aria-current="page">Scuba Diving in Andaman</li>
                           </ol>
                      </nav> 
                 </div>
           </div>
  </>);
}
//H1
function H1(){
      return(<>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Scuba Diving in Andaman Islands: Discover the Best Dive Spots & Packages</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Intro
function Intro(){
      return(<>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                     
                     <p className="font font22">
                          You might ask why the Andaman Islands are so special in diving matters. For the answer, you must experience scuba diving in Andaman at least once. You will find yourself inside a dreamworld underwater. It is a world with clear water, colorful corals, and various types of fish. You might not have even imagined such a world before.
                     </p>
                     <p className="font font22">
                          The best part is that it does not matter even if you are a newbie. Our affordable Andaman diving packages suit everyone. Again, put your concerns to rest if you believe knowing how to swim is essential. Expert guides will make your diving super easy.
                     </p>
                     <p className="font font22">
                          So, experience scuba diving in Andaman with us.
                     </p>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Why Scuba Diving Andaman
function WhyScubaDivingAndaman(){
      return(<>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Why Scuba Diving in Andaman is a Must-Do Adventure</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          There can be multiple reasons for not missing out on an adventure there. So, experience scuba diving in Andaman to realize the best part. It is a clear and spectacular underwater landscape. That will entail a never-before experience.
                     </p>
                     <p className="font font22">
                          In the beginner-friendly spots, you can dive easily. Such sites are Nemo Reef in Havelock or the Lighthouse in Neil Island. Our Andaman diving packages are affordable.
                     </p>
                     <p className="font font22">
                          Again, there are deeper sites that are for certified divers. Port Blair or Barren Island are the ones. So, you can certify yourself by taking a PADI course.
                     </p> 
                     <p className="font font22">
                          Given the unique experiences and fun, you will want to come back again and again. So, try out scuba diving in Andaman.
                     </p>                    
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Best Sites
function BestSites(){
      return(<>
          <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Scuba Diving in Andaman: The Best Sites</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          You will find the best-in-class spots. And, we will select spots for scuba diving in Andaman for you. Our customized Andaman diving packages offer all the available sites. So, we will plan for you.
                     </p>
                     <h3>Swaraj Dweep (Havelock Island)</h3>
                     <p className="font font22">
                           You should make it a point to dive at the Swaraj Deep. It was formerly called Havelock Island. Also, it is not incorrect to say it is the most popular for scuba diving in Andaman. It can be for beginners and certified divers.
                     </p>
                     <p className="font font22">
                          There are Elephant Beach, The Wall, and Seduction Point. These are beautiful with colorful corals and reef fish. Our affordable Andaman diving packages cover all such spots. Also, there are options for a certification course.
                     </p>
                     <h3>Shaheed Dweep (Neil Island)</h3>
                     <p className="font font22">
                          If you like to enjoy away from the crowds, Shaheed Dweep could be just what you're looking for. It was called Neil Island earlier. Here, you will undergo a peaceful scuba diving in Andaman. While underwater, you will see eye-catching reefs.
                     </p>
                     <p className="font font22">
                          Notably, Shaheed Dweep is also great for diving at night. Also, you can take amazing photos in water. Our best Andaman diving packages include popular spots. You will see soft corals, sea turtles, and clownfish while diving at the sites.  
                     </p>
                     <p className="font font22">
                          Laxmanpur and Bharatpur are spectacular spots. Here, you will enjoy a relaxed dive.
                     </p>
                     <h3>North Bay Island</h3>
                     <p className="font font22">
                          Do not miss it out if you are a first-timer. North Bay Island is nearby Port Blair. Eye-catching reefs and various marine entities will make your scuba diving in Andaman fantastic. You will gain a lifetime experience.
                     </p>
                     <p className="font font22">
                          Therefore, look at North Bay Island while choosing Andaman diving packages. The beauty of the underwater world will leave you spellbound.
                     </p>
                     <h3>Cinque Island & Barren Island</h3>
                     <p className="font font22">
                          You will experience extraordinary things at these sites. People from various places come to these spots to participate in scuba diving in Andaman. Their popularity has reached far and wide due to their exclusivity. These sites are perfect for you if you are an experienced diver.
                     </p>
                     <p className="font font22">
                          Aeiety Trips’ excellent Andaman diving packages include these spots. You will see spectacular rock formations, and corals in Cinque Island. And, Barren Island has India’s only active volcano. So, the site is unique and educational in itself.
                     </p>
                     <p className="font font22">

                     </p>

                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Best Time
function BestTime(){
      return(<>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Best Time for Scuba Diving in Andaman</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-cornsilk p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Underwater diving involves venturing into the sea or ocean. So, you should plan scuba diving in Andaman at the right times. This will make your expedition enjoyable and risk-free. Usually, the October to May period is ideal.
                     </p>
                     <p className="font font22">
                          During these months, water conditions remain favorable. The water surface remains calm. And, its temperature hovers between 26 to 29 degrees centigrade. So, your body will remain unaffected from temperature issues. At Aeiety Trips, we provide Andaman diving packages for these months.
                     </p>
                     <p className="font font22">
                          Moreover, visibility remains clear underwater. So, you can enjoy spectacular views of coral reefs, fishes, and other marine things. As such, your diving experience will be best of its kind. Remember, the months between June to September are unsuitable for diving. Usually, the water environment becomes rough during this period. Therefore, plan your expedition of scuba diving in Andaman within the best months.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}