import React from "react";
import { useLocation } from "react-router-dom";
import { increment, decrement } from "./StockCountSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import './DetailStore.css';
// const location = useLocation();
// const product = location.state.product; // 상세 데이터

// const scaffoldStyle = {
// float: 'left'
// };

const titleStyle = {

}
const product = { name: '테스트', hashTags: ['A', 'B', 'C'], price: 1000, imageLoc: 'http://www.newstap.co.kr/news/photo/202111/148872_243874_1655.jpg' };
const DetailDrone = () => {
    const count = useSelector((state) => state.count);
    const [totalPrice, setTotalPrice] = useState(product.price);
    const dispatch = useDispatch();
    return (
        <div className="entire">
            <div className="scaffold_img">
                <img width="auto" height="200px" src={product.imageLoc} />
            </div>
            <div className="scaffold" id="contents">
                <div>
                    <p className="title">{product.name}</p>
                    <p className="hashTags">{product.hashTags.map((h) => (<span>#{h} </span>))}</p> <br/>
                    <p className="price">{product.price.toLocaleString('ko-KR')}￦</p>
                </div>

                <div className="quantity">
                    <div>
                        <button className="btn_background" onClick={() => { if (count > 1) { dispatch(decrement()); setTotalPrice(totalPrice - product.price); } }}>◀</button>
                    </div>
                    <span className="count" >{count}</span>
                    <div>
                        <button className="btn_background" onClick={() => { dispatch(increment()); setTotalPrice(totalPrice + parseInt(product.price)); }}>▶</button>
                    </div>
                </div>
                <br/>
                <button className="buy_btn">Buy {totalPrice.toLocaleString('ko-KR')}￦</button>
            </div>
        </div>
    );
}

export default DetailDrone;
