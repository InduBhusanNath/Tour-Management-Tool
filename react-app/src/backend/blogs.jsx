import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { apihost } from "./apihost";

//Default Main Function
export default function Blog(){
     return(<>
           <div className="container bg-light">
             <Header/>
             <BlogList/>
           </div>
        
    </>);
}



function Header(){
     return(<>
        <div className="row padding25">
             <div className="col-sm-2"></div>
             <div className="col-sm-8"><h1 className="text-center">Blog Management</h1></div>
             <div className="col-sm-2"></div>
        </div>
    </>);
}

function BlogList(){
     
     const [message,setMessage]=useState('');
     const [blogList,setBlogList]=useState([]);
     const [lastPage,setLastPage]=useState('');
     const [blogCount,setBlogCount]=useState('');       
     
     let params=new URLSearchParams(document.location.search);
     let pg=params.get("page");

     if(!pg){
           pg=1;           
                      
     }else if(pg<1){
           pg=1;           
     }
          
      

     
      const nextUrl="?page="+(parseInt(pg)+1);         
      const prevUrl="?page="+(parseInt(pg)-1);
      const lastUrl="?page="+lastPage;
      const firstUrl="?page="+1;  

      
     
    
      useEffect(()=>{
          axios({
               method:"get",
               url:apihost+"/adminDashboard/blogs/?page="+pg                    
            }).then(response=>{
                     var blogData=response.data;                   
                     setBlogList(blogData.data);
                     setLastPage(blogData.totalPages);
                     setBlogCount(blogData.totalBlogs);     
                    
            }).catch(error=>{
                    setMessage("Could Not Load Blogs, Somewthing Went Wrong.....");
            });

      },[]);
     
     
        
         const showBlogs=blogList.map(blg=>          
                <tr key={blg._id}> 
                     <td className="text-center">{blg.blogDate}</td>
                     <td className="text-center">{blg.blogTitle}</td>
                     <td className="text-center">{blg.blogMetaDescription}</td>
                     <td className="text-center">{blg.blogHeading}</td>
                     <td className="text-center">{blg.blogAuthor}</td>
                     <td className="text-center">{blg.blogBody}</td>
                     <td className="text-center">{blg.blogFeaturedImageLink}</td>
                     <td className="text-center">{blg.blogFeaturedContent}</td>
                     <td className="text-center"><Link to={"/adminDashboard/blogs/blog-update/?id="+blg._id+"&"+"page="+pg}>&#128393;</Link></td>
                     <td className="text-center"><Link to={"/adminDashboard/blogs/blog-delete/?id="+blg._id+"&"+"page="+pg+"&"+"heading="+blg.blogHeading}>&#10060;</Link></td>
                </tr> 
       );  
     
     
        
        

     return(<> 
         
           <div className="row">
                <div className="col-sm-2">
                     <Link to="/adminDashboard/blogs/write_blog/">&#128393;</Link>
                </div>
                <div className="col-sm-8">
                     <span className="small text-danger">{message}</span>
                </div>
                <div className="col-sm-2"></div>
           </div>

           <div className="row">
                
                <div className="col-sm-12">
                     <span className="small text-success">Total Blogs:{blogCount}</span>
                     <table className="table table-hover">
                         <thead>
                            <tr>
                                    <th scope="col" className="text-center">DATE</th>
                                    <th scope="col" className="text-center">TITLE</th> 
                                    <th scope="col" className="text-center">META DESCRIPTION</th> 
                                    <th scope="col" className="text-center">HEADING</th> 
                                    <th scope="col" className="text-center">AUTHOR</th> 
                                    <th scope="col" className="text-center">BODY</th>
                                    <th scope="col" className="text-center">FEATURED IMAGE LINK</th> 
                                    <th scope="col" className="text-center">FEATURED CONTENT</th> 
                                    <th scope="col" className="text-center">UPDATE</th>  
                                    <th scope="col" className="text-center">DELETE</th>                                
                            </tr>
                         </thead>                       

                         <tbody> 
                              {showBlogs}
                         </tbody>

                     </table>
                     <span>   
                          <a href={firstUrl}>First Page</a> &nbsp;&nbsp; <a href={prevUrl}>&laquo;Prev</a> &nbsp;&nbsp;<a href={nextUrl}>Next&raquo;</a> &nbsp;&nbsp;<a href={lastUrl}>Last Page</a> 
                     </span>
               </div>
             

        </div>
     </>);
    
}



