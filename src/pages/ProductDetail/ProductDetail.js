import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  console.log(id);

  // useEffect(() => {
  //   fetch(`/data/products.json/${id}`)
  //     .then(res => res.json())
  //     .then(data => setProduct(data));
  // }, []);

  // console.log(product);

  return (
    <main className="detailMain">
      <div className="wrapper">
        <div className="productPhoto">
          <div className="productPhotoCard">
            <img
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="productPhotoCard">
            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="productInfo">
          <div className="warpper">
            <div className="productTitleBox">
              <h2 className="productName">나이키 에어포스 1</h2>
              <p className="gender">남성 신발</p>
              <span className="productPrice">
                139,000<span>원</span>
              </span>
            </div>

            <div className="productSize">
              <div className="sizeHeader">
                <span>사이즈 선택</span>
              </div>
              <div className="sizeOptions">
                <div className="sizeOption">
                  <input type="radio" name="size" disabled />
                  <label htmlFor="size">230</label>
                </div>
                <div className="sizeOption">
                  <input type="radio" name="size" />
                  <label htmlFor="size">240</label>
                </div>
                <div className="sizeOption">
                  <input type="radio" name="size" />
                  <label htmlFor="size">250</label>
                </div>
                <div className="sizeOption">
                  <input type="radio" name="size" />
                  <label htmlFor="size">260</label>
                </div>
                <div className="sizeOption">
                  <input type="radio" name="size" />
                  <label htmlFor="size">270</label>
                </div>
                <div className="sizeOption">
                  <input type="radio" name="size" />
                  <label htmlFor="size">280</label>
                </div>
                <div className="sizeOption">
                  <input type="radio" name="size" />
                  <label htmlFor="size">290</label>
                </div>
              </div>
              <div className="btnGroup">
                <button>장바구니</button>
                <button>
                  위시리스트 <BsHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductDetail;
