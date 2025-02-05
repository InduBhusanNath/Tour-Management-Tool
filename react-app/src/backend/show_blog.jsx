import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import parse from 'html-react-parser';
import { apihost } from "./apihost";


let params=new URLSearchParams(document.location.search);
let id=params.get("id"); alert(id);
     
//Show Blog, Edit, Delete
export default function ShowBlog(){      
    const [eBlog_Id,setEblog_Id]=useState(id);
    const [eBlogDate,setEBlogDate]=useState('');    
    const [eBlogTitle,setEBlogTitle]=useState(''); 
    const [eblogMetaDescription,setEblogMetaDescription]=useState('');
    const [eBlogHeading,setEBlogHeading]=useState('');
    const [eBlogImagePath,setEBlogImagePath]=useState('');
    const [eBlogAuthor,setEBlogAuthor]=useState('');
    const [eBlogBody,setEBlogBody]=useState('');
    const [eBlogFeaturedImageLink,setEBlogFeaturedImageLink]=useState('');
    const [eBlogFeaturedContent,setEBlogFeaturedContent]=useState('');

    const [msg1,setMsg1]=useState('');
    const [isBlogContentShown,setisBlogContentShown]=useState('shown');
    const [isBlogEditShown,setIsBlogEditShown]=useState('hidden');
    const [isPopupShown,setIsPopupShown]=useState('hidden')
    const [message,setMessage]=useState('');
    const [deleteMessage,setDeleteMessage]=useState('');    
    const [viewBlog,setViewBlog]=useState('background-palegoldenrod');
    const [updateBlog,setUpdateBlog]=useState('background-lightgoldenrodyellow');

    

    

    


   

//Blog content
     function BlogContent(){
          
          
          return(<>   
                   
                         <div className="row">
                               <div className="col-sm-1"></div>
                               <div className="col-sm-10">
                                     <span className="small text-dark">Date Posted: &nbsp;{eBlogDate}</span>
                                     <br/>
                                     <p className="text-dark small">Title:&nbsp;{eBlogTitle}</p>
                                     <p className="text-dark small">Meta Description:&nbsp;{eblogMetaDescription}</p>
                                     <p className="font font18">Image Path:&nbsp;{eBlogImagePath}</p>
                                     <br/>
                                     <img src={eBlogImagePath} className="img-fluid"/>
                                     <p className="font font18">Author:&nbsp;{eBlogAuthor}</p>
                                     <br/>
                                     
                                     <br/>
                                     <h1>{eBlogHeading}</h1>
                                     
                                     <br/>                                     
                                     
                                     {parse(eBlogBody)}
                                     <br/>
                                     <p className="font font18">Featured Image Link:&nbsp;{eBlogFeaturedImageLink}</p>
                                     <br/>
                                     <p className="font font18">Featured Content:&nbsp;</p>
                                     <br/>
                                     {eBlogFeaturedContent}
                                     
                                     
                                                            
                                     
                                       
                                     
                               
                                </div>
                               <div className="col-sm-1"></div>
                         </div>
                   
          
          </>);      
  }
  

 //Update Blog

  function updateBlogContent(e){
       e.preventDefault();
       var updtBlg=new FormData();
       updtBlg.append('ublgId',eBlog_Id); 
       updtBlg.append('edit_n_blogTitle',eBlogTitle);
       updtBlg.append('edit_n_blogMetaDescription',eblogMetaDescription);
       updtBlg.append('edit_n_blogHeading',eBlogHeading);
       updtBlg.append('edit_n_blogAuthor',eBlogAuthor);
       updtBlg.append('edit_n_blogBody',eBlogBody);
     
       
             axios.post(apihost+"/adminDashboard/blogs/show_blog/update-blog-content",updtBlg,{
                    headers: {'Content-Type': 'application/json'}
             })
            .then(response=>{
                   setMessage(response.data);
            })
             .catch(error=>{
                  setMessage(error);

            });

            

  }

  function deleteBlogContent(e){
       e.preventDefault();
       var dltBlg=new FormData();
       dltBlg.append('dltBlgId',eBlog_Id);
       axios.post("delete-blog-content",dltBlg,{             
                  headers: {
                        'Content-Type': 'application/json'
                  }    
            
       })
       .then(response=>{
             setDeleteMessage(response.data);
     })
      .catch(error=>{
            setDeleteMessage(error);

     });
       

  }

 

  
  

  function EditBlog(){   
       
      return(<>  
                               
             <div className="row">
                   <div className="col-sm-1"></div>
                   <div className="col-sm-10">
                        <section>
                              <span className="small text-danger">{message}</span>
                        </section>

                         
                         <section>
                               <form method="post" onSubmit={updateBlogContent}>
                                                                          
                                     <div className="form-group">
                                          <label>Title[Maximum 160 Characters]</label>
                                          <input type="text" className="form-control" name="edit_n_blogTitle" value={eBlogTitle} onChange={(e)=>{setEBlogTitle(e.target.value)}}/>

                                     </div>
                                     <div className="form-group">
                                           <label>Meta Desctiption[Maximum 160 Characters]</label>
                                           <textarea className="form-control" name="edit_n_blogMetaDescription" value={eblogMetaDescription} onChange={(e)=>{setEblogMetaDescription(e.target.value)}}/>

                                     </div>
                                     <br/>
                                     <div className="form-group">
                                           <label>Heading</label>
                                           <input type="text" className="form-control" name="edit_n_blogHeading" value={eBlogHeading} onChange={(e)=>{setEBlogHeading(e.target.value)}}/>
                                     </div>
                                     <br/>
                                     <div className="form-group">
                                           <label>Author</label>
                                           <input type="text" className="form-control" name="edit_n_blogAuthor" value={eBlogAuthor} onChange={(e)=>{setEBlogAuthor(e.target.value)}}/>
                                     </div>
                                     <br/>
                                     <div className="form-group">
                                           <label>Write Blog</label>
                                           <textarea className="form-control" name="edit_n_blogBody" value={eBlogBody} onChange={(e)=>{setEBlogBody(e.target.value)}}/>
                                     </div>
                                     <br/>
                                     <div className="form-group">
                                           <label>Featured Image Link</label>
                                           <input type="text" className="form-control" name="edit_n_featuredImageLink" value={eBlogFeaturedImageLink} onChange={(e)=>{setEBlogFeaturedImageLink(e.target.value)}}/>
                                     </div>
                                     <br/>
                                     <div className="form-group">
                                           <label>Featured Content</label>                             
                                           <textarea className="form-control" name="edit_n_featuredContent" value={eBlogFeaturedContent} onChange={(e)=>{setEBlogFeaturedContent(e.target.value)}}/>
                                     </div>
                                     <br/>
                                     <div className="form-group">
                                           <button type="submit" className="submit">Update Blog</button>
                                     </div>

                              </form>
                         </section>
                         
                   </div> 
                   <div className="col-sm-1"></div> 
             </div>
      </>);
  }
     function vBlog(){
             setViewBlog('background-palegoldenrod');
             setUpdateBlog('background-lightgoldenrodyellow');
             setisBlogContentShown('shown');
             setIsBlogEditShown('hidden');
             
     }
 function uBlog(){
       
       setViewBlog('background-lightgoldenrodyellow');
       setUpdateBlog('background-palegoldenrod');       
       setisBlogContentShown('hidden');
       setIsBlogEditShown('shown');

 }
 function blogDeleteAlert(){
      setIsPopupShown('shown');      
       
 }
 function hideDeletePopup(){
       setIsPopupShown('hidden');
 }
    
        
     return(<>
         <div className="container bg-light">
             <div className="row">
                   <div className="col-sm-4"><span className="small text-danger">{msg1}</span></div>
                   <div className="col-sm-4">
                        <a href="javascript:void(0);" className="rounded text-dark fw-bold text-decoration-none" onClick={vBlog}><span className={viewBlog}><span className="padding10">View Blog</span></span></a>
                        &nbsp;
                        <a href="javascript:void(0);" className="rounded text-dark fw-bold text-decoration-none" onClick={uBlog}><span className={updateBlog}><span className="padding10">Update Blog</span></span></a>
                       
                   </div>
                   <div className="col-sm-4"></div>
             </div>
             <section className={isBlogContentShown}>
                   <p>&nbsp;</p>
                   <a href="javascript:void(0);" className="text-decoration-none rounded bg-danger padding10" onClick={blogDeleteAlert}>Delete Blog</a>
                   <p>&nbsp;</p>
                   <BlogContent/>
                   
             </section>
             <section className={isBlogEditShown}>
                   <EditBlog/>
             </section>
             
             
             
               
         </div>

         

       <div className={isPopupShown}>
             <section className="popup">
                  <span className="border border-primary" onClick={hideDeletePopup} >&#10060;</span>
                  <p>&nbsp;</p>
                  <span className="small text-danger">{deleteMessage}</span> 
                  <span className="font font24">Do You Want to Delete the Blog--{eBlogHeading}?</span>
                  <p>&nbsp;</p>
                  <a href="javascript:void(0);" className="rounded-pill text-decoration-none bg-warning text-dark padding10" onClick={deleteBlogContent}>Yes, Delete</a>         
             </section>
             
       </div>

     </>);
}