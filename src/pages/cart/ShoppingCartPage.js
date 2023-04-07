import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "./cartSlice";
import "./ShoppingCartPage.css";

const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item));
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h2 className="cart-empty">Your cart is empty</h2>
      ) : (
        <div>
          <h2 className="cart-title">Your cart</h2>
          <div
            className="cart-items-container"
            style={{ display: "flex", overflowX: "auto" }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                className="cart-item-container"
                style={{
                  backgroundColor: "grey",
                  width: "296px",
                  height: "550px",
                  borderRadius: "25px",
                }}
              >
                <div className="cart-item">
                  <h3
                    className="item-name"
                    style={{
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "30px",
                      lineHeight: "36px",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </h3>
                  <img
                    src={item.imageLoc}
                    alt={item.name}
                    className="item-image"
                    style={{
                      width: "218px",
                      height: "205px",
                    }}
                  />
                  <p className="item-price">
                    Price: {item.price * item.quantity}
                  </p>
                  <p className="item-quantity">Quantity: {item.quantity}</p>
                </div>
                <div className="cart-item-btns">
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item)}
                    style={{
                      backgroundColor: "red",
                      color: "black",
                      padding: "12px 24px",
                      fontSize: "18px",
                      marginRight: "10px",
                    }}
                  >
                    Remove
                  </button>
                  <button
                    className="increment-btn"
                    onClick={() => handleIncrement(item)}
                    style={{
                      backgroundColor: "yellow",
                      color: "black",
                      padding: "8px 16px",
                      fontSize: "20px",
                    }}
                  >
                    +
                  </button>
                  <button
                    className="decrement-btn"
                    onClick={() => handleDecrement(item)}
                    style={{
                      backgroundColor: "yellow",
                      color: "black",
                      padding: "8px 16px",
                      fontSize: "20px",
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
