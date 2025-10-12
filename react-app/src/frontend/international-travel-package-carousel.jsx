import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

//Main export function
export default function InternationalTravelPackageCarousel(){
return(<>
     
             <Carousel responsive={responsive}>
                 <div>
                     <div className="card border-0 rounded p-0 m-1">
                         <div className="card-body p-0 m-0">
                             <a href="/bhutan-tour-packages" className="text-decoration-none text-dark">
                                 <img src="https://i.postimg.cc/SxVtxr1d/Bhutan-Carousel.webp" class="img-fluid rounded shadow-sm w-100 p-0 m-0" alt="Bhutan Package"/>                             
                             </a>
                         </div>                         
                     </div>
                 </div>
                 <div>
                     <div className="card border-0 rounded p-0 m-1">
                         <div className="card-body p-0 m-0">
                             <img src="https://i.postimg.cc/XJB2x0j1/New-Zealand-Carousel.webp" class="img-fluid rounded shadow-sm w-100 p-0 m-0" alt="New Zealand Package"/>
                         </div>
                     </div>
                 </div>
                 <div>                     
                     <div className="card border-0 rounded p-0 m-1">
                         <div className="card-body p-0 m-0">
                             <img src="https://i.postimg.cc/q7RDh39T/Dubai-Carousel.webp" class="img-fluid rounded shadow-sm w-100 p-0 m-0" alt="Dubai Package"/>
                         </div>
                     </div>                     
                 </div>
                 <div>                     
                     <div className="card border-0 rounded p-0 m-1">
                         <div className="card-body p-0 m-0">
                             <img src="https://i.postimg.cc/25Kc45DB/Maldives-Carousel.webp" class="img-fluid rounded shadow-sm w-100 p-0 m-0" alt="Maldives Package"/>
                         </div>
                     </div>                     
                 </div>                 
             </Carousel>;           
 </>);
}