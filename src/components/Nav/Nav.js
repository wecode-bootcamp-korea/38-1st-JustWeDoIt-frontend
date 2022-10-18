import React, { useState } from 'react';
import './Nav.scss';
import { BsHeart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

const Nav = () => {
  const [isShowing, setIsShowing] = useState(false);

  const openModal = () => {
    setIsShowing(true);
  };

  const closeModal = () => {
    setIsShowing(false);
  };

  return (
    <header className="topHeader">
      <div className="headerWrapper">
        <div className="topLogo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
            alt="logo"
          />
        </div>
        <div className="navContainer">
          <nav className="nav">
            <ul>
              <li>Lifestyle</li>
              <li>Jordan</li>
              <li>Running</li>
              <li>BasketBall</li>
              <li>Soccer</li>
            </ul>
          </nav>
        </div>
        <div className="btnGroup">
          <ul>
            <li className="searchBtn">
              <BsSearch onClick={openModal} />
              {isShowing && (
                <div className="searchModal">
                  <div className="modalWrapper">
                    <div className="modalTop">
                      <div className="searchFormContainer">
                        <form className="searchForm">
                          <input type="text" className="searchInput" />
                          <button className="searchSubmit">GO</button>
                        </form>
                      </div>
                      <button onClick={closeModal} className="closeBtn">
                        Close
                      </button>
                    </div>
                    <div className="searchResult" />
                    <div className="searchSuggestions">
                      <h4>추천 검색어</h4>
                      <ul>
                        <li>Air Force 1</li>
                        <li>Air Force 1</li>
                        <li>Air Force 1</li>
                        <li>Air Force 1</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="likeBtn">
              <BsHeart />
            </li>
            <li className="cartBtn">
              <BsCart2 />
            </li>
            <li className="singInBtn">
              <BsPerson />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
