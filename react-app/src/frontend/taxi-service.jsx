import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';
import TaxiServiceDisplay from "./taxi-service-display";
export default function TaxiService(){
    return(<>
       <HelmetProvider>
             <TechnicalSEO/>
             <div className="container-fluid">
                   <Header/>
                   <TaxiServiceBanner/>
                   <BreadCrumb/>
                   <Intro/>
                   <Description1/>
                   <CabOptions/>
                   <FAQs/>
                   <NeedHelp/>
                   <CitiesWeRunCabs/>
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
              <title>#1 Taxi Service | Timely, Comfortable, Affordable Rides</title>                
              <meta name="description" content="Looking for a reliable taxi service for comfortable and affordable rides? Look no further, simplify your taxi rides with our quick and easy cab booking options."/>
              <link rel="canonical" href="https://aeiety.com/taxi-service"/>
              <meta property="og:title" content="Taxi Service by Aeiety Trips"/>
              <meta property="og:url" content="https://aeiety.com/taxi-service"/>
              <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
              <meta property="og:type" content="Web Page"/>
              <meta property="og:description" content="Learn about taxi service by Aeiety Trips."/>
              <meta property="og:locale" content="en_GB"/>
          </Helmet>
   </>);
}
//Banner
function TaxiServiceBanner(){
       return(<>
             <div className="row">
                   <div className="col-sm-12 p-0 m-0">
                      <img src="https://i.postimg.cc/HkDPJbnF/Taxi-Service-Banner.webp" alt="cab service" className="img-fluid w-100 p-0 m-0"/>
                   </div>
             </div>       
       </>);
}
//Breadcrumb
function BreadCrumb(){
      return(<>
             <div className="row">
                   <div className="col-sm-12 background-mintcream">                                 
                         <nav aria-label="breadcrumb">
                               <ol class="breadcrumb">
                                     <li class="breadcrumb-item"><a href="/">Home</a></li>
                                     <li class="breadcrumb-item"><a href="/aboutus">About Us</a></li>
                                     <li class="breadcrumb-item active" aria-current="page">Taxi Service</li>
                               </ol>
                         </nav> 
                   </div>
             </div>
      </>);
  }
