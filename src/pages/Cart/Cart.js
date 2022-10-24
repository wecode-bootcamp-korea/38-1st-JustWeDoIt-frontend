import React, { useState, useEffect } from 'react';
import CartItemList from './CartItemList';
import CartSummary from './CartSummary';
import './Cart.scss';

const Cart = () => {
  const [cartItemList, setCartItemList] = useState([]);
  // const [cartTotalPrice, setCartTotalPrice] = useState();

  useEffect(() => {
    fetch('http://10.58.52.246:3000/carts/1')
      .then(response => response.json())
      .then(result => setCartItemList(result.data));
  }, []);
  //   fetch('/data/CartMockData.json')
  //     .then(response => response.json())
  //     .then(result => setCartItemList(result));
  // }, []);
  const totalPrice = cartItemList.reduce(
    (total, current) => total + current.buyingQuantity * current.price,
    0
  );
  const deleteFetch = id => {
    const newCartItemList = cartItemList.filter(
      product => product.stockId !== id
    );
    setCartItemList(newCartItemList);
    fetch(`http://10.58.52.246:3000/carts/${id}/1`, {
      method: 'DELETE',
    }).then(response => response.json());
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
              priceToString={priceToString}
              setCartItemList={setCartItemList}
            />
          </div>
          <CartSummary
            itemList={cartItemList}
            totalPrice={totalPrice}
            priceToString={priceToString}
          />
        </div>
      </main>
    </div>
  );
};

export default Cart;
