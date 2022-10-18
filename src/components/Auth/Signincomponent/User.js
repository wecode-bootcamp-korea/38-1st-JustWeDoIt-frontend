import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './User.scss';
import { SiNike } from 'react-icons/si';
import { FaBan } from 'react-icons/fa';

const User = ({ Data }) => {
  const { name, title, text, url, btntext } = Data;

  // const [show, setShow] = useState(false);
  // const [inPutSet, setInPutSet] = useState({ email: '', name: '', pw: '' });
  // const saveInPutSet = e => {
  //   setInPutSet({ ...inPutSet });
  // };
  // setShow(true);
  // setShow(false);

  // isWrongOK =

  //fetch
  // const clickSignIn = () => {
  //   fetch('http://10.58.52.130:3000/auth/signin', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       email: inPutSet.id,
  //       password: inPutSet.password,
  //     }),
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       throw new Error('통신실패');
  //     })
  //     .catch(error => console.log(error))
  //     .then(data => {
  //       // if (data.message === "SUCCESS") {
  //       localStorage.setItem('token', data.accessToken);
  //       //   alert("로그인 성공");
  //       //   console.log("AA");
  //       // } else if (data.message === " INVALIDU_USER_ID") {
  //       //   alert("아이디 혹은 비밀번호를 확인해 주세요");
  //       // }
  //     });
  //   const token = localStorage.getItem('token');
  // };
  // const clickSingUp = () => {
  //   fetch('http://10.58.52.130:3000/auth/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //     body: JSON.stringify({
  //       email: inPutSet.id,
  //       password: inPutSet.password,
  //     }),
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //       throw new Error('통신실패');
  //     })
  //     .catch(error => console.log(error))
  //     .then(data => {
  //       if (data.message === 'SUCCESS') {
  //         localStorage.setItem('token', data.token);
  //         alert('로그인 성공');
  //         // console.log("AA");
  //       } else if (data.message === ' INVALIDU_USER_ID') {
  //         alert('아이디 혹은 비밀번호를 확인해 주세요');
  //       }
  //     });
  // const token = localStorage.getItem('token');
  // };

  return (
    <div className="layout">
      <div className="icon">
        <SiNike size="50" />
      </div>
      <h1>{title}</h1>
      <form>
        <div className="controlheight">
          <div className="email">
            <input name="email" type="email" placeholder="이메일" />
          </div>
          {name === 1 && <div className="wrong">잘못된 이메일입니다</div>}
          {name === 1 && <div className="wrong">필수</div>}
        </div>
        {name === 1 && (
          <div className="controlheight">
            <div className="name">
              <input type="text" placeholder="이름" />
            </div>

            <div className="wrong">필수</div>
          </div>
        )}
        <div className="controlheight">
          <div className="pw">
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="wrong">필수</div>
        </div>
        {name === 1 && (
          <div className="text">
            <div className="textlength8">
              <FaBan size="12" />
              &nbsp; 최소 8자
            </div>
            <div className="textlength1">
              <FaBan size="12" />
              &nbsp; 알파벳 대문자 및 소문자 조합, 최소 1개 이상의 숫자
            </div>
          </div>
        )}
        {name === 1 && (
          <div className="selects">
            <select type="text" placeholder="이름" autoComplete="off">
              <option>쇼핑 기본 설정</option>
              <option value="MENS">남성용</option>
              <option value="WOMENS">여성용</option>
            </select>
          </div>
        )}
      </form>
      <div className="btn">
        <button>{btntext}</button>
      </div>
      <div className="link">
        <Link to={url}>{text}</Link>
      </div>
    </div>
  );
};

export default User;
