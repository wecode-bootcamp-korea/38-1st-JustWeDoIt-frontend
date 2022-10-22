import React, { useEffect, useState, useRef, useCallback } from 'react';
import { BiUpArrow, BiDownArrow, BiFilter } from 'react-icons/bi';
import Dropdown from './Product/Dropdown';
import ProductAside from './ProductAside';
import './ProductList.scss';

const ProductList = () => {
  const [dropdownShown, setDropdownShown] = useState(false);
  // const [productMain, setProductMain] = useState([]);

  const [postList, setPostList] = useState([]); // 현재의 페이지와 생성되는 페이지를 넣기 위해서
  const [page, setPage] = useState(1); // page를 추가하기 위해서
  const preventRef = useRef(true); // 오류로 중복적으로 페이지 생성을 막기위한 ref
  const obsRef = useRef(null); // 모든 글 로드 확인

  const [offset, setOffset] = useState(0);

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
    fetch(`http://10.58.52.234:3000/products/main?offset=${offset}&limit=9`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setPostList(newPostList.concat(...data));
          preventRef.current = true;
        }
      });
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    getProductList();
  }, [page]);

  const modalOff = e => {
    e.stopPropagation();
    e.target.className !== 'slideDropdown' && setDropdownShown(false);
  };

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
            <Dropdown isOpen={dropdownShown} modalOff={modalOff}>
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
          {postList && (
            <>
              {postList.map(productMenuItem => (
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
                    <div className="proposalGender">
                      {productMenuItem.gender}
                    </div>
                    <div className="proposalPrice">
                      {priceToString(productMenuItem.price)}원
                    </div>
                  </div>
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
