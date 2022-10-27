/* eslint-disable jsx-a11y/alt-text */
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
    <div className="mainForm">
      {mainData.map(data => (
        <Link to={data.url} key={data.id}>
          <div key={data.id} id={data.id}>
            <div className="formBlock">
              {data.video ? (
                <video src={data.video} loop autoPlay muted />
              ) : (
                <img src={data.image} />
              )}
              <p className="title">{data.title} </p>
              <p className="mainText">{data.mainText}</p>
              <p className="mainText2">{data.mainText2}</p>
              <button> 구매하기</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Main;
