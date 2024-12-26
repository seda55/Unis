import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket } from '../redux/basketSlice';

const ProductList = () => {
    const products =useSelector((state)=> state.products.items);
    const loading =useSelector((state)=>state.products.loading);
    const dispatch =useDispatch();


    if(loading){
        return <p>mehsullar yuklenir ...</p>
    }
    
    return (
    <div>
<h2>Products</h2>
<ul style={{listStyle:"none",padding:0}}>
    {products.map((product)=>(
        <li key={product.id} style={{marginBottom: "10px"}}>
            {product.name} - {product.price}azn
            <button onClick={()=>dispatch(addToBasket(product))} style={{marginLeft:"10px"}}>elave et</button>
            
        </li>
    ))}

</ul>
    </div>
  )
}

export default ProductList