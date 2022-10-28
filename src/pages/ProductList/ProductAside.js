import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import './ProductAside.scss';

const ProductAside = ({ form }) => {
  const [isSelectedMenu, setisSelectedMenu] = useState(null);
  const accordionToggle = i => {
    if (isSelectedMenu === i) {
      return setisSelectedMenu(null);
    }
    setisSelectedMenu(i);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {accordionMenuList.map((AccordionItem, index) => (
          <div className="item" key={AccordionItem.id}>
            <div className="title" onClick={() => accordionToggle(index)}>
              <div>{AccordionItem.title}</div>
              <span>
                {isSelectedMenu === index ? (
                  <AiOutlineArrowUp />
                ) : (
                  <AiOutlineArrowDown />
                )}
              </span>
            </div>
            <div
              className={isSelectedMenu === index ? 'content show' : 'content'}
            >
              {AccordionItem.list.map((ListAccordionItem, index) => {
                return (
                  <div
                    className="contentPadding"
                    key={index}
                    onChange={e => form(e)}
                  >
                    <input
                      className="listCheckbox"
                      type="checkbox"
                      id={ListAccordionItem}
                      name={AccordionItem.name}
                      value={ListAccordionItem}
                    />
                    <label htmlFor={ListAccordionItem}>
                      {ListAccordionItem}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAside;

const accordionMenuList = [
  {
    id: 1,
    title: '성별',
    name: 'gender',
    list: ['남성용', '여성용', '공용'],
  },
  {
    id: 2,
    title: '사이즈',
    name: 'size',
    list: [
      '230',
      '235',
      '240',
      '245',
      '250',
      '255',
      '260',
      '265',
      '270',
      '275',
      '280',
      '285',
      '290',
    ],
  },
  {
    id: 3,
    title: '가격',
    name: 'price',
    list: [
      '10000 ~ 20000',
      '20000 ~ 30000',
      '30000 ~ 40000',
      '40000 ~ 50000',
      '50000 ~ 60000',
      '60000 ~ 70000',
      '70000 ~ 80000',
      '80000 ~ 90000',
      '90000 ~ 100000',
    ],
  },
  { id: 4, title: '특별한', name: 'special', list: ['친환경'] },
];
