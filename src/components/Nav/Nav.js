import React, { useState } from 'react';
import './Nav.scss';
import { BsHeart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

const Nav = () => {
  const [isShowing, setIsShowing] = useState(true);

  const handleModal = () => {
    setIsShowing(true);
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
          <nav>
            <div className="mobileNav">
              <ul>
                <li>Lifestyle</li>
                <li>Jordan</li>
                <li>Running</li>
                <li>BasketBall</li>
                <li>Soccer</li>
              </ul>
            </div>
            <div className="desktopNav">
              <ul>
                <li>Lifestyle</li>
                <li>Jordan</li>
                <li>Running</li>
                <li>BasketBall</li>
                <li>Soccer</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="btnGroup">
          <ul>
            <li className="searchBtn">
              <BsSearch onClick={handleModal} />
              {isShowing && (
                <div className="searchModal">
                  <div className="modalWrapper">
                    <div className="modalTop">
                      <div className="searchFromContainer">
                        <form className="searchForm">
                          <input type="text" className="searchInput" />
                          <button>GO</button>
                        </form>
                      </div>
                      <button className="closeBtn">Close</button>
                    </div>
                    <div className="searchSuggestions">
                      <h4>추천 검색어</h4>
                      <div>
                        <ul>
                          <li>Air Force 1</li>
                          <li>Air Force 1</li>
                          <li>Air Force 1</li>
                          <li>Air Force 1</li>
                        </ul>
                      </div>
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
