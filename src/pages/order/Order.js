import React, { useState, useEffect } from "react";
import "./Order.css";
import { useRecoilValue } from 'recoil';
import { userIdState } from '../../static/atoms';
import api from "../../static/api";


const OrderModal = ({ isOpen, onClose, order }) => {
  const userId = useRecoilValue(userIdState);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    // You can access the form input values using event.target.elements
    // For example: const name = event.target.elements.name.value;
    // Close the modal after handling form submission
    onClose();
  };
  // 제품 개수에 따라 표시할 내용 설정
  let productTitle = order.products[0].productName;
  if (order.products.length > 1) {
    productTitle += ` 외 ${order.products.length - 1}건`;
  }
  const totalPrice = order.products.reduce((total, item) => total + item.price, 0);

  const handleCancel = () => {
    // DELETE 요청 보내기
    api.delete(`/orders/${order.orderId}`)
      .then(response => {
        console.log('Order canceled successfully:', response.data);
        // 취소 성공 시 추가적인 작업을 수행하거나 상태를 업데이트할 수 있습니다.
      })
      .catch(error => {
        console.error('Error canceling order:', error);
        // 취소 실패 시 에러 처리를 수행할 수 있습니다.
      });
  
    // 모달 닫기
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-container-order" onClick={onClose}>
          <div className="modal-content-order" onClick={(e) => e.stopPropagation()}>
            <div className="left-section-order">
              {/* <img src={order.products[0].imageLoc} alt={order.products[0].name}/> */}
              <p className="h2">{productTitle}</p>
              <p>총 가격: {totalPrice}원</p>
              {/* Display other drone information */}
            </div>
            <div className="right-section-order">
              <p className="h2">구매 및 배송 정보</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">주문인</label>
                  <input type="text" id="name" name="name" value={order.receiver} readOnly />
                </div>
                <div>
                  <label htmlFor="address">주소</label>
                  <input type="text" id="address" name="address" value={order.address} readOnly />
                </div>
                <div>
                  <div className="payment">
                  <input type="radio" name="pay" value="card" disabled checked={order.requestOption === 'card'} />
                  <div>간편결제</div> &nbsp;
                  <input type="radio" name="pay" value="bankbook" disabled checked={order.requestOption === 'paybook'}/>
                  <div>무통장임금</div>
                  </div>
                </div>
                <div className="modal-buttons-order">
                    {userId===-1 ?  <button type="submit">
                        {order.orderState}
                    </button> : <button type="button" >
                        삭제
                    </button>}
            
                  <button type="button" onClick={handleCancel}>
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

const OrderProcess = ({ title, data, type }) => {
  const orderCount = data?.filter(order => order.orderState === type).length;

  return (
    <div>
      <strong className="num doubleNum" style={{ color: title === "취소" ? "#FF0000" : "" }}>
        {orderCount}
      </strong>
      <span className="tit">{title}</span>
    </div>
  );
};

const OrderProduct = ({ product, onClick }) => {
  if (!product || !product.imageLoc) {
    return null;
  }

  const totalPrice = product.products.reduce((total, item) => total + item.price, 0);

  // 제품 개수에 따라 표시할 내용 설정
  let productTitle = product.products[0].productName;
  if (product.products.length > 1) {
    productTitle += ` 외 ${product.products.length - 1}건`;
  }

  return (
    <div className="order-product" onClick={() => onClick(product)}>
      <li className="product-li" key={product.orderId}>
        <div className="product-img" style={{ backgroundImage: `url(${product.products[0].imageLoc})` }}></div>
        <div className="order-product-info">
          <div className="order-product-id">주문번호: {product.orderUUID}</div>
          <div className="order-product-title">{productTitle}</div>
          <div className="order-product-des">총 금액 : {totalPrice}원</div>
          <div className="order-product-date">{product.createdDate}</div>
        </div>
      </li>
    </div>
  );
};

const Order = () => {
  console.log("call Order");

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});
  const userId = useRecoilValue(userIdState);

  const openModal = (orderId) => {
    api.get(`/orders/${userId}/${orderId}`)
      .then(response => {
        setSelectedOrder(response.data);
        setModalOpen(true);
      })
      .catch(error => {
        console.error('Error retrieving order details:', error);
      });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [state, setState] = useState(false);

  const [userInfo, setUserInfo] = useState({});



  const fetchDrones = (params) => {
    console.log("call fetch drones");

    setIsLoading(true);

    api
      .get(`/orders/${userId}`, { params })
      .then(response => {
        const dronesData = response.data;
        console.log(dronesData);

        // 현재 페이지가 1이면 데이터를 대체하고, 그렇지 않으면 기존 데이터에 추가합니다.
        setData(prevData => (currentPage === 1 ? dronesData : [...prevData, ...dronesData]));
        setIsLoading(false);
      })
      .catch(error => {
        console.error('드론 정보를 가져오는 중 에러가 발생했습니다:', error);
        setIsLoading(false);
      });
  };

  const fetchUserInfo = () => {
    console.log("Call user info");

    api
      .get(`/users/user-profile`)
      .then(response => {  
        setUserInfo(response.data);
      })
      .catch(error => {
        console.error('회원 정보를 가져오는 중 에러가 발생했습니다:', error);
      });
  };

  const fetchAllDrones = (params) => {
    console.log("Call all");

    api
      .get(`/orders/${userId}`, { params })
      .then(response => {
        const dronesData = response.data;
        console.log(dronesData+"all");

        // 현재 페이지가 1이면 데이터를 대체하고, 그렇지 않으면 기존 데이터에 추가합니다.
        setAllData(dronesData);
      })
      .catch(error => {
        console.error('드론 정보를 가져오는 중 에러가 발생했습니다:', error);
      });
  };

  useEffect(() => {
    // 첫 번째 페이지 데이터를 가져옵니다.
    fetchDrones({ cursor: 1, size: 10 })
    fetchAllDrones({ cursor: 1, size: 100 })
    fetchUserInfo()
  }, []);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const isAtBottom = scrollTop + windowHeight === documentHeight;

    if (isAtBottom && !isLoading) {
      // 다음 페이지를 가져오기 위해 요청 매개변수 설정
      const params = {
        cursor: currentPage + 1,
        size: 10,
        filter: state,
      };

      fetchDrones(params);
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, state]);


  return (
    //전체 페이지를 감싸는 컨테이너
    <div className="order-container">
      {isModalOpen && <OrderModal isOpen={isModalOpen} onClose={closeModal} selectedOrder={selectedOrder} />}
      <div className="profile-frame-nav-container">
      <nav className="profile-frame-nav">
        <div className="profile-frame">
          <span style={{fontSize: `18px`}}>안녕하세요,</span>
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
            <span>이메일: 1109min@gmail.com</span>
            {/* <span>1109min@gmail.com</span> */}
          </div>
        </div>
      </nav>
      </div>
      <div className="order-frame">
        <br />
        <div className="order-title-frame">주문/배송 조회</div>

        <div className="order-process-frame">
          <div className="order-process circle-steps">
            <ul>
              <li>
                <OrderProcess title={"주문완료"} data={allData} type={"PAID"} onClick={()=>setState(true)}/>
              </li>
              <li>
                <OrderProcess title={"배송 준비중"} data={allData} type={"READY"} onClick={()=>setState(true)}/>
              </li>
              <li>
                <OrderProcess title={"배송중"} data={allData} type={"DELIVERING"} onClick={()=>setState(true)}/>
              </li>
              <li>
                <OrderProcess title={"배송완료"} data={allData} type={"RECEIVED"} onClick={()=>setState(false)}/>
              </li>
              <li>
                <OrderProcess title={"취소"} data={allData} type={"CANCEL"} onClick={()=>setState(false)}/>
              </li>
            </ul>
          </div>
        </div>

        <div className="order-content-frame">
          <h3 style={{ fontFamily: `SamsungOne_Bold`, fontWeight: `800`, fontSize: `24px`, marginBottom: `14px` }}>
            주문 내역
          </h3>
          <div className="order-content-ordered-list-contents">
            {data && data.length > 0 ? (
              <ul>
                {data.map((product) => (
                  <OrderProduct product={product} onClick={() => openModal(product.orderId)} />
                ))}
              </ul>
            ) : (
              <div style={{padding:`5%`, marginBottom:`4%`, fontFamily:`SamsungOne_Bold`, fontSize:`17px`, fontWeight:`700`}}> 주문/배송 내역이 없습니다.</div>
            )}
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
