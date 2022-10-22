import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import './ProductDetail.scss';
import ProductDetailBtn from 'components/ProductDetailBtn/ProductDetailBtn';
import AccordianMenu from 'components/ProductAccordianMenu/AccordianMenu/AccordianMenu';
import PurchaseModal from 'components/PurchaseModal/PurchaseModal';

const ProductDetail = () => {
  // const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState('closed');
  const [cartNum, setCartNum] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const selected = useRef();

  const { id } = useParams();

  // id에 따른 상품 조회
  useEffect(() => {
    fetch(`http://10.58.52.234:3000/products/details/?id=${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  // 장바구니 추가 버튼 fetch 추가 구현 예정
  const onPurchase = () => {
    validateToken();
    setShowModal('active');
    closePurchaseModal();
    setCartNum(prev => prev + 1);
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

  // 사이즈 Mock data
  const sizes = [
    { id: 1, size: 230, stock: 3 },
    { id: 2, size: 240, stock: 4 },
    { id: 3, size: 250, stock: 5 },
    { id: 4, size: 260, stock: 0 },
    { id: 5, size: 270, stock: 2 },
    { id: 6, size: 280, stock: 1 },
    { id: 7, size: 290, stock: 7 },
  ];

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
                {priceToString(139000)}
                <span>원</span>
              </span>
            </div>
            <div className="productSize">
              <div className="sizeHeader">
                <span>사이즈 선택</span>
              </div>
              <div className="sizeOptions">
                {sizes.map(size => (
                  <ProductDetailBtn
                    key={size.id}
                    size={size}
                    selectedSize={SelectSize}
                    selected={selected}
                  />
                ))}
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
              <div className="productDescription">
                <p>
                  전설은 이렇게 만들어집니다. 나이키 포스 1 LE는 82년의 하드우드
                  아이콘을 올 화이트 또는 올 블랙의 데일리 스타일로 재현합니다.
                  내구성과 쿠셔닝, 착화감으로 아이들의 발을 클래식으로
                  안내하세요.
                </p>
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
