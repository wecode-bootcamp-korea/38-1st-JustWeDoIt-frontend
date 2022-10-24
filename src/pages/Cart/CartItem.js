import Product from 'pages/ProductList/Product/Product';
import React, { useState } from 'react';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const CartItem = ({
  cartItem,
  deleteFetch,
  setCartTotalPrice,
  priceToString,
}) => {
  const {
    stockId,
    productName,
    price,
    buyingQuantity,
    size,
    category,
    special,
    gender,
    thumbnailImage,
    stockInfo,
  } = cartItem;
  const [selected, setSelected] = useState(size);

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  // setCartTotalPrice(total => (total += price));

  return (
    <>
      <div className="cartItemContainer">
        <div className="cartItemImage">
          <figure>
            <a>
              <img src={thumbnailImage} alt={productName} />
            </a>
          </figure>
        </div>

        <div className="cartItemDesc">
          <p>{productName}</p>
          <div>{gender}</div>
          <div>{category}</div>
          <div>{special}</div>
          <div className="itemHandler">
            <div>
              사이즈 :
              <select onChange={handleSelect} value={selected}>
                {Object.keys(stockInfo).map(
                  (stockSize, index) =>
                    Object.values(stockInfo)[index] !== 0 && (
                      <option value={stockSize} key={stockSize}>
                        {stockSize}
                      </option>
                    )
                )}
              </select>
            </div>
            <div>수량 : {buyingQuantity}</div>
          </div>
          <div>
            <ul>
              <AiOutlineHeart />
              <BsTrash
                onClick={() => {
                  deleteFetch(stockId);
                }}
              />
            </ul>
          </div>
        </div>
        <div className="cartItemRightWrap">
          <span>{priceToString(price)}원</span>
        </div>
      </div>
      <div className="cartItemFooter">
        <p>무료배송</p>
        <p>도착 예정일 : 10월 28일(금) - 10월 31일(월)</p>
      </div>
    </>
  );
};

export default CartItem;
