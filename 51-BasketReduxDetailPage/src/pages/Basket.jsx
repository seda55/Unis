// src/components/Basket.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromBasket } from '../redux/features/basketSlice';

const Basket = () => {
  const dispatch = useDispatch();
  const basket = useSelector(state => state.basket);

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, quantity: -1 }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromBasket(id));
  };

  return (
    <div>
      <h1>Your Basket</h1>
      {basket.map(item => (
        <div key={item.id} className="basket-item">
          <span>{item.name}</span>
          <span>${item.price.toFixed(2)}</span>
          <div>
            <button
              onClick={() => handleDecrease(item.id)}
              disabled={item.quantity === 0}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrease(item.id)}>+</button>
          </div>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Basket;
