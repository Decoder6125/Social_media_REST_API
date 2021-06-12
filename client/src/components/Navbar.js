import React from 'react';
import {Link} from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Navbar = () => {
    return (
        <>
        <div className ="navbar">
           <Link to="/"><a className = "logo">Instagram</a></Link> 
            <div className = "nav_items">
             <div className="icons"><Link to="/Post"><AddAPhotoIcon /></Link></div>   
             <div className="icons"> <Link to="/Profile"><PersonIcon/></Link> </div>
                <Link to="/Login"><div className = "button">Login</div></Link>
            </div>
        </div>
        </>
    )
}

export default Navbar
