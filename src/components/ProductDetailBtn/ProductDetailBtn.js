import React from 'react';
import './ProductDetailBtn.scss';
import { useState, useEffect } from 'react';

const ProductDetaiBtn = ({ size, selectedSize, selected, value }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (value < 1) {
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
        value={size}
      />
      <label htmlFor="size" ref={selected}>
        {size}
      </label>
    </div>
  );
};

export default ProductDetaiBtn;
