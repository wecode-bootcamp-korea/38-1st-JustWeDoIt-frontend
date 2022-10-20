import React, { useState, useEffect } from 'react';
import CartItemLst from './CartItemList';
import CartSummary from './CartSummary';
import './Cart.scss';

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  useEffect(() => {
    fetch('data/CartMockData.json')
      .then(result => result.json())
      .then(data => setCartItemList(data));
  }, []);

  return (
    <div>
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            <CartItemLst itemList={cartItemList} />
          </div>
          <CartSummary itemList={cartItemList} />
        </div>
      </main>
    </div>
  );
};

export default Cart;
