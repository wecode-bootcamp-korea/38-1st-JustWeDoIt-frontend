import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    fetch('data/CartMockData.json')
      .then(result => result.json())
      .then(console.log)
      .then(data => setCartData(data));
  }, []);

  return (
    <div>
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            <CartItem cartData={cartData} />
          </div>
          <CartSummary />
        </div>
      </main>
    </div>
  );
};

export default Cart;
