import React from 'react';
import './ProductDetailBtn.scss';
import { useState, useEffect } from 'react';

const ProductDetaiBtn = ({ size, selectedSize, selected }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (size.stock === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, []);

  return (
    <div className="sizeOption">
      <input
        type="radio"
        name="size"
        disabled={disabled}
        onClick={selectedSize}
        value={size.size}
      />
      <label htmlFor="size" ref={selected}>
        {size.size}
      </label>
    </div>
  );
};

export default ProductDetaiBtn;
