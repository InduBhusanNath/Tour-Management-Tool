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
                <title></title>                
                <meta name="description" content=" "/>
                <link rel="canonical" href="https://aeiety.com/abtest"/>
                <meta property="og:title" content=""/>
                <meta property="og:url" content="https://aeiety.com/abtest"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content=" "/>
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