import React, { useState, useRef, useEffect } from "react";
import "./IntroduceSlide.css";

const IntroduceSlide = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    switch(props.index){
        case 0 :
            return(
                <div className="introduce-slide-content-container" >
                  <div>
                  <span className="introduce-slide-content-title" >새로운 미래 창조</span>
                    <br/>
                    <span className="introduce-slide-content-text" >NOLOOK DRONES의 새로운 미래의 창조와 더 나은 세상을 향한 열정 </span>
                  </div>
                </div>
                );
        case 1 :
            return(
                <div className="introduce-slide-content-container" >
                <div>
                <span className="introduce-slide-content-title" >글로벌 DRONE 리더, NOLOOK DRONES</span>
                  <br/>
                  <span className="introduce-slide-content-text" >인재와 기술을 바탕으로 최고의 제품과 서비스 창출</span>
                </div>
              </div>
            );
        default : 
            return(
                <div className="introduce-slide-content-container">
                <div>
                  <h1>2023 초대형 군사드론</h1>
                  <h1>사전판매</h1>
                </div>
              </div>
            );

    }
};

export default IntroduceSlide;
