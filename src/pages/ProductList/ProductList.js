import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BiUpArrow, BiDownArrow, BiFilter } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Dropdown from './Product/Dropdown';
import ProductAside from './ProductAside';
import './ProductList.scss';

const ProductList = () => {
  const [dropdownShown, setDropdownShown] = useState(false);

  const [postList, setPostList] = useState([]); // 현재의 페이지와 생성되는 페이지를 넣기 위해서
  const [page, setPage] = useState(1); // page를 추가하기 위해서
  const preventRef = useRef(true); // 오류로 중복적으로 페이지 생성을 막기위한 ref
  const obsRef = useRef(null); // 모든 글 로드 확인

  const [offset, setOffset] = useState(0);

  const [visible, setVisible] = useState(true);

  // 파라미터 값 넣는 식
  const [form, setForm] = useState({
    size: [],
    price: [],
    gender: [],
    special: [],
    headerFilter: [],
  });

  const newForm = { ...form };

  const isOnclick = e => {
    if (e.target.checked === true) {
      newForm[e.target.name].pop(e.target.value);
      newForm[e.target.name].push(e.target.value);
      setForm(newForm);
    }
  };

  const onclick = e => {
    for (let key in form) {
      if (e.target.checked === true && e.target.name === key) {
        newForm[e.target.name].push(e.target.value);
        setForm(newForm);
      } else if (e.target.checked === false && e.target.name === key) {
        for (let i = 0; i < newForm[e.target.name].length; i++) {
          if (newForm[e.target.name][i] === e.target.value) {
            newForm[e.target.name].splice(i, 1);
            setForm(newForm);
          }
        }
      }
    }
  };

  const productAsideVisible = () => {
    setVisible(!visible);
  };

  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const obsHandler = entries => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage(prev => prev + 1);
    }
  };

  const getProductList = useCallback(() => {
    const newPostList = [...postList];
    if (page !== 1) {
      setOffset(offset => offset + 9);
    }
    fetch(
      `http://10.58.52.169:3000/products/mains?offset=${offset}&limit=9&gender=${form.gender}&special=${form.special}&headerFilter=${form.headerFilter}&size=${form.size}&price=${form.price}`
    )
      .then(response => response.json())
      .then(data => {
        if (data) {
          setPostList(newPostList.concat(...data));
          preventRef.current = true;
        }
      });
  }, [page]);

  useEffect(() => {
    const productListobserver = new IntersectionObserver(obsHandler, {
      threshold: 0.5,
    });
    if (obsRef.current) productListobserver.observe(obsRef.current);
    return () => {
      productListobserver.disconnect();
    };
  }, []);

  useEffect(() => {
    getProductList();
  }, [page, form]);

  const modalOff = e => {
    e.stopPropagation();
    e.target.className !== 'slideDropdown' && setDropdownShown(false);
  };

  return (
    <main className="main">
      <header className="header">
        <div className="headerLeft">
          <h1>신발</h1>
        </div>
        <div className="headerRight">
          <div className="headerRightFilter">
            <button onClick={productAsideVisible}>
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
            <Dropdown isOpen={dropdownShown} modalOff={modalOff}>
              <ul>
                <li>
                  <input
                    type="radio"
                    name="headerFilter"
                    value="recent"
                    id="recent"
                    onClick={isOnclick}
                  />
                  <label htmlFor="recent">최신순</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="headerFilter"
                    value="highPrice"
                    id="heightPrice"
                    onClick={isOnclick}
                  />
                  <label htmlFor="heightPrice">높은 가격순</label>
                </li>
                <li>
                  <input
                    type="radio"
                    name="headerFilter"
                    value="lowPrice"
                    id="lowPrice"
                    onClick={isOnclick}
                  />
                  <label htmlFor="lowPrice">낮은 가격순</label>
                </li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </header>
      <div className="productTotal">
        <div className="productAside">
          {visible && (
            <ProductAside className="productAsideAccordion" form={onclick} />
          )}
        </div>
        <div className="productMain">
          {postList && (
            <>
              {postList.map(productMenuItem => (
                <div key={productMenuItem.id} className="productMainPiece">
                  <Link to={`detail/${productMenuItem.id}`}>
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
                      <div className="proposalGender">
                        {productMenuItem.gender}
                      </div>
                      <div className="proposalPrice">
                        {priceToString(productMenuItem.price)}원
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          )}
          <div ref={obsRef} />
        </div>
      </div>
    </main>
  );
};
export default ProductList;
