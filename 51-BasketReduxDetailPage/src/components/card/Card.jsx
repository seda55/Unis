// src/components/Card.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist, addToBasket, removeFromBasket } from '../../redux/features/productSlice';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from 'react-router-dom';
import './Card.css';

const Card = ({ card }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.products.wishlist);
  const basket = useSelector((state) => state.products.basket);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const isInWishlist = wishlist.some((item) => item.id === card.id);
  const isInBasket = basket.some((item) => item.id === card.id);

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      toast.info('Please log in to add to the wishlist');
      navigate('/login');
      return;
    }

    if (isInWishlist) {
      dispatch(removeFromWishlist(card.id));
      toast.success('Removed from wishlist!');
    } else {
      dispatch(addToWishlist(card));
      toast.success('Added to wishlist!');
    }
  };

  const handleAddToBasket = () => {
    if (!isAuthenticated) {
      toast.info('Please log in to add to the basket');
      navigate('/login');
      return;
    }

    if (isInBasket) {
      toast.info('This product is already in your basket!');
    } else {
      dispatch(addToBasket(card));
      toast.success('Added to basket!');
    }
  };

  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(card.id));
    toast.success('Removed from basket!');
  };

  return (
    <div className="card">
      <i
        className={`fa-regular fa-heart card-heart ${isInWishlist ? 'in-wishlist' : ''}`}
        onClick={handleWishlistToggle}
      ></i>
      <div className="card-image">
        <img src={card.thumbnail} alt={card.title} />
      </div>
      <div className="card-content">
        <h3 className="title">{card.title.slice(0, 20) + ' ...'}</h3>
        <p className="category"><span>{card.category}</span></p>
        <p className="description">{card.description}</p>
        <div className="price-stock">
          <span className="price">${card.price}</span>
          <span className="stock low">Stock: {card.stock}</span>
        </div>
        <div className="rating">⭐{card.rating}</div>
        <button className="btn" onClick={handleAddToBasket} disabled={isInBasket}>
          {isInBasket ? 'In Basket' : 'Add to Basket'}
        </button>
        {isInBasket && (
          <button className="btn" onClick={handleRemoveFromBasket}>Remove from Basket</button>
        )}
        <button className="btn">View Details</button>
      </div>
    </div>
  );
};

export default Card;
