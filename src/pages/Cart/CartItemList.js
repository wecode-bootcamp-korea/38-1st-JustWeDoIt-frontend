import React, { useRef } from 'react';
import CartItem from './CartItem';
import './CartItem.scss';

const CartItemList = props => {
  const { itemList, deleteFetch, priceToString, setCartItemList } = props;
  return (
    <div className="cartItem">
      <div className="cartItemWrap">
        {itemList.map(cartItem => (
          <CartItem
            key={Date.now() + Math.random()}
            cartItem={cartItem}
            deleteFetch={deleteFetch}
            priceToString={priceToString}
            setCartItemList={setCartItemList}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
