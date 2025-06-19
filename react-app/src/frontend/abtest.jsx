import { Helmet, HelmetProvider } from 'react-helmet-async';
//Main Export Function
export default function AbTest(){
     return(<>
         <HelmetProvider>
             <TechnicalSEO/>
             <div className="container-fluid">
                 <Body1/>
             </div>
         </HelmetProvider>
     </>);
}
//Technical SEO
function TechnicalSEO(){
     return(<>             
             <Helmet>
                <meta charSet="utf-8"/>
                <title>India Cruises: Luxury Trips & Best Cruise Deals</title>                
                <meta name="description" content="Explore top India cruises with luxury amenities, scenic routes & the best cruise deals. Book your perfect voyage today—coastal, river, or island. "/>
                <link rel="canonical" href="https://aeiety.com/aboutus"/>
                <meta property="og:title" content="India Cruises: Luxury Trips & Best Cruise Deals"/>
                <meta property="og:url" content="https://aeiety.com/aboutus"/>
                <meta property="og:image" content="https://i.ibb.co/gFhMF2T/logofb.png"/>
                <meta property="og:type" content="Web Page"/>
                <meta property="og:description" content="Explore top India cruises with luxury amenities, scenic routes & the best cruise deals. Book your perfect voyage today—coastal, river, or island. "/>
                <meta property="og:locale" content="en_GB" />
            </Helmet>
     
     </>);
}
//Body1
function Body1(){
     return(<>
         <div className="row">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                 <h1>Discover the Best India Cruises: Your Ultimate Voyage Awaits</h1>
                 <p>
                    Embark on a one-of-a-kind adventure with India cruises that take you beyond the ordinary. From the palm-lined shores of Goa to the bustling port of Mumbai and the tranquil backwaters of Kerala, cruises in India offer a perfect blend of luxury, culture, and exploration.
                 </p>
                 <p>
                    Whether you're looking for a weekend escape, a spiritual river journey, or an all-out luxury voyage, India's diverse coastal and inland cruise offerings have something for everyone.
                 </p>
                 <h2>Why Choose an India Cruise?</h2>
                 <p>
                    India cruises combine luxury with authenticity. Unlike traditional sightseeing, cruising lets you:
                    <li>Explore multiple destinations without repacking or planning transport</li>
                    <li>Relax in 5-star comfort with gourmet cuisine, entertainment, and spa treatments</li>
                    <li>Enjoy curated shore excursions—like exploring ancient temples, bustling markets, or secluded beaches</li>
                    <li>Experience India’s geography differently, from the Arabian Sea to the Ganges</li>

                    With growing interest in maritime tourism, top cruise lines are offering more frequent departures, themed sailings, and flexible packages — often with seasonal cruise deals India travelers are actively searching for.
                 </p>
                 <h2>Who Are India Cruises Perfect For?</h2>
                 <p>
                    Whether you're traveling solo or in a group, India’s cruise offerings are surprisingly diverse. They cater to:
                    <li>Couples & Honeymooners: Sunset decks, private dining, and luxury suites</li>
                    <li>Families: Onboard entertainment, safe excursions, and kid-friendly amenities</li>
                    <li>Cultural Explorers:Access to heritage towns, ancient ghats, and local cuisine</li>
                    <li>Luxury Travelers: All-suite ships, butler service, and curated itineraries</li>
                    <li>Senior Citizens: Slow-paced scenic routes with medical assistance available onboard</li>

                    And the good news? Many of these options come with value-packed cruise deals India travel agents and platforms offer seasonally.
                 </p>
                 <h2>Sample Itinerary: What a 3-Day India Cruise Looks Like</h2>
                 <p>
                    Day 1:Board in Mumbai. Enjoy a welcome drink, buffet lunch, and sail into the Arabian Sea. Evening gala dinner on deck with live performances.
                    Day 2: Dock at Goa. Explore spice plantations, Portuguese churches, and relax on the beach. Return onboard for themed Bollywood night.
                    Day 3: Sunrise yoga on deck. Leisurely brunch. Disembark by noon.
                 </p>
                 <h2>Frequently Asked Questions</h2>
                 <p>
                    Q: Are India cruises safe?
 Yes, major cruise lines follow international safety standards, including onboard medical support, lifeboat drills, and monitored hygiene protocols.
<br/>Q: Can I find budget-friendly options?
 Absolutely. Weekend routes and monsoon-season sailings often include discounted cruise deals India travelers love for short getaways.
<br/>Q: Do India cruises allow kids?
 Yes. Many ships include family suites, kids’ zones, and curated excursions for young travelers.
<br/>Q: What’s included in the fare?
 Most cruises include accommodation, meals, onboard entertainment, and basic excursions. Luxury lines may include butler service, drinks, and premium excursions.
                 </p>
                 <h2>Book Your India Cruise Today</h2>
                 <p>
                    Ready to experience India like never before? Whether you're floating past the Ganges' sacred ghats or relaxing on a deck as the Arabian Sea unfolds, India cruises offer an unforgettable escape.
Start your journey with flexible packages and hand-picked cruise deals India visitors trust — available now for early booking.
                 </p>
             </div>
             <div className="col-sm-1"></div>
         </div>
     </>);
}