import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import './CartItem.scss';

const CartItem = () => {
  return (
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
  );
};

export default CartItem;
