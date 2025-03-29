import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import InternationalTourPackagesDisplay from "./tour-packages-display-international";

export default function TourPackagesIntro(){
     return(<>
         <div className="container-fluid">
             <Header/>
             <TechnicalSEO/>
             <TourPackageBanner/>
             <BreadCrumb/>
             <Body1/>
             <Body2/>
             <InternationalTourPackagesList/>
             <Body3/>             
             <Footer/>
         </div>     
     </>);
}
//Technical SEO
function TechnicalSEO(){
    return(<>
            
            <Helmet>
            <meta charSet="utf-8"/>
                 <title>Tour Packages That Turn Your Dream Trip Turn into Reality!</title>                
                 <meta name="description" content="Go on your dream trip with our exclusive tour packages for various destinations. Browse our curated list of holiday packages to find the perfect one for you."/>
                 <link rel="canonical" href="https://aeiety.com/tour-packages-intro"/>
                 <meta property="og:title" content="Tour Packages by Aeiety Trips"/>
                 <meta property="og:url" content="https://aeiety.com/bhutan-tour-packages"/>
                 <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                 <meta property="og:type" content="Web Page"/>
                 <meta property="og:description" content="Learn about Tour Packages by Aeiety Trips."/>
                 <meta property="og:locale" content="en_GB"/>
           </Helmet>
    
    </>);
}
//Banner
function TourPackageBanner(){
     return(<>
         <div className="row">
             <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.postimg.cc/9FBHr9Yk/tour-Package-Banner-Live.webp" alt="tour packages, holiday packages" className="img-fluid w-100 p-0 m-0"/>
             </div>
         </div>     
     </>);
}

//Breadcrumb
function BreadCrumb(){
    return(<>
              <div className="row">
                   <div className="col-sm-12 background-lightgoldenrodyellow">
                        <nav aria-label="breadcrumb">
                             <ol class="breadcrumb">
                                  <li class="breadcrumb-item"><a href="/" className="link-dark">Home</a></li>
                                  <li class="breadcrumb-item"><a href="/aboutus" className="link-dark">About Us</a></li>                                    
                                  <li class="breadcrumb-item active" aria-current="page">Tour Packages</li>
                             </ol>
                        </nav> 
                   </div>
             </div>
    </>);
}
//International Tour Packages
function InternationalTourPackagesList(){
     return(<>
         <div className="row background-lightgoldenrodyellow p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10 p-2">
                 <h2 className="text-center">International Trip Packages</h2>
             </div>
             <div className="col-sm-1"></div>
         </div>
         <div className="row background-lightgoldenrodyellowp-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10 border border-warning border-2 rounded p-2">
                 <InternationalTourPackagesDisplay/>
             </div>
             <div className="col-sm-1"></div>
         </div>
     </>);
}

//Body1
function Body1(){
     return(<>
         <div className="row background-lightgoldenrodyellow">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                 <h1 className="text-center">Curated Tour Packages for Your Dream Trip</h1>
             </div>
             <div className="col-sm-1"></div>             
         </div>
         <div className="row background-lightgoldenrodyellow">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                 <section className="text-center font font24">
                     <p>
                          We Understand Your Demands, We Orient Your Tour to Your Preferences, We Ensure the Best Experiences  
                     </p>
                 </section>
             </div>
             <div className="col-sm-1"></div>             
         </div>
     </>);
}
//Body2
function Body2(){
     return(<>
         <div className="row background-lightgoldenrodyellow p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10 p-1">                 
                     <p className="font font22">
                         Wait no further. There is no reason to do so. Embark upon your dream trip with one of our curated tour packages. We at Aeiety Trips do not sell just packages. We provide enablers of the best travel experiences. We care for you throughout your tour to prevent unpleasant situations that can erode your trip excitement. Our thoughtfully crafted holiday packages are a class apart. We have tailored them to suit your preferences. We strive to understand customer needs before creating such packages. As such, we can satisfy customers with varied needs.
                     </p>                                 
             </div>             
             <div className="col-sm-1"></div>
         </div>
     </>);
}
//Body3
function Body3(){
    return(<>
        <div className="row background-lightgoldenrodyellow p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10 p-1">
                 <h2>Why Choose Our Tour Packages?</h2>
             </div>             
            <div className="col-sm-1"></div>
        </div>
        <div className="row background-lightyellow p-1">
             <div className="col-sm-1"></div>
             <div className="col-sm-10 p-1">
                 <p className="font font22">
                     The answer is straightforward. That will give you the best trip experience. That is why select one of our best-in-class tour packages to go to the destination you have dreamt of. We provide you with an extended list of such packages to enable you to pick up the perfect one. That way, you can experience the best tour of your life.
                 </p>
                 <h3>Wonderful Destinations</h3>
                 <p className="font font22">
                     Our excellent holiday packages are with attractive destinations. In addition to enjoying beautiful places, you will experience different cultures, traditional food, and arts. That way, you will carry home exciting memories. We create value for your tour. 
                 </p>
                 <h3>Customized</h3>
                 <p className="font font22">
                     We at Aeiety Trips do not structure tour packages randomly. Instead, we frame them thoughtfully and creatively. We implement personalized aspects to customize our packages to the tastes and preferences of our prospective customers. During package creation, customer benefits become the topmost priority. We eliminate all hassles that could make your trip unpleasant. 
                 </p>
                 <h3>Affordable</h3>
                 <p className="font font22">
                     At Aeiety Trips, affordable pricing is one of our core tenets. We do not allow our valuable customers to spend excessively on their dream trips. Instead, we price our excellent holiday packages at reasonable prices. Therefore, customers get the value of the money they spend on our packages. 
                 </p>
                 <h3>Satisfying</h3>
                 <p className="font font22">
                     We aspire to your satisfaction. We direct our sincere efforts to enable you to undergo a satisfying trip. Your satisfaction is the final benchmark of our success.  
                 </p>
             </div>             
            <div className="col-sm-1"></div>
        </div>
    </>);
}
