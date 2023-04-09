import React from "react";
import { increment, decrement } from "./StockCountSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailStore.css";
import { drones } from "../../static/drones";
import { addCount, addToCart } from "../cart/cartSlice";

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

    return (
        <div className="entire">
            <div className="scaffold_img">
                <img src={product.imageLoc} />
            </div>
            <div className="scaffold" id="contents">
                <div>
                    <p className="title">{product.name}</p>
                    <span className="hashTags">
                        {product.hashTags.map((h) => (
                            <span>#{h} </span>
                        ))}
                    </span>
                    <br />
                    <br />
                    <p className="description">{product.description}</p>
                    <br />
                    <p className="price">{product.price.toLocaleString("ko-KR")}￦</p>
                    <br />
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
                    <div className="buy_btn">
                        <button
                            className="buy_btn"
                            onClick={() => { handleAddToCart(product, count); alert('장바구니에 상품을 담았습니다.'); }}
                        >
                            Buy &nbsp;{totalPrice.toLocaleString("ko-KR")}￦
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDrone;
