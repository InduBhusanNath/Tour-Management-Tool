import { Helmet, HelmetProvider } from 'react-helmet-async';
//Main Export Function
export default function AbTest(){
     return(<>
         <HelmetProvider>
             <TechnicalSEO/>
             <div className="container-fluid">
                 <Body1/>
             </div>
         </HelmetProvider>
     </>);
}
//Technical SEO
function TechnicalSEO(){
     return(<>             
             <Helmet>
                <meta charSet="utf-8"/>
                <title>Delhi Taxi Booking | Get the Best Ride | Timely, Fair Fares</title>                
                <meta name="description" content="Experience affordable, safe and comfortable Delhi taxi service. Excellent cabs are available for local and outstation trips. Book a taxi in Delhi from us now! "/>
                <link rel="canonical" href="https://aeiety.com/aboutus"/>
                <meta property="og:title" content="India Cruises: Luxury Trips & Best Cruise Deals"/>
                <meta property="og:url" content="https://aeiety.com/aboutus"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Explore top India cruises with luxury amenities, scenic routes & the best cruise deals. Book your perfect voyage today—coastal, river, or island. "/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Body1
function Body1(){
     return(<>
         <div className="row">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                  <h1>Reliable Delhi Taxi Service You Can Count On, 24/7</h1>
                  <p>
                     Searching for a taxi, aren't you? And, your focus is on reliability, safety, and timeliness. Our excellent Delhi taxi service covers all of them. 
                  </p>
                  <p>
                     We simplify cab booking with round-the-clock availability. Our dedicated cab rental service provides a comprehensive range of services, including local trips, outstation travel, and airport transfers. You’ll get clean cars, professional drivers, and transparent pricing with no hidden fees. 
We provide timely cabs for all purposes. We have got a taxi in Delhi ready for you whenever you want it. 
                  </p>
                  <p>
                     If you are still wondering which is the best taxi service in Delhi? Put your confusion to rest. Choose our trusted Delhi taxi service, which is always on time. Your ride, your schedule, no stress.
                  </p>
                  <h2></h2>

             </div>
             <div className="col-sm-1"></div>
         </div>
     </>);
}