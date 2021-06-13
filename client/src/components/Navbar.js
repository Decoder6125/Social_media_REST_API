import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedButtons from './Button';

const Navbar = () => {
    return (
        <>
        <div className ="navbar">
         <div className="icon"><Link to="/">Instagram</Link></div>
         <div className="nav_items">
             <Link to="/"><HomeIcon/></Link>
          <Link to="/Profile"><PersonIcon /></Link>
         <Link to="/Post"><AddAPhotoIcon /></Link>
         </div>

         <div className="nav_button">
         <Link to="/Login"><OutlinedButtons/></Link>

         </div>
         
     
        
        </div>
        </>
    )
}

export default Navbar
