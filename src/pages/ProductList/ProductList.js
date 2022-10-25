import React, { useEffect, useState } from 'react';
import { BiUpArrow, BiDownArrow, BiFilter } from 'react-icons/bi';
import Dropdown from './Product/Dropdown';
import ProductAside from './ProductAside';
import { priceToString } from '../../utils/utilFunc';
import './ProductList.scss';

const ProductList = () => {
  const [dropdownShown, setDropdownShown] = useState(false);

  const [productMain, setProductMain] = useState([]);

  // const priceToString = price => {
  //   return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // };

  useEffect(() => {
    fetch('http://10.58.52.129:3000/products/main?offset=0&limit=10')
      .then(response => response.json())
      .then(item => setProductMain(item));
  }, []);

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
      <div className="productTotal">
        <div className="productAside">
          <ProductAside className="productAsideAccordion" />
        </div>
        <div className="productMain">
          {productMain.map(productMenuItem => (
            <div key={productMenuItem.id} className="productMainPiece">
              <div className="productMainPieceImg">
                <img
                  src={productMenuItem.thumbnailImageUrl}
                  alt={productMenuItem.name}
                />
              </div>
              <div className="productMainPieceProposal">
                <div className="proposalCategory">
                  {productMenuItem.category}
                </div>
                <div className="proposalMaterial">
                  {productMenuItem.special}
                </div>
                <div className="proposalName">{productMenuItem.name}</div>
                <div className="proposalGender">{productMenuItem.gender}</div>
                <div className="proposalPrice">
                  {priceToString(productMenuItem.price)}원
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default ProductList;
