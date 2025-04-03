import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

export default function HistoricalTours(){
     return(<>
         <TechnicalSEO/>
         <div className="container-fluid">
                <Header/>
                <HistoricalTourismBanner/>
                <BreadCrumb/>
                <Intro/>
                <HistoricalTourType/>
                <WhyChooseHistoricalTours/>
                <Consultation/>
                <Footer/>
         </div>
     </>);
}

//Technical SEO
function TechnicalSEO(){
    return(<>          
            <Helmet>
                  <meta charSet="utf-8"/>
                  <title>Historical Tours in India : Best Heritage Travel Packages</title>                
                  <meta name="description" content="Explore our best historical tours in India to explore ancient sites. Our guided heritage tours in India will help to determine the richness of India’s past."/>
                  <link rel="canonical" href="https://aeiety.com/historical-tours"/>
                  <meta property="og:title" content="Historical Tours in India : Best Heritage Travel Packages"/>
                  <meta property="og:url" content="https://aeiety.com/historical-tours"/>
                  <meta property="og:image" content="https://aeiety.com/MainImages/logo.png"/>
                  <meta property="og:type" content="Web Page"/>
                  <meta property="og:description" content="Explore our best historical tours in India to explore ancient sites. Our guided heritage tours in India will help to determine the richness of India’s past."/>
                  <meta property="og:locale" content="en_GB" />
             </Helmet>  
    </>);  
}
//Banner
function HistoricalTourismBanner(){
    return(<>
         <div className="row">
              <div className="col-sm-12 p-0 m-0">
                   <img src="https://i.postimg.cc/tTRPP31S/historical-tour.webp" alt="historical tours in India" className="w-100 img-fluid p-0 m-0"/>
              </div>
         </div>
    </>);
}
//Breadcrumb
function BreadCrumb(){
    return(<>
              <div className="row">
                   <div className="col-sm-12 background-azure">
                        <nav aria-label="breadcrumb">
                             <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><a href="/">Home</a></li>  
                                  <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li>                                    
                                  <li class="breadcrumb-item active" aria-current="page">Historical Tours</li>
                             </ol>
                        </nav> 
                   </div>
             </div>
    </>);
}
//Intro
function Intro(){
      return(<>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">The Best Historical Tours in India : Discover Stories of India's Past</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Why not go on historical tours in India to figure out how the past was? That can lead to an unforgettable experience. We at Aeiety Trips provide the best heritage tour packages for such trips. As such, you can choose among our curated heritage tours in India for a trip. Our guides will take you to all the historical places to visit in India. In addition, they will explain the facts behind the heritage sites. Therefore, you will be able to understand interesting stories of India’s past. Understandably, undertaking our best historical tours in India can entail entertainment and learning. Therefore, consider booking one of our best heritage tour packages to gain value.
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Types of Historical Tours
function HistoricalTourType(){
      return(<>
           <div className="row background-aliceblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                      <h2 className="text-center">Types of Historical Tours in India</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-aliceblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          <ul>
                               <li>Heritage</li>
                               <li>Archaeological</li>
                               <li>Museum</li>
                               <li>Royal</li>
                          </ul>
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Why Choose Us
function WhyChooseHistoricalTours(){
      return(<>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Heritage Tour Packages</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          We at Aeiety Trips conduct historical tours in India with holistic standpoints. As such, our objective is not to walk you through the stories from the past. Instead, we allow deep diving into things that shaped the world. Our best heritage tour packages bring the past into life. As such, you can develop deep perspectives into the past.
                     </p>
                     <h3>Expert Guides</h3>
                     <p className="font font22">
                          Our dedicated guides are trained and experienced. As such, they can take you on exciting heritage tours in India. In addition, they can provide you with in-depth knowledge of the historical places to visit in India.
                     </p>
                     <h3>Off-Beat Historical Sites</h3>
                     <p className="font font22">
                          Our historical tours in India allow you to explore even the lesser-known sites. You can gain access to unexplored monuments, among other entities.
                     </p>
                     <h3>Customization</h3>
                     <p className="font font22">
                          We offer a variety of heritage tour packages, including solo, family, and group options. Furthermore, we customize your tour according to your preferences.
                     </p>
                     <h3>Seamless Travel</h3>
                     <p className="font font22">
                          Our well-planned arrangements will result in a smooth travel to historical places to visit in India. Good transportation, guided sightseeing, and excellent accommodation will be the contributing factors.
                     </p>
                     <h3>Affordable Pricing</h3>
                     <p className="font font22">
                          Our best heritage tour packages are affordable. Besides, there are no hidden costs. Notably, our pricing is transparent. As such, the billing amount is only what you need to pay. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      
      </>);
}
//Consultation
function Consultation(){
      return(<>
           <div className="row background-aliceblue p-3">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                     <div class="d-grid gap-2">
                          <a class="btn btn-warning" href="/contactus" role="button">Contact Our Experts for a Free Consultation</a>
                     </div>
                </div>
                <div className="col-sm-3"></div>
           </div>
      </>);
}