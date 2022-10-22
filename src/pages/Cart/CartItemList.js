import React, { useRef } from 'react';
import CartItem from './CartItem';
import './CartItem.scss';

const CartItemList = props => {
  const { itemList, deleteFetch, setCartTotalPrice, priceToString } = props;
  return (
    <div className="cartItem">
      <div className="cartItemWrap">
        {itemList.map(cartItem => (
          <CartItem
            key={Date.now() + Math.random()}
            cartItem={cartItem}
            deleteFetch={deleteFetch}
            setCartTotalPrice={setCartTotalPrice}
            priceToString={priceToString}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
