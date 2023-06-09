import React, { useState, useRef, useEffect } from "react";
import "./HomeContent.css";
import "./HomeSlide.css";

const HomeContent = (props) => {
  const [scroll,setScroll] = useState(0);

  useEffect(() =>{
    window.addEventListener('scroll',handleScroll);
  
    return() => {
      window.removeEventListener('scroll',handleScroll);
    };
  },[]);
  
  const handleScroll = () =>{
    // mini
    if(window.scrollY >= 230+520+480 +150){
      setScroll(6);
    }else if(window.scrollY >=230+520+480 + 1000){
      setScroll(5);
    }else if(window.scrollY >=230+520+480 + 50){
      setScroll(4);
    }else if(window.scrollY >=230+520+480){
      setScroll(3);
    }else if(window.scrollY >=100+480){
      setScroll(2);
    }else if(window.scrollY >=200){
      setScroll(1);
    }
  }
    
            return(
                <div className="home-content-container">

                  {/* 여행 */}
                  <div className={`home-content-trip-container slide-in ${scroll >= 1 ? 'visible' : 'visible'}`}>
                  <div className="home-content-trip">
                  <div className="home-content-expo-title" style={{color:`#000000`, paddingTop:`20px`}}>내 여행의 즐거움을 2배로<br/>세계로 나가는 <br/>Global Drones-X<br/>체험단 모집</div>
                  <button className="home-slide-content-button" style={{marginTop:`23px`}}> 체험단 신청</button>
                  </div>
                </div>

                  {/* 엑스포 */}
                  <div className={`home-content-expo-container slide-in ${scroll >= 2 ? 'visible' : ''}`}>
                  <div className="home-content-expo">
                  
                  <br/>
                    <span className="home-content-expo-title" style={{paddingTop:`10px`}}>대한민국 첫번째 드론엑스포</span>
                    
                    <div style={{position:`absolute`,bottom:`0`,textAlign:`center`,margin:`auto`}}>
                    <span className="home-content-expo-title" >2030부산세계박람회</span>
                    <br/>
                    <span className="home-content-expo-title" >유치를 위해 NOLOOK이 함께 뛰겠습니다.</span>
                  </div>
                  </div>
                </div>

                  {/* 초소형드론 */}
                  <div className="home-content-mini-container">
                  <div className={`home-content-mini slide-in ${scroll >= 3 ? 'visible' : ''}`}>
                  <div className="home-content-expo-title" style={{color:`#FFFFFF`, paddingTop:`30px`}}>초경량 드론 Smini2 출시</div>
                  </div>
                  <div className={`home-content-mini-content slide-in ${scroll >= 5 ? 'visible' : ''}`}>
                  <div className="home-content-expo-title" style={{color:`#000000`, paddingTop:`30px`}}>고화질 카메라 및 <br/>다양한 편의 기능 탑재<br/><br/>놀랍도록 쉬운 비행 조작<br/><br/>쉬운 영상 제작과 공유<br/><br/>719,000원부터</div>
                  </div>
                </div>
              </div>
            );


};

export default HomeContent;
