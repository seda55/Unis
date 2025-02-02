import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingBasket } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import  "../navbar/Navbar.scss"

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className='container nav'>
        <div className='nav-logo'>
          <img src="https://preview.colorlib.com/theme/ashion/img/logo.png" alt="" />
        </div>
        <div className='nav-link'>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/pages">Pages</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>

            
        </div>
        <div className='nav-icon'>
        <li><Link to="/basket"><FaShoppingBasket />
</Link></li>
        <li><Link to="/admin"><MdAdminPanelSettings />
</Link></li>

        </div>
    </div>
    </div>
  )
}

export default Navbar