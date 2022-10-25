import React from 'react';
import { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Carousel.scss';

const mockProducts = [
  {
    id: 1,
    imgURL:
      'https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
  {
    id: 2,
    imgURL:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
  {
    id: 3,
    imgURL:
      'https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
  {
    id: 4,
    imgURL:
      'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
  {
    id: 5,
    imgURL:
      'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
  {
    id: 6,
    imgURL:
      'https://images.unsplash.com/photo-1579338908476-3a3a1d71a706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
  {
    id: 7,
    imgURL:
      'https://images.unsplash.com/photo-1602231379593-b85a472e3c99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHxuaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
  {
    id: 8,
    imgURL:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTc0fHxuaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
  {
    id: 9,
    imgURL:
      'https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTc0fHxuaWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    name: '나이키 에어포스',
    gender: '남성신발',
    price: '99000',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const style = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: 'all 0.3s ease-out',
  };

  const bulletArr = new Array(Math.ceil(mockProducts.length / 3));

  const totalSlides = mockProducts.length;

  const nextSlide = () => {
    if (currentSlide >= Math.floor(totalSlides / 3 - 1)) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="carousel">
      <div className="slidesContainer">
        <div className="slidesWrap" style={style}>
          {mockProducts.map((product, idx) => (
            <div className="slide" key={idx}>
              <Link to={`/detail/${product.id}`}>
                <div className="slideImgBox">
                  <img src={product.imgURL} alt={product.name} />
                </div>
                <div className="slideProductInfo">
                  <p>{product.name}</p>
                  <p>{product.gender}</p>
                  <span>{product.price}원</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="slidesBtn">
          <button className="prevBtn" onClick={prevSlide}>
            <BsChevronLeft />
          </button>
          <button className="nextBtn" onClick={nextSlide}>
            <BsChevronRight />
          </button>
        </div>

        <div className="bullets">
          <ul>
            {bulletArr.fill(0).map((li, idx) => (
              <li
                key={idx}
                className={currentSlide === idx ? 'bullet active' : 'bullet'}
              >
                <span />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
