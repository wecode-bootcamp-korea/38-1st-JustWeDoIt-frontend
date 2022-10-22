import React from 'react';
import { BsCheck, BsXLg } from 'react-icons/bs';
import './PurchaseModal.scss';

const PurchaseModal = ({ showModal, setShowModal, cartNum }) => {
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
            <img
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>
          <div className="purchasedProductInfo">
            <ul>
              <li>나이키 에어맥스 1</li>
              <li>남성신발</li>
              <li>사이즈 250</li>
            </ul>
          </div>
        </div>
        <div className="purchasedBtnsGroup">
          <button>
            장바구니<span>({cartNum})</span>
          </button>
          <button>결제하기</button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
