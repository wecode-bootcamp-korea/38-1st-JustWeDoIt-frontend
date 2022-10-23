import React, { useState, useEffect } from 'react';
import CartItemList from './CartItemList';
import CartSummary from './CartSummary';
import './Cart.scss';

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState();

  useEffect(() => {
    fetch('http://10.58.52.114:3000/carts/1')
      .then(response => response.json())
      .then(result => setCartItemList(result.data));
  }, []);
  // fetch('/data/CartMockData.json')
  //   .then(response => response.json())
  //   .then(result => setCartItemList(result));
  // }, []);

  const deleteFetch = id => {
    const newCartItemList = cartItemList.filter(
      product => product.stockId !== id
    );
    setCartItemList(newCartItemList);
    // fetch(`http://10.58.52.68:3000/carts/${id}/1`, {
    //   method: 'DELETE',
    // }).then(response => response.json());
  };

  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div>
      <main className="cartWrap">
        <div className="cartView">
          <div className="cartBodyWrap">
            <h4>장바구니</h4>
            <CartItemList
              itemList={cartItemList}
              deleteFetch={deleteFetch}
              setCartTotalPrice={setCartTotalPrice}
              priceToString={priceToString}
            />
          </div>
          <CartSummary
            itemList={cartItemList}
            cartTotalPrice={cartTotalPrice}
            priceToString={priceToString}
          />
        </div>
      </main>
    </div>
  );
};

export default Cart;
