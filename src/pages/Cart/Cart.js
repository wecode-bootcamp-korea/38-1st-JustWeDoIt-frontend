import React, { useState, useEffect } from 'react';
import CartList from './CartList';
import CartSummary from './CartSummary';
import Carousel from 'components/Carousel/Carousel';
import './Cart.scss';

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  // const [cartTotalPrice, setCartTotalPrice] = useState();

  useEffect(() => {
    fetch('http://10.58.52.237:3000/carts', {
      headers: {
        Authorization: localStorage.getItem('token'),
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
    fetch(`http://10.58.52.237:3000/carts/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
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
