import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userIdxState } from "../../static/atoms";
import { useRecoilValue } from "recoil";
// import {
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
// } from "./cartSlice";
import "./ShoppingCartPage.css";
import { Link } from 'react-router-dom';
import api from "../../static/api";

import {BsCart4,BsCartPlus,BsCartDash} from "react-icons/bs";


const EachCart = ({item, fetchCartItems}) => {
  const [count,setCount] = useState(1);

  const handleRemove = (item) => {
    removeCart(item.cartId);
    setCount(0);
    fetchCartItems(); 
  
  };

  const handleIncrement = (item) => {
    changeCount(item.cartId, true);
    setCount(count+1);
    fetchCartItems(); 
  };

  const handleDecrement = (item) => {
    changeCount(item.cartId, false);
    if(count=1){
      handleRemove(item);
    }
    setCount(count-1);
    fetchCartItems(); 
  };

  const changeCount = async (id, add) => {
    try {
      // 카트의 아이디가 있다
      const response = await api.put(`/carts/${id}/quantity`, {
        quantity: 1,
        isAddable: add,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const removeCart = async (id) => {
    try {
      const response = await api.delete(`/carts/${id}`);
      console.log(response+"삭제");
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div key={item.cartId} className="cart-item-container">
                <div className="cart-item">
                  <h3 className="item-name">{item.productName}</h3>
                  <div className="img-container">
                    <img
                      src={item.imgUrl}
                      alt={item.productName}
                      className="item-image"
                    />
                  </div>
                  <div className="shoppingCart-quantity-title" >
                    가격:{" "}
                    {(item.price * item.quantity).toLocaleString("ko-KR")}￦
                  </div>
                  <div className="item-quantity-container">
                  <div className="shoppingCart-quantity-title" >수량: {count}
                    <br/>
                    <div style={{justifyContent:`center`}}>
                    <BsCartPlus style={{width:`30px`, height:`30px`, marginRight:`10px`, cursor:`pointer`}}
                      onClick={() => handleIncrement(item)}
                    />
                    <BsCartDash style={{width:`30px`, height:`30px`, marginLeft:`10px`, cursor:`pointer`}}
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
  );

};
const ShoppingCartPage = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const cartItemsRef = useRef(null);
  const [allData, setAllData] = useState([]);

  const userIdx = useRecoilValue(userIdxState);
  const fetchCartItems = async () => {
    try {
      // 장바구니 목록을 조회하는 API 호출
      const response = await api
    .get(`/carts/${userIdx}`)
    .then(response => {
       const cartsData = response.data;
      console.log(cartsData[0].price+"all");

      // 현재 페이지가 1이면 데이터를 대체하고, 그렇지 않으면 기존 데이터에 추가합니다.
      setAllData(cartsData);
    })
    .catch(error => {
      console.error('장바구니 정보를 가져오는 중 에러가 발생했습니다:', error);
    });
      
      // 조회한 장바구니 목록을 스토어에 dispatch하여 저장
    //  dispatch(setCartItems(cartItems));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {

    fetchCartItems();
  }, [dispatch]);

  // useEffect(() => {
  //   const cartItemsContainer = cartItemsRef.current;

  //   if (cartItemsContainer) {
  //     const handleWheel = (e) => {
  //       e.preventDefault();
  //       cartItemsContainer.scrollLeft += e.deltaY;
  //     };

  //     cartItemsContainer.addEventListener("wheel", handleWheel);

  //     return () => {
  //       cartItemsContainer.removeEventListener("wheel", handleWheel);
  //     };
  //   }
  // }, []);





  return (
    <div className="cart-container">
      {allData.length === 0 ? (
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
            {allData.map((item) => (
              <EachCart item = {item} fetchCartItems = {fetchCartItems} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
