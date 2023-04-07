import './Usage.css';
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



  // 이미지와 텍스트 정보를 배열로 관리
  const images = [
    { id: 1, src: 'https://angelswing.io/wp-content/uploads/2022/06/shutterstock_1694609380-1024x683.jpg', alt: 'Image 1', text: 'Image 1 Text' },
    { id: 2, src: 'https://angelswing.io/wp-content/uploads/2022/06/shutterstock_1694609380-1024x683.jpg', alt: 'Image 2', text: 'Image 2 Text' },
    { id: 3, src: 'https://angelswing.io/wp-content/uploads/2022/06/shutterstock_1694609380-1024x683.jpg', alt: 'Image 3', text: 'Image 3 Text' },
    { id: 4, src: 'https://angelswing.io/wp-content/uploads/2022/06/shutterstock_1694609380-1024x683.jpg', alt: 'Image 4', text: 'Image 4 Text' },
    { id: 5, src: 'https://angelswing.io/wp-content/uploads/2022/06/shutterstock_1694609380-1024x683.jpg', alt: 'Image 5', text: 'Image 5 Text' },
    { id: 6, src: 'https://angelswing.io/wp-content/uploads/2022/06/shutterstock_1694609380-1024x683.jpg', alt: 'Image 6', text: 'Image 6 Text' }
  ];

  return (
    <>
      <div className="Usage">
        <div className='container'>
          <div className="Usage-content-frame">
            <h3 style={{ fontFamily: "Sansation" }}>무슨 드론인지</h3>
            {/* 선택된 이미지에 따라 버튼 표시 */}
            {selectedImageId && (
              <div>
                {/* 선택된 이미지에 따라 배열에서 텍스트 찾아 표시 */}
                {images.find(image => image.id === selectedImageId)?.text}
                <br />
              </div>
            )}
            <button id="button" style={{ visibility: isButtonVisible ? 'visible' : 'hidden' }}>button</button>
          </div>
          <div className='Usage-picture-frame'>
            {/* 이미지 배열을 반복하여 이미지 렌더링 */}
            {images.map(image => (
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                style={{ width: 150, height: 150, margin: 20, cursor: 'pointer' }} // 이미지에 스타일 적용
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