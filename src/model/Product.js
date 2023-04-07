/**
 * 드론 상품 Data Class
 * @property name: 상품 이름
 * @property description: 상품 설명
 * @property price: 상품 가격
 * @property imageLoc: 상품 이미지 저장 경로
 * @property hashTags: 해시 태그 리스트
 */
class Product{
    constructor({name, description, price, imageLoc, hashTags}){
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageLoc = imageLoc;
        this.hashTags = hashTags;
    }
}