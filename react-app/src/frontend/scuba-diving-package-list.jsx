import { Link } from "react-router";

//Main export function
export default function ScubaDivingPackageList(){
     return(<>
         <div className="card-group">
             <div className="card bg-transparent border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="/scuba-diving-in-andaman" className="link-light">
                         <figure className="p-0 m-0">
                              <img src="https://i.ibb.co/gbZp0JFn/andaman.webp" alt="Andaman scuba diving packages" className="img-fluid p-0 m-0"/>
                         </figure>
                     </Link>                     
                 </div>
             </div>
             <div className="card bg-transparent border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                                <img src="https://i.ibb.co/Cptd5Hxv/pondicherry.webp" alt="Pondicherry scuba diving packages" className="img-fluid p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
             <div className="card bg-transparent border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                                <img src="https://i.ibb.co/PZVx222j/chennai.webp" alt="Chennai scuba diving packages" className="img-fluid p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
             <div className="card bg-transparent border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                             <img src="https://i.ibb.co/HpYZrV7V/lakshadweep.webp" alt="Lakshadweep scuba diving packages" className="img-fluid p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
             <div className="card bg-transparent border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                             <img src="https://i.ibb.co/HppVXbBT/gujarat.webp" alt="Gujarat scuba diving packages" className="img-fluid p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
             <div className="card bg-transparent border-0">
                 <div className="card-body bg-transparent p-0 me-1">
                     <Link to="#" className="link-light">
                         <figure className="p-0 m-0">
                             <img src="https://i.ibb.co/Fqwmytj4/karnataka.webp" alt="Karnataka scuba diving packages" className="img-fluid p-0 m-0"/>
                         </figure>                         
                     </Link>                     
                 </div>
             </div>
         </div>
     </>);
}