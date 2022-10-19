import React from 'react';
import { BsSearch } from 'react-icons/bs';
import './NavModal.scss';

const NavModal = ({ closeModal, handleModal }) => {
  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="searchModal" onClick={handleModal}>
      <div className="modal">
        <div className="modalWrapper">
          <div className="modalTop">
            <div className="searchFormContainer">
              <div className="formWrapper" onSubmit={onSubmit}>
                <input type="text" className="searchInput" placeholder="검색" />
                <button className="searchSubmit">
                  <BsSearch />
                </button>
              </div>
            </div>
            <button onClick={closeModal} className="closeBtn">
              닫기
            </button>
          </div>
          <div className="searchResult" />
          <div className="searchSuggestions">
            <h4>추천 검색어</h4>
            <ul>
              <li>에어 포스 1</li>
              <li>조던</li>
              <li>에어맥스</li>
              <li>블레이저</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavModal;
