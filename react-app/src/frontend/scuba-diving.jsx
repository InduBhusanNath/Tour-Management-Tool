import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

//Export Function
export default function ScubaDiving(){
     return(<>
         <HelmetProvider>
             <TechnicalSEO/>
             <div className="container-fluid">
                 <Header/>
                 <ScubaDivingBanner/>
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
                <title></title>                
                <meta name="description" content=" "/>
                <link rel="canonical" href="https://aeiety.com/scuba-diving"/>
                <meta property="og:title" content=" "/>
                <meta property="og:url" content="https://aeiety.com/scuba-diving"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content=""/>
                <meta property="og:locale" content="en_GB" />
           </Helmet>  
  </>);  
}
//Banner
function ScubaDivingBanner(){
  return(<>
       <div className="row">
            <div className="col-sm-12 p-0 m-0">
                 <img src="https://i.postimg.cc/W3RgsGr1/adventure-tour.webp" alt="adventure tours in India" className="w-100 img-fluid p-0 m-0"/>
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
                                <li class="breadcrumb-item"><a href="/adventure-tours">About Us</a></li>                                    
                                <li class="breadcrumb-item active" aria-current="page">Scuba Diving</li>
                           </ol>
                      </nav> 
                 </div>
           </div>
  </>);
}