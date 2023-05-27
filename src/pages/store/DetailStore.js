import React, { useState, useEffect } from "react";
import { increment, decrement } from "./StockCountSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./DetailStore.css";
import "./PurchaseModal.css";

import { addCount, addToCart } from "../cart/cartSlice";
import api from "../../static/api";
import { useRecoilValue } from 'recoil';
import { userIdState } from "../../static/atoms";

const PurchaseModal = ({ isOpen, onClose, selectedDrone }) => {
  const userId = useRecoilValue(userIdState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
  
    try {
      // 재고 검증 API 요청
      const stockValidationResponse = await api.post(`/products/${selectedDrone.productId}/stock-quantity/validate`, {
        inputStockQuantity: selectedDrone.stockQuantity,
      });
      console.log(stockValidationResponse+"??");
  
      if (stockValidationResponse.status === 200) {
        // 재고 검증 성공
        const isStockAvailable = stockValidationResponse.data.isStockAvailable;
  
        if (isStockAvailable) {
          // 재고가 있는 경우, 주문 등록 API 요청
          const orderResponse = await api.post("/orders/direct", {
            productId: selectedDrone.id,
            quantity: selectedDrone.count,
            userId: userId,
            receiver: formData.get("name"),
            address: formData.get("address"),
            phoneNumber: formData.get("phone"),
            requestOption: formData.get("payment"),
            // 기타 필요한 주문 정보
          });
  
          if (orderResponse.status === 200) {
            // 주문 등록 성공
            console.log("주문이 성공적으로 등록되었습니다.");
            // 추가적인 처리 로직 작성
          } else {
            // 주문 등록 실패
            console.log("주문 등록에 실패했습니다.");
            // 추가적인 처리 로직 작성
          }
        } else {
          // 재고가 없는 경우
          console.log("재고가 부족합니다.");
          // 추가적인 처리 로직 작성
        }
      } else {
        // 재고 검증 실패
        console.log("재고 검증에 실패했습니다.");
        // 추가적인 처리 로직 작성
      }
    } catch (error) {
      console.error("주문 등록 중 오류가 발생했습니다:", error);
      // 추가적인 처리 로직 작성
    }
  
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-container-purchase" onClick={onClose}>
          <div className="modal-content-purchase" onClick={(e) => e.stopPropagation()}>
            <div className="left-section-purchase">
              <img src={selectedDrone.imgUrl} alt={selectedDrone.productName} />
              <p className="h2">{selectedDrone.productName}</p>
              <p>가격: {selectedDrone.productPrice}원</p>
              {/* Display other drone information */}
            </div>
            <div className="right-section-purchase">
              <p className="h2">구매 및 배송 정보 입력</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">이름</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="address">주소</label>
                  <input type="text" id="address" name="address" required />
                </div>
                <div>
                  <label htmlFor="phone">전화번호</label>
                  <input type="text" id="phone" name="phone" required />
                </div>
                <div>
                    <div className="payment">
                    <input type='radio' name='payment' value='card' required/> 
                        <div>간편결제</div> &nbsp;
                    <input type='radio' name='payment' value='paybook' />
                        <div>무통장입금</div>
              </div>
                </div>
                <div className="modal-buttons-purchase">
                  <button type="submit"  onClick={onClose}>구매 완료</button>
                  <button type="button" onClick={onClose}>취소</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const DetailDrone = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const count = useSelector((state) => state.stockCount.count);
  const [totalPrice, setTotalPrice] = useState(null);
  const userId = useRecoilValue(userIdState);

  useEffect(() => {
    const fetchDrone = async () => {
      try {
        const response = await api.get(`products/${productId}`);
        const drone = response.data;
        setProduct(drone);
        setTotalPrice(drone.productPrice);
      } catch (error) {
        console.error('드론 정보를 가져오는 중 에러가 발생했습니다:', error);
      }
    };

    fetchDrone();
  }, [productId]);

  const dispatch = useDispatch();
  const handleAddToCart = async (drone, count) => {
    try {
      // 장바구니 등록 API 요청
      const response = await api.post(`/carts`, {
        productId: drone.productId,
        quantity: count,
        // 필요한 경우 추가 데이터 전송
      },{
        headers: {
          "Origin": "http://localhost:3000",
        }
      });
  
      if (response.status === 200) {
        // 장바구니 등록 성공
        console.log('장바구니에 상품이 성공적으로 추가되었습니다.');
        // 추가적인 처리 로직 작성
      } else {
        // 장바구니 등록 실패
        console.log('장바구니 등록에 실패했습니다.');
        // 추가적인 처리 로직 작성
      }
    } catch (error) {
      console.error('장바구니 등록 중 오류가 발생했습니다:', error);
      // 추가적인 처리 로직 작성
    }
  
    alert('장바구니에 상품을 담았습니다.');
  };
  
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);

  const openModal = () => {
    setSelectedDrone(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="entire">
      <div className="scaffold_img">
        <img src={product.imgUrl} alt={product.productName} />
      </div>
      <div className="scaffold" id="contents">
          <p className="title">{product.productName}</p>
          <span className="hashTags">
            {product.hashtags.map((h) => (
              <span>#{h} </span>
            ))}
          </span>
          <br />
          <p className="description">{product.productDescription}</p>
          <br />
          <p className="price">{product.productPrice}원</p>
          <div className="quantity">
            <div>
              <button
                className="btn_background"
                onClick={() => {
                  if (count > 1) {
                    dispatch(decrement());
                    setTotalPrice(totalPrice - product.productPrice);
                  }
                }}
              >
                ◀
              </button>
            </div>
            <span className="count">{count}</span>
            <div>
              <button
                className="btn_background"
                onClick={() => {
                  dispatch(increment());
                  setTotalPrice(totalPrice + parseInt(product.productPrice));
                }}
              >
                ▶
              </button>
            </div>
          </div>
          <br />
          <div className="buy_btn_container">
            <button
              className="buy_btn"
              onClick={() => {
                handleAddToCart(product, count);
              }}
            >
              장바구니 추가
            </button>
            <button className="now_btn" onClick={openModal}>
              바로구매
            </button>
        </div>
      </div>
      {isModalOpen && (
        <PurchaseModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedDrone={selectedDrone}
        />
      )}
    </div>
  );
};

export default DetailDrone;
