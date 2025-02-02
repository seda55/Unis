import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';
   



const CardPage = () => {
    const[products, setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState('')

    useEffect(()=>{
        axios.get('http://localhost:5000/api/products')
        .then(response =>{
setProducts(response.data.products);
setLoading(false)
        })
        .catch(error=>{
            setError('problem')
            setLoading(false)
        })
    },[])
  return (
    <div style={{ padding: '20px' }}>
    <h1>Our Products</h1>
    
    {loading && <p>Yüklənir...</p>}  {/* Yükləmə halı */}
    {error && <p>{error}</p>}  {/* Xəta mesajı */}
    
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {/* Məlumatları `Card` komponentində göstəririk */}
      {products.map((product) => (
        <Card key={product._id} name={product.name} surname={product.surname} />
      ))}
    </div>
  </div>
  )
}

export default CardPage