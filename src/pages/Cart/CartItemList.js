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
      <div className="cartItemFooter">
        <p>무료배송</p>
        <p>도착 예정일 : 10월 28일(금) - 10월 31일(월)</p>
      </div>
    </div>
  );
};

export default CartItemList;
