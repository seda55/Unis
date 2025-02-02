import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToBasket } from '../redux/slices/basketSlice';
import { toggleFavorite } from '../redux/slices/wishlistSlice';

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const isFavorited = useSelector((state) => state.wishlist.items.some((item) => item.id === product.id));

  const handleAddToBasket = () => {
    dispatch(addToBasket(product));
    // Show toast notification for adding to basket (can integrate a toast library here)
    alert(`${product.name} has been added to the basket!`);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(product));
    // Show toast notification for toggling favorite (can integrate a toast library here)
    alert(
      `${product.name} has been ${isFavorited ? 'removed from' : 'added to'} your favorites!`
    );
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <IconButton onClick={handleToggleFavorite} color="primary">
          {isFavorited ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={handleAddToBasket}
        >
          Add to Basket
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;