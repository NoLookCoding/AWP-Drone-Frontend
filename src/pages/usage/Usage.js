import './Usage.css';
import '../home/HomeSlide.css'
import React, { useState, useEffect } from 'react';


const Usage = () => {

  var usageElement = document.querySelector('.Usage');
  var newImageUrl = '';

  const [selectedImageId, setSelectedImageId] = useState(null); // 선택된 이미지 아이디를 상태로 관리
  const [selectedImageSrc, setSelectedImageSrc] = useState(null); // 선택된 이미지 url를 상태로 관리
  const [isButtonVisible, setIsButtonVisible] = useState(false); // 버튼의 가시성을 상태로 관리

  // 이미지 클릭 핸들러
  const handleImageIdClick = (imageId) => {
    setSelectedImageId(imageId); // 선택된 이미지 아이디를 상태에 저장
    setIsButtonVisible(true); // 버튼 가시성 상태를 true로 업데이트

    // 여기에 이제 imageId에 따라 버튼을 눌렀을 때 store의 다른 드론 페이지로 넘어가는 코드 작성 
  }

  const handleImageSrcClick = (imageSrc) => {
    setSelectedImageSrc(
      document.querySelector('.Usage').style.backgroundImage = 'url(' + imageSrc + ')'
    );
  }

  const ClickDroneBuyButton = () => {
    switch (selectedImageId) {
      case 1:
        window.location.href = '/store/1';
        break;
      case 2:
        window.location.href = '/store/2';
        break;
      case 3:
        window.location.href = '/store/4';
        break;
      case 4:
        window.location.href = '/store/10';
        break;
      case 5:
        window.location.href = '/store/6';
        break;
      case 6:
        window.location.href = '/store/3';
        break;
    }
  }


  // 이미지와 텍스트 정보를 배열로 관리
  const images = [
    { id: 1, src: 'https://i.ytimg.com/vi/EEUXteod8mc/maxresdefault.jpg', alt: '공연', text: '군집 드론을 활용한 쇼인 드론쇼에 활용. 2018 평창올림픽에서활용' },
    { id: 2, src: 'https://angelswing.io/wp-content/uploads/2022/06/angelswing_drone_1.png', alt: '촬영', text: '영화, 예능 및 드라마 촬영, 재난 지역 실시간 촬영 등에서 활용' },
    { id: 3, src: 'https://angelswing.io/wp-content/uploads/2022/06/angelswing_drone_2.png', alt: '방역', text: '드론을 통해 가장 잘 활용되는 분야로 농약 살포 및 소독 방역에 활용' },
    { id: 4, src: 'https://angelswing.io/wp-content/uploads/2022/06/angelswing_drone_3.png', alt: '시설관리', text: '교량 관리, 도로비탈면 정밀조사, 상세 시설물 파악, 난접근/비접근 구조물 정밀점검 등에 활용' },
    { id: 5, src: 'https://www.forest.go.kr/kfsweb/cmm/fms/FileDown.do?atchFileId=CTGRY_00000000375202&fileSn=4', alt: '산불 감시', text: ' 산불감시, 해상 구조, 불법어로, 불법침입 등을 감시하는데에 활용' },
    { id: 6, src: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201607/17/htm_20160717124439268109.jpg', alt: '물류', text: '택배수송, 화물 수송, 군수품 수송, 구호품 수송 등에 활용' }
  ];

  return (
    <>
      <div className="Usage">
        <div className='container'>
          <div className="Usage-content-frame">
            <h3 style={{ fontFamily: "Sansation" }}>드론의 사용 예시</h3>
            {/* 선택된 이미지에 따라 버튼 표시 */}
            {selectedImageId && (
              <div>
                {/* 선택된 이미지에 따라 배열에서 텍스트 찾아 표시 */}
                {images.find(image => image.id === selectedImageId)?.text}
                <br />
              </div>
            )}
            <button className="home-slide-content-button" id="button" style={{ visibility: isButtonVisible ? 'visible' : 'hidden', opacity:`1`}} onClick={ClickDroneBuyButton}>구매하기</button>
          </div>
          <div className='Usage-picture-frame'>
            {/* 이미지 배열을 반복하여 이미지 렌더링 */}
            {images.map(image => (
             <div className="Usage-picture-content"
             key={image.id}
             style={{
               backgroundImage: `url(${image.src})`, // 이미지 URL을 배경으로 지정
             }}
             onClick={() => {
               handleImageIdClick(image.id);
               handleImageSrcClick(image.src);
             }}
           />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Usage;