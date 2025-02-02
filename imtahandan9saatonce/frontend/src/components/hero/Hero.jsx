import React from 'react'
import "../hero/Hero.scss"
import sekl from  "../../assets/1.png"

const Hero = () => {
  return (
    <div className='container hero'>
     <div className="row">
     <div className="col-lg-6 p-0 one">
            <img src="sekl" alt="" />
        </div>
        <div className='col-lg-6'>
        <div className="row " style={{display:"flex" , gap:"10px"}} >
    <div className=" col-lg-6"><img src="https://preview.colorlib.com/theme/ashion/img/categories/category-2.jpg.webp" alt="" /></div>
    <div className=" col-lg-6"><img src="https://preview.colorlib.com/theme/ashion/img/categories/category-3.jpg.webp" alt="" /></div>
    <div className=" col-lg-6"><img src="https://preview.colorlib.com/theme/ashion/img/categories/category-4.jpg" alt="" /></div>
    <div className=" col-lg-6"><img src="https://preview.colorlib.com/theme/ashion/img/categories/category-5.jpg" alt="" /></div>
</div>
        </div>
     </div>

    </div>
  )
}

export default Hero