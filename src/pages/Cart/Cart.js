import React, { useState } from 'react';
import { AiOutlineHeart, AiFillQuestionCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import CartItem from './CartItem';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  const openTooltip = () => {
    setIsHovering(true);
  };

  const closeTooltip = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            <CartItem />
          </div>
          <div className="cartSummary">
            <div className="cartSummaryDescWrap">
              <h4>주문 내역</h4>
              <dl>
                <dt>상품 금액</dt>
                <i onMouseEnter={openTooltip} onMouseLeave={closeTooltip}>
                  <AiFillQuestionCircle />
                </i>
                {isHovering && (
                  <div className="hiddenTooltip">
                    상품 금액은 프로모션 코드 적용 전, 배송비를 제외한 총 주문
                    금액입니다.
                  </div>
                )}

                <dd>000000원</dd>
              </dl>
              <dl>
                <dt>배송비</dt>
                <dd>000000원</dd>
              </dl>
              <dl>
                <dt>총 결제 금액</dt>
                <dd>000000원</dd>
              </dl>
              <div className="cartSummaryButton">
                <button>주문 결제</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
