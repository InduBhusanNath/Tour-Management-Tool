//Main export function
export default function TourismServices(){
     return(<>
         <div className="row padding25 background-aliceblue">             
             <div className="col-sm-12 p-0 m-0">
                 <div className="card-group rounded shadow-sm p-0 m-1">
                     <div className="card p-1 m-0">                                                  
                         <img src="https://i.postimg.cc/DygbTNDT/tourismbanner.png" class="card-img-top img-fluid p-0 m-0" alt="Tourism Services"/>                                                
                     </div> 
                     <div className="card p-1 m-0">
                         <a href="/adventure-tourism" className="text-decoration-none">
                             <img src="https://i.postimg.cc/rmM2wpQ1/adventuretourism.png" class="card-img-top img-fluid p-0 m-0" alt="Adventure Tourism"/>  
                         </a>                   
                     </div>
                     <div className="card p-1 m-0">
                         <a href="/eco-tourism" className="text-decoration-none">
                             <img src="https://i.postimg.cc/6qbkcfwc/ecotourism.png" class="card-img-top img-fluid p-0 m-0" alt="Eco Tourism"/>
                         </a>
                     </div> 
                     <div className="card p-1 m-0">
                         <a href="/historical-tourism" className="text-decoration-none">
                             <img src="https://i.postimg.cc/x887XNHz/historicaltourism.png" class="card-img-top img-fluid p-0 m-0" alt="Historical Tourism"/>  
                         </a> 
                     </div>                     
                 </div>
             </div>
        </div>
        
     </>);
}