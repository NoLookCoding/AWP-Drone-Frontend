import { Link, useNavigate } from "react-router-dom";
import "./Store.css";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./StockCountSlice";
import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import api from "../../static/api";
import {userIdxState} from "../../static/atoms";
import { useRecoilValue } from 'recoil';


const AddProductModal = ({ isOpen, onClose ,fetchDrones }) => {
  const userIdx = useRecoilValue(userIdxState);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
  
          const addProductResponse = await api.post("/products", {
            productName: formData.get("name"),
            productPrice: formData.get("price"),
            productDescription: formData.get("description"),
            stockQuantity: formData.get("count"),
            category: formData.get("category"),
            hashtags: [formData.get("tag")],
            imgUrl: "http://www.xdrone.co.kr/bizdemo50929/component/board/board_7/u_image/25/1329953711_XD-I8D20BOX.png",
            // 기타 필요한 주문 정보
          });
    alert("등록이 성공적으로 등록되었습니다.");
    fetchDrones();
    onClose();

  };

  return (
    <>
      {isOpen && (
        <div className="modal-container-purchase" onClick={onClose}>
          <div className="modal-content-purchase" style={{width:`60%`}} onClick={(e) => e.stopPropagation()}>
            {/* <div className="left-section-purchase">
              <img src={selectedDrone.imgUrl} alt={selectedDrone.productName} />
              <p className="h2">{selectedDrone.productName}</p>
              <p>가격: {selectedDrone.productPrice}원</p>
            </div> */}

            <div className="right-section-purchase">
              <p className="h2">등록 상품 정보 입력</p>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">이름</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="price">가격</label>
                  <input type="number" id="price" name="price" required />
                </div>
                <div>
                  <label htmlFor="description">상품 소개</label>
                  <input type="text" id="description" name="description" required />
                </div>
                <div>
                  <label htmlFor="count">수량</label>
                  <input type="number" id="count" name="count" required />
                </div>
                <div>
                  <label htmlFor="category">카테고리(PERFORMANCE, FILM, DISTRIBUTION, RECONNAISSANCE, ATTACK, MANAGE)</label>
                  <input type="text" id="category" name="category" required />
                </div>
                <div>
                  <label htmlFor="tag">해시태그</label>
                  <input type="text" id="tag" name="tag" required />
                </div>
                <div>
                </div>
                <div className="modal-buttons-purchase">
                  <button type="submit" >상품 등록</button>
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

const Store = () => {
  const count = useSelector((state) => state.stockCount.count);
  const [category, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const userIdx = useRecoilValue(userIdxState);

  const fetchDrones = (params) => {
    console.log("dddddd");

    setIsLoading(true);

    api
      .get('/products', 
      { params })
      .then(response => {
        const dronesData = response.data;
        console.log(JSON.stringify(response.data)+"");

        // 현재 페이지가 1이면 데이터를 대체하고, 그렇지 않으면 기존 데이터에 추가합니다.
        // setData(prevData => (currentPage === 0 ? dronesData : [...prevData, ...dronesData]));
        if(response.data.length != 0){
        setData(dronesData)
        console.log("dd");
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('드론 정보를 가져오는 중 에러가 발생했습니다:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // 첫 번째 페이지 데이터를 가져옵니다.
    fetchDrones({ cursor: 0, size: 10 });
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
        sort: 'CHRONOLOGICAL',
        search: searchTerm,
        filter: category,
        hashtag: '',
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
  }, [currentPage, searchTerm, category]);

  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    navigate(`/store/${id}`);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
    setCurrentPage(0);
    fetchDrones({
      cursor: 0,
      size: 10,
      sort: 'CHRONOLOGICAL',
      search: null,
      filter: category,
      hashtag: null,
    });
  };

  const handleSearch = () => {
    
    setCurrentPage(0);
    fetchDrones({
      cursor: 0,
      size: 10,
      sort: 'CHRONOLOGICAL',
      search: searchTerm,
      filter: null,
      hashtag: null,
    });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };


  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="store-container">
                {isModalOpen && (
        <AddProductModal
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
      <div className="store-search-container">
        <div className="store-search-frame">
          <div className="store-search-input-frame">
            <input
              className="store-search-input"
              placeholder="검색어를 입력하세요"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          <AiOutlineSearch className="store-search-button-icon" onClick={handleSearch} />
        </div>
      </div>
      <div className="store-content-container">
        <div className="store-category">
          <ul className="category-ul">
            <li className="category-item" onClick={() => handleCategoryClick("PERFORMANCE")}>
              공연용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("FILM")}>
              촬영용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("DISTRIBUTION")}>
              물류용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("RECONNAISSANCE")}>
              정찰용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("ATTACK")}>
              공격용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("MANAGE")} >
              관리용 드론
            </li>
            {userIdx == 1 && <li className="category-item" onClick={openModal} >
              상품 등록
            </li>}
          </ul>
        </div>
        <ul className="ProductList" style={{ paddingInlineStart: `0px` }}>
          {data.length === 0 && <div className="no-data">검색 결과가 없습니다.</div>}
          {data.map((product) => (
            <Link to={`/store/${product.productId}`} style={{ textDecoration: `none` }} key={product.productId}>
              <div className="product">
                <figure class="figure_class">
                  <li className="product_li">
                    <div className="product_img" ><img src={product.imgUrl} alt={product.productName} /></div>
                    <div className="product_title">{product.productName}</div>
                    <div className="product_des">{product.price.toLocaleString("ko-KR")}원</div>
                    <div className="product-button-frame" style={{ marginTop: `20px` }}>
                      <button className="product-button" onClick={() => navigateToDetail(product.productId)}>
                        구매하기
                      </button>
                    </div>
                  </li>
                </figure>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Store;
