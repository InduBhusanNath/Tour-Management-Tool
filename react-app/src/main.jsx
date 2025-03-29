import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/app.css";
import "./assets/css/font.css";
import "./assets/css/form.css";
import "./assets/css/menu.css";

//Frontend
import HomePage from "./frontend/home-page";
import AboutUs from "./frontend/aboutus";
import ContactUs from "./frontend/contactus";
import BlogPage from "./frontend/blog-page";
import Taxis from "./frontend/taxis";
import DelhiTaxi from "./frontend/delhi-taxi";
import GuwahatiTaxi from "./frontend/guwahati-taxi";
import AdventureTours from "./frontend/adventure-tours";
import EcoTours from "./frontend/eco-tours";
import HistoricalTours from "./frontend/historical-tours";
import TourPackagesIntro from "./frontend/tour-packages-intro";
import BhutanTourPackage from "./frontend/bhutan-tour-package";

//Backend
import AdminLogin from "./backend/admin-login";
import ForgotPassword from "./backend/forgot_password";
import AdminDashboard from "./backend/admin-dashboard";
import AdminUsers from "./backend/admin-users";
import Blog from "./backend/blogs";
import WriteBlog from "./backend/write-blog";
import BlogUpdate from "./backend/blog-update";
import BlogDelete from "./backend/blog-delete";
import TourPackages from "./backend/tour-packages";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
           //Frontend
           <Route index element={<HomePage/>} />
           <Route path="/aboutus" element={<AboutUs/>} />
           <Route path="/contactus" element={<ContactUs/>} />
           <Route path="/blog-page" element={<BlogPage/>} />
           <Route path="/taxis" element={<Taxis/>} />
           <Route path="/delhi-taxi" element={<DelhiTaxi/>} />
           <Route path="/guwahati-taxi" element={<GuwahatiTaxi/>} />
           <Route path="/adventure-tours" element={<AdventureTours/>} />
           <Route path="/eco-tours" element={<EcoTours/>} />
           <Route path="/historical-tours" element={<HistoricalTours/>} />
           <Route path="/tour-packages-intro" element={<TourPackagesIntro/>} />
           <Route path="/bhutan-tour-package" element={<BhutanTourPackage/>} />

           //Backend
           <Route path="/adminLogin" element={<AdminLogin/>} />
           <Route path="/forgotPassword" element={<ForgotPassword/>} />
           <Route path="/adminDashboard" element={<AdminDashboard/>} >
                 <Route path="/adminDashboard/adminUsers" element={<AdminUsers />} />
                 <Route path="/adminDashboard/blogs" element={<Blog />} /> 
                 <Route path="/adminDashboard/blogs/write_blog" element={<WriteBlog />} /> 
                 <Route path="/adminDashboard/blogs/blog-update" element={<BlogUpdate/>} /> 
                 <Route path="/adminDashboard/blogs/blog-delete" element={<BlogDelete/>} />  
                 <Route path="/adminDashboard/tour-packages" element={<TourPackages/>} />           
           </Route>



        
    </Routes>
  </BrowserRouter>
);
