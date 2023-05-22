import { Link, useNavigate } from "react-router-dom";
import "./Store.css";
import { drones } from "../../static/drones";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./StockCountSlice";
import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import {AiOutlineSearch } from "react-icons/ai"

const Store = () => {
  const count = useSelector((state) => state.stockCount.count);
  const [category, setCategory] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // 상세 페이지 이동할 때마다 상품 수량 state 초기화
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    navigate(`/store/${id}`);
  };

  const handleCategoryClick = (category) => {
    setCategory(category);
  };

  //const filteredProducts = category ? drones.filter((product) => product.category === category) : drones;
  const filteredProducts = drones;




  return (
    <div className="store-container">
      <div className="store-search-container">
        <div className ="store-search-frame">
          <div className="store-search-input-frame">
            <input className="store-search-input" placeholder="검색어를 입력하세요"></input> 
          </div>
          <AiOutlineSearch className="store-search-button-icon"/>
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
          <li className="category-item" onClick={() => handleCategoryClick("군사용 드론")} style={{borderBottom: `2px solid #EFEFEF`}}>
              군사용 드론
          </li>
        </ul>
        </div>
      <ul className="ProductList">
        {filteredProducts.map((product) => (
          <div className="product">

              <figure class="figure_class">
                <li className="product_li" key={product.id}>
                  <div className="product_img" ><img src={product.imageLoc}></img></div>
                  <div className="product_title">{product.name}</div>
                  <div className="product_des">{product.price.toLocaleString("ko-KR")}원</div>
                  <div className="product-button-frame"style={{marginTop:`20px`}}> 
                    <button className="product-button" onClick={() => navigateToDetail(product.id)}>
                    구매하기
                    </button>
                  </div>
                </li>
                {/* 효과 들어가는 블럭*/}
                {/* <figcaption style={{textAlign:`center`}}>
                  <h3 style={{fontFamily:`SamsungOne_Bold`, textAlign:`center`}}>{product.name}</h3>
                  <BsArrowUpRightCircleFill className = "ArrowIcon" style={{width:`50px`, height:`50px`}}/>
                </figcaption> */}
              </figure>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Store;
