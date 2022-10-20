import { useState } from 'react';
import './ProductAside.scss';

const ProductAside = () => {
  const [selected, setSelected] = useState(null);

  const toggle = i => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, index) => (
          <div className="item" key={item.id}>
            <div className="title" onClick={() => toggle(index)}>
              <h2>{item.title}</h2>
              <span>{selected === index ? '-' : '+'}</span>
            </div>
            <div className={selected === index ? 'content show' : 'content'}>
              {item.list.map((ListItem, index) => (
                <div key={index}>
                  <input
                    className="listCheckbox"
                    type="checkbox"
                    id="list"
                    value={ListItem}
                  />
                  <label htmlFor="list">{ListItem}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAside;

let data = [
  {
    id: 1,
    title: '성별',
    list: ['남성용', '여성용', '공용'],
  },
  {
    id: 2,
    title: '사이즈',
    list: [250, 260, 270, 280],
  },
  { id: 3, title: '특별한', list: ['친환경'] },
];
