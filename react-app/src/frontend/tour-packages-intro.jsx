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
         <div className="row">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
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
                 <h1 className="text-center">Amazing Tour Packages</h1>
             </div>
             <div className="col-sm-1"></div>             
         </div>
         <div className="row background-lightgoldenrodyellow">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                 <section className="text-center font font24">
                     <p>
                         Fulfil Your Long Cherished 
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
         <div className="row background-lightyellow p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-3 p-1">
                 
             </div>
             <div className="col-sm-7"></div>
             <div className="col-sm-1"></div>
         </div>
     </>);
}
