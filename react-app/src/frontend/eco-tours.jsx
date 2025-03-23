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
                <link rel="canonical" href="https://aeiety.com/eco-tourism"/>
                <meta property="og:title" content="Eco Tours in India : Top Places for Sustainable Travel"/>
                <meta property="og:url" content="https://aeiety.com/adventure-tourism"/>
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
                 <img src="https://i.postimg.cc/jqN55Y4C/Ecotourism-Banner.webp" alt="eco tourism" className="w-100 img-fluid p-0 m-0"/>
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
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">The Best Eco-Tours in India to Decode the Magic of Nature</h1>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <p className="font font22">
                          Discover the amazing secrets of nature. For that, go on the best eco-tours in India with our thoughtfully structured sustainable travel packages. Interestingly, our packages cover a broad range of eco-tourism activities in India. Additionally, you will find the opportunity to support the local communities. That way, your trip can be more meaningful. Our coverage of all the key eco-tourism in India places allows you to explore the natural biodiversity and local traditions. We at Aeiety Trips promote conservation, responsible tourism, and community engagement. That is why we are one of the best eco-tourism companies in India. We implement the best practices in our excellent eco-tours in India. As a result, you will experience the best. 
                     </p>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
}