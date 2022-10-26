import React from 'react';
import { BsCheck, BsXLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './PurchaseModal.scss';

const PurchaseModal = ({
  showModal,
  setShowModal,
  cartNum,
  product,
  selectedSize,
}) => {
  const { thumbnailImage, productName, gender } = product;
  return (
    <div
      className={
        showModal === 'active' ? 'purchaseModal active' : 'purchaseModal'
      }
    >
      <div>
        <div className="purchasedModalTop">
          <p className="headline">
            <BsCheck />
            장바구니 추가 완료
          </p>
          <button
            className="modalCloseBtn"
            onClick={() => setShowModal('closed')}
          >
            <BsXLg />
          </button>
        </div>
        <div className="purchasedModalProductInfo">
          <div className="purchasedProductImg">
            <img src={thumbnailImage} alt={productName} />
          </div>
          <div className="purchasedProductInfo">
            <ul>
              <li>{productName}</li>
              <li>{gender}</li>
              <li>사이즈 {selectedSize}</li>
            </ul>
          </div>
        </div>
        <div className="purchasedBtnsGroup">
          <button>
            <Link to="/cart">
              장바구니<span>({cartNum})</span>
            </Link>
          </button>

          <button>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
