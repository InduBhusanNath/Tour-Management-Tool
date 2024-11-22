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
