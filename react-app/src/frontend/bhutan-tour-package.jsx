import Header from "./header"
import Footer from "./footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import DisplayBhutanTourPackages from "./bhutan-tour-packages-display";
import BhutanFood from "./bhutan-food";
import BhutanHandicrafts from "./bhutan-handicrafts";

export default function BhutanTourPackage(){
      return(<>
           <HelmetProvider>
                <TechnicalSEO/>
                <div className="container-fluid">
                     <Header/>
                     <BhutanTourPackageBanner/>
                     <BreadCrumb/>
                     <Intro/>                     
                     <ListBhutanTourPackages/>
                     <Body2/>
                     <Body3/>
                     <BhutanVisitingPlaces/>
                     <Thimphu/>
                     <ThimphuVisitingPlaces/>
                     <Paro/>
                     <ParoVisitingPlaces/>
                     <BhutanFood/>
                     <BhutanHandicrafts/>
                     <AdventureTourismBhutan/>
                     <EcoTourismBhutan/>
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
                <title>Bhutan Tour Packages | Enjoy Magic of the Beautiful Kingdom</title>                
                <meta name="description" content="Get Bhutan tour packages at the best prices. Buy packages for solo, group, family, adventure and eco trips to tour Bhutan and gain memorable experiences."/>
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
                     <img src="https://i.ibb.co/PYpXTrv/Bhutan-Banner-Live.webp" alt="Bhutan Tour Packages" className="w-100 img-fluid p-0 m-0"/>
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
 
 //Intro
 function Intro(){
      return(<>
           <div className="row background-mintcream p-2">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h1 className="text-center">Exclusive Bhutan Tour Packages Paving the Way to Experience the Kindom of Happiness </h1>

                     <section className="font font22 text-center">
                          <p>
                               Explore the Carbon-Neutral Paradise,Take Home Lifetime Memories
                          </p>
                     </section>
                </div>
                <div className="col-sm-1"></div>
                
           </div>
           <div className="row background-mintcream p-2">
               <div className="col-sm-1"></div>
               <div className="col-sm-10"> 
                     <p className="font font22">
                          Wait no further. The time to materialize your long-cherished dream to visit Bhutan has come. We at Aeiety Trips bring exclusive Bhutan Tour Packages to you. Choose one to experience the country’s carbon-neutral atmosphere, spectacular mountains, and natural beauty. When you tour Bhutan, the country’s attractiveness will leave you spellbound. There will be opportunities to undergo exciting experiences by participating in enjoyable activities. From trekking in the spectacular Himalayan mountains to enjoying delicious local food, the uniqueness and richness of Bhutan tourism will make their presence felt in every aspect of your trip. After finishing it, you will carry lifetime memories and an urge to visit again.  Browse our exclusive Bhutan tour packages to find your dream ones. 
                     </p>                    
               </div>
               <div className="col-sm-1"></div>
               
          </div>
      </>);
 }
 
// Tour Packages
function ListBhutanTourPackages(){
      return(<>
          <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <DisplayBhutanTourPackages/>
                </div>
                <div className="col-sm-1"></div>
          </div>      
      </>);

}

 //Body2
 function Body2(){
      return(<>
           <div className="row background-mintcream p-2">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>A Bit About Bhutan </h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">                                             
                     <p className="font font22">
                          The Kingdom of Bhutan is rich in a healthy atmosphere and beautiful. Our exclusive Bhutan Tour Packages will allow you to visit all the attractive tourist destinations. That means you will get the opportunity to enjoy all the places to visit in Bhutan that are distinguished by a remarkable geographical diversity. As such, you will not miss out on any attractive Bhutan tourism spots due to our thoughtfully planned Bhutan tour packages.
                     </p>
                     <p className="font font22">
                          With valleys and snow-capped peaks reaching up to 7,000 m above sea level, Bhutan offers a magnificent sight. Forests cover more than 70% of its land area.The country's biodiversity includes subtropical and lush dells, hillsides with pine forests, mountain glaciers, and wildlife.  When you tour Bhutan with our curated Bhutan holiday packages, you will have the opportunity to explore the attractive culture, geography, and lifestyle of the kingdom of happiness. As such, examine our best Bhutan Tour Packages to determine the best one for you.
                     </p>                     
               </div>
               <div className="col-sm-1"></div>
          </div>
      </>);
 }
 //Body3
 function Body3(){
      return(<>
           <div className="row background-mintcream p-2">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Tourist Attractions in Bhutan</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                     
                     <p className="font font22">
                          Our carefully crafted  Bhutan tour packages include all attractive places to visit in Bhutan. In addition, delicious local food can be a part of your lifetime memory. You will find food items of the same ingredients throughout Bhutan. Cheese made of cow or yak milk, red rice, butter, buckwheat, and chilies are the popular ingredients. Delicious local food is also an attractive component of the experience when you tour Bhutan. Also, creative arts and handicrafts will leave you spellbound. As such, experience a rich and unforgettable trip with our best Bhutan holiday packages. You can visit solo, with your family, or in a group. Therefore, do not miss out on the opportunity to make a tour to the kingdom of happiness with our excellent Bhutan tour packages. 
                     </p>                     
                </div>
                <div className="col-sm-1"></div>
           </div>
           
           <div className="row background-mintcream">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                     <section className="p-2">
                          <div className="card-group shadow-sm">
                               <div className="card border-start-0 border-bottom-0 border-top-0">
                                    <div className="card-body p-0 m-0">
                                        <img src="https://i.ibb.co/G0xDdhq/Beautiful-Places.webp" className="img-fluid w-100 p-0 m-0" alt="Bhutan tourist spots"/>
                                    </div>
                              </div>                              
                              <div className="card border-start-0 border-bottom-0 border-top-0">
                                    <div className="card-body p-0 m-0">
                                        <img src="https://i.ibb.co/QHYVkxV/Delicious-Food.webp" className="img-fluid w-100 p-0 m-0" alt="Bhutan traditional food"/>
                                    </div>
                              </div>
                              <div className="card border-start-0 border-bottom-0 border-top-0">
                                    <div className="card-body p-0 m-0">
                                        <img src="https://i.ibb.co/BsjF8z9/Creative-Arts.webp" className="img-fluid w-100 p-0 m-0" alt="Bhutan traditional arts and crafts"/>
                                    </div>
                              </div>
                              <div className="card border-start-0 border-bottom-0 border-top-0 border-end-0">
                                    <div className="card-body p-0 m-0">
                                        <img src="https://i.ibb.co/DYbHtNj/Exciting-Activities.webp" className="img-fluid w-100 p-0 m-0" alt="Adventure in Bhutan"/>
                                    </div>
                              </div>
                          </div>
                     </section>
                </div>
                <div className="col-sm-2"></div>
           </div>             
                   
      </>);
 }
 
 //Adventure
 function AdventureTourismBhutan(){
      return(<>
           <div className="row background-mintcream p-2">
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
 //Eco
 function EcoTourismBhutan(){
     return(<>
          <div className="row background-mintcream p-2">
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
//Bhutan Visiting Places
function BhutanVisitingPlaces(){
      return(<>
           <div className="row background-mintcream p-2">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <h2>Places to Visit in Bhutan: The Inclusions of Our Best Bhutan Tour Packages</h2>
                </div>
                <div className="col-sm-1"></div>
           </div>  
           <div className="row background-mintcream">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">                     
                     <p className="font font22">
                          When you tour Bhutan, naturally beautiful places will surround you. There are many appealing places to visit in Bhutan. In the vibrant places, you will find yourself in the rich Bhutanese culture and art. Artistic excellence in local handicrafts will leave you spellbound. And, the delicious taste of traditional food will become a lifetime memory. Being a tourist with one of our excellent Bhutan tour packages, you will find ample opportunities to indulge in adventures and eco-activities.
                     </p>                     
                </div>
                <div className="col-sm-1"></div>
           </div>           
      </>);
}
//Thimphu

function Thimphu(){
     return(<>
          <div className="row background-mintcream p-2">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                    <h3>Thimphu</h3>
               </div>
               <div className="col-sm-1"></div>
          </div>  
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
               
                         <p className="font font22">
                               It is the Bhutan capital city. Visiting the capital city with one of Aeiety Trips’ Bhutan tour packages during your vacation can be a good idea. As such, consider one of our popular Bhutan holiday packages to tour Bhutan. 
                         </p>
                         <p className="font font22">
                               Thimphu town is the most significant hub for political, commercial, and religious activities. It became the Bhutan capital in 1961. Previously, Punakha was the capital of Bhutan. In the city, modern developments and ancient traditions co-exist. Notably, the city is without a traffic light. Perhaps, it is the only one of its kind in the world. So, tour Bhutan to experience it.
                         </p>
                         <p className="font font22">
                               Our curated Bhutan Tour Packages can allow you to experience the beautiful city. So, you will find Thimphu in the sixth position if a list of the world's highest cities is made. Did you know at what height the town stands? The answer is: 2,248 to 2,648 meters.
                         </p>
                         <p className="font font22">
                               The city's weather is generally mild. As such, people from any world region can tour Bhutan with one of Aeiety Trips’ Bhutan vacation packages. June to September are the summer months. December to February are the months of winter. The temperature in Thimphu extends from warm to cold.
                         </p>
                         <p className="font font22">
                               There are good lodging facilities in the city. As such, a tourist in Bhutan can quickly find good hotels.There are many places to visit and many things to do there. 
                         </p>
                    
               </div>
               <div className="col-sm-1"></div>
          </div>           
     </>);
}
//Thimpu Visiting Places
function ThimphuVisitingPlaces(){
     return(<>
          <div className="row background-mintcream p-2">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                    <h3>Top Places to Visit in Thimphu</h3>
               </div>
               <div className="col-sm-1"></div>
          </div>  
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h4>Buddha Dordenma</h4>
                     <section>
                          <section className="float-start p-3">
                               <img src="https://i.ibb.co/28yG4Ds/Buddha-Point-Upload.webp" className="img-fluid rounded shadow-sm" alt="Buddha Dordenma"/>
                          </section>
                          <section className="p-3">
                               <p className="font font22">
                                    At the Kuensel Phodrang Nature Park, you will see a huge statue of Buddha. It is in our Bhutan tour packages. It is called Buddha Dordenma and is 54m tall. However, Buddha Point is a popular identity. It is visible from many parts of the town due to its glow from gold coating. Bronze is the building material of the statue. Do not miss out on your tour to Bhutan.
                               </p>
                               <p className="font font22">
                                    Notably, there are one lakh twenty-five small Buddha statues inside the main statue. The constituent smaller ones are ten to twelve inches in height and made of bronze and coated with gold. Our Bhutan travel packages include Buddha Point.
                               </p>
                               <p className="font font22">
                                     There is a large meditation hall under the main statue. It is meant for visitors to meditate. There are no entry tickets. Our Bhutan tour packages include the place. 
                               </p>
                         </section>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h4>National Memorial Chorten</h4>
                     <section>
                          <section className="float-start p-3">
                               <img src="https://i.ibb.co/JnDLF9V/Memorial-Chorten-Upload.webp" className="img-fluid rounded shadow-sm" alt="Buddha Dordenma"/>
                          </section>
                          <section className="p-3">
                               <p className="font font22">
                                    You will find National Memorial Chorten’s inclusion in our best Bhutan tour packages. It is among the most important tourist places in Thimphu. It symbolizes respect for Bhutan’s third king.  It has to be a must in your tour of Bhutan. The king is regarded as the father of modern Bhutan.
                               </p>
                               <p className="font font22">
                                    You can participate with monks and other visitors by walking clockwise around the stupa. Moreover, you can rotate the prayer wheels around the National Memorial Chorten. In the early morning hours, you can participate in offering butter lamps. Bhutan trip packages from Aeiety Trips can enable you to visit the stupa. It is a stupa established in 1974 in the southern part of Thimphu. 
                               </p>
                               <p className="font font22">
                                    If you happen to go there during the Monlam Prayer Festival, you will get the opportunity to participate in teachings by the religious head. Choose from our affordable Bhutan tour packages to visit the place.  Also, you will get to see their spiritual practices. National Memorial Chorten is among the prominent Bhutan tourist spots.
                               </p>
                         </section>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>    
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h4>Tashichho Dzong</h4>
                     <section>
                          <section className="float-start p-3">
                               <img src="https://i.ibb.co/nb5fBhF/Tashichho-Dzong-Upload.webp" className="img-fluid rounded shadow-sm" alt="Buddha Dordenma"/>
                          </section>
                          <section className="p-3">
                               <p className="font font22">
                                    It is a beautiful fortress. Our best Bhutan tour packages can allow you to experience it. Your tour of Bhutan must include it. It is a must-see thing to see on your tour of Bhutan.
                               </p>
                               <p className="font font22">
                                    In the fortress, there is the king’s throne room, secretariat, and home affairs and finance ministries. The nearby buildings house other ministries. The Bhutan government functions from Tashichho Dzong. You can purchase a Bhutan trip package from us. 
                               </p>
                               <p className="font font22">
                                    The sight of Tashichho Dzong is appealing. It is on the banks of Wang Chhu River. Inside the boundary, there are beautiful gardens. Notably, temples and shrines are also inside the boundary. Tashichho Dzong is a core component of Bhutan tourism. It is also called Thimphu Dzong, included in our Bhutan tour packages. 
                               </p>
                          </section>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div> 
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h4>Simtokha Dzong</h4>
                     <section>
                          <section className="float-start p-3">
                               <img src="https://i.ibb.co/Z2Ln5gM/Simtokha-Dzong-Upload.webp" className="img-fluid rounded shadow-sm" alt="Buddha Dordenma"/>
                          </section>
                          <section className="p-3">
                               <p className="font font22">
                                    One of the notable places in Thimphu in our best Bhutan tour packages is Simtokha Dzong. It is a historic dzong built in 1628. Nowadays, one of the premier Dzongkha language institutes runs from the dzong. It was earlier a monastery. Zhabdrung Ngawang Namgyal was behind Simtokha Dzong, a historical monument. He unified Bhutan. Purchasing one of Aeiety Trips’ Bhutan travel packages can enable you to enjoy the majestic place on your tour of Bhutan.
                               </p>
                               <p className="font font22">
                                    Interestingly, a road near Simtokha Dzong leads to Paro, another spot among important Bhutan tourist places. The dzong underwent renovations several times. It is 65 square feet in area. There are three floors and a single entry door.
                               </p>
                               <p className="font font22">
                                    On the ground floor, there are slate carvings of 300 Buddhist saints. There is also a statue of Sakyamuni Buddha. And, there are eight Bodhisattvas on each adjacent side. Our Bhutan tour packages cover it. 
                               </p>                               
                          </section>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>    
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h4>Motithang Takin Preserve</h4>
                     <section>
                          <section className="float-start p-3">
                               <img src="https://i.ibb.co/dL4djSj/Motithang-Takin-Preserve-Upload.webp" className="img-fluid rounded shadow-sm" alt="Buddha Dordenma"/>
                          </section>
                          <section className="p-3">
                               <p className="font font22">
                                    Takin is the country's national animal. That is what you will see at the Motithang Takin Preserve. We have included it in our affordable Bhutan tour packages. It is a wildlife preserve in the Motithang district of Thimphu. The preserve is especially used to preserve Takin. You will get the opportunity to visit it when you tour Bhutan.
                               </p>
                               <p className="font font22">
                                    Pine trees cover the wildlife preserve. You will see Takins moving here and there in the preserve when you visit it with one of our best Bhutan tour packages.
                               </p>
                          </section>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>    
              
     </>);
}
//Paro
function Paro(){
     return(<>
          <div className="row background-mintcream p-2">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                    <h3>Paro</h3>
               </div>
               <div className="col-sm-1"></div>
          </div>  
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                    <section className="font font22">
                         <p>
                               It is an important town in Bhutan. Paro is historic and beautiful. Also, it is one of the notable places to visit in Bhutan. You will find many interesting things to see in the historically significant town. It finds a special place in Bhutan tourism. 
                         </p>
                         <p>
                               Interestingly, the only international airport in Bhutan is in Paro. Its distance to Thimphu is 54 km. Paro is of special focus in our excellent Bhutan tour packages. The town is on the bank of the Paro Chu River. A lot of agricultural cultivation happens in Paro. In addition, there are many ancient sites in the town. Also, there are many good hotels and restaurants in Paro. 
                         </p>                         
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>           
     </>);
}
//Paro Visiting Places
function ParoVisitingPlaces(){
     return(<>
          <div className="row background-mintcream p-2">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                    <h3>Top Places to Visit in Paro</h3>
               </div>
               <div className="col-sm-1"></div>
          </div>  
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h4>Tiger’s Nest</h4>
                     <section>
                          <section className="float-start p-3">
                               <img src="https://i.ibb.co/RDDVRVw/Tiger-Nest-Upload.webp" className="img-fluid rounded shadow-sm" alt="Buddha Dordenma"/>
                          </section>
                          <section className="font font22 p-3">
                               <p>
                                    The Taktsang Palphug Monastery is among the most significant Bhutan tourist spots. It is also called Paro Taktsang. You will visit it when you tour Bhutan with a Bhutan package tour from Aeiety Trips. 
                               </p>
                               <p>
                                    According to the belief, Guru Rinpoche meditated for years inside a cave in that place. He came to the place on the back of a tigress.  Subsequently, he incarnated in eight different forms. That is why, the place is considered holy. It is also popularly called Tiger’s Nest.
                               </p>
                               <p>
                                    Paro Taktsang is at 2,950m above sea level. As such, you must trek to the monastery from the  Ramthangkha road. The trekking could take 2 to 3 hrs.
                               </p>
                         </section>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h4>Rinpung Dzong</h4>
                     <section>
                          <section className="float-start p-3">
                               <img src="https://i.ibb.co/PGdZyWW/Rinpung-Dzong-Upload.webp" className="img-fluid rounded shadow-sm" alt="Buddha Dordenma"/>
                          </section>
                          <section className="font font22 p-3">
                               <p>
                                    It is one of the most iconic places to visit in Bhutan. It is also called Paro Dzong. Rinpung Dzong attracts tourists due to its historical relevance and creative architecture. It has been used for defense and religious purposes. We include Rinpung Dzong in your tour of Bhutan with an excellent Bhutan trip package.
                               </p>
                               <p>
                                    Paro Dzong is among the key attractions in Bhutan tourism. It was built in 1646. Zhabdrung Ngawang Namgyel was the behind the setting up of the fortress. 
                               </p>
                               <p>
                                     Locals and tourists gather in large numbers in Rinpung Dzong during the annual festival of Paro Tsechu. It has excellent wooden carvings and paintings, drawing everyone’s appreciation.
                               </p>
                         </section>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>    
          <div className="row background-mintcream">
               <div className="col-sm-1"></div>
               <div className="col-sm-10">
                     <h4>Ta Dzong</h4>
                     <section>
                          <section className="float-start p-3">
                               <img src="https://i.ibb.co/j38mfV5/Ta-Dzong-Upload.webp" className="img-fluid rounded shadow-sm" alt="Buddha Dordenma"/>
                          </section>
                          <section className="font font22 p-3">
                               <p>
                                    It functions as Bhutan’s National Museum. Inside Ta Dzong, you will see precious bronze statues and paintings. As such, you will get the opportunity to get a glimpse of the country’s rich artistic heritage. Ta Dzong houses more than 3,000 artifacts that are over 1,500 years old.  Our comprehensive Bhutan travel packages include Ta Dzong. As such, you will visit the National Museum on your Bhutan trip with one of Aeiety Trip’s packages.
                               </p>
                               <p>
                                    Ta Dzong is one of the major tourist attractions in Bhutan. Ponlop Tenzin Drukdra built it. He was the first governor of Paro. The construction was completed in 1651.
                               </p>
                               
                          </section>
                    </section>
               </div>
               <div className="col-sm-1"></div>
          </div>         
              
     </>);
}