//Main export function
export default function TourismServices(){
     return(<>
         <div className="row">             
             <div className="col-sm-12 p-0 m-0">
                 <div className="card-group rounded shadow-sm p-0 m-0">
                     <div className="card p-0 m-0">
                         <img src="https://i.postimg.cc/DygbTNDT/tourismbanner.png" class="card-img-top img-fluid p-0 m-0" alt="Tourism Services"/>
                         <div className="card-footer text-end">
                                 <span className="font font24 fw-bold">&#128073;</span>                         
                         </div>
                     </div> 
                     <div className="card p-0 m-0">
                         <img src="https://i.postimg.cc/vBJ546Lw/adventuretourism.png" class="card-img-top img-fluid p-0 m-0" alt="Adventure Tourism"/>                       
                         <div className="card-footer text-start">
                             <span className="font font24 fw-bold">Adventure Tourism&nbsp;<a href="/adventure-tourism" className="text-primary text-decoration-none">&#129154;</a></span>
                         </div>
                     </div>
                     <div className="card p-0 m-0">
                         <img src="https://i.postimg.cc/13mwVS6X/ecotourism.png" class="card-img-top img-fluid p-0 m-0" alt="Eco Tourism"/>                       
                         <div className="card-footer text-start">
                             <span className="font font24 fw-bold">Eco Tourism&nbsp;<a href="/eco-tourism" className="text-primary text-decoration-none">&#129154;</a></span>
                         </div>
                     </div> 
                     <div className="card p-0 m-0">
                         <img src="https://i.postimg.cc/W4tZS75P/historicaltourismnew.png" class="card-img-top img-fluid p-0 m-0" alt="Historical Tourism"/>                       
                         <div className="card-footer text-start">
                             <span className="font font24 fw-bold">Historical Tourism&nbsp;<a href="/historical-tourism" className="text-primary text-decoration-none">&#129154;</a></span>
                         </div>
                     </div>                     
                 </div>
             </div>
        </div>
     </>);
}