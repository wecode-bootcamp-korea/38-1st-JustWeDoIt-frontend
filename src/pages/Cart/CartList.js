import React, { useRef } from 'react';
import CartItem from './CartItem';
import './CartItem.scss';

const CartList = props => {
  const { itemList, deleteFetch, setCartItemList } = props;
  return (
    <div className="cartItem">
      <div className="cartItemWrap">
        {itemList.map(cartItem => (
          <CartItem
            key={Date.now() + Math.random()}
            cartItem={cartItem}
            deleteFetch={deleteFetch}
            setCartItemList={setCartItemList}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
