import React from 'react';
import { useState, useEffect } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './Carousel.scss';

const Carousel = () => {
  const mockProducts = [
    {
      id: 1,
      imgURL:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      name: '나이키 에어포스',
      gender: '남성신발',
      price: '99000',
    },
    {
      id: 2,
      imgURL:
        'https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      name: '나이키 에어포스',
      gender: '남성신발',
      price: '99000',
    },
    {
      id: 3,
      imgURL:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      name: '나이키 에어포스',
      gender: '남성신발',
      price: '99000',
    },
    {
      id: 4,
      imgURL:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: '나이키 에어포스',
      gender: '남성신발',
      price: '99000',
    },
    {
      id: 5,
      imgURL:
        'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: '나이키 에어포스',
      gender: '남성신발',
      price: '99000',
    },
    {
      id: 6,
      imgURL:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: '나이키 에어포스',
      gender: '남성신발',
      price: '99000',
    },
    {
      id: 7,
      imgURL:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: '나이키 에어포스',
      gender: '남성신발',
      price: '99000',
    },
    {
      id: 8,
      imgURL:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      name: '나이키 에어포스',
      gender: '남성신발',
      price: '99000',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [style, setStyle] = useState({
    transform: `translateX(-${currentSlide * 25}%)`,
    transition: 'all 0.3s ease-out',
  });

  const totalSlides = mockProducts.length;

  const nextSlide = () => {
    if (currentSlide >= totalSlides - 4) {
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

  useEffect(() => {
    setStyle({
      transform: `translateX(-${currentSlide * 25}%)`,
      transition: 'all 0.3s ease-out',
    });
  }, [currentSlide]);

  return (
    <div className="slidesContainer">
      <div className="slidesWrap" style={style}>
        {mockProducts.map((product, idx) => (
          <div className="slide" key={idx}>
            <div className="slideImgBox">
              <img src={product.imgURL} alt={product.name} />
            </div>
            <div className="slideProductInfo">
              <p>{product.name}</p>
              <p>{product.gender}</p>
              <span>{product.price}</span>
            </div>
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
    </div>
  );
};

export default Carousel;
