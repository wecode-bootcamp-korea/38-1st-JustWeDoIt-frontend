import React, { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { priceToString } from 'utils/utilFunc';
import './CartSummary.scss';

const CartSummary = () => {
  const [isHovered, setIsHovered] = useState(false);

  const openTooltip = () => {
    setIsHovered(true);
  };

  const closeTooltip = () => {
    setIsHovered(false);
  };
  return (
    <div className="cartSummary">
      <div className="cartSummaryDescWrap">
        <h4>주문 내역</h4>
        <dl>
          <dt>상품 금액</dt>
          <i onMouseEnter={openTooltip} onMouseLeave={closeTooltip}>
            <AiFillQuestionCircle />
          </i>
          {isHovered && (
            <div className="hiddenTooltip">
              상품 금액은 프로모션 코드 적용 전, 배송비를 제외한 총 주문
              금액입니다.
            </div>
          )}

          <dd>000000원</dd>
        </dl>
        <dl>
          <dt>배송비</dt>
          <dd>2,500원</dd>
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
  );
};

export default CartSummary;
