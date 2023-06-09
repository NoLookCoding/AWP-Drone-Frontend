/**
 * 드론 상품 Data Class
 * @property id: 상품 ID
 * @property name: 상품 이름
 * @property description: 상품 설명
 * @property price: 상품 가격
 * @property category: 드론 종류(카테고리) -> {PERF: 공연용, FILM: 촬영용, DISTRIB: 물류용, RECON: 정찰용, ATTACK: 공격용, MANAGE: (시설)관리용}
 * @property imageLoc: 상품 이미지 저장 경로
 * @property hashTags: 해시 태그 리스트
 */

export const drones = [
    { id: 1, name: "공연드론 D2", description: "가벼움, 밝기 강함, 안전함", price: 2300000, category: "PERF", imageLoc: "https://www.droneportal.or.kr/module/upload/file/selectOrignlImageView.do?atchFileId=21000010818&fileSn=0", hashTags: ['공연', '기업홍보', '지자체 홍보', '이벤트'] },
    { id: 2, name: "헥사-120", description: "이륙 준비 3분 이내, GPS, 센서 통합 모듈 탑재", price: 1800000, category: "FILM", imageLoc: "https://www.droneportal.or.kr/module/upload/file/selectOrignlImageView.do?atchFileId=22000015055&fileSn=0", hashTags: ["장거리촬영", "수직이착륙", "왕멋짐"] },
    { id: 3, name: "엑스드론", description: "튼튼함, 택배 잘 옮김, 빵 배달 잘함", price: 1300000, category: "DISTRIB", imageLoc: "http://www.xdrone.co.kr/bizdemo50929/component/board/board_7/u_image/25/1329953711_XD-I8D20BOX.png", hashTags: ["빵셔틀", "셔틀", "드론은50원"] },
    { id: 4, name: "A-텐", description: "농약 살포, 최대 10L 탑재", price: 1150000, category: "QUAR", imageLoc: "https://www.droneportal.or.kr/module/upload/file/selectOrignlImageView.do?atchFileId=22000015009&fileSn=0", hashTags: ["농약살포", "우리농산물화이팅"] },
    { id: 5, name: "ADT-2023", description: "튼튼함, 내구도 최강, 우수한 촬영 카메라 탑재", price: 1234500, category: "RECON", imageLoc: "https://www.droneportal.or.kr/module/upload/file/selectOrignlImageView.do?atchFileId=21000010820&fileSn=0", hashTags: ["내구도좋음", "많이사주셈"] },
    { id: 6, name: "Xenfi", description: "깔끔한 스타일, 통신 구간 암호화 적용, 실시간 동영상, 자동 이착륙, 자동비행", price: 1416214, category: "MANAGE", imageLoc: "https://www.droneportal.or.kr/module/upload/file/selectOrignlImageView.do?atchFileId=20000010234&fileSn=0", hashTags: ["팔방미인", "다재다능", "이거꼭해라"] },
    { id: 7, name: "NOLOOK Drone", description: "다재다능, 귀요미, 일도잘함", price: 50, category: "RECON", imageLoc: "https://t1.daumcdn.net/cfile/tistory/195C563A4E7F129720", hashTags: ["50원", "Zerg", "귀욤귀"] },
    { id: 8, name: "NOLOOK Drongon", description: "휠체어, 프로토스, 개답답, 지능노답", price: 175, category: "ATTACK", imageLoc: "https://img.danawa.com/images/descFiles/5/666/4665665_buHlXkjYR7_1616648835739.png", hashTags: ["Receiving", "Awaiting instructions", "Transmit"] },
    { id: 9, name: "DJ2", description: "소형, 견고함, 튼튼함, 카메라 2개 탑재", price: 850000, category: "FILM", imageLoc: "https://stormsend1.djicdn.com/stormsend/uploads/a9669f9875e59818f5a2c5987e57c457.png", hashTags: ["귀욤귀", "화질굿", "디자인굿"] },
  
    { id: 10, name: "Drone Rx", description: "중형, 튼트함, GPS, 실시간 구조요청", price: 5400000, category: "RECON", imageLoc: "https://cdn.pixabay.com/photo/2017/09/07/08/57/drone-2724257_1280.jpg", hashTags: ["재난구조", "적외선센서", "프리미엄"] },
    { id: 11, name: "Trip Drone S3", description: "소형, 장시간 배터리, 초고화질", price: 11000, category: "FILM", imageLoc: "https://www1.djicdn.com/cms_uploads/ckeditor/pictures/1926/content_e444aceff4fe1829b1f057fe1cb85e7d.jpg", hashTags: ["여행", "트렌드", "신제품"] },
    { id: 12, name: "Smini2", description: "소형, 고화질 카메라, 비행 조작 저난도", price: 500000, category: "FILM", imageLoc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuGvg2Hp0zeS4ERDWqevBdEJfm02yQsjmCw&usqp=CAU", hashTags: ["특이한", "지구본?", "귀욥"] },


];