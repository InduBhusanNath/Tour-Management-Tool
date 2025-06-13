import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
export default function EcoTours(){
       return(<>
             <TechnicalSEO/>
             <div className="container-fluid">
                     <Header/>
                     <EcoTourismBanner/>
                     <BreadCrumb/>
                     <Intro/>
                     <EcoTourTypes/>
                     <WhyChooseEcoTours/>
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
                <title>Eco Tours in India : Top Places for Sustainable Travel</title>                
                <meta name="description" content="Discover the best eco tours in India  with our best sustainable travel packages. Delve into the hidden secrets of nature and support eco-friendly practices."/>
                <link rel="canonical" href="https://aeiety.com/eco-tours"/>
                <meta property="og:title" content="Eco Tours in India : Top Places for Sustainable Travel"/>
                <meta property="og:url" content="https://aeiety.com/eco-tours"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Discover the best eco tours in India  with our best sustainable travel packages. Delve into the hidden secrets of nature and support eco-friendly practices."/>
                <meta property="og:locale" content="en_GB" />
           </Helmet>  
  </>);  
}
//Banner
function EcoTourismBanner(){
  return(<>
       <div className="row">
            <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.postimg.cc/d15m3H0t/eco-tour.webp" alt="eco-tours in India" className="w-100 img-fluid p-0 m-0"/>
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
                                <li class="breadcrumb-item active" aria-current="page">Eco Tours</li>
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
                     <h1 className="text-center">The Best Eco-Tours in India to Decode the Magic of Nature</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Discover the amazing secrets of nature. For that, go on the best eco-tours in India with our thoughtfully structured sustainable travel packages. Interestingly, you will find a broad range of ecotourism activities in India that we cover in our packages. Additionally, you will find the opportunity to support the local communities. That way, your trip can be more meaningful. Our coverage of all the key ecotourism in India places allows you to explore the natural biodiversity and local traditions. We at Aeiety Trips promote conservation, responsible tourism, and community engagement. That is why we are one of the best eco-tourism companies in India. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Types of Eco Tours
function EcoTourTypes(){
      return(<>
           <div className="row background-aliceblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Types of Eco-Tours</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-aliceblue p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          <ul>
                               <li>Nature</li>
                               <li>Community</li>
                               <li>Marine and Coastal</li>
                               <li>Forest</li>
                               <li>Urban</li>
                          </ul>
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}
//Why Choose Us
function WhyChooseEcoTours(){
      return(<>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2 className="text-center">Why Choose Our Eco Tours in India</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-azure p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          At Aeiety Trips, we provide sustainable and responsible eco-tours in India. As such, you can explore your favorite natural places. We have thoughtfully created our best sustainable travel packages to create value. In addition, our packages allow you to support local communities. Furthermore, you can experience the vibrant culture. Notably, we ensure preserving ethical and cultural values.
                     </p>
                     <h3>Sustainable Eco-Tours</h3>
                     <p className="font font22">
                          Sustainability defines our curated eco-tours in India. Notably, our sustainable travel packages minimize negative environmental impact. We operate eco-tourism activities in  India responsibly. 
                     </p>
                     <h3>Community Interaction</h3>
                     <p className="font font22">
                          Our carefully crafted eco-tourism in India allows us to interact with various communities. As such, you can understand their traditions. In addition, you can participate in local sustainable initiatives. Furthermore, you can support the local communities by staying on farm stays.
                     </p>
                     <h3>Expert Guides</h3>
                     <p className="font font22">
                          Our excellent guides make the difference. They possess long-term experience. As such, they can guide you the best. Our experienced guides have in-depth knowledge of the natural ecosystem. In addition, you will learn about wildlife and local heritage from them in eco-tours in India. As such, our expert guides ensure rich experiences.
                     </p>
                     <h3>Eco-Friendly Stays</h3>
                     <p className="font font22">
                          We arrange accommodation in green-certified resorts or eco-camps. As such, our sustainable travel packages allow experiencing nature.
                     </p>
                     <h3>Customization</h3>
                     <p className="font font22">
                          Your needs form the basis of our nature tourism. At Aeiety Trips, we provide customized eco-tours in India. As such, you can consider solo, family, or group trips. 
                     </p>
                     <h3>Affordable Pricing</h3>
                     <p className="font font22">
                          Pricing for our best sustainable travel packages is affordable and transparent. Moreover, there are no hidden costs. 
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