import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import M from "materialize-css"
import './CreatePost.css';

const CreatePost = () => {
    const navigate = useNavigate();
    const [title, setTitle]= useState("")
    const [body, setBody]= useState("")
    const [image, setImage]= useState("")
    const [url, setURL] = useState("")
    useEffect(()=>{
        if(url){
            fetch('/createpost', {
                method : "post",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : "Bearer "+localStorage.getItem('jwt')
                }, 
                body: JSON.stringify({
                    title,
                    body,
                    pic:url
                })
            }).then(res=>res.json())
            .then(userdata=>{
            console.log(userdata)    
                if(userdata.error){
                   M.toast({html: userdata.error, classes:"#ef5350 red lighten-1"})
                }  else{
                   M.toast({html : "Created a Post Successfully", classes:"#81c784 green lighten-2"})
                   navigate('/home')
                }
             }).catch(error=>{console.log(error)})
        }
    }, [url])

    const postDetails = () =>{

        const data = new FormData()   //  inorder send the data create a new form 
        data.append("file", image)
        data.append("upload_preset", "instaclone")      // for cloudinary purpose
        data.append("cloud_name", "dkg39i0d5")          // cloud name
        // making network request
        fetch("https://api.cloudinary.com/v1_1/dkg39i0d5/image/upload", {
            method : "post",
            body : data
        }).then(res=>res.json())
        .then(data=>{
            setURL(data.url)
        }).catch(error=>{
            console.log(error)
        })

       

    }

    return (

        <div className="card post-card input-field">
            <div className="card-content">
                <input type="text" placeholder="Enter Title" 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <input type="text" placeholder="Enter Description" 
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                />

                <div className="file-field input-field">
                    <div className="btn">

                        <label htmlFor="browse" className="label-browse">Browse</label>
                        <input id="browse" type="file" multiple 
                            onChange={(e)=>setImage(e.target.files[0])}
                        />
                        
                    </div>

                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"  />
                    </div>
                    
                </div>

                <button className="btn waves-effect waves-light #64b5f6 blue darken-2" 
                        onClick={()=>{postDetails()}}
                >
                    Post
                </button>
                
            </div>
        </div>
    )
}

export default CreatePost;