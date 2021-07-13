import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
const Login = () => {
    const history = useHistory()
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const postData = ()=> {
        fetch("/signin", {
            method: "post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res=>res.json())
        .then(data=> {
            if(data.error) {
                alert("Fill all the data")

            }
            else {
                alert("signed in successfully")
                history.push('/')
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



                 <input type="submit" value="Login" onClick={()=>postData()}/>
                 <br></br>
                 
                 <div className="signin_red">Don't have an account? 
                 
                 
                 <Link to="/Signup">Signup</Link>
                 
                 
                 
                 
               </div>



                 </div>  
               
                  
               
               
               
              
        </div>
    )
}

export default Login
