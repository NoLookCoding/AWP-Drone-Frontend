import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "./cartSlice";
import "./ShoppingCartPage.css";
import { Link } from 'react-router-dom';

import {BsCart4,BsCartPlus,BsCartDash} from "react-icons/bs";

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
          <div className="shoppingCart-empty-frame">
                    <div className="shoppingCart-empty-title" >
                      장바구니가 비어있습니다.<br/>
                      NOLOOK DRONES의 환상적인 기술을<br/>
                      지금 한 번 체험해 보세요!<br/>
                      <BsCart4 style={{wdith:`120px`, height:`120px`}}/>
                      <br/>
                      <Link to="/store">
                      <button className="shoppingCart-content-button">스토어 보기</button>
                      </Link>
                    </div>
            </div>
      ) : (
        <div className="shoppingCart-full-frame">
        <div className="shoppingCart-empty-title" >장바구니</div>
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
                  <div className="shoppingCart-quantity-title" >Quantity: {item.quantity}
                    <br/>
                    <div style={{justifyContent:`center`}}>
                    <BsCartPlus style={{width:`30px`, height:`30px`}}
                      onClick={() => handleIncrement(item)}
                    />
                    <BsCartDash style={{width:`30px`, height:`30px`}}
                      onClick={() => handleDecrement(item)}
                    />
                    </div>
                    </div>
                  </div>
                </div>
                <div className="cart-item-btns">
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item)}
                  >
                    삭제하기
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
