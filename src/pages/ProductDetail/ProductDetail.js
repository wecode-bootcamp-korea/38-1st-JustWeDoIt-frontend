import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import './ProductDetail.scss';
import ProductDetaiBtn from 'components/ProductDetailBtn/ProductDetailBtn';
import AccordianMenu from 'components/ProductAccordianMenu/AccordianMenu/AccordianMenu';

const ProductDetail = () => {
  // const [product, setProduct] = useState(null);
  //  const { id } = useParams();
  // console.log(id);

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
                <ProductDetaiBtn />
                <ProductDetaiBtn />
                <ProductDetaiBtn />
                <ProductDetaiBtn />
                <ProductDetaiBtn />
                <ProductDetaiBtn />
                <ProductDetaiBtn />
              </div>
              <div className="productBtnGroup">
                <button>장바구니</button>
                <button>
                  위시리스트 <BsHeart />
                </button>
              </div>
              <div className="productDescription">
                <p>
                  전설은 이렇게 만들어집니다. 나이키 포스 1 LE는 82년의 하드우드
                  아이콘을 올 화이트 또는 올 블랙의 데일리 스타일로 재현합니다.
                  내구성과 쿠셔닝, 착화감으로 아이들의 발을 클래식으로
                  안내하세요.
                </p>
                <span className="productNumber">스타일: DH2925-111</span>
              </div>
              <AccordianMenu />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductDetail;
