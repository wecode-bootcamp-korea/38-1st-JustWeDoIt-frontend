import React from 'react';
import { useState } from 'react';
import './ListItem.scss';

const ListItem = props => {
  console.log(props);
  const { title, idx, list, active, activeIdx, setActiveIdx } = props;
  // const [clickedIdx, setClickedIdx] = useState();

  // console.log(list);

  const handleClick = () => {
    setActiveIdx(idx);
    // setClickedIdx(null);
  };

  return (
    <div className={active ? 'detailList active' : 'detailList'}>
      <h4 onClick={handleClick}>{title}</h4>
      <div>
        {list.map((el, idx) => (
          <div className="detailInfo">
            <p>{el.subtitle}</p>
            <p key={idx}>{el.text1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListItem;
