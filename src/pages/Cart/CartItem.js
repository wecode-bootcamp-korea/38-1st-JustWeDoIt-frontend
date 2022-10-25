import Product from 'pages/ProductList/Product/Product';
import React, { useState, useCallback } from 'react';
import { priceToString } from 'utils/utilFunc';

import { AiOutlineHeart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const CartItem = ({ cartItem, deleteFetch, setCartItemList }) => {
  const {
    productId,
    cartId,
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
  const [sizeSelected, setSizeSelected] = useState(size);
  const [stockSelected, setStockSelected] = useState(buyingQuantity);

  const sizeStockChange = e => {
    const value = Number(e.target.value);
    const isSizeSelector = e.target.className === 'sizeSelector';

    if (isSizeSelector) {
      setSizeSelected(value);
      updateFetch(value, stockSelected);
    }

    setStockSelected(value);
    updateFetch(sizeSelected, value);
  };

  const updateFetch = (sizeSelected, stockSelected) => {
    fetch('http://10.58.52.214:3000/carts/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartId: cartId,
        productId: productId,
        buyingQuantity: stockSelected,
        newSize: sizeSelected,
      }),
    })
      .then(response => response.json())
      .then(result => setCartItemList(result.data));
  };

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
              <select
                className="sizeSelector"
                onChange={sizeStockChange}
                value={sizeSelected}
              >
                {Object.entries(stockInfo).map(
                  ([productSize, productStock]) =>
                    productStock !== 0 && (
                      <option value={productSize} key={productSize}>
                        {productSize}
                      </option>
                    )
                )}
              </select>
            </div>
            <div>
              수량 :
              <select
                className="stockSelector"
                onChange={sizeStockChange}
                value={stockSelected}
              >
                {Array(10)
                  .fill()
                  .map((v, i) => (
                    <option>{i + 1}</option>
                  ))}
              </select>
            </div>
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
          <span>{priceToString(price * stockSelected)}원</span>
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
