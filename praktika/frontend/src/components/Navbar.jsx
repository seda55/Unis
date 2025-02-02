import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between" ,alignItems:"center",width:"100%",maxWidth:"2000px"}}> 
        <h1>Praktika</h1>
        <ul style={{display:"flex",gap:"10px", listStyle:"none",color:"darkblue",fontSize:"20px"}}>
    <li><Link to="/" style={{ textDecoration: 'none' }}>homee</Link></li>
    <li><Link to="/about" style={{ textDecoration: 'none' }}>about</Link></li>
    <li><Link to="/contact" style={{ textDecoration: 'none' }}>contact</Link></li>
    <li><Link to="/wishlist" style={{ textDecoration: 'none' }}>wishlist</Link></li>
    <li><Link to="/basket" style={{ textDecoration: 'none' }}>basket</Link>
</li>
</ul>
    </div>
  )
}

export default Navbar