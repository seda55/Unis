import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productsSlice";
import './Products.css'

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products); 
  const status = products?.status;
  const items = products?.items;
  const error = products?.error;

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  console.log("Products State:", products); 

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="products-container">
      <h1>Products</h1>
      <div className="products-grid">
        {items?.map((product) => (
        
            <div className="product-card" key={product.id}>
              <img
                src={product.images[0]} 
                alt={product.title}
                className="product-image"
              />
              <div className="product-info">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p className="price">Price: ${product.price}</p>
              </div>
            </div>
          
        
        ))}
      </div>
    </div>
  );
};

export default Products;
