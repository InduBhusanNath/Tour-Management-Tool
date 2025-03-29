import {Link} from 'react-router';
export default function Footer(){
     return(<>
                 <Foot/>
                 <CopyRight/>
     </>);
}
function Foot(){
     return(<>
         <row className="row background-coral padding25">
                 <div className="col-sm-3">
                         <section className="padding10 text-center">
                                 <Link to="/" className="text-decoration-none"><img src={process.env.PUBLIC_URL + 'MainImages/logo.png'} className="img-fluid p-0 m-0" alt="AeietyTrips"/></Link>
                                 
                         </section>
                         <section>
                                 <p className="font font20">
                                         Aeiety Trips is a customer-centric and trusted travel agency. Our focus areas are cabs, tour packages, tourism, and cruises. Customer satisfaction is the primary intent of everything we do.
                                 </p>
                         </section>
                 </div>
                 
                 <div className="col-sm-3">
                         <section>
                                 <p className="font font24 fw-bold">Useful Links</p>
                                 &#10132;&nbsp;<Link to="/" className="font font20 text-decoration-none text-dark">HOME</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/aboutus" className="font font20 text-decoration-none text-dark">About Us</Link>                                                 
                                 <br/>
                                 &#10132;&nbsp;<Link to="/contactus" className="font font20 text-decoration-none text-dark">Contact Us</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/blog-page" className="font font20 text-decoration-none text-dark">Blogs</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/blog-page" className="font font20 text-decoration-none text-dark">Places to Visit</Link>
                                                 

                         </section>
                 </div>
                 <div className="col-sm-3">
                         <section>
                                 <p className="font font24 fw-bold">Services</p>
                                 &#10132;&nbsp;<Link to="/taxis" className=" font font20 text-decoration-none text-dark">Cabs</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/delhi-taxi" className="font font20 text-decoration-none text-dark">Delhi Taxi</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/guwahati-taxi" className="font font20 text-decoration-none text-dark">Guwahati Taxi</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/adventure-tours" className="font font20 text-decoration-none text-dark">Adventure Tours</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/eco-tours" className="font font20 text-decoration-none text-dark">Eco Tours</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/historical-tours" className="font font20 text-decoration-none text-dark">Historical Tours</Link>
                                 <br/>
                                 &#10132;&nbsp;<Link to="/tour-packages-intro" className="font font20 text-decoration-none text-dark">Tour Packages</Link>


                         </section>
                 </div>
                 <div className="col-sm-3">
                         <section>
                                 <p className="font font24 fw-bold">Quick Connect</p>                                 
                                 <p className="font font20">&#128222;&nbsp;<a href="tel:+919531393648" className="text-decoration-none text-dark">(+91) 9531393648</a></p>                                 
                                 <p className="font font20">&#9993;&nbsp;trips.aeiety@gmail.com</p>  
                                 <p className="font font20">&#127759;&nbsp;https://aeiety.com</p>  
                         </section>
                         <section>
                                 <p className="font font24 fw-bold">Follow Us</p>
                                 <Link to="/https://www.facebook.com/aeietytrips" className="text-decoration-none" target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + 'MainImages/facebook.png'} className="img-fluid p-0 m-0" alt="Cabs Aeiety Trips"/></Link>
                                 &nbsp;&nbsp;&nbsp;
                                 <Link to="/" className="text-decoration-none" target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + 'MainImages/x.png'} className="img-fluid p-0 m-0" alt="Tours Aeiety Trips"/></Link>
                                 &nbsp;&nbsp;&nbsp;
                                 <Link to="/" className="text-decoration-none" target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + 'MainImages/instagram.png'} className="img-fluid p-0 m-0" alt="Tourism Aeiety Trips"/></Link>
                                 &nbsp;&nbsp;&nbsp;
                                 <Link to="https://www.youtube.com/@aeiety-trips/videos" className="text-decoration-none" target="_blank" rel="noreferrer noopener"><img src={process.env.PUBLIC_URL + 'MainImages/youtube.png'} className="img-fluid p-0 m-0" alt="Cruises Aeiety Trips"/></Link>

                         </section>
                         
                 </div>
         </row>
     </>);
}
//Copyright
function CopyRight(){
         return(<>
                 <div className="row background-coral">
                         <div className="col-sm-3"></div>
                         <div className="col-sm-6">
                                 <section className="font font16 text-center">
                                    &copy;{(new Date).getFullYear()}&nbsp;AeietyTrips&nbsp;&#124;&nbsp;All Rights Reserved&nbsp;&#124;&nbsp;Terms of Use&nbsp;&#124;&nbsp;Privacy Policy
                                 </section>
                         </div>
                          <div className="col-sm-3"></div>                          
                 </div>
         </>);
}