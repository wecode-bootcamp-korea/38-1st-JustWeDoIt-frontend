import React from 'react';
import './ProductDetailBtn.scss';

const ProductDetaiBtn = () => {
  return (
    <div className="sizeOption">
      <input type="radio" name="size" />
      <label htmlFor="size">240</label>
    </div>
  );
};

export default ProductDetaiBtn;
