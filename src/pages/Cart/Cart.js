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

// {
//   "userId": 1,
//   "stockId": 1,
//   "productName": "나이키 에어 포스 1 ‘07 LV8 넥스트 네이처",
//   "price": 140000,
//   "buyingQuantity": 2,
//   "size": 235,
//   "category": "라이프스타일",
//   "special": "친환경 소재",
//   "gender": "남여공용 신발",
//   "thumbnailImage": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
// },
// {
//   "userId": 1,
//   "stockId": 3,
//   "productName": "나이키 에어 포스 1 ‘07 LV8 넥스트 네이처",
//   "price": 200000,
//   "buyingQuantity": 3,
//   "size": 240,
//   "category": "라이프스타일",
//   "special": "친환경 소재",
//   "gender": "남여공용 신발",
//   "thumbnailImage": "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
// },
// {
//   "userId": 1,
//   "stockId": 16,
//   "productName": "나이키 에어 포스 1 미드 ‘07",
//   "price": 93684,
//   "buyingQuantity": 1,
//   "size": 240,
//   "category": "라이프스타일",
//   "special": "친환경 소재",
//   "gender": "남여공용 신발",
//   "thumbnailImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
// }
