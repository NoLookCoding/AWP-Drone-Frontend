/**
 * 드론 상품 Data Class
 * @property name: 상품 이름
 * @property price: 상품 가격
 * @property imageLoc: 상품 이미지 저장 경로
 * @property hashTags: 해시 태그 리스트
 */
class Product{
    constructor({name, price, imageLoc, hashTags}){
        this.name = name;
        this.price = price;
        this.imageLoc = imageLoc;
        this.hashTags = hashTags;
    }
}