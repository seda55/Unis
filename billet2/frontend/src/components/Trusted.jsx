import React from 'react'
import img from "../assets/image/women.webp"
import "./Trusted.scss"

const Trusted = () => {
  return (
    <div className='container'>
<div className="about-container">
    <div className="img">
        <img src={img} alt="" />
    </div>
    <div className="about-text">
        <p>Merchant Company</p>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!
</p>
        <button>Learn More</button>
    </div>
</div>
    </div>
  )
}

export default Trusted