import { Navigation, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



//Main export function
export default function InternationalTourPackageCarousel(){
return(<>
     <div className="row">
         <div className="col-sm-2"></div>
         <div className="col-sm-8 padding25">
              <h2 className="text-center">International Tour Packages</h2>
         </div>
         <div className="col-sm-2"></div>
     </div>
     <div className="row">
         <div className="col-sm-1"></div>
         <div className="col-sm-10">
         <Swiper
      // install Swiper modules
             modules={[Navigation, Pagination]}
             spaceBetween={1}
             slidesPerView={3}
             navigation
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
         >
             <SwiperSlide>
                 <div className="card border-warning m-1 p-1">  
                     <a href="/bhutan-tour-packages" className="text-decoration-none text-dark fw-bold">
                     <img src="https://i.postimg.cc/zBC6XbwG/bhutancar.png" class="card-img-top img-fluid" alt="Bhutan Tour Package"/>  
                     <div className="card-footer text-center">Bhutan</div>   
                     </a>                                       
                 </div>
             </SwiperSlide>
             <SwiperSlide>
                 <div className="card border-warning m-1 p-1">                           
                     <img src="https://i.postimg.cc/gJXpmqNF/srilankacar.png" class="card-img-top img-fluid" alt="Sri Lanka Tour Package"/>
                     <div className="card-footer text-center">Sri Lanka</div>
                 </div>
                 
             </SwiperSlide>
             <SwiperSlide>
                 <div className="card border-warning m-1 p-1">                           
                     <img src="https://i.postimg.cc/T1BpT3rQ/maldivescar.png" class="card-img-top img-fluid" alt="Maldives Tour Package"/>
                     <div className="card-footer text-center">Maldives</div>
                 </div>
                 <div className="card-img-overlay">
               
                 </div>
             </SwiperSlide>
             <SwiperSlide>
                 <div className="card border-warning m-1 p-1">                           
                     <img src="https://i.postimg.cc/Kj8HmZZK/dubaicar.png" class="card-img-top img-fluid" alt="Dubai Tour Package"/>
                     <div className="card-footer text-center">Dubai</div>
                 </div>
             </SwiperSlide>
         </Swiper>        
            
         </div>             
         <div className="col-sm-1"></div>
     </div>
     <div className="row">
         <div className="col-sm-12 padding25"></div>
     </div>   
 </>);
}