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
                <title>Expert Travel Consultant for Crafting Unforgettable Trips</title>                
                <meta name="description" content="Looking for a reliable travel consultant? Our expert trip planner can create memorable itineraries for exotic places and ensure the best experiences. "/>
                <link rel="canonical" href="https://aeiety.com/aboutus"/>
                <meta property="og:title" content="Expert Travel Consultant for Crafting Unforgettable Trips"/>
                <meta property="og:url" content="https://aeiety.com/aboutus"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Looking for a reliable travel consultant? Our expert trip planner can create memorable itineraries for exotic places and ensure the best experiences. "/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Body1
function Body1(){
     return(<>
     Hi
     </>);
}