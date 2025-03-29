import Header from "./header";
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';


export default function BlogPage(){
     return(<>
         <HelmetProvider>
                 <TechnicalSEO/>
                 <div className="container-fluid bg-body">
                         <div className="col-sm-12">
                                 <Header/>
                                 <BlogsBanner/>
                                 <BreadCrumb/>
                                 <Footer/>
                         </div>
                 </div>
         </HelmetProvider>
             
    
     </>);
}
// Technical SEO
function TechnicalSEO(){
        return(<>                
                <Helmet>
                   <meta charSet="utf-8"/>
                   <title>Travel Blogs | Rich Insights to Broaden Your Perspectives </title>                
                   <meta name="description" content="Read knowledgeable travel blogs to expand the periphery of your thoughts on traveling. The well-written blogs will make you understand why you must travel."/>
                   <link rel="canonical" href="https://aeiety.com/blog-page"/>
                   <meta property="og:title" content="Blogs by Aeiety Trips"/>
                   <meta property="og:url" content="https://aeiety.com/blog-page"/>
                   <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                   <meta property="og:type" content="Web Page"/>
                   <meta property="og:description" content="Read blogs by Aeiety Trips."/>
                   <meta property="og:locale" content="en_GB"/>
               </Helmet>
        </>);
   }
 //Blog Banner
 function BlogsBanner(){
         return(<>
                 <div className="row">
                         <div className="col-sm-12 p-0 m-0">
                                 <img src="https://i.postimg.cc/VkrpHMwN/Blog.webp" alt="Travel Blogs" className="img-fluid w-100 p-0 m-0"/>
                         </div>
                 </div>
         </>);
 }
// Breadcrumb
function BreadCrumb(){
        return(<>
                 <div className="row">
                        <div className="col-sm-12">
                                 <nav aria-label="breadcrumb">
                                         <ol class="breadcrumb">
                                                 <li class="breadcrumb-item"><a href="/" className="link-dark">Home</a></li>
                                                 <li class="breadcrumb-item"><a href="/aboutus" className="link-dark">About Us</a></li>                                                 
                                                 <li class="breadcrumb-item active" aria-current="page">Blogs</li>
                                         </ol>
                                 </nav> 
                         </div>
                 </div>
        </>);
}