import {Helmet} from "react-helmet";
import { Link } from "react-router";
import AddUsers from "./user-add";
import ReadUsers from "./users-read";


//Main Export Function
export default function ManageUsers(){
     return(<>
                 <TechnicalSeo/>
                 <div className="container-fluid">
                         <p className="fs-5"><Link to="/adminDashboard" className="text-decoration-underline link-danger fw-bold">Dashboard </Link>&gt;Users</p>
                         <AddUsers/>
                         <ReadUsers/>
                 </div>
     </>);
}
//Technical SEO
function TechnicalSeo(){
         return(<>
                 <Helmet>
                         <html lang="en"/>
                         <meta charSet="utf-8" />
                         <title>Add Admin Users</title>
                         <meta name="description" content="Add Admin Users"/>
                         <body className="background-lightgoldenrodyellow"/>
                 </Helmet>
         </>);
}



