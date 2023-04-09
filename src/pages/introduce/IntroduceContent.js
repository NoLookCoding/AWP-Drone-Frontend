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
    if(window.scrollY >= 1250){
      setScroll(7);
    }else if(window.scrollY >1150){
      setScroll(6);
    }else if(window.scrollY >=750){
      setScroll(5);
    }else if(window.scrollY >=650){
      setScroll(4);
    }else if(window.scrollY >=250){
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
                  <div className={`introduce-content-title-container slide-in ${scroll >= 1 ? 'visible' : 'visible'}`}>
                  <div className="introduce-content-title">
                  <div className="introduce-content-text" style={{ paddingTop:`20px`}}>NOLOOK DRONES 소개</div>
                  </div>
                </div>
                  {/* 1 */}
                  <div className="introduce-content-image-container" >
                    <div className={`introduce-content-image slide-in ${scroll >= 2 ? 'visible' : ''}`} style={{backgroundImage:`url(${'http://www.ridemag.co.kr/news/photo/202011/15466_94488_3310.jpg'})`}}>                    </div>
                    <div className={`introduce-content-image-text slide-in ${scroll >= 3 ? 'visible' : ''}`}>
                      <div className="introduce-content-text"> 
                      2000년에 시작한<br/>
                      NOLOOK DRONES는<br/>
                      고품질 장비와<br/>
                      최신 기술을 바탕으로<br/> 
                      최고의 드론 서비스를 제공합니다.<br/> 
                      </div>
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="introduce-content-image-container">
                    <div className={`introduce-content-image-text slide-in ${scroll >= 5 ? 'visible' : ''}`}>
                      <div className="introduce-content-text"> 
                      공연, 촬영, 방역, 시설관리,<br/>
                      재난, 물류 등<br/> 
                      다양한 산업분야에<br/> 
                      드론 솔루션을 제공합니다.<br/> 
                      국방부와도 협업을 진행하고 있습니다.<br/> 

                      </div>
                    </div>
                    <div className={`introduce-content-image slide-in ${scroll >= 4 ? 'visible' : ''}`} style={{backgroundImage:`url(${'https://img.wowtv.co.kr/wowtv_news/dnrs/20220727/B20220727094157290.jpg'})`}}>
                    </div>
                  </div>
                  {/* 3 */}
                  <div className="introduce-content-image-container">
                  <div className={`introduce-content-image slide-in ${scroll >= 6 ? 'visible' : ''}`} style={{backgroundImage:`url(${'https://www.ilovepc.co.kr/news/photo/201806/19539_35706_255.jpg'})`}}>
                    </div>
                    <div className={`introduce-content-image-text slide-in ${scroll >= 7 ? 'visible' : ''}`}>
                      <div className="introduce-content-text" >
                        고객의 요구에 따라<br/> 
                        맞춤형 서비스를 제공하며,<br/>
                        12가지 분야와 협업하여<br/>
                        최상의 결과를 얻을 수 있도록<br/> 
                        전문가들이 최선을 다하고 있습니다.</div>
                    </div>
                  </div>
                </div>
            );


};

export default IntroduceContent;
