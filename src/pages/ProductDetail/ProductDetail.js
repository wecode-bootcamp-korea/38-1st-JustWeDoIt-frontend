import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import ProductDetailBtn from 'components/ProductDetailBtn/ProductDetailBtn';
import AccordianMenu from 'components/ProductAccordianMenu/AccordianMenu/AccordianMenu';
import PurchaseModal from 'components/PurchaseModal/PurchaseModal';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState('closed');
  const [cartNum, setCartNum] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const selected = useRef();

  const { id } = useParams();

  // id에 따른 상품 조회
  useEffect(() => {
    fetch(`http://10.58.52.129:3000/products/details/?id=${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProduct(data[0]);
      });
  }, []);

  // 장바구니 추가 버튼 fetch 추가 구현 예정
  const onPurchase = () => {
    if (selectedSize !== false) {
      validateToken();
      setShowModal('active');
      closePurchaseModal();
      setCartNum(prev => prev + 1);
    }
  };

  const closePurchaseModal = () => {
    setTimeout(() => {
      setShowModal('closed');
    }, 2750);
  };

  // size 클릭
  const SelectSize = e => {
    setSelectedSize(e.target.value);
  };

  // 선택된 사이즈 저장
  //console.log(selectedSize);

  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const validateToken = () => {
    if (
      localStorage.getItem('token') === '' ||
      localStorage.getItem('token') === null
    ) {
      alert('먼저 로그인 해주세요.');
      navigate('/signin');
    } else {
      return;
    }
  };

  return (
    <main className="detailMain">
      {product && (
        <div className="wrapper">
          <div className="productPhoto">
            {product.urlImage.map((img, idx) => (
              <div className="productPhotoCard" key={idx}>
                <img src={img} alt={img} />
              </div>
            ))}
          </div>
          <div className="productInfo">
            <div className="warpper">
              <div className="productTitleBox">
                <h2 className="productName">{product.productName}</h2>
                <p className="gender">{product.gender}</p>
                <span className="productPrice">
                  {priceToString(product.price)}
                  <span>원</span>
                </span>
              </div>
              <div className="productSize">
                <div className="sizeHeader">
                  <span>사이즈 선택</span>
                </div>
                <div className="sizeOptions">
                  {Object.entries(product.sizeStock[0]).map((stock, index) => {
                    const [size, value] = stock;
                    return (
                      <ProductDetailBtn
                        value={value}
                        key={index}
                        size={size}
                        selectedSize={SelectSize}
                        selected={selected}
                      />
                    );
                  })}
                </div>
                <div className="productBtnGroup">
                  <button onClick={onPurchase}>장바구니</button>
                  <button>
                    위시리스트 <BsHeart />
                  </button>
                </div>
                <PurchaseModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  cartNum={cartNum}
                />
                <AccordianMenu />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
export default ProductDetail;
