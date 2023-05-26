import React, { useState } from "react";
import { increment, decrement } from "./StockCountSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./DetailStore.css";
import "./PurchaseModal.css";

import { drones } from "../../static/drones";
import { addCount, addToCart } from "../cart/cartSlice";

const PurchaseModal = ({ isOpen, onClose, selectedDrone }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form input values using event.target.elements
    // For example: const name = event.target.elements.name.value;
    // Close the modal after handling form submission
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-container-purchase" onClick={onClose}>
          <div className="modal-content-purchase" onClick={(e) => e.stopPropagation()}>
            <div className="left-section-purchase">
              <img src={selectedDrone.imageLoc} alt={selectedDrone.name} />
              <p className="h2">{selectedDrone.name}</p>
              <p>가격: {selectedDrone.price.toLocaleString("ko-KR")}원</p>
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
                    <input type='radio' name='gender' value='female' required/> 
                        <div>간편결제</div> &nbsp;
                    <input type='radio' name='gender' value='male' />
                        <div>무통장임금</div>
              </div>
                </div>
                <div className="modal-buttons-purchase">
                  <button type="submit"  onClick={onClose}>구매 완료</button>
                  <button type="button" onClick={onClose}>
                    취소
                  </button>
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
  const product = drones[parseInt(productId - 1)]; // 데이터 리스트에서 path로 가져온 상품 ID에 대한 상품 객체 가져오기
  const count = useSelector((state) => state.stockCount.count);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const dispatch = useDispatch();
  const handleAddToCart = (drone, count) => {
    dispatch(addCount(count));
    dispatch(addToCart(drone));
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

  return (
    <div className="entire">
      <div className="scaffold_img">
        <img src={product.imageLoc} alt={product.name} />
      </div>
      <div className="scaffold" id="contents">
          <p className="title">{product.name}</p>
          <span className="hashTags">
            {product.hashTags.map((h) => (
              <span>#{h} </span>
            ))}
          </span>
          <br />
          <p className="description">{product.description}</p>
          <br />
          <p className="price">{product.price.toLocaleString("ko-KR")}원</p>
          <div className="quantity">
            <div>
              <button
                className="btn_background"
                onClick={() => {
                  if (count > 1) {
                    dispatch(decrement());
                    setTotalPrice(totalPrice - product.price);
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
                  setTotalPrice(totalPrice + parseInt(product.price));
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
                alert("장바구니에 상품을 담았습니다.");
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
