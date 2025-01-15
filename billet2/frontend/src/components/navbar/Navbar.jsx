import React from 'react'
import { Link } from 'react-router-dom'
import "../navbar/Navbar.scss"

const Navbar = () => {
  return (
    <div className="container">
 <div className="nav-container">
    <div className="nav-logo">
        <h1>Selling <span style={{}}>.</span></h1>
    </div>
    <div className="nav-link">
<ul className="list">
    <li className='li'><Link to="/">Home</Link></li>
    <li className='li'><Link to="about">About</Link></li>
    <li className='li'><Link to="contact">Contact</Link></li>
    <li className='li'><Link to="blog">Blog</Link></li>
    <li className='li'><Link to="special">Special</Link></li>
    <li className='li'><Link to="testimonials">Testimonials</Link></li>
    <li className='li'><Link to="products">Products</Link></li>
</ul>
    </div>
 </div>
 </div>

  )
}

export default Navbar