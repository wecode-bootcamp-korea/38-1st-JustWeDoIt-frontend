import React from 'react';
import { useState, useEffect } from 'react';
import './ProductDetailBtn.scss';

const ProductDetaiBtn = ({
  size,
  selectedSize,
  selected,
  value,
  setSelectedSize,
}) => {
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
        onClick={() => setSelectedSize(size)}
        value={size}
      />
      <label htmlFor="size" ref={selected}>
        {size}
      </label>
    </div>
  );
};

export default ProductDetaiBtn;
