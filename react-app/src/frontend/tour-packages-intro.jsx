import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

export default function TourPackagesIntro(){
     return(<>
         <div className="container-fluid">
             <Header/>
             <TechnicalSEO/>
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
               <title>Tour Packages: India, International at the Best Prices</title>                
               <meta name="description" content="Explore the world with our exclusive tour packages! From breathtaking international travel packages to unique Indian destinations, you get them all with us."/>
               <link rel="canonical" href="https://aeiety.com/tour-packages"/>
           </Helmet>
    
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
         <div className="row background-lavender">
             <h1>&#9889;Exclusive Bhutan Tour Packages for You &#9889;</h1>
         </div>
     </>);
}
//Body2
function Body2(){
     return(<>
      <h1>g</h1>
     </>);
}
