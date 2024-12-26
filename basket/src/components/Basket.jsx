import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../redux/basketSlice";

function Basket() {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Sepet</h2>
      {basket.length === 0 ? (
        <p>Sepet boşdur.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {basket.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              {item.name} - {item.price} AZN
              <button
                onClick={() => dispatch(removeFromBasket(index))}
                style={{ marginLeft: "10px" }}
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Basket;
