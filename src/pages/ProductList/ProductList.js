import React, { useState } from 'react';
import { BiUpArrow, BiDownArrow, BiFilter } from 'react-icons/bi';
import Dropdown from './Product/Dropdown';
import './ProductList.scss';

const ProductList = () => {
  const [dropdownState, setDropdownState] = useState(false);

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
            <button onClick={e => setDropdownState(!dropdownState)}>
              {dropdownState ? (
                <span>
                  <span>정렬기준:</span> <BiUpArrow />
                </span>
              ) : (
                <span>
                  <span>정렬기준:</span> <BiDownArrow />
                </span>
              )}
            </button>
            <Dropdown state={dropdownState}>
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
      <div />
    </main>
  );
};
export default ProductList;
