import { Link } from "react-router";

//Main export function
export default function ScubaDivingPackageList(){
     return(<>
         <div className="card-group  rounded">
             <div className="card border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="/scuba-diving-in-andaman" className="link-light">
                         <figure className="p-0 m-0">
                              <img src="https://i.ibb.co/LhJVXHvh/andaman.webp" alt="Andaman scuba diving packages" className="img-fluid rounded shadow p-0 m-0"/>
                         </figure>
                     </Link>                     
                 </div>
             </div>
             <div className="card border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                                <img src="https://i.ibb.co/1YHW3Xrf/pondicherry.webp" alt="Pondicherry scuba diving packages" className="img-fluid rounded shadow p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
             <div className="card border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                                <img src="https://i.ibb.co/ZpT5Pcdh/chennai.webp" alt="Chennai scuba diving packages" className="img-fluid rounded shadow p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
             <div className="card border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                             <img src="https://i.ibb.co/cXYcWNPM/lakshadweep.webp" alt="Lakshadweep scuba diving packages" className="img-fluid rounded shadow p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
             <div className="card border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                             <img src="https://i.ibb.co/0yqMF7d8/gujarat.webp" alt="Gujarat scuba diving packages" className="img-fluid rounded shadow p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
             <div className="card border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                             <img src="https://i.ibb.co/ds7hrpqQ/karnataka.webp" alt="Karnataka scuba diving packages" className="img-fluid rounded shadow p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
         </div>
     </>);
}