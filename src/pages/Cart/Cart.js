import React, { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <div>
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            <CartItem />
          </div>
          <CartSummary />
        </div>
      </main>
    </div>
  );
};

export default Cart;
