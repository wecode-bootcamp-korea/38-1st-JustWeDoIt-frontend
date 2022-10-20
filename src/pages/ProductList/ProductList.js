import React, { useEffect, useState } from 'react';
import { BiUpArrow, BiDownArrow, BiFilter } from 'react-icons/bi';
import Dropdown from './Product/Dropdown';
import ProductAside from './ProductAside';
import './ProductList.scss';

const ProductList = () => {
  const [dropdownShown, setDropdownShown] = useState(false);

  const [productMain, setProductMain] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.118:3000/main?offset=0&limit=10', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(item => setProductMain(item));
  }, []);

  console.log(productMain);

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
      <div className="productTotal">
        <div className="productAside">
          <ProductAside />
        </div>
        <div className="productMain">
          {productMain.map(item => (
            <div key={item.id} className="productMainPiece">
              <div className="productMainPieceImg">
                <img src={item.thumbnailImageUrl} alt="good" />
              </div>
              <div className="productMainPieceProposal">
                <div>{item.category}</div>
                <div className="proposalMaterial">{item.special}</div>
                <div className="proposalName">{item.name}</div>
                <div className="proposalGender">{item.gender}</div>
                <div className="proposalPrice">{item.price} 원</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default ProductList;
