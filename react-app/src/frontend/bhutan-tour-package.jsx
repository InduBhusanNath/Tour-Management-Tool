import Header from "./header"
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DisplayBhutanTourPackages from "./display-bhutan-tour-packages";

export default function BhutanTourPackage(){
      return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <BhutanTourPackageBanner/>
                     <BreadCrumb/>
                     <Body1/>
                     <DisplayBhutanTourPackages/>
                     <Body2/>
                     <Body3/>
                     <Body4/>
                     <Body5/>
                     <Body6/>
                     <Footer/>
                </div> 
           </HelmetProvider>
     </>);
}
//Technical SEO
function TechnicalSEO(){
     return(<>
             
             <Helmet>
                <meta charSet="utf-8"/>
                <title>Bhutan Tour Packages-Enjoy Magic of Carbon Neutral Country</title>                
                <meta name="description" content="Book Bhutan tour packages at the best prices. Get packages for solo, group, family, adventure and eco tours. "/>
                <link rel="canonical" href="https://aeiety.com/bhutan-tour-packages"/>
                <meta property="og:title" content="Bhutan Tour Packages by Aeiety Trips"/>
                <meta property="og:url" content="https://aeiety.com/bhutan-tour-packages"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Learn about Bhutan tour packages by Aeiety Trips."/>
                <meta property="og:locale" content="en_GB"/>
            </Helmet>
     </>);
}
//Banner
function BhutanTourPackageBanner(){
      return(<>
           <div className="row">
                <div className="col-sm-12 p-0 m-0">
                     <img src="https://i.ibb.co/d0vMGjt/Bhutan-Banner.png" alt="Bhutan Tour Packages" className="w-100 img-fluid p-0 m-0"/>
                </div>
           </div>
      </>);
}
//Breadcrumb
function BreadCrumb(){
     return(<>
               <div className="row">
                    <div className="col-sm-12 background-mintcream">
                         <nav aria-label="breadcrumb">
                              <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="/" className="link-dark">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/aboutus" className="link-dark">About Us</a></li>
                                    <li class="breadcrumb-item"><a href="/tour-packages-intro" className="link-dark">Tour Packages</a></li>                                    
                                    <li class="breadcrumb-item active" aria-current="page">Bhutan Tour Packages</li>
                              </ol>
                         </nav> 
                    </div>
              </div>
     </>);
 }
 
 //Body1
 function Body1(){
      return(<>
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Bhutan Tour Packages</h1>
                     <section className="font font22">
                          <p>
                               Bhutan's carbon-neutral atmosphere, spectacular mountains, and natural beauty prompt people worldwide to tour the country. We at Aeiety Trips facilitate such trips with our exclusive Bhutan Tour Packages. If you decide to tour Bhutan, choose one of our curated Bhutan travel packages. It will allow you to experience the richness of the country. A Bhutan trip package will enable you to indulge in many exciting activities. From trekking in the mountains to enjoying delicious local food, you will get the opportunity to experience the country's uniqueness of the country. After a tour of Bhutan, you will carry lifetime memories and an urge to visit again. 
                          </p>
                     </section>
                </div>
                <div className="col-sm-1"></div>
                
           </div>
      </>);
 }

 //Body2
 function Body2(){
      return(<>
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>A Bit About Bhutan </h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <section className="font font22">                          
                          <p>
                               Officially, the country is called the Kindom of Bhutan. It lies between China in the north and India in the south in the mountainous region of the eastern Himalayas. 
                          </p>
                          <p>
                               The country's geographical diversity also makes it an attractive tourist destination. With valleys and snow-capped peaks reaching up to 7,000 m above sea level, Bhutan offers a magnificent sight. The country's biodiversity includes subtropical and lush dells, hillsides with pine forests, mountain glaciers, and wildlife. Notably, forests spread more than 70% of Bhutan.
                          </p>
                     </section>
               </div>
               <div className="col-sm-1"></div>
          </div>
      </>);
 }
 //Body3
 function Body3(){
      return(<>
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Tourist Attractions in Bhutan</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <section className="font font22">
                          <p>
                               There are many exciting places to visit in Bhutan. In addition, delicious local food is a major attraction. You will find food items of the same ingredients throughout Bhutan. Cheese made of cow or yak milk, red rice, butter, buckwheat, and chilies are the popular ingredients. Delicious local food is also an attractive component of Bhutan tourism. 
                          </p>
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>      
      </>);
 }
 //Body4
 function Body4(){
      return(<>
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Adventure Tourism in Bhutan</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <section className="font font22">
                          <p>
                               There are attractive options in Bhutan for tourists	looking for adventure activities. Adventure tourism in Bhutan includes trekking in spectacular mountains, water rafting, mountain biking, and strenuous climbs. Adventure enthusiasts will find green landscapes, beautiful mountains, and rich biodiversity spots to indulge in adventure activities. Moreover, these are popular Bhutan tourist spots. They will get ample opportunities for camping, cycling, hiking, motorcycle tours, rafting, trekking, etc. 
                         </p>
                         <p>
                               Sports enthusiasts can play golf on their tour of Bhutan. Golf has been a popular sport in the country since its maiden presence in 1968. All four golf courses are of 9-holes. They are: The Royal Thimphu Golf Club,  Haa Golf Club, India House Golf Club, and Drakpoi Golf Club.
                         </p>
                         <p>

                         </p>
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>
      </>);
 }
 //Body5
 function Body5(){
     return(<>
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                    <h2>Eco Tourism in Bhutan</h2>
               </div>
               <div className="col-sm-1"></div>
          </div>
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                    <section className="font font22">
                          <p>  
                               Nature enthusiasts will find the eco aspect of Bhutan tourism appealing.Bhutan tourist places with natural beauty allow visitors to experience the carbon-neutral natural environment and vibrant local communities. As such, they can fulfill their urge to experience the vibrancy of nature during their tour of tour of Bhutan. 
                          </p>
                          <p>
                               In Bhutan, 70% of its land is under forests, resulting in carbon neutrality. Widespread biodiversity and clean natural Bhutan tourist spots allow visitors to undergo a rich eco-tourism experience. Our comprehensive Bhutan Tour Packages also include eco-tourism. 
                          </p>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>
     </>);
}
//Body6
function Body6(){
      return(<>
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Places to Visit in Bhutan</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>  
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <section className="font font22">
                          <p>
                               When you are in Bhutan, naturally beautiful places will surround you. There are many appealing places to visit in Bhutan. In the vibrant places, you will find yourself in the rich Bhutanese culture and art. Artistic excellence in local handicrafts will leave you spellbound. And, the delicious taste of traditional food will become a lifetime memory.  Being a tourist in Bhutan, you will find ample opportunities to indulge in adventures and eco-activities. 
                          </p>
                     </section>
                </div>
                <div className="col-sm-1"></div>
           </div>           
      </>);
}
