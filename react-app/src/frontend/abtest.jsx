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
                <title>India Cruises: Luxury Trips & Best Cruise Deals</title>                
                <meta name="description" content="Explore top India cruises with luxury amenities, scenic routes & the best cruise deals. Book your perfect voyage today—coastal, river, or island. "/>
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
             </div>
             <div className="col-sm-1"></div>
         </div>
     </>);
}