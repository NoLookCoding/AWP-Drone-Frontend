import './Usage.css';
import React, { useState } from 'react';

const Usage = () => {

  // Manage selected image information as state
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [selectedImageSrc, setSelectedImageSrc] = useState(null);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [selectedImageAlt, setSelectedImageAlt] = useState(null);
  const [selectedImageText, setSelectedImageText] = useState(null);

  // Image click handers
  // Save selected image information to state
  // update button visibility state to true
  const handleImageIdClick = (imageId) => {
    setSelectedImageId(imageId);
    setIsButtonVisible(true); 
  }
  // Change the background image to the selected photo
  const handleImageSrcClick = (imageSrc) => {
    setSelectedImageSrc(
      document.querySelector('.Usage').style.backgroundImage = 'url(' + imageSrc + ')'
    );
  }
  // Change to the description of the selected image
  const handleImageAltClick = (imageAlt) => {
    setSelectedImageAlt(
      document.getElementById("usageHeader").innerText = imageAlt
    );
  }
  // Change to the text of the selected image
  const handleImageTextClick = (imageText) => {
    setSelectedImageText(
      document.getElementById("usageExample").innerText = imageText
    )
  }

  // Depending on the selected image, click the button to go to another drone page
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

  // Manage image and text information as an array
  const images = [
    { id: 1, src: 'https://i.ytimg.com/vi/EEUXteod8mc/maxresdefault.jpg', alt: '공연 분야', text: '드론은 새로운 시각적 효과를 제공하고\n 공연의 무게감을 높여주는 등 다양한 방식으로 활용될 수 있습니다. 드론은 조명, 프로젝션 매핑, 춤사위, 무대 효과, 오브제 등\n다양한 방식으로 공연 분야에서 활용될 수 있습니다.\n이 외에도 새로운 드론 기술이 지속적으로 개발되고 있어,\n더 다양하고 창의적인 활용 방법들이 나올 것으로 예상됩니다.' },
    { id: 2, src: 'https://angelswing.io/wp-content/uploads/2022/06/angelswing_drone_1.png', alt: '촬영 분야', text: '드론은 다양한 카메라를 장착하여 활용될 수 있습니다.\n드론을 활용하면 고공에서의 촬영이 가능하며,\n다양한 시점과 움직임을 활용하여\n독특하고 다이나믹한 영상 효과를 구현할 수 있습니다.' },
    { id: 3, src: 'https://angelswing.io/wp-content/uploads/2022/06/angelswing_drone_2.png', alt: '방역 분야', text: '드론은 환경을 모니터링해\n공기, 수질, 토양등의 환경 데이터를 수집할 수 있습니다.\n또한 드론은 원격 의료 서비스를 제공하는 등의\n방역 분야에서의 활용 가능성이 있습니다.\n다양한 방식으로 드론이 방역 분야에서 활용되어\n더 효과적이고 효율적인 방역 조치가 이루어질 수 있습니다.' },
    { id: 4, src: 'https://angelswing.io/wp-content/uploads/2022/06/angelswing_drone_3.png', alt: '시설관리 분야', text: '드론은 높은 높이나 복잡한 구조물에 접근하기 어려운 곳에서\n쉽게 시설 점검 및 유지보수가 가능합니다.\n또한 무인 측량, 착공 및 준공 검사,시설물의 인벤토리 관리 등\n다양한 용도로 활용될 수 있습니다' },
    { id: 5, src: 'https://www.forest.go.kr/kfsweb/cmm/fms/FileDown.do?atchFileId=CTGRY_00000000375202&fileSn=4', alt: '재난 분야', text: '드론은 재난 발생시 인명 구조 작업에 활용될 수 있습니다.\n또한 이 외에도 재난 감시, 무인 측량 및 매핑, 신속한 피해 평가 등\n다양한 용도로 드론이 재난 분야에서 활용될 수 있습니다.' },
    { id: 6, src: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201607/17/htm_20160717124439268109.jpg', alt: '물류 분야', text: '드론은 상품이나 물품을 빠르고 효율적으로 배송할 수 있습니다.\n또한 드론은 물류 분야에서 빠른, 효율적인 작업을 가능하게 하여\n생산성과 비용 절감을 도모할 수 있는\n많은 잠재력을 가지고 있습니다.' }
  ];

  // Show page
  // Render an image by looping through the image array
  return (
    <>
      <div className="Usage">
        <div className='container'>
          <div className="Usage-content-frame">
            <div className="usage-content-title" style={{ fontFamily: "Sansation" }} id='usageHeader'>드론의 사용 예시</div>
            <div className="usage-content-text" id="usageExample">드론의 활용범위는 매우 다양한데,<br/>드론의 시작이 된 군사용 무기에서부터<br/>건설, 에너지, 물류, 재난구조, 농업, 촬영 등 각종 분야로<br/>활동 가능한 영역이 사실상 무한대로 넓어졌습니다. </div>
          </div>
          <button className="usage-content-button" id="button" style={{ visibility: isButtonVisible ? 'visible' : 'hidden', opacity:`1`}} onClick={ClickDroneBuyButton}>구매하기</button>

          <div className='Usage-picture-frame'>
            {images.map(image => (
             <div className="Usage-picture-content"
             style={{
               backgroundImage: `url(${image.src})`
             }}
                onClick={() => {
                  handleImageIdClick(image.id);
                  handleImageSrcClick(image.src);
                  handleImageAltClick(image.alt);
                  handleImageTextClick(image.text);
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