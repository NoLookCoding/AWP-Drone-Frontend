import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import DetailDrone from './DetailStore';
import "./Store.css";

const productData = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 5.99 },
    { id: 4, name: "Product 4", price: 8.99 },
    { id: 5, name: "Product 5", price: 9.99 },
    { id: 5, name: "Product 5", price: 9.99 },
    { id: 5, name: "Product 5", price: 9.99 },
    { id: 5, name: "Product 5", price: 9.99 }
  ];

const Store = () => {
    const [products, setProducts] = useState(productData);

    return (
        <div>
            <ul className='ProductList'>
                {products.map((product, index) => (
                    <div className = 'product'>
                        <Link to = {`/store/${index}`}>
                        <figure class = "snip1384">
                            <li key = {product.id}>
                                <div className = 'product_img'><img src = {"https://www.droneportal.or.kr/module/upload/file/selectOrignlImageView.do?atchFileId=22000015007"}></img></div>
                                <div className = 'product_title'>{product.name}</div>
                                <div className = 'product_des'>${product.price}</div>
                            </li>
                            <figcaption>
                                <h3>{product.name}</h3>
                            </figcaption>
                        </figure>
                        </Link>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Store;