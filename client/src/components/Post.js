import React, {useState} from 'react'

const Post = () => {
    const[title,setTitle] = useState("")
    const[body,setBody] = useState("")
    const[image,setImage] = useState("")


    const postDetails = () => {
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","decoderinstaclone")
    data.append("cloud_name","decoderinstaclone") 
    fetch("https://api.cloudinary.com/v1_1/decoderinstaclone/image/upload", {
        method:"post",
        body:data
    })
     .then(res=>res.json())
     .then(data=> {
         console.log(data);
     })
     .catch(err=> {
         console.log(err);
     })
    }
    return (
        <div>
              <br></br><br></br> <br></br><br></br> <br></br><br></br>  <br></br><br></br>
           <center>
               
           <input 
                placeholder="title" 
                type="text" 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />

          <input 
                placeholder="body" 
                type="text" 
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                />
          <input type="file" onChange={(e)=> setImage(e.target.files[0])}/>

               <input type="submit" value="upload" 
               onClick={()=>postDetails()}
               />
               
               
               </center> 
        </div>
    )
}

export default Post
