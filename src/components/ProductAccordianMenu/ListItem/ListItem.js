import React from 'react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import './ListItem.scss';

const ListItem = props => {
  const { title, idx, list, active, setActiveIdx } = props;

  const handleClick = () => {
    setActiveIdx(idx);
  };

  return (
    <div className={active ? 'detailList active' : 'detailList'}>
      <h4 onClick={handleClick}>
        {title}
        <span className="detailArrow">
          {active ? <BsChevronUp /> : <BsChevronDown />}
        </span>
      </h4>
      <div className="detailInfo">
        {list.map((el, idx) => (
          <div key={idx}>
            <h5>{el.subtitle}</h5>
            <ul className="subDetailList">
              <li>{el.text1}</li>
              <li>{el.text2}</li>
              <li>{el.text3}</li>
              <li>{el.text4}</li>
              <li>{el.text5}</li>
              <li>{el.text6}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
