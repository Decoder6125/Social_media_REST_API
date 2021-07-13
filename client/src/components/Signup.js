import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';
const Signup = () => {
    const history = useHistory()
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const postData = ()=> {
        fetch("/signup", {
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=> {
            if(data.error) {
                alert("Fill all the data")

            }
            else {
                alert("registered successfully")
                history.push('/Login')
            }

        }).catch(err=> {
            console.log(err)
        })
    }
    return (
        <div>
          
             <div className="card">
                 <div className="logo">Instagram</div>
                 <input 
                 placeholder="Username" 
                 type="text" 
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 
                 />


                <input 
                placeholder="Email" 
                type="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />



                 <input 
                 placeholder="Password" 
                 type="Password" 
                 value={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 />



                 <input 
                 type="submit" 
                 value="Signup" 
                 onClick={()=>postData()}
                 />
                 <br></br>
                 
                 <div className="signin_red">Already have an account? 
                 
                 
                 <Link to="/Login">Login</Link>
                 
                 
                 
                 
               </div>



                 </div>  
               
                  
               
               
               
              
        </div>
    )
}

export default Signup
