import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

export default function TourPackagesIntro(){
     return(<>
         <div className="container-fluid">
             <Header/>
             <TechnicalSEO/>
             <TourPackageBanner/>
             <BreadCrumb/>
             <Body1/>
             <Body2/>
             <Footer/>
         </div>     
     </>);
}
//Technical SEO
function TechnicalSEO(){
    return(<>
            
            <Helmet>
            <meta charSet="utf-8"/>
                 <title>Tour Packages|Holiday Packages|Let Your Dream Trip Come True</title>                
                 <meta name="description" content="Go on your dream trip with our exclusive tour packages. Browse our curated list of holiday packages to find the packages you were looking for so far."/>
                 <link rel="canonical" href="https://aeiety.com/tour-packages-intro"/>
                 <meta property="og:title" content="Tour Packages by Aeiety Trips"/>
                 <meta property="og:url" content="https://aeiety.com/bhutan-tour-packages"/>
                 <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                 <meta property="og:type" content="Web Page"/>
                 <meta property="og:description" content="Learn about Tour packages by Aeiety Trips."/>
                 <meta property="og:locale" content="en_GB"/>
           </Helmet>
    
    </>);
}
//Banner
function TourPackageBanner(){
     return(<>
         <div className="row">
             <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.ibb.co/Lpyp6mh/tour-Package-Banner-Live.png" alt="tour packages, holiday packages" className="img-fluid w-100 p-0 m-0"/>
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
     </>);
}
//Body2
function Body2(){
     return(<>
         <div className="row background-lightyellow p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-2 p-1">
                 <div className="card shadow-sm">
                     <a href="/bhutan-tour-packages" className="link-dark text-decoration-none">
                         <img src="https://i.postimg.cc/3xrRzV7g/Bhutan-One.png" class="card-img-top" alt="Bhutan Tour Packages, Bhutan Tourism, Tour Bhutan, Places to Visit in Bhutan" className="img-fluid w-100 p-0 m-0"/>
                     </a>
                     <div className="card-footer bg-light text-center">
                         <b>Bhutan</b>
                         <br/> 
                         <span>Starts at INR 33,500/-</span>                       
                     </div>
                 </div>
             </div>
             <div className="col-sm-8"></div>
             <div className="col-sm-1"></div>
         </div>
     </>);
}
