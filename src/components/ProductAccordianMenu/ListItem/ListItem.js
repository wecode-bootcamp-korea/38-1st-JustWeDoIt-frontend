import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import './ListItem.scss';

const ListItem = props => {
  const { title, idx, list, active, setCurrentMenuIdx } = props;

  const handleClick = () => {
    setCurrentMenuIdx(idx);
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
        {list.map(info => (
          <div key={info.title}>
            <h5>{info.subtitle}</h5>
            <ul className="subDetailList">
              <li>{info.text1}</li>
              <li>{info.text2}</li>
              <li>{info.text3}</li>
              <li>{info.text4}</li>
              <li>{info.text5}</li>
              <li>{info.text6}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
