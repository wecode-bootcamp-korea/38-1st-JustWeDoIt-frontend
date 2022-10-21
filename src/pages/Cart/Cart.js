import React, { useState, useEffect } from 'react';
import CartItemList from './CartItemList';
import CartSummary from './CartSummary';
import './Cart.scss';

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  useEffect(() => {
    fetch('http://10.58.52.68:3000/carts/1')
      .then(response => response.json())
      .then(result => setCartItemList(result.data));
  }, []);

  const deleteFetch = id => {
    const newCartItemList = cartItemList.filter(
      product => product.stockId !== id
    );
    setCartItemList(newCartItemList);
    fetch(`http://10.58.52.68:3000/carts/${id}/1`, {
      method: 'DELETE',
    }).then(response => response.json());
  };

  return (
    <div>
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            <CartItemList itemList={cartItemList} deleteFetch={deleteFetch} />
          </div>
          <CartSummary itemList={cartItemList} />
        </div>
      </main>
    </div>
  );
};

export default Cart;
