import React from "react";
import { increment, decrement } from "./StockCountSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import './DetailStore.css';

const DetailDrone = () => {
    const productList = [{ name: '테스트', description: '안녕 안녕 아아아아아아 나나나나나나나ㄷ 다다다다다', hashTags: ['A', 'B', 'C'], price: 1000, imageLoc: 'http://www.newstap.co.kr/news/photo/202111/148872_243874_1655.jpg' },
{ name: '아아앙', description: '헤헤헤헤헤헿', hashTags: ['D', 'E', 'F'], price: 4000, imageLoc: 'http://image.ajunews.com//content/image/2021/08/22/20210822095754888179.jpg' }];

    const { indexOfList } = useParams();
    const product = productList[parseInt(indexOfList)]; // 데이터 리스트에서 path로 가져온 인덱스에 대한 상품 객체 가져오기
    const count = useSelector((state) => state.count);
    const [totalPrice, setTotalPrice] = useState(product.price);
    const dispatch = useDispatch();

    return (
        <div className="entire">
            <div className="scaffold_img">
                <img src={product.imageLoc} />
            </div>
            <div className="scaffold" id="contents">
                <div>
                    <p className="title">{product.name}</p>
                    <span className="hashTags">{product.hashTags.map((h) => (<span>#{h} </span>))}</span><br /><br />
                    <p className="description">{product.description}</p><br />
                    <p className="price">{product.price.toLocaleString('ko-KR')}￦</p><br />
                    <div className="quantity">
                        <div>
                            <button className="btn_background" onClick={() => { if (count > 1) { dispatch(decrement()); setTotalPrice(totalPrice - product.price); } }}>◀</button>
                        </div>
                        <span className="count" >{count}</span>
                        <div>
                            <button className="btn_background" onClick={() => { dispatch(increment()); setTotalPrice(totalPrice + parseInt(product.price)); }}>▶</button>
                        </div>
                    </div>
                    <br />
                    <div className="buy_btn">
                        <button className="buy_btn">Buy &nbsp;{totalPrice.toLocaleString('ko-KR')}￦</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailDrone;
