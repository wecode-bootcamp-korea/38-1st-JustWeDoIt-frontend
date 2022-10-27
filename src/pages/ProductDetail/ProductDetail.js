import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { priceToString } from 'utils/utilFunc';
import ProductDetailBtn from 'components/ProductDetailBtn/ProductDetailBtn';
import AccordianMenu from 'components/ProductAccordianMenu/AccordianMenu/AccordianMenu';
import PurchaseModal from 'components/PurchaseModal/PurchaseModal';
import Carousel from 'components/Carousel/Carousel';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState('closed');
  const [cartNum, setCartNum] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const selected = useRef();
  const { id } = useParams();
  const accessToken = localStorage.getItem('token') ?? '';

  const navigateUnauthUser = () => {
    navigate('/signin');
    return;
  };

  useEffect(() => {
    fetch(`http://10.58.52.169:3000/products/details/?id=${id}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProduct(data[0]);
      });
  }, []);

  const onPurchase = () => {
    if (!accessToken) return navigateUnauthUser();

    fetch(`http://10.58.52.214:3000/carts/1`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        size: selectedSize,
        productId: product.productId,
      }),
    }).then(res => res.json());
    setShowModal('active');
    closePurchaseModal();
    setCartNum(prev => prev + 1);
  };

  const closePurchaseModal = () => {
    setTimeout(() => {
      setShowModal('closed');
    }, 2750);
  };

  return (
    <div>
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
                    {Object.entries(product.sizeStock[0]).map(stock => {
                      const [size, value] = stock;
                      return (
                        <ProductDetailBtn
                          value={value}
                          key={size}
                          size={size}
                          selectedSize={selectedSize}
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
                    product={product}
                    selectedSize={selectedSize}
                  />
                  <AccordianMenu />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Carousel />
    </div>
  );
};
export default ProductDetail;
