
import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { apihost } from "./apihost";
let params=new URLSearchParams(document.location.search);
let id=params.get("id"); 
let page=params.get("page");
let heading=params.get("heading");

export default function BlogDelete(){
     return(<>
         <div className="container-fluid bg-info">
             <PageRedirect/>
             <BlogRemove/>
         </div>
     </>);
}

//Page Redirect
function PageRedirect(){      
     return(<>
           <div className="row bg-primary">
               <div className="col-sm-4">
                   <Link to={"/adminDashboard/blogs/?page="+page} className="text-decoration-none link-dark">&#x1F878;</Link>
               </div>
               <div className="col-sm-4"></div>
               <div className="col-sm-1"></div>            
           </div>  

     </>);  
}
//Remove Blog
function BlogRemove(){
     const [msg,setMsg]=useState('Do You Want to Delete the Blog Titled '+heading+"?");
     const [delId]=useState(id);
     
     //DeleteBlog
     function DeleteBlog(e){
         e.preventDefault();
         var dta={
               n_blgDelId:delId
         }
         axios.post(apihost+"/adminDashboard/blogs/blog-delete/?id="+delId,dta,
         {
               headers: {'Content-Type': 'application/json'}
         })
         .then(response=>{
               setMsg(response.data);
         })
         .catch(error=>{
               setMsg(error);
         });


     }
     return(<>
         <div className="row bg-light">
             <div className="col-sm-1"></div>
             <div className="col-sm-10">
                 <span className="fs-2 text-primary">{msg}</span>
                 
                 <section>
                     <form method="post" onSubmit={DeleteBlog}>
                          <div className="form-group">                               
                               <input type="hidden" className="form-control" name="n_blgDelId" value={delId}/>
                          </div>
                          <div className="form-group">
                               <button type="submit" className="submit">Delete Blog</button>
                          </div>
                     </form>
                 </section>
             </div>
             <div className="col-sm-1"></div>
         </div>
    </>);
}