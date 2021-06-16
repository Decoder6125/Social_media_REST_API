import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import OutlinedButtons from './Button';
import ErrorIcon from '@material-ui/icons/Error';

const Navbar = () => {
    return (
        <>
        <div className ="navbar">
         <div className="icon"><Link to="/">Instagram</Link></div>
         <div className="nav_items">
             <NavLink exact to="/" activeClassName="active"><HomeIcon/></NavLink>
          <NavLink to="/Profile" activeClassName="active"><PersonIcon /></NavLink>
         <NavLink to="/Post" activeClassName="active"><AddAPhotoIcon /></NavLink>
         <NavLink to="/About" activeClassName="active"><ErrorIcon /></NavLink>
         </div>

         <div className="nav_button">
         <Link to="/Login"><OutlinedButtons/></Link>
        
         </div>
         
     
        
        </div>
        </>
    )
}

export default Navbar