//Body1
function Intro(){
    return(<>
       <div className="row background-mintcream p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                   <h1 className="text-center">We Give You the Best Taxi Service Experience </h1>
             </div>
             <div className="col-sm-1"></div>
       </div>
       <div className="row background-mintcream p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                   <section className="font font22">                                    
                         <p>Your search for a trusted taxi service is now over. It is because you found us. We at Aeiety Trips strive to provide customers with satisfying cab rental services. A cab booking with us can allow you to travel to your destination seamlessly.  You will find our cabs timely, comfortable, safe, and affordable. As such, you will experience a satisfying taxi ride. We plan and run our cab operations carefully, keeping the customer at the center of everything. We aim to eliminate customers’ pain points and give them the best experience. Choosing Aeiety Trips can provide value for your money and time. </p>
                         <p>Aeiety Trips’ taxi service can be the perfect choice for foreign tourists because of our comprehensive knowledge of tourist spots. In addition, our in-depth knowledge of hotels makes us the most preferred cab service provider for them. Due to this, they can rely on us to recommend the best hotels Besides, our quick cab booking facility can allow them to book cabs in advance before they leave their home countries. Due to our customer-centric policies, they will experience hassle-free taxi rides to local and outstation destinations. Our reasonable pricing will allow them to avoid excessive spending on taxi travel.</p>
                                                             
                   </section>
             </div>
             <div className="col-sm-1"></div>
       </div>    
    </>);
}
//Description1
function Description1(){
    return(<>
          <div className="row background-azure p-3">
                <div className="col-sm-1"></div> 
                <div className="col-sm-10">
                   <h2>Our Excellence</h2>                   
                </div> 
                <div className="col-sm-1"></div>            
          </div>
          <div className="row background-azure p-3">
                <div className="col-sm-1"></div> 
                <div className="col-sm-10">
                      <div className="card-group font font18">
                            <div className="card bg-transparent border-info">
                                  <div className="card-header bg-transparent border-info text-center">&#8377;&nbsp;<br/><b>REASONABLE FARES</b></div>
                                        <div className="card-body">                                                                  
                                                 &#129130;Trip Cost Stays Within Budget<br/>
                                                 &#129130;No Excessive Payment
                                        </div>
                                   </div>
                            <div className="card bg-transparent border-info">
                                  <div className="card-header bg-transparent border-info text-center">&#8986;&nbsp;<br/><b>TIMELY PICKUP</b></div>
                                        <div className="card-body">                                                                  
                                                 &#129130;Reach Destination on Time<br/>
                                                 &#129130;No Hassles in Waiting for Cab   
                                        </div>
                                  </div>
                            <div className="card bg-transparent border-info">
                                  <div className="card-header bg-transparent border-info text-center">&#128663;&nbsp;<br/><b>SERVICED CARS</b></div>
                                        <div className="card-body">                                                                  
                                                 &#129130;Pleasant Ride With Clean Interior<br/>
                                                 &#129130;No Car Breakdown on the Way
                                        </div>
                                  </div>
                            <div className="card bg-transparent border-info">
                                  <div className="card-header bg-transparent border-info text-center">&#128587;&nbsp;<br/><b>EXPERIENCED DRIVERS</b></div>
                                        <div className="card-body"> 
                                                 &#129130;Travel Through Best Routes<br/>
                                                 &#129130;No Worries of Accidents 
                                  </div>
                            </div>     
                      </div>                
                </div> 
                <div className="col-sm-1"></div>            
         </div>

    </>);
}
//Cab Options
function CabOptions(){
    return(<>
       <div className="row background-mintcream p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                <h2>Cab Options</h2>
             </div>
             <div className="col-sm-1"></div>         
       </div>
       <div className="row background-mintcream p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                   <TaxiServiceDisplay/>
             </div>
             <div className="col-sm-1"></div>         
       </div>    
    </>);    
}
//FAQs
function FAQs(){
    return(<>
       <div className="row background-azure p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                   <h2>FAQs</h2>
             </div>
             <div className="col-sm-1"></div>
       </div>
       <div className="row background-azure p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-5">
                   <section>                                    
                         <Collapsible className="font font22" trigger="How to Book Taxi With Aeiety Trips?&#5161;">
                               <section className="font font22 bg-info rounded padding10">
                                     Booking a cab with AeietyTrips is a simple affair. All you need to do is fill out the cab request form on the website, call us, email us,  message us from the website's Contact Us page, or WhatsApp us. Upon receiving your request, we will do the rest.
                               </section>                                               
                         </Collapsible>
                         <Collapsible className="font font22" trigger="How to Reschedule My Taxi Trip?&#5161;">
                               <section className="font font22 bg-info rounded padding10">
                                     You can reschedule your cab trip by informing us three hours before the departure. There will be no charges. However, charges will be applicable if you let us know of your rescheduling three hours before the pickup time.  
                               </section>                                               
                         </Collapsible>                         
                   </section>
             </div>
             <div className="col-sm-5">
                   <section>
                         <Collapsible className="font font22" trigger="How to Cancel My Scheduled Cab Trip?&#5161;">
                               <section className="font font22 bg-info rounded padding10">
                                     You can cancel your scheduled cab trip without incurring cancellation charges by informing us anytime up to the day before the departure day. You should pay 50% of the trip fare if you cancel on the pickup day for the apparent reason.    
                               </section>                                               
                         </Collapsible>
                         <Collapsible className="font font22" trigger="Can I Get Help to Find Accommodation?&#5161;">
                               <section className="font font22 bg-info rounded padding10">
                                     Yes, we can find or recommend a good hotel for your stay after your cab trip to outstation destinations. Our comprehensive knowledge of accommodation facilities could be helpful to you.      
                               </section>                                               
                         </Collapsible>

                   </section>
             </div>
             <div className="col-sm-1"></div>
       </div>    
    </>);
}
//Need Help
function NeedHelp(){
    return(<>
          <div className="row background-mintcream p-3">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                      <section className="bg-info rounded shadow p-4">
                            <div className="card-group">
                                  <div className="card bg-transparent border-0">
                                        <div className="card-body">
                                              <span className="font fs-1 fw-bold">Need Help?</span>
                                              <br/>
                                              <span className="font fs-3">We are ready to help you at every step during your taxi booking journey.</span>
                                        </div>
                                  </div>
                                  <div className="card bg-transparent border-0">
                                        <div className="card-body">                                              
                                              <span className="font fs-3">&#128129;&nbsp;Call or WhatsApp us</span>
                                              <br/>
                                              <span className="font fs-3"> at (+91) 9531393648, or drop a message from the Contact Us page.</span>
                                        </div>
                                  </div>
                            </div>
                      </section>
                </div>
                <div className="col-sm-1"></div>
          </div>    
    </>);
}
//Cities We Operate
function CitiesWeRunCabs(){
    return(<>
       <div className="row background-azure p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                   <h2 className="text-center">Cities We Operate in</h2>
             </div>
             <div className="col-sm-1"></div>
       </div>
       <div className="row background-azure p-3">
             <div className="col-sm-1"></div>
             <div className="col-sm-5">                   
                   <p className="bg-info-subtle rounded shadow font font24 fw-bold text-center p-2">
                         <Link to="/delhi-taxi" className="link-dark text-decoration-none">Delhi Taxi&#129146;</Link>
                   </p>                        
             </div>
             <div className="col-sm-5">
                   <p className="bg-info-subtle rounded shadow font font24 fw-bold text-center p-2">
                         <Link to="/guwahati-taxi" className="link-dark text-decoration-none">Guwahati Taxi&#129146;</Link>
                   </p>   
             </div>
             <div className="col-sm-1"></div>
       </div>    
    </>);    
}