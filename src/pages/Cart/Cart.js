import React, { useState } from 'react';
import '/Users/hyun/Desktop/wecode/38-just-we-do-it/src/pages/Cart/Cart.scss';
import Nav from '../../components/Nav/Nav';
import { AiOutlineHeart, AiFillQuestionCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const Cart = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div>
      <Nav />
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            {/* <CartItem /> */}
            <div className="cartItem">
              <div className="cartItemWrap">
                <div className="cartItemImage">
                  <figure>
                    <a>
                      <img src="https://kream-phinf.pstatic.net/MjAyMjA2MTVfMjYw/MDAxNjU1MjgzNjk2Mzk3.gh8n5rs7p-pWVqzIhNh7yj_KdyjLFBeJr9QbsDumoFEg.KdvPfvgBYmjm7MKKhcbIEQIP6FGeuof_GnmcDUgrvyAg.PNG/a_baa1ccea3726495badba419dfede63f9.png" />
                    </a>
                  </figure>
                </div>
                <div className="cartItemDesc">
                  <p>나이키 에어 포스1 '07 LV8 넥스트 네이처</p>
                  <div>남성 신발</div>
                  <div>색상-화이트/블루/블랙/레드/옐로우</div>
                  <div className="itemHandler">
                    <div>사이즈 : </div>
                    <div>수량 : </div>
                  </div>
                  <div>
                    <ul>
                      <AiOutlineHeart />
                      <BsTrash />
                    </ul>
                  </div>
                </div>
                <div className="cartItemRightWrap">
                  <span>000000원</span>
                </div>
              </div>
              <div className="cartItemFooter">
                <p>무료배송</p>
                <p>도착 예정일 : 10월 28일(금) - 10월 31일(월)</p>
              </div>
            </div>
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
