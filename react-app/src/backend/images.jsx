import { useEffect, useState } from "react";
import axios from "axios";


export default function Images(){
     return(<>
         <div className="container-fluid background-lightyellow">
              <Upload/> 
              <DisplayImageLinks/>            
         </div>
     </>) ;
}
//Image Upload
function Upload(){
     const[msg,setMsg]=useState('');
     const[imageLabel,setImageLabel]=useState('');
     const[imageFile,setImageFile]=useState('');
      //submit image
      function PostImage(e){
         e.preventDefault();
         
         if(!imageFile){
             setMsg("Image Name Cannot be Empty.....");
             return;             
         }
         if(!imageLabel){
            setMsg("Label Cannot be Empty.....");
            return;
        }
         
         var fd=new FormData();
         fd.append("n_imageFile",imageFile);
         fd.append("n_imageLabel",imageLabel);
         
         axios.post("http://166.0.244.44:5000/adminDashboard/images",fd,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }}
        )
         .then(response=>{
              setMsg(response.data.flag);
              window.location.reload();
         })
         .catch(error=>{
                 alert(error);         
        });        


      }
     return(<> 
         <div className="row">
             <div className="col-sm-2"></div>
             <div className="col-sm-8">
                 
                 <section className="shadow">
                     <h2 className="text-center">Upload Image</h2>
                     <span className="small text-danger fw-bold">{msg}</span>
                     <form method="post" enctype="multipart/form-data" onSubmit={PostImage}>
                         <div className="form-group mb-3">                             
                             <input class="form-control" type="file" name="n_imageFile" onChange={(e)=>{setImageFile(e.target.files[0])}}/>
                         </div>
                         <div className="form-group mb-3">
                             <label>Image Label</label>
                             <input type="text" className="form-control" name="n_imageLabel" value={imageLabel} onChange={(e)=>{setImageLabel(e.target.value)}}/>
                         </div>
                         <div className="form-group">
                             <button type="submit" className="submit">Upload Image</button>
                         </div>

                     </form>
                 </section>

             </div>
             <div className="col-sm-2"></div>
         </div>
     
     </>);
}
//Display Image Links
function DisplayImageLinks(){
    const[msgd,setMsgd]=useState('');
    const[imageLinks, setImageLinks]=useState([]);
    const[delId,setDelId]=useState('');
    const[picName,sePicName]=useState('');
    const[showDeleteForm,setShowDeleteForm]=useState('hidden');
    let params=new URLSearchParams(document.location.search);
    let pg=params.get("page");

    if(!pg){
          pg=1;
                     
    }else if(pg<1){
          pg=1;
    }//else if(pg>lastPage){
          //pg=lastPage;

   // }
     const nextUrl="?page="+(parseInt(pg)+1);         
     const prevUrl="?page="+(parseInt(pg)-1);
     const lastUrl="?page="+"1";
     const firstUrl="?page="+1;
    useEffect(()=>{ 
         axios.get("http://166.0.244.44:5000/adminDashboard/images/?page="+pg)
         .then(response=>{
             setMsgd(response.data.flag);
             setImageLinks(response.data.result);
             
         })
         .catch(error=>{
             alert(error);
         });
    },[pg]);
     
    var il=imageLinks.map(i=>
        <tr key={i._id}>
             <td className="text-center">{i.imagePath}</td>
             <td className="text-center">{i.imageName}</td>
             <td className="text-center">{i.imageLabel}</td>
             <td className="text-center"><a href="javascript:void(0);" onClick={(e)=>{setDelId(i._id); setShowDeleteForm('shown'); sePicName(i.imageName);}}>Delete</a></td>
        </tr>
    );
    

    return(<>
         <div className="row">
             <div className="col-sm-12">
                 <span className="small text-danger fw-bold">{msgd}</span>
                 <table className="table">
                     <thead>
                         <tr>
                             <th scope="col">IMAGE LINK</th>
                             <th scope="col">IMAGE NAME</th>
                             <th scope="col">IMAGE LABEL</th>
                             <th scope="col">DELETE</th>
                         </tr>
                     </thead>
                     <tbody>
                         {il}
                     </tbody>
                 </table>
                 <span>   
                     <a href={firstUrl}>First Page</a> &nbsp;&nbsp; <a href={prevUrl}>&laquo;Prev</a> &nbsp;&nbsp;<a href={nextUrl}>Next&raquo;</a> &nbsp;&nbsp;<a href={lastUrl}>Last Page</a> 
                 </span>
             </div>
             <DeleteImages visibility={showDeleteForm} id={delId} imgName={picName}/>
         </div>
    
    </>);
}

//Delete Images
function DeleteImages({visibility,id,imgName}){
     const[showDelPopup,setShowDelPopup]=useState('shown');
     const[dmsg,setDmsg]=useState('');
     const[delId,setDelId]=useState('');

     
     
     function HidePopup(){
         setShowDelPopup('hidden');
         window.location.reload();
         return;
     }
     function SubmitDelId(e){
         e.preventDefault();
         var d={
            "n_delId":id
         }
         axios.post("http://localhost:5000/adminDashboard/images/delete-image",d)
         .then(response=>{
             setDmsg(response.data);
         })
         .catch(error=>{
              alert(error);
         });      

     }
    
      
     return(<>
             <div className={visibility}>
                 <div className={showDelPopup}>
                         <section className="popup">
                             <button className="hide_btn" onClick={HidePopup}>&#10060;</button>
                             <span className="small text-danger">{dmsg}</span>
                             <form method="post" onSubmit={SubmitDelId}>
                                     <div className="form-group">
                                         <label>Do You Want to DELETE {imgName}?</label>
                                         <input type="text" className="form-control" name="n_delId" value={id} onLoad={(e)=>{setDelId(e.target.value);}} />
                                     </div>                                     
                                     <div className="form-group">
                                         <button type="submit" className="submit">Delete Image</button>
                                     </div>
                             </form>                          
                         </section>
                 </div>
             </div>
     </>);
}