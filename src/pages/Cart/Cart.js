import React, { useState, useEffect } from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';
import Carousel from 'components/Carousel/Carousel';
import './Cart.scss';
import API from '../../config';

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  // const [cartTotalPrice, setCartTotalPrice] = useState();

  useEffect(() => {
    fetch(API.cart, {
      mehtod: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => setCartItemList(result.data));
  }, []);

  const totalPrice = cartItemList.reduce(
    (total, current) => total + current.buyingQuantity * current.price,
    0
  );

  const deleteFetch = id => {
    const newCartItemList = cartItemList.filter(
      product => product.stockId !== id
    );
    setCartItemList(newCartItemList);
    fetch(`${API.cart}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('token'),
      },
    }).then(response => response.json());
  };

  return (
    <div>
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            <CartList
              itemList={cartItemList}
              deleteFetch={deleteFetch}
              setCartItemList={setCartItemList}
            />
          </div>
          <CartSummary itemList={cartItemList} totalPrice={totalPrice} />
        </div>
      </main>
      <Carousel />
    </div>
  );
};

export default Cart;
