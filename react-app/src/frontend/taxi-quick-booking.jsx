export default function TaxiQuickBooking(){
     return(<>
         <div className="card-group rounded shadow">
             <div className="card bg-success-subtle bg-gradient border-0 p-0 m-0">
                 <div className="card-body rounded-start p-0 m-0">
                     <section className="text-start">
                         <img src="https://i.postimg.cc/6QBvKyzp/TaxiBooking.webp" alt="cabs" className="img-fluid w-100 rounded-start p-0 m-0"/>
                     </section>
                 </div>                 
             </div>
             <div className="card bg-warning-subtle bg-gradient border-0 p-0 m-0">
                 <div className="card-body bg-info bg-gradient rounded-end p-2 m-0">
                     <section className="text-center"> 
                         &nbsp;<br/>                      
                         <p className="fs-5 fw-bold">Call/Whatsapp</p>
                         <p className="fs-5 fw-bold"><a href="tel:+919531393648" className="text-decoration-none link-dark">(+91)&nbsp;9531393648</a></p>
                     </section>
                 </div>                 
             </div>             
         </div>
     </>);
}