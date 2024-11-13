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
export default function InternationalTourPackageCarousel(){
return(<>
     <div className="row background-mintcream">
         <div className="col-sm-2"></div>
         <div className="col-sm-8 padding25">
              <h2 className="text-center">International Tour Packages</h2>
         </div>
         <div className="col-sm-2"></div>
     </div>
     <div className="row background-mintcream">
         <div className="col-sm-1"></div>
         <div className="col-sm-10">
             <Carousel responsive={responsive}>
                 <div>
                     <div className="card rounded p-1 m-1 shadow-sm">
                         <a href="/bhutan-tour-packages" className="text-decoration-none text-dark">
                             <img src="https://i.postimg.cc/zBC6XbwG/bhutancar.png" class="card-img-top img-fluid" alt="Bhutan Package"/>
                             <div className="card-footer text-center">Bhutan</div>
                         </a>
                     </div>
                 </div>
                 <div>
                     <div className="card rounded p-1 m-1 shadow-sm">
                         <img src="https://i.postimg.cc/gJXpmqNF/srilankacar.png" class="card-img-top img-fluid" alt="Sri Lanka Package"/>
                         <div className="card-footer text-center">Sri Lanka</div>
                     </div>
                 </div>
                 <div>
                     <div className="card rounded p-1 m-1 shadow-sm">
                         <img src="https://i.postimg.cc/T1BpT3rQ/maldivescar.png" class="card-img-top img-fluid" alt="Maldives Package"/>
                         <div className="card-footer text-center">Maldives</div>
                     </div>
                 </div>
                 <div>
                       <div className="card rounded p-1 m-1 shadow-sm">
                         <img src="https://i.postimg.cc/Kj8HmZZK/dubaicar.png" class="card-img-top img-fluid" alt="Maldives Package"/>
                         <div className="card-footer text-center">Dubai</div>
                       </div>
                 </div>
             </Carousel>; 
         </div>             
         <div className="col-sm-1"></div>
     </div>
     <div className="row background-mintcream">
         <div className="col-sm-12 padding25"></div>
     </div>   
 </>);
}