import React from 'react';
import CartItem from './CartItem';
import './CartItem.scss';

const CartItemList = props => {
  console.log(props);
  return (
    <div className="cartItem">
      <div className="cartItemWrap">
        {props.itemList.map(cartItem => (
          <CartItem cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default CartItemList;
