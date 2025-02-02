import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Layout = () => {
  return (
    <div className='layout'>
<header style={{display:"flex",gap:"10px"}}>
   <Navbar/>
</header>
<main> <Outlet/></main>
<footer></footer>
    </div>
  )
}

export default Layout