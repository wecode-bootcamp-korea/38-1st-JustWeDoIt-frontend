import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div>
      {products &&
        products.map(product => (
          <div key={product.id}>
            <Link to={`detail/${product.id}`}>
              <p>{product.name}</p>
              <img src={product.imgUrl} />
              <p>{product.description}</p>
            </Link>
          </div>
        ))}
    </div>
  );
};
export default ProductList;
