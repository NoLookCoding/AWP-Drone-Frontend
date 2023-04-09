import React, { useState, useRef, useEffect } from "react";
import "./HomeSlide.css";

const HomeSlide = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    switch(props.index){
        case 0 :
            return(
                <div className="home-slide-content-container" >
                  <div>
                  <span className="home-slide-content-title" >2023 초대형 촬영드론</span>
                    <br/>
                  <span className="home-slide-content-title">사전판매</span>
                    <br/>
                    <br/>
                    <span className="home-slide-content-text" >압도적인 스케일과 색 구현력</span>
                    <br/>
                    <span className="home-slide-content-text" >2억 화소로 최고의 순간을 담으세요</span>

                  </div>
                </div>
                );
        case 1 :
            return(
                <div className="home-slide-content-container">
                <div>
                  <span className="home-slide-content-title" style={{color:`#FFFFFF`}}>최첨단 구조 드론</span>
                  <br/>
                  <span className="home-slide-content-title" style={{color:`#FFFFFF`}}>오직, 이곳에서</span>
                  <br/>
                  <br/>
                    <span className="home-slide-content-text" style={{color:`#FFFFFF`}}>어느 위험한 곳이라도 문제없는 DRONE RX</span>
                    <br/>
                    <span className="home-slide-content-text" style={{color:`#FFFFFF`}}>구호물품 전달까지, 문제없는 수행 능력</span>
                   
                         </div>
              </div>
            );
        case 2 :
            return(
                <div className="home-slide-content-container">
                <div>
                <span className="home-slide-content-title" style={{color:`#FFFFFF`, fontFamily:`Bebas_Regular`}}>NoLook</span>
                <span className="home-slide-content-title" style={{color:`#FFFFFF`, fontFamily:`Bebas_Regular`}}>Drones</span>
                <br/>
                <span className="home-slide-content-title" style={{color:`#FFFFFF`}}>새 출발 </span>
                <br/>
                <span className="home-slide-content-title" style={{color:`#FFFFFF`, fontFamily:`Bebas_Regular`}}>BIG SALE</span>
                <br/>    
                <button className="home-slide-content-button-white"style={{marginTop:`23px`}}> Live 알림 신청하기</button>
                </div>
              </div>
            );
        case 3 :
            return(
                <div className="home-slide-content-container">
                <div>
                <span className="home-slide-content-title">Global Drones</span>
                <br/>
                <span className="home-slide-content-title">내 여행의 동반자</span>
                <br/>
                <br/>
                <span className="home-slide-content-text"  >내 여행을 더 즐겁게 - Trip Drone S3</span>     
                <br/>
                <span className="home-slide-content-text" >최대 98만원 상당 사전구매 혜택으로 만나보세요</span>
                <br/>   
                <button className="home-slide-content-button" style={{marginTop:`23px`}}> 구매 헤택 보기</button>
                </div>
              </div>
            );
            case 4 :
            return(
                <div className="home-slide-content-container">
                <div>
                <span className="home-slide-content-text" style={{color:`#FFFFFF`,fontSize:`23px`}}>4월 12일(수) 오후 7시 방송</span>     
                <br/>
                <span className="home-slide-content-title" style={{color:`#FFFFFF`}}>무소음 쿼드콥터</span>
                <br/>
                <span className="home-slide-content-title" style={{color:`#FFFFFF`}}>최초공개</span>
                <br/>
                <br/>
                <span className="home-slide-content-text"  style={{color:`#FFFFFF`}}>더욱 조용해진 비행</span>     
                <br/>
                <span className="home-slide-content-text" style={{color:`#FFFFFF`}}>NOLOOK DRONE만의 기술을 놓치지 마세요</span>
                  </div>
              </div>
            );
        default : 
            return(
                <div className="home-slide-content-container">
                <div>
                  <h1>2023 초대형 군사드론</h1>
                  <h1>사전판매</h1>
                </div>
              </div>
            );

    }
};

export default HomeSlide;
