/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './Main.scss';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  // const navigate = useNavigate();

  fetch('/data/mainData.json')
    .then(response => response.json())
    .then(result => setMainData(result));
  onClick = e => {
    console.log(e);
  };

  return (
    <div className="mainForm">
      {mainData.map(data => (
        <div key={data.id} id={data.id}>
          {/* <a href="#" onclick="location.href={}"> */}
          <div className="formBlock" onClick={onclick}>
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
          {/* </a> */}
        </div>
      ))}
    </div>
  );
};

export default Main;
