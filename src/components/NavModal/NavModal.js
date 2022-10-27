import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { priceToString } from 'utils/utilFunc';
import './NavModal.scss';

const NavModal = ({ closeModal, setIsShowing }) => {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    setInputValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const handleModal = e => {
    e.stopPropagation();
    e.target.className === 'modal' && setIsShowing(false);
  };

  useEffect(() => {
    fetch('http://10.58.52.129:3000/products/main', { method: 'GET' })
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  return (
    <div className="searchModal">
      <div className="modal" onClick={handleModal} />
      <div className="modalWrapper">
        <div className="modalTop">
          <div className="searchFormContainer">
            <div className="formWrapper" onSubmit={onSubmit}>
              <input
                type="text"
                className="searchInput"
                placeholder="검색"
                value={inputValue}
                onChange={onChange}
              />
              <button className="searchSubmit">
                <BsSearch />
              </button>
            </div>
          </div>
          <button onClick={closeModal} className="closeBtn">
            닫기
          </button>
        </div>
        <div className="searchResult">
          {products &&
            filteredProducts.map(item => (
              <div className="productCard" key={item.id}>
                <div className="productImg">
                  <img src={item.thumbnailImageUrl} alt={item.name} />
                </div>
                <div className="productInfo">
                  <p>{item.name}</p>
                  <p>{item.gender}</p>
                  <span>{priceToString(item.price)}원</span>
                </div>
              </div>
            ))}
        </div>
        <div className="searchSuggestions">
          <h4>추천 검색어</h4>
          <ul>
            <li>에어 포스 1</li>
            <li>조던</li>
            <li>에어맥스</li>
            <li>블레이저</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
