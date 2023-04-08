import React, { useEffect, useRef } from "react";
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
  const cartItemsRef = useRef(null);

  useEffect(() => {
    const cartItemsContainer = cartItemsRef.current;

    if (cartItemsContainer) {
      const handleWheel = (e) => {
        e.preventDefault();
        cartItemsContainer.scrollLeft += e.deltaY;
      };

      cartItemsContainer.addEventListener("wheel", handleWheel);

      return () => {
        cartItemsContainer.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

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
        <h1 className="cart-empty">Your cart is empty</h1>
      ) : (
        <div>
          <h1 className="cart-title">CART</h1>
          <div className="cart-items-container" ref={cartItemsRef}>
            {cart.map((item) => (
              <div key={item.id} className="cart-item-container">
                <div className="cart-item">
                  <h3 className="item-name">{item.name}</h3>
                  <div className="img-container">
                    <img
                      src={item.imageLoc}
                      alt={item.name}
                      className="item-image"
                    />
                  </div>
                  <h4 className="item-price">
                    Price:{" "}
                    {(item.price * item.quantity).toLocaleString("ko-KR")}￦
                  </h4>
                  <div className="item-quantity-container">
                    <h4 className="item-quantity">Quantity: {item.quantity}</h4>
                    <button
                      className="increment-btn"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                    <button
                      className="decrement-btn"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="cart-item-btns">
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
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
