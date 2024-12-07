import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./frontend/home_page";
import AboutUs from "./frontend/aboutus";
import DelhiTaxi from "./frontend/delhi-taxi";
import GuwahatiTaxi from "./frontend/guwahati-taxi";
import BlogPage from "./frontend/blog-page";
import ContactUs from "./frontend/contactus";
import AdventureTourism from "./frontend/adventure-tourism";
import EcoTourism from "./frontend/eco-tourism";
import HistoricalTourism from "./frontend/historical-tourism";
import TourPackagesIntro from "./frontend/tour-packages-intro";
import UniqueAttractions from "./frontend/unique-attractions";
import UniqueAttractionsAssam from "./frontend/unique-attractions-assam";
import BhutanTourPackage from "./frontend/bhutan-tour-package";

import AdminLogin from "./backend/admin_login";
import AdminDashboard from "./backend/admin_dashboard";
import AdminUsers from "./backend/admin_users";
import ForgotPassword from "./backend/forgot_password";
import Blog from "./backend/blogs";
import WriteBlog from "./backend/write_blog";
import ShowBlog from "./backend/show_blog";
import ContactUsMessage from "./frontend/contactus_message";
import MessagesContactUs from "./backend/contactus_messages";
import ManageCabBooking from "./backend/manage-cab-booking";
import CabBookingProcessing from "./backend/cab-booking-processing";
import Tourism from "./backend/tourism";
import TourismWrite from "./backend/tourism-write";
import TourismEdit from "./backend/tourism-edit";
import TourismDelete from "./backend/tourism-delete";
import Places from "./backend/places";
import PlaceWrite from "./backend/places-write";
import PlaceEdit from "./backend/place-edit";
import PlaceDelete from "./backend/place-delete";
import Images from "./backend/images";
import TourPackages from "./backend/tour-packages";
import BhutanTourPackageDescription from "./frontend/bhutan-tour-package-description";



const router=createBrowserRouter([
  {
     path:"/",
     element:<HomePage/>
  },
  {
   path:"/aboutus",
   element:<AboutUs/>
  },
  {
   path:"/delhi-taxi",
   element:<DelhiTaxi/>
  },
  {
   path:"/guwahati-taxi",
   element:<GuwahatiTaxi/>
  },
  {
   path:"/blog-page",
   element:<BlogPage/>
  },
  {
   path:"/contactus",
   element:<ContactUs/>
  },
  {
   path:"/adventure-tourism",
   element:<AdventureTourism/>
  },
  {
   path:"/eco-tourism",
   element:<EcoTourism/>
  },
  {
   path:"/historical-tourism",
   element:<HistoricalTourism/>
  },
  {
    path:"/tour-packages-intro",
    element:<TourPackagesIntro/>
   },
   {
    path:"/bhutan-tour-packages",
    element:<BhutanTourPackage/>
   },
   {
    path:"/bhutan-tour-package-description",
    element:<BhutanTourPackageDescription/>
   },
  {
     path:"/adminLogin",
     element:<AdminLogin/>
  }, 
  {
    path:"/contactus",
    element:<ContactUsMessage/>
 },
  {
   path:"/forgotPassword",
   element:<ForgotPassword/>
 },
  {
   path:"/unique-attractions",
   element:<UniqueAttractions/>,
   children:[
          {
                path:"/unique-attractions/unique-attractions-assam",
                element:<UniqueAttractionsAssam/>
          },
   ],
   },  
  {
    path: "/adminDashboard",
    element: <AdminDashboard/>,
    children:[
      {
         path:"/adminDashboard/adminUsers/",
         element:<AdminUsers/>
      },
      {
        path:"/adminDashboard/blogs/",
        element:<Blog/>

      },
      {
         path:"/adminDashboard/blogs/write_blog/",
         element:<WriteBlog/>

      },      
      {  path:"/adminDashboard/blogs/show_blog",
         element:<ShowBlog/>
      },
      {  
         path:"/adminDashboard/contactus-messages",
         element:<MessagesContactUs/>

      },
      {  
        path:"/adminDashboard/places",
        element:<Places/>

     },
     {  
      path:"/adminDashboard/places/place-write",
      element:<PlaceWrite/>
    },
    {  
      path:"/adminDashboard/places/place-edit",
      element:<PlaceEdit/>
    },
    {  
      path:"/adminDashboard/places/place-delete",
      element:<PlaceDelete/>
    },
    {  
      path:"/adminDashboard/images",
      element:<Images/>

    },
    {
      path:"/adminDashboard/tour-packages",
      element:<TourPackages/>

    },
    {  
      path:"/adminDashboard/manage-cab-booking/",
      element:<ManageCabBooking/>
      },
     {  
        path:"/adminDashboard/manage-cab-booking/cab-booking-processing/",
        element:<CabBookingProcessing/>
     },
     {
      path:"/adminDashboard/tourism",
      element:<Tourism/>

    },
    {
      path:"/adminDashboard/tourism/tourism-write",
      element:<TourismWrite/>

    },
    {
      path:"/adminDashboard/tourism/tourism-edit",
      element:<TourismEdit/>

    },
    {
      path:"/adminDashboard/tourism/tourism-delete",
      element:<TourismDelete/>

    }
    ]
  }    
   
]);

function App() {
  return (
    <>
       
         <React.StrictMode>
             <RouterProvider router={router} />
         </React.StrictMode>

    
    </>
    
  )
}

export default App;
