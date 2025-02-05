import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apihost } from "./apihost";
import axios from "axios";

 
//Main Export Function
export default function BlogUpdate(){
     return(<>
         <div className="container-fluid bg-light">
             <EditBlog/>            
         </div>     
     </>);
}

//Edit Blog
function EditBlog(){
     const [msg1,setMsg1]=useState('');
     const [eBlogId,setEblogId]=useState('');         
     const [eBlogTitle,setEBlogTitle]=useState(''); 
     const [eblogMetaDescription,setEblogMetaDescription]=useState('');
     const [eBlogHeading,setEBlogHeading]=useState('');     
     const [eBlogAuthor,setEBlogAuthor]=useState('');
     const [eBlogBody,setEBlogBody]=useState('');
     const [eBlogFeaturedImageLink,setEBlogFeaturedImageLink]=useState('');
     const [eBlogFeaturedContent,setEBlogFeaturedContent]=useState('');
    
     let params=new URLSearchParams(document.location.search);
     let id=params.get("id"); 
     let page=params.get("page"); 
     
    useEffect(()=>{
        axios.get(apihost+'/adminDashboard/blogs/blog-update/?blgId='+id)
        .then(response=>{
              if(response.data.flag==="0"){
                     setMsg1("Could Not Load Blogs, Please Try Again.....");
                     return;
              }

                setEblogId(response.data.eBlgId);                                 
                setEBlogTitle(response.data.eBlgTitle);
                setEblogMetaDescription(response.data.eBlgMetaDescription);             
                setEBlogHeading(response.data.eBlgHeading);
                setEBlogAuthor(response.data.eBlgAuthor);
                setEBlogBody(response.data.eBlgBody);
                setEBlogFeaturedImageLink(response.data.eBlgFeaturedImageLink);
                setEBlogFeaturedContent(response.data.eBlgFeaturedContent);
         })
        .catch(error=>{
              setMsg1("Something Went Wrong, Please Try Again.....");
       });
  },[id]);

  //Update Blog
  function updateBlogContent(e){
      e.preventDefault();
      var updtBlog={
           updteBlogId:eBlogId,
           updteBlogTitle:eBlogTitle,
           updteblogMetaDescription:eblogMetaDescription,
           updteBlogHeading:eBlogHeading,
           updteBlogAuthor:eBlogAuthor,
           updteBlogBody:eBlogBody,
           updteBlogFeaturedImageLink:eBlogFeaturedImageLink,
           updteBlogFeaturedContent:eBlogFeaturedContent
      }
      axios.post(apihost+"/adminDashboard/blogs/blog-update",updtBlog,{
          headers: {
               'Content-Type': 'application/json'
           }
      })
      .then(response=>{
           setMsg1(response.data);
      })
      .catch(error=>{
           setMsg1(error);
      });

  }

     return(<>
           <div className="row">
                <div className="col-sm-4">
                
                     <Link to={"/adminDashboard/blogs/?page="+page} className="text-decoration-none link-dark">&#x1F878;</Link>
                </div>
                <div className="col-sm-4"></div>
                <div className="col-sm-4"></div>
          </div>
          <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                     <span className="small text-danger">{msg1}</span>
                     <form method="post" onSubmit={updateBlogContent}>
                          <div className="form-group">
                               <label>Title[Maximum 160 Characters]</label>
                               <input type="text" className="form-control" name="edit_n_blogTitle" value={eBlogTitle} onChange={(e)=>{setEBlogTitle(e.target.value)}}/>
                          </div>
                          <div className="form-group">
                               <label>Meta Desctiption[Maximum 160 Characters]</label>
                               <textarea className="form-control" name="edit_n_blogMetaDescription" value={eblogMetaDescription} onChange={(e)=>{setEblogMetaDescription(e.target.value)}}/>
                          </div>
                          <div className="form-group">
                               <label>Heading</label>
                               <input type="text" className="form-control" name="edit_n_blogHeading" value={eBlogHeading} onChange={(e)=>{setEBlogHeading(e.target.value)}}/>
                          </div>
                          <div className="form-group">
                               <label>Author</label>
                               <input type="text" className="form-control" name="edit_n_blogAuthor" value={eBlogAuthor} onChange={(e)=>{setEBlogAuthor(e.target.value)}}/>
                          </div>
                          <div className="form-group">
                               <label>Update Blog</label>
                               <textarea className="form-control" name="edit_n_blogBody" value={eBlogBody} onChange={(e)=>{setEBlogBody(e.target.value)}}/>
                          </div>
                          <div className="form-group">
                               <label>Featured Image Link</label>
                               <input type="text" className="form-control" name="edit_n_featuredImageLink" value={eBlogFeaturedImageLink} onChange={(e)=>{setEBlogFeaturedImageLink(e.target.value)}}/>
                          </div>
                          <div className="form-group">
                               <label>Featured Content</label>                             
                               <textarea className="form-control" name="edit_n_featuredContent" value={eBlogFeaturedContent} onChange={(e)=>{setEBlogFeaturedContent(e.target.value)}}/>
                          </div>
                          <div className="form-group">
                               <button type="submit" className="submit">Update Blog</button>
                          </div>

                     </form>                 
                </div>
                <div className="col-sm-1"></div>
          </div>     
     </>);
}