/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const navigate = useNavigate();

  fetch('/data/mainData.json')
    .then(response => response.json())
    .then(result => setMainData(result));

  return (
    <div className="mainForm">
      {mainData.map(data => (
        <div className="formBlock" key={data.id} id={data.id} onClick={onclick}>
          {data.video ? (
            <video src={data.video} loop autoPlay muted />
          ) : (
            <img src={data.image} />
          )}
          <div key={data.id}>
            <Link to={data.url}></Link>
          </div>
          <p className="title">{data.title} </p>
          <p className="mainText">{data.mainText}</p>
          <p className="mainText2">{data.mainText2}</p>
          <button> 구매하기</button>
        </div>
      ))}
    </div>
  );
};

export default Main;
