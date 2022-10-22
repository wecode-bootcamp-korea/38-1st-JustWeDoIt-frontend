import React, { useState } from 'react';
import { useEffect } from 'react';
import { BiUpArrow, BiDownArrow, BiFilter } from 'react-icons/bi';
import Dropdown from './Product/Dropdown';
import './ProductList.scss';

const ProductList = () => {
  const [dropdownShown, setDropdownShown] = useState(false);

  const [data, setData] = useState([]);

  fetch('/data/mock.json')
    .then(response => response.json())
    .then(data => setData(data));

  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <main className="main">
      <header className="header">
        <div className="headerLeft">
          <h1>남성신발</h1>
        </div>
        <div className="headerRight">
          <div className="headerRightFilter">
            <button>
              <span>필터 숨기기: </span>
              <BiFilter />
            </button>
          </div>
          <div className="headerRightSort">
            <button onClick={e => setDropdownShown(!dropdownShown)}>
              {dropdownShown ? (
                <span>
                  <span>정렬기준:</span> <BiUpArrow />
                </span>
              ) : (
                <span>
                  <span>정렬기준:</span> <BiDownArrow />
                </span>
              )}
            </button>
            <Dropdown isOpen={dropdownShown}>
              <ul>
                <li>추천순</li>
                <li>최신순</li>
                <li>높은 가격순</li>
                <li>낮은 가격순</li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </header>
      <aside />
      <div className="productMain">
        {data.map(item => (
          <div key={item.id} className="productMainPiece">
            <div className="productMainPieceImg">
              <img src={item.img} alt="good" />
            </div>
            <div className="productMainPieceProposal">
              <div className="proposalMaterial">{item.material}</div>
              <div className="proposalName">{item.name}</div>
              <div className="proposalGender">{item.gender}</div>
              <div className="proposalPrice">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
export default ProductList;
