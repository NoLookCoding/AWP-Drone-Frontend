import { Link, useNavigate } from "react-router-dom";
import "./Store.css";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./StockCountSlice";
import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import api from "../../static/api";

const Store = () => {
  const count = useSelector((state) => state.stockCount.count);
  const [category, setCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  
  const fetchDrones = (params) => {
    console.log("dddddd");

    setIsLoading(true);

    api
      .get('/products', { params })
      .then(response => {
        const dronesData = response.data;
        console.log(JSON.stringify(response.data)+"ddddd");

        // 현재 페이지가 1이면 데이터를 대체하고, 그렇지 않으면 기존 데이터에 추가합니다.
        // setData(prevData => (currentPage === 0 ? dronesData : [...prevData, ...dronesData]));
        setData(dronesData)
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
    setData([]);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    setData([]);
    fetchDrones({
      cursor: 0,
      size: 10,
      sort: 'CHRONOLOGICAL',
      search: searchTerm,
      filter: category,
      hashtag: '',
    });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="store-container">
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
            <li className="category-item" onClick={() => handleCategoryClick("산업용 드론")}>
              산업용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("촬영용 드론")}>
              촬영용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("공연용 드론")}>
              공연용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("농업용 드론")}>
              농업용 드론
            </li>
            <li className="category-item" onClick={() => handleCategoryClick("군사용 드론")} style={{ borderBottom: `2px solid #EFEFEF` }}>
              군사용 드론
            </li>
          </ul>
        </div>
        <ul className="ProductList" style={{ paddingInlineStart: `0px` }}>
          {data.map((product) => (
            <Link to={`/store/${product.productId}`} style={{ textDecoration: `none` }} key={product.productId}>
              <div className="product">
                <figure class="figure_class">
                  <li className="product_li">
                    <div className="product_img" ><img src={product.imgURL} alt={product.productName} /></div>
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
