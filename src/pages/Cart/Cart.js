import React from 'react';
import '/Users/hyun/Desktop/wecode/38-just-we-do-it/src/pages/Cart/Cart.scss';
import Nav from '../../components/Nav/Nav';

const Cart = () => {
  return (
    <div>
      <Nav />
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBody">
            <h4>장바구니</h4>
            {/* <CartItem /> */}
            <div className="cartItem">
              <figure>
                <a>
                  <img src="https://kream-phinf.pstatic.net/MjAyMjA2MTVfMjYw/MDAxNjU1MjgzNjk2Mzk3.gh8n5rs7p-pWVqzIhNh7yj_KdyjLFBeJr9QbsDumoFEg.KdvPfvgBYmjm7MKKhcbIEQIP6FGeuof_GnmcDUgrvyAg.PNG/a_baa1ccea3726495badba419dfede63f9.png" />
                </a>
              </figure>
            </div>
          </div>
          <div className="cartSummary">
            <div className="cartSummaryBodyWrap">
              <div className="cartSummaryLeftWrap">
                <h4>주문 내역</h4>
                <div>
                  <p>상품 금액</p>
                  <span>원</span>
                </div>
                <div>
                  <p>배송비</p>
                  <span>원</span>
                </div>
                <div>
                  <p>총 결제 금액</p>
                  <span>원</span>
                </div>
              </div>
              <div className="cartSummartRightWrap">
                <span>원</span>
              </div>
            </div>
            <div className="cartSummaryFooter">
              <ul>
                <i>1</i>
                <i>2</i>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
