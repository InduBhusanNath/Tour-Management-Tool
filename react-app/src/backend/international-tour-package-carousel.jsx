import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function InternationalTourPackageCarousel(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,       
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,             

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:true
            }
          }
        ]
      };
     return(<>
         <div className="row">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
             <div className="slider-container rounded shadow-sm">
                 <Slider {...settings} className="p-2">
                     <div>
                           <div className="card border-warning m-1 p-1">                           
                               <img src="https://i.postimg.cc/zBC6XbwG/bhutancar.png" class="card-img-top" alt="..."/>
                               <div className="card-footer">
                                      <span className="font font22 fw-bold">Bhutan&nbsp;&#129154;</span>
                               </div>
                           </div>
                     </div>
                     <div>
                          <div className="card border-warning m-1 p-1">                           
                                 <img src="https://i.postimg.cc/gJXpmqNF/srilankacar.png" class="card-img-top" alt="..."/>
                                 <div className="card-footer">
                                      <span className="font font22 fw-bold">Sri Lanka&nbsp;&#129154;</span>
                                 </div>
                           </div>
                      </div>
                     <div>
                          <div className="card border-warning m-1 p-1">                           
                                <img src="https://i.postimg.cc/gJXpmqNF/srilankacar.png" class="card-img-top" alt="..."/>
                                 <div className="card-footer">
                                      <span className="font font22 fw-bold">Sri Lanka&nbsp;&#129154;</span>
                                 </div>
                           </div>
                     </div>       
                  </Slider>
              </div>
             </div>
             <div className="col-sm-1"></div>
         </div>   
     </>);
}