import React, { useState } from "react";
import "./Order.css";
import { Link, useNavigate } from "react-router-dom";
import { drones } from "../../static/drones";

const OrderModal = ({ isOpen, onClose, selectedDrone }) => {
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
        <div className="modal-container-order" onClick={onClose}>
          <div className="modal-content-order" onClick={(e) => e.stopPropagation()}>
            <div className="left-section-order">
              <img src={selectedDrone.imageLoc} alt={selectedDrone.name}/>
              <p className="h2">{selectedDrone.name} 외 2 건</p>
              <p>총 가격: {selectedDrone.price.toLocaleString("ko-KR")}원</p>
              {/* Display other drone information */}
            </div>
            <div className="right-section-order">
              <p className="h2">구매 및 배송 정보</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">이름</label>
                  <input type="text" id="name" name="name" value={'이승민'} readOnly />
                </div>
                <div>
                  <label htmlFor="address">주소</label>
                  <input type="text" id="address" name="address" value={'경기도 파주시'} readOnly />
                </div>
                <div>
                  <label htmlFor="phone">전화번호</label>
                  <input type="text" id="phone" name="phone" value={'010-0000-0000'} readOnly />
                </div>
                <div>
                  <div className="payment">
                    <input type="radio" name="pay" value="card" disabled checked/>
                    <div>간편결제</div> &nbsp;
                    <input type="radio" name="pay" value="bankbook" disabled/>
                    <div>무통장임금</div>
                  </div>
                </div>
                <div className="modal-buttons-order">
                    {true ?  <button type="submit">
                        배송중
                    </button> : <button type="button" >
                        삭제
                    </button>}
            
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

const OrderProcess = (props) => {
  return (
    <div>
      <strong className="num doubleNum" style={{ color: props.title === "취소" ? "#FF0000" : "" }}>
        {props.num}
      </strong>
      <span className="tit">{props.title}</span>
    </div>
  );
};

const OrderProduct = ({ product, onClick }) => {
  // product 객체가 없거나 imageLoc 속성이 없을 경우 처리
  if (!product || !product.imageLoc) {
    return null; // 또는 기본적인 UI 또는 오류 메시지를 반환할 수 있음
  }

  return (
    <div className="order-product" onClick={() => onClick(product)}>
      <li className="product-li" key={product.id}>
        <div className="product-img" style={{ backgroundImage: `url(${product.imageLoc})` }}></div>
        <div className="order-product-info">
          <div className="order-product-id">주문번호: 7979</div>
          <div className="order-product-title">{product.name} 외 2개</div>
          <div className="order-product-des">총 금액 : {product.price}원</div>
          <div className="order-product-date">2023년 05월 26일</div>
        </div>
      </li>
    </div>
  );
};

const Order = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState(null);
  const openModal = (drone) => {
    setSelectedDrone(drone);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    //전체 페이지를 감싸는 컨테이너
    <div className="order-container">
      {isModalOpen && <OrderModal isOpen={isModalOpen} onClose={closeModal} selectedDrone={selectedDrone} />}
      <nav className="profile-frame-nav">
        <div className="profile-frame">
          <span style={{}}>안녕하세요,</span>
          <span style={{ fontSize: `22px`, fontWeight: `800` }}>이승민 고객님</span>
          <br />
          <div>
            <span>ID: Logan</span>
          </div>

          <div>
            <span>24 / 남</span>
          </div>

          <div>
            <span>전화번호</span>
            <span>010-0000-0000</span>
          </div>

          <div>
            <span>주소: 경기도 파주시</span>
          </div>

          <div>
            <span>이메일</span>
            <span>1109min@gmail.com</span>
          </div>
        </div>
      </nav>
      <div className="order-frame">
        <br />
        <div className="order-title-frame">주문/배송 조회</div>

        <div className="order-process-frame">
          <div className="order-process circle-steps">
            <ul>
              <li>
                <OrderProcess num={"0"} title={"주문완료"} />
              </li>
              <li>
                <OrderProcess num={"1"} title={"배송 준비중"} />
              </li>
              <li>
                <OrderProcess num={"0"} title={"배송중"} />
              </li>
              <li>
                <OrderProcess num={"0"} title={"배송완료"} />
              </li>
              <li>
                <OrderProcess num={"0"} title={"취소"} />
              </li>
            </ul>
          </div>
        </div>

        <div className="order-content-frame">
          <h3 style={{ fontFamily: `SamsungOne_Bold`, fontWeight: `800`, fontSize: `20px`, marginBottom: `14px` }}>
            주문 내역
          </h3>
          <div className="order-content-ordered-list-contents">
            <ul>
              {drones.map((product) => (
                <OrderProduct product={product} onClick={openModal} />
              ))}
            </ul>
          </div>
        </div>

        <div className="order-content-frame">
          <h3 style={{ fontFamily: `SamsungOne_Bold`, fontWeight: `800`, fontSize: `24px`, marginBottom: `14px` }}>
            {" "}
            주문 공통
          </h3>
          <div className="order-content-noti">
            <ul>
              <li>주문하신 상품마다 배송 및 도착 날짜가 서로 다를 수 있습니다.</li>
              <li>일요일 및 공휴일에는 배송이 되지 않습니다.</li>
              <li>
                주문 취소/반품은 '주문 취소’, ‘반품 신청’ 버튼을 클릭하여 직접 신청하거나, 고객센터를 통해 취소/반품
                해주시기 바랍니다.
              </li>
              <li>주문 취소/반품은 처리가 가능한 단계에서만 버튼이 표시됩니다.</li>
            </ul>
          </div>
          <h3 style={{ fontFamily: `SamsungOne_Bold`, fontWeight: `800`, fontSize: `24px`, marginBottom: `14px` }}>
            {" "}
            주문 상태{" "}
          </h3>
          <div className="order-content-noti">
            <ul>
              <li>
                <span>주문 완료</span>
                <p>
                  주문 신청 및 결제가 완료된 상태입니다. 주문정보를 수정/취소하시려면
                  ＇나의 쇼핑 &gt; 주문/배송 조회＇ 메뉴 또는 고객센터로 연락해 주세요.
                </p>
              </li>
              <li>
                <span>배송 준비중</span>
                <p>
                  배송 준비중 단계에서는 상품이 물류센터 內 이동을 시작하였기 때문에 주문정보 수정/취소가 불가합니다.
                  배송상세 버튼을 클릭하시면 상세 진행 현황을 확인 하실수 있습니다.
                </p>
              </li>
              <li>
                <span>배송중</span>
                <p>
                  주문하신 상품 전체(또는 일부)의 배송이 시작된 상태입니다. 배송상세 버튼을 클릭하시면 상세 진행 현황을
                  확인 하실수 있습니다.
                </p>
              </li>
              <li>
                <span>배송 완료</span>
                <p>주문하신 상품이 배송지로 전달 완료된 상태입니다.</p>
              </li>
              <li>
                <span>취소</span>
                <p>
                  주문하신 상품이 취소된 상태입니다. 주문정보의 변경 및 배송조회가 불가능하며, 환불절차가 진행됩니다.
                  고객센터를 통해 문의하시기 바랍니다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
