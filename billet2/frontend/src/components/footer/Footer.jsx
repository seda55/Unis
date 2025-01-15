import React from 'react'
import { Link } from 'react-router-dom'
import { CiFacebook , CiLinkedin } from "react-icons/ci";
import { FaInstagram , FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "../footer/Footer.scss"



const Footer = () => {
  return (
    < >
    <div className='footers'>
<div className="one">
    <h3>about us</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo maiores eaque voluptates iure quos at ipsam aliquam magnam atque id necessitatibus cumque laudantium odit nam, blanditiis debitis quo eligendi?</p>
</div>
<div className="two">
    <h3>Quick Links</h3>
    <ul>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/'>Services</Link></li>
        <li><Link to='/'>contact us</Link></li>
        <li><Link to='/'>Testimonials</Link></li>
    </ul>
</div>
<div className="tree">
    <h3>Follow Us</h3>

    <ul>
        <li><Link to=''><CiFacebook /></Link></li>
        <li><Link to=''><FaInstagram /></Link></li>
        <li><Link to=''><FaTwitter /></Link></li>
        <li><Link to=''><CiLinkedin /></Link></li>
    </ul>

</div>
<div className="four">
    <h3>Featured Product</h3>
    <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
    <h3>Leather Brown Shoe</h3>
    <p>$60.00</p>
    <button>add  to cart </button>
</div>

    </div>

    <div className="p">
        <p>Copyright ©2025 All rights reserved | This template is made with <FaHeart /> by Colorlib</p>
    </div>
    </>

  )
}

export default Footer