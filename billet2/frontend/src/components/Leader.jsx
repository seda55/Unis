import React from 'react'
import "../components/Leader.scss"
import { CiFacebook , CiLinkedin } from "react-icons/ci";
import { FaInstagram , FaTwitter } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import person1 from "../assets/image/person1.webp"

const Leader = () => {
  return (
    <div className='container'>
<div className="leader-container">
<div className="title">

    <p>TEAM</p>
    <h1>LEADERSHIP</h1>
</div>
<div className="leader-cards">
    <div className="leader-card">
<img src="person1.webp" alt="" />
<h3></h3>
<span></span>
<p></p>
<ul>
        <li><Link to=''><CiFacebook /></Link></li>
        <li><Link to=''><FaInstagram /></Link></li>
        <li><Link to=''><FaTwitter /></Link></li>
        <li><Link to=''><CiLinkedin /></Link></li>
    </ul>
    </div>

    <div className="leader-card">
<img src="" alt="" />
<h3></h3>
<span></span>
<p></p>
<ul>
        <li><Link to=''><CiFacebook /></Link></li>
        <li><Link to=''><FaInstagram /></Link></li>
        <li><Link to=''><FaTwitter /></Link></li>
        <li><Link to=''><CiLinkedin /></Link></li>
    </ul>
    </div>
    <div className="leader-card">
<img src="" alt="" />
<h3></h3>
<span></span>
<p></p>
<ul>
        <li><Link to=''><CiFacebook /></Link></li>
        <li><Link to=''><FaInstagram /></Link></li>
        <li><Link to=''><FaTwitter /></Link></li>
        <li><Link to=''><CiLinkedin /></Link></li>
    </ul>
    </div>
    
</div>

    </div>     
    </div>   
    
  )
}

export default Leader