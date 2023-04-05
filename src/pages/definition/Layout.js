import React, { useState, useEffect } from 'react';
import './Layout.css'

const Layout = () => {

  return (
    <>
      <div className="introduce-frame">
        <div className="introduce-content-frame">
          <h3 style={{ fontFamily: "Sansation" }}>Introduce</h3>
          <text>
            대한민국 드론 선도기업인 NoLoock Drones는 공공부문 특화 임무용 드론을 개발/제작하는 기업으로 정부기관 및 국책연구기관과 공동개발/납품을 진행하고 있습니다.
            <br />
            특히 비행체의 최적화 설계, 비행제어 안정화, 센서 활용 기술 등 세계적 수준의 기술을 보유하고 있으며
            산림보존/시설물점검/물품배송/재난환경/군사목적의 정부R&D 과제를 수행함으로써 대한민국을 대표하는 연구 전문기업이 되었습니다.
            <br />
            ‘기술 축적의 시간이 혁신이다’라는 마음가짐으로 4차산업혁명 시대의 미래를 열어나가겠습니다.
            <br />
            감사합니다.
          </text>
        </div>
      </div>
    </>
  );
}

export default Layout;
