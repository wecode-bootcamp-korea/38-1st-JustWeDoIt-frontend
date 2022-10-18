import React from 'react';
import { BsSearch } from 'react-icons/bs';

const NavModal = ({ closeModal }) => {
  return (
    <div className="searchModal">
      <div className="modalWrapper">
        <div className="modalTop">
          <div className="searchFormContainer">
            <form className="searchForm">
              <input type="text" className="searchInput" placeholder="검색" />
              <button className="searchSubmit">
                <BsSearch />
              </button>
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
  );
};

export default NavModal;
