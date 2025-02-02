import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket } from '../../redux/features/BasketSlice';
import { FaRegHeart } from "react-icons/fa";


export const Cards = ({products}) => {
    const {basket} = useSelector((state)=> state.basket)
    const dispatch = useDispatch()
  return (
    <div>
     {products.map(
        (products) =>(
            <Card style={{ width: '18rem' }} key={products._id}>
            <Card.Img variant="top" src={products.img} />
            <FaRegHeart style={{position:"absolute" , top:"8px" , left:"8px"}} />

            <Card.Body style={{textAlign:"center"}}>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text>
                {products.category}
              </Card.Text>
              <Button variant="primary" onClick={()=>dispatch(addBasket(products._id))}>shop</Button>
            </Card.Body>
          </Card>
      )
     )}
    </div>
  )
}

export default Cards;