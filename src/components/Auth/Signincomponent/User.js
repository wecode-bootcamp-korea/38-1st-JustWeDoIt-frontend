import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './User.scss';
import { SiNike } from 'react-icons/si';
import { FaBan } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

const User = ({ SignData }) => {
  const { name, title, text, url, btntext } = SignData;
  const [userInfoList, setUserInfoList] = useState([]);
  const [isShowing, setIsShowing] = useState(true);
  const [inPutSet, setInPutSet] = useState({
    email: '',
    userName: '',
    pw: '',
  });
  const [dateCollect, setDateCollect] = useState({
    birthday: '',
    lastNumber: '',
  });
  // console.log(inPutSet.email.replace(/[^0-9]/g, ''));
  const navigate = useNavigate();
  const saveInPutSet = e => {
    setInPutSet({ ...inPutSet, [e.target.name]: e.target.value });
  };
  const saveDateCollect = e => {
    const onlyNumber = e.value.replace(/[^0-9]/g, '');
    setDateCollect({ ...inPutSet, [e.target.name]: onlyNumber });
  };
  const birthdayNumber = dateCollect.birthday.replace(/[^0-9]/g, '');
  const lastNumberNumber = dateCollect.lastNumber.replace(/[^0-9]/g, '');

  const onClick = () => {
    setIsShowing(prev => !prev);
  };
  const pwOrTxt = isShowing ? 'password' : 'text';
  const isEmailOkay =
    inPutSet.email.includes('@') > 0 &&
    inPutSet.email.lastIndexOf('.') < inPutSet.email.length - 1 &&
    inPutSet.email.lastIndexOf('.') - inPutSet.email.lastIndexOf('@') > 1;

  const islength = inPutSet.pw.length > 7;
  const isPw = /(?=.*[a-zA-Z])(?=.*[!@#$%^~*+=-])(?=.*[0-9])/;

  const is8 = islength ? '#288D25' : null;
  const isPwOkay = isPw ? null : '#288D25';
  // const noNumber = ()=>{
  //   inPutSet.birthday.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'
  // }

  const enterPw = e => {
    if (e.key === 'Enter' && SignData.name === 1) {
      clickSignIn();
      // } else if (e.key === 'Enter' && Data.name === 2) {
      //   clickSignUp();
    }
  };

  fetch('/data/userInfoList.json')
    .then(r => r.json())
    .then(result => setUserInfoList(result));

  const clickSignIn = () => {
    if (
      name === 1 &&
      userInfoList.email === inPutSet.email &&
      userInfoList.password === inPutSet.pw &&
      userInfoList.name === inPutSet.userName
    ) {
      navigate('/signup');
    }
  };
  const clickSingUp = () => {
    if (
      name === 2 &&
      userInfoList.email === inPutSet.email &&
      userInfoList.password === inPutSet.pw
    ) {
      navigate('/');
    }
  };
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
    <div className="userContainer">
      <div className="layOut">
        <div className="icon">
          <SiNike size="50" />
        </div>
        <h1>{title}</h1>
        <form>
          <div className="controlHeight">
            <div className="email">
              <input
                name="email"
                type="email"
                placeholder="이메일"
                value={inPutSet.email}
                onChange={saveInPutSet}
                onKeyPress={enterPw}
              />
            </div>
            {isEmailOkay === false && inPutSet.email.length > 2 && (
              <div className="wrong">잘못된 이메일입니다</div>
            )}

            {0 < inPutSet.email.length && inPutSet.email.length < 3 && (
              <div className="wrong">필수</div>
            )}
          </div>
          {name === 1 && (
            <div className="controlHeight">
              <div className="userName">
                <input
                  name="userName"
                  type="text"
                  placeholder="이름"
                  value={inPutSet.userName}
                  onChange={saveInPutSet}
                  onKeyPress={enterPw}
                />
              </div>

              {0 < inPutSet.userName.length && inPutSet.userName.length < 3 && (
                <div className="wrong">필수</div>
              )}
            </div>
          )}
          <div className="controlHeightPw">
            <div className="pw">
              <input
                name="pw"
                type={pwOrTxt}
                placeholder="비밀번호"
                value={inPutSet.pw}
                onChange={saveInPutSet}
                onKeyPress={enterPw}
                autoComplete="on"
              />
              <div className="pwIcon" onClick={onClick}>
                {isShowing ? (
                  <AiFillEye size={25} />
                ) : (
                  <AiFillEyeInvisible size={25} />
                )}
              </div>
            </div>
            {0 < inPutSet.pw.length && inPutSet.pw.length < 3 && (
              <div className="wrong">필수</div>
            )}
          </div>

          <div className="text">
            {name === 1 && (
              <div className="textLength8" style={{ color: is8 }}>
                {!is8 ? <FaBan size="12" /> : <AiOutlineCheck size="12" />}
                &nbsp; 최소 8자
              </div>
            )}

            {name === 1 && (
              <div className="textLength1" style={{ color: isPwOkay }}>
                {!isPwOkay ? <FaBan size="12" /> : <AiOutlineCheck size="12" />}
                &nbsp; 알파벳 대문자 및 소문자 조합, 최소 1개 이상의 숫자
              </div>
            )}
          </div>

          {name === 1 && (
            <div className="date">
              <div className="birthday">
                <input
                  name="birthday"
                  type="text"
                  placeholder="생년월일"
                  value={birthdayNumber}
                  onChange={saveDateCollect}
                  onKeyPress={enterPw}
                  minLength="6"
                  maxLength="6"
                  oninput="{inPutSet.birthday} = {inPutSet.birthday}.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                />
              </div>
              <div className="dash">-</div>
              <div className="lastNumber">
                <input
                  name="lastNumber"
                  type="tel"
                  // placeholder="?"
                  value={lastNumberNumber}
                  onChange={saveDateCollect}
                  onKeyPress={enterPw}
                  maxlength="1"
                />
              </div>
              <div className="xxxxxx">xxxxxx</div>
            </div>
          )}
          {name === 1 && (
            <div className="memberRewards">
              생일에 나이키 멤버 리워드를 받으세요.
            </div>
          )}
        </form>
        <div className="btn">
          {name === 1 && <button onClick={clickSignIn}>{btntext}</button>}
          {name === 2 && <button onClick={clickSingUp}>{btntext}</button>}
        </div>
        <div className="link">
          <Link to={url}>{text}</Link>
        </div>
      </div>
    </div>
  );
};

export default User;
