import React from "react";
import { Link } from "react-router-dom";
import "./Store.css";
import { drones } from "../../static/drones";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "./StockCountSlice";
import { useEffect } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Store = () => {
  const count = useSelector((state) => state.stockCount.count);
  const dispatch = useDispatch();

  useEffect(() => {
    // 상세 페이지 이동할 때마다 상품 수량 state 초기화
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div>
      <ul className="ProductList">
        {drones.map((product) => (
          <div className="product">
            <Link to={`/store/${product.id}`}>

              <figure class="figure_class">
                <li key={product.id}>
                  <div className="product_img"><img src={product.imageLoc}></img></div>
                  <div className="product_title">{product.name}</div>
                  <div className="product_des">{product.price.toLocaleString("ko-KR")}￦</div>
                </li>
                {/* 효과 들어가는 블럭*/}
                <figcaption>
                  <h3>{product.name}</h3>
                  <BsArrowUpRightCircleFill className = "ArrowIcon"/>
                </figcaption>
              </figure>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Store;
