/* eslint-disable jsx-a11y/alt-text */
import Thumbnail from 'components/Card/Card';
import Carousel from 'components/Carousel/Carousel';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  useEffect(() => {
    fetch('/data/mainData.json')
      .then(response => response.json())
      .then(result => setMainData(result));
  }, []);

  return (
    <div>
      <div className="mainForm">
        {mainData.map(data => (
          <Link to={data.url} key={data.id}>
            <div key={data.id} id={data.id}>
              <div className="formBlock">
                <Thumbnail video={data.video} image={data.image} />
                <p className="title">{data.title} </p>
                <p className="mainText">{data.mainText}</p>
                <p className="mainText2">{data.mainText2}</p>
                <button> 구매하기</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Carousel />
    </div>
  );
};

export default Main;
