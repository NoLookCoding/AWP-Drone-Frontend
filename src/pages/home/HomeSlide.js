import React, { useState, useRef, useEffect } from "react";
import "./HomeSlide.css";

// function MouseOverButton(e){
//     e.currentTarget.style.background = COLOR.black;
//     e.currentTarget.style.color = COLOR.white;

// }
// function MouseOutButton(e){
//     e.currentTarget.style.background = COLOR.white;
//     e.currentTarget.style.color = COLOR.black;
// }


const HomeSlide = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = (e) => {
        console.log("왜 안돼");
        e.currentTarget.style.background = "#000000";
        e.currentTarget.style.color = "#FFFFFF";
      };
      
      const handleMouseOut = (e) => {
        e.currentTarget.style.background = "#FFFFFF";
        e.currentTarget.style.color = "#000000";
      };
    

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
                    <span className="home-slide-content-text" style={{color:`#FFFFFF`}}>어느 위험한 곳이라도 문제없는 DRONE RX</span>           
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
                <button className="home-slide-content-button-white"> Live 알림 신청하기</button>
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
