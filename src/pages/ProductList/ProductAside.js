import { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import './ProductAside.scss';

const ProductAside = () => {
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
              {AccordionItem.list.map((ListAccordionItem, index) => (
                <div className="contentPadding" key={index}>
                  <input
                    className="listCheckbox"
                    type="checkbox"
                    id="list"
                    name={ListAccordionItem}
                    value={ListAccordionItem}
                  />
                  <label htmlFor="list">{ListAccordionItem}</label>
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

const accordionMenuList = [
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
  {
    id: 3,
    title: '가격',
    list: ['19,999 ~ 18,999', '18,000 ~ 17,999', '17,000 ~ 16,999'],
  },
  { id: 4, title: '특별한', list: ['친환경'] },
];
