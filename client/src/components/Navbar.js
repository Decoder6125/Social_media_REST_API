import React from 'react';
import {Link} from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

const Navbar = () => {
    return (
        <>
        <div className ="navbar">
          <div class="logo">
              <Link to="/">Instagram</Link>
          </div>

          <div class="nav_items">
              <Link to="/Post"><AddAPhotoIcon/></Link>
              <Link to="/Profile"><PersonIcon/></Link>
              <div className ="button"><Link to="/Login">Login</Link></div>
              
          </div>
        </div>
        </>
    )
}

export default Navbar
