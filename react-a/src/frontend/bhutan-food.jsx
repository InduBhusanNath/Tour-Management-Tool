export default function BhutanFood(){
    return(<>
          <div className="row background-mintcream p-3">
              <div className="col-sm-1"></div>
              <div className="col-sm-10">
                   <h2>Delicious and Tasty Food</h2>                  
              </div>
              <div className="col-sm-1"></div>
          </div>
          <div className="row background-mintcream p-3">
              <div className="col-sm-1"></div>
              <div className="col-sm-10">                                     
                     <section>
                          <p className="font font22">
                               You will experience the delicious taste of Bhutan food which will remain in your memory for your life. The traditional food of Bhutan consists of non-veg and veg items. 
                          </p>
                     </section>                                               
              </div>
              <div className="col-sm-1"></div>
         </div>
         <div className="row background-mintcream p-3">
              <div className="col-sm-1"></div>
              <div className="col-sm-5">
                    <section className="font font24 fw-bold text-center"><p>Veg</p></section>
                     <div className="card-group">
                          <div className="card">
                             <div className="card-body p-0 m-0">
                                  {<img src={"https://i.ibb.co/Kx6jbjn/veg-1.webp"} className="img-fluid w-100" alt="Bhutan veg food"/>}
                            </div>
                         </div>
                          <div className="card">
                             <div className="card-body p-0 m-0">
                                  {<img src={"https://i.ibb.co/68jjGJ6/veg-2.webp"} className="img-fluid w-100" alt="Bhutan vegetarian food"/>}
                            </div>
                         </div>
                     </div>
                     <div className="card-group">
                          <div className="card">
                             <div className="card-body p-0 m-0">
                                  {<img src={"https://i.ibb.co/xDfYB99/veg-3.webp"} className="img-fluid w-100" alt="Vegetarian food in Bhutan"/>}
                            </div>
                         </div>
                          <div className="card">
                             <div className="card-body p-0 m-0">
                                  {<img src={"https://i.ibb.co/NFNbNr5/veg-4.webp"} className="img-fluid w-100" alt="food Bhutan tourism"/>}
                            </div>
                         </div>
                     </div>
                     
                </div>
              
                <div className="col-sm-5">
                     <section className="font font24 fw-bold text-center"><p>Non-Veg</p></section>
                     <div className="card-group">
                          <div className="card">
                             <div className="card-body p-0 m-0">
                                    {<img src={"https://i.ibb.co/Ny7qZ3Q/non-veg-1.webp"} className="img-fluid w-100" alt="Bhutan food"/>}
                            </div>
                         </div>
                          <div className="card">
                             <div className="card-body p-0 m-0">
                                    {<img src={"https://i.ibb.co/R29r7JC/non-veg2.webp"} className="img-fluid w-100" alt="Bhutanese food"/>}
                            </div>
                         </div>
                     </div>
                     <div className="card-group">
                          <div className="card">
                             <div className="card-body p-0 m-0">
                                    {<img src={"https://i.ibb.co/DGMprSZ/non-veg-3.webp"} className="img-fluid w-100" alt="Bhutan cuisine"/>}
                            </div>
                         </div>
                          <div className="card">
                             <div className="card-body p-0 m-0">
                                    {<img src={"https://i.ibb.co/Swr1Xyq/non-veg4.webp"} className="img-fluid w-100" alt="Bhutanese dishes"/>}
                            </div>
                         </div>
                     </div>
                  
               </div>
              <div className="col-sm-1"></div>
         </div>         
    </>);
}
    