export default function TaxiService(){
     return(<>
            <div className="row background-lightgoldenrodyellow z-0">
                     <div className="col-sm-1"></div>
                     <div className="col-sm-10 p-1 m-1">
                               <div className="card-group font font24 shadow z-0">                                    
                                         <div className="card">
                                              <img src={process.env.PUBLIC_URL + '/GeneralImages/localcab.png'} className="card-img-top" alt="local taxi"/>
                                         </div>
                                         <div className="card">
                                              <img src={process.env.PUBLIC_URL + '/GeneralImages/outstationcab.png'} className="card-img-top" alt="outstation taxi"/>
                                         </div>
                                         <div className="card">
                                              <img src={process.env.PUBLIC_URL + '/GeneralImages/sightseeingcab.png'} className="card-img-top" alt="sightseeing cab"/>                                             
                                         </div>
                                         <div className="card">
                                              <img src={process.env.PUBLIC_URL + '/GeneralImages/airportcab.png'} className="card-img-top" alt="airport taxi"/>                                             
                                         </div>
                                         <div className="card">
                                              <img src={process.env.PUBLIC_URL + '/GeneralImages/corporatecab.png'} className="card-img-top" alt="corporate taxi"/>                                             
                                         </div>
                                                                        
                               </div>
                              
                     </div>
                     <div className="col-sm-1"></div>
                          
                          
             </div>
     </>);
}