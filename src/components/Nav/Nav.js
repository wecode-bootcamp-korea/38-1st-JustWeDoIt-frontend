import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import { BsPerson } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import NavModal from 'components/NavModal/NavModal';
import './Nav.scss';

const Nav = () => {
  const [isShowing, setIsShowing] = useState(false);

  const navList = [
    { id: 1, list: 'Lifestyle' },
    { id: 2, list: 'Jordan' },
    {
      id: 3,
      list: 'Running',
    },
    { id: 4, list: 'Basketball' },
    {
      id: 5,
      list: 'Soccer',
    },
  ];

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
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            {navList.map(list => (
              <li key={list.id}>
                <Link to={`/products/category/${list.id}`}>{list.list}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="btnGroup">
          <ul>
            <li className="searchBtn">
              <BsSearch onClick={openModal} />
              {isShowing && (
                <NavModal closeModal={closeModal} setIsShowing={setIsShowing} />
              )}
            </li>
            <li className="likeBtn">
              <BsHeart />
            </li>
            <li className="cartBtn">
              <Link to="/cart">
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
