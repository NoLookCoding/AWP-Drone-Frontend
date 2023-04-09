import React, { useState, useRef, useEffect } from "react";
import "./IntroduceContent.css";
import "./IntroduceSlide.css";


const IntroduceContent = (props) => {
  const [scroll,setScroll] = useState(0);

  useEffect(() =>{
    window.addEventListener('scroll',handleScroll);
  
    return() => {
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);
  
  const handleScroll = () =>{
    // mini
    if(window.scrollY >= 850){
      setScroll(7);
    }else if(window.scrollY >750){
      setScroll(6);
    }else if(window.scrollY >=600){
      setScroll(5);
    }else if(window.scrollY >=500){
      setScroll(4);
    }else if(window.scrollY >=200 + 50){
      setScroll(3);
    }else if(window.scrollY >=150){
      setScroll(2);
    }else if(window.scrollY >=100){
      setScroll(1);
    }
  }
    
            return(
                <div className="introduce-content-container">

                  {/* Title */}
                  <div className={`introduce-content-trip-container slide-in ${scroll >= 1 ? 'visible' : 'visible'}`}>
                  <div className="introduce-content-trip">
                  <div className="introduce-content-expo-title" style={{color:`#000000`, paddingTop:`20px`}}>NOLOOK DRONES 소개</div>
                  </div>
                </div>
                  {/* 1 */}
                  <div className="introduce-content-mini-container" >
                    <div className={`introduce-content-mini slide-in ${scroll >= 2 ? 'visible' : ''}`} style={{backgroundImage:`url(${'http://www.ridemag.co.kr/news/photo/202011/15466_94488_3310.jpg'})`}}>
                      <div className="introduce-content-expo-title" style={{color:`#FFFFFF`, paddingTop:`30px`}}></div>
                    </div>
                    <div className={`introduce-content-mini-content slide-in ${scroll >= 3 ? 'visible' : ''}`}>
                      <div className="introduce-content-expo-title" style={{color:`#000000`, paddingTop:`30px`}}> 고품질 장비와 <br/> 최신 기술을 바탕으로 <br/> 안전하고 정확한 작업 수행</div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="introduce-content-mini-container">
                    <div className={`introduce-content-mini-content slide-in ${scroll >= 5 ? 'visible' : ''}`}>
                      <div className="introduce-content-expo-title" style={{color:`#000000`, paddingTop:`30px`}}> 다양한 산업분야에 <br/> 드론 솔루션을 제공 <br/> 재계약</div>
                    </div>
                    <div className={`introduce-content-mini slide-in ${scroll >= 4 ? 'visible' : ''}`} style={{backgroundImage:`url(${'http://www.ridemag.co.kr/news/photo/202011/15466_94488_3310.jpg'})`}}>
                      <div className="introduce-content-expo-title" style={{color:`#FFFFFF`, paddingTop:`30px`}}></div>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="introduce-content-mini-container">
                  <div className={`introduce-content-mini slide-in ${scroll >= 6 ? 'visible' : ''}`} style={{backgroundImage:`url(${'http://www.ridemag.co.kr/news/photo/202011/15466_94488_3310.jpg'})`}}>
                      <div className="introduce-content-expo-title" style={{color:`#FFFFFF`, paddingTop:`30px`}}></div>
                    </div>
                    <div className={`introduce-content-mini-content slide-in ${scroll >= 7 ? 'visible' : ''}`}>
                      <div className="introduce-content-expo-title" style={{color:`#000000`, paddingTop:`30px`}}>고품질의 장비와 <br/> 최신 기술을 바탕으로 <br/> 안전하고 정확한 작업 수행</div>
                    </div>
                  </div>
                </div>
            );


};

export default IntroduceContent;
