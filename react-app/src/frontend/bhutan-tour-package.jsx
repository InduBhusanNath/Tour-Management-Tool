import Header from "./header"
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function BhutanTourPackage(){
      return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <BhutanTourPackageBanner/>
                     <BreadCrumb/>
                     <Body1/>
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
                <title>Bhutan Tour Packages-Enjoy Magic of Carbon Neutral Country</title>                
                <meta name="description" content="Book Bhutan tour packages at the best prices. Get packages for solo, group, family, adventure and eco tours. "/>
                <link rel="canonical" href="https://aeiety.com/bhutan-tour-packages"/>
                <meta property="og:title" content="Bhutan Tour Packages by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/bhutan-tour-packages"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about Bhutan tour packages by Aeiety Trips."/>
                <meta property="og:locale" content="en_GB"/>
            </Helmet>
     </>);
}
//Banner
function BhutanTourPackageBanner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <img src="https://i.ibb.co/d0vMGjt/Bhutan-Banner.png" alt="Bhutan Tour Packages" className="w-100 img-fluid p-0 m-0"/>
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
                                    <li class="breadcrumb-item"><a href="/tour-packages-intro">Tour Packages</a></li>                                    
                                    <li class="breadcrumb-item active" aria-current="page">Bhutan Tour Packages</li>
                              </ol>
                         </nav> 
                    </div>
              </div>
     </>);
 }
 //Body1
 function Body1(){
      return(<>
           <div className="row bg-light">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Bhutan Tour Packages</h1>
                     <section className="font font22">
                          <p>
                               Bhutan's carbon-neutral atmosphere, spectacular mountains, and natural beauty prompt people worldwide to tour the country. We at Aeiety Trips facilitate such trips with our exclusive Bhutan Tour Packages. If you decide to tour Bhutan, choose one of our curated Bhutan travel packages. It will allow you to experience the richness of the country. A Bhutan trip package will enable you to indulge in many exciting activities. From trekking in the mountains to enjoying delicious local food, you will get the opportunity to experience the country's uniqueness of the country. After a tour of Bhutan, you will carry lifetime memories and an urge to visit again. 
                          </p>
                     </section>
                </div>
                <div className="col-sm-1"></div>
                
           </div>
      </>);
 }
