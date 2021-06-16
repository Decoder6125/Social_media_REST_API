import React from 'react'
import {Link} from 'react-router-dom';
const Signup = () => {
    return (
        <div>
          
             <div className="card">
                 <div className="logo">Instagram</div>
                 <input placeholder="Username" type="text" />
                 <input placeholder="Email" type="email" />
                 <input placeholder="Password" type="Password" />
                 <input type="submit" value="Signup" />
                 <br></br>
                 
                 <div className="signin_red">Already have an account? 
                 
                 
                 <Link to="/Login">Login</Link>
                 
                 
                 
                 
               </div>



                 </div>  
               
                  
               
               
               
              
        </div>
    )
}

export default Signup
