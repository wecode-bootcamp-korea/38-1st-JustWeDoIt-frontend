import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavModal from 'components/NavModal/NavModal';
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
          <Link to="/">JustWeDoIt</Link>
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
              {isShowing && <NavModal closeModal={closeModal} />}
            </li>
            <li className="likeBtn">
              <BsHeart />
            </li>
            <li className="cartBtn">
              <Link to="/card">
                <BsCart2 />
              </Link>
            </li>
            <li className="singInBtn">
              <Link to="/signin">
                <BsPerson />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
