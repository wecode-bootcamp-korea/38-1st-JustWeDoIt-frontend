import React, { useState } from 'react';
import '/Users/hyun/Desktop/wecode/38-just-we-do-it/src/pages/Cart/Cart.scss';
import Nav from '../../components/Nav/Nav';
import { AiOutlineHeart, AiFillQuestionCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import CartItem from './CartItem';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            {<CartItem />}
          </div>
          <div className="cartSummary">
            <div className="cartSummaryDescWrap">
              <h4>주문 내역</h4>
              <div>
                <p>상품 금액</p>
                <i
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <AiFillQuestionCircle />
                </i>
                {isHovering && (
                  <div className="hiddenTooltip">
                    상품 금액은 프로모션 코드 적용 전, 배송비를 제외한 총 주문
                    금액입니다.
                  </div>
                )}

                <span>000000원</span>
              </div>
              <div>
                <p>배송비</p>
                <span>000000원</span>
              </div>
              <div>
                <p>총 결제 금액</p>
                <span>000000원</span>
              </div>
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
