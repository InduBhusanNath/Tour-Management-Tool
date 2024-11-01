import Header from "./header";
import Footer from "./footer";
import {Helmet} from "react-helmet";


//Main export function
export default function DelhiTaxi(){
     return(<>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <BreadCrumb/>
                     <Body/>
                     <Footer/>
                </div>

     
     </>);
}
//Technical SEO
function TechnicalSEO(){
     return(<>
             
             <Helmet>
                <meta charSet="utf-8"/>
                <title>Cab service in Delhi: Best Taxi Rides at Affordable Fares</title>
                <meta name="description" content="Looking for the best cab service in Delhi? Book Delhi taxi from us to experience comfortable, trouble-free, safe and timely taxi rides at affordable fares."/>
                <link rel="canonical" href="http://mysite.com/example" />
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
                                    <li class="breadcrumb-item active" aria-current="page">Taxi Delhi</li>
                               </ol>
                          </nav> 
                    </div>
              </div>
     </>);
}

//Body
function Body(){
      return(<>
            <div className="row">
                <div className="col-sm-12">
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <h1>PAGE UNDER CONSTRUCTION.....</h1>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     Cab service in Delhi is more affordable, efficient, and satisfying.                     
                   
                </div>
            </div>
      
      </>);
}