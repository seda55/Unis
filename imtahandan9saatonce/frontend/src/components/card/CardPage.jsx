import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/features/ProductSlice'
import Cards from './Card'

const CardPage = () => {
    const {products} = useSelector((state)=> state.products)
    console.log(products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProduct())
    },[dispatch])

  return (
    <div>
 <Cards key={products._id} products={products}/>

    </div>
  )
}

export default CardPage