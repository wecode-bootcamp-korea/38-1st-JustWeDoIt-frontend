import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './User.scss';
import { SiNike } from 'react-icons/si';
import { FaBan } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

const User = ({ SignData }) => {
  const { name, title, text, url, btntext } = SignData;
  // const [userInfoList, setUserInfoList] = useState([]);
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
  // const [activeBorder, setActiveBorder] = userState({
  //   emailBorder: false,
  //   passwordBorder: false,
  //   userNameBorder: false,
  //   birthdayBorder:false,
  // });

  // const { emailBorder, passwordBorder,userNameBorder,birthdayBorder } = activeBorder;
  // const
  const navigate = useNavigate();
  const saveInPutSet = e => {
    setInPutSet({ ...inPutSet, [e.target.name]: e.target.value });
  };
  const saveDateCollect = e => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
    setDateCollect({ ...dateCollect, [e.target.name]: onlyNumber });
  };

  const onClick = () => {
    setIsShowing(prev => !prev);
  };
  const pwOrTxt = isShowing ? 'password' : 'text';
  const isEmailOkay =
    inPutSet.email.includes('@') > 0 &&
    inPutSet.email.lastIndexOf('.') < inPutSet.email.length - 1 &&
    inPutSet.email.lastIndexOf('.') - inPutSet.email.lastIndexOf('@') > 1;

  let emailColor = null;
  let nameColor = null;
  let pwColor = null;
  let dateColor = null;

  const onClickRed = e => {
    e.stopPropagation();
    if (
      (e.target.className === 'layOut' && inPutSet.email.length === 0) ||
      !isEmailOkay
    ) {
      emailColor = 'red';
    } else if (
      (e.target.className === 'layOut' && inPutSet.userName.length === 0) ||
      (0 < inPutSet.userName.length && inPutSet.userName.length < 3)
    ) {
      nameColor = 'red';
    } else if (e.target.className === 'layOut' && inPutSet.pw.length === 0) {
      pwColor = 'red';
    } else if (
      e.target.className === 'layOut' &&
      (dateCollect.birthday.length < 6 || dateCollect.lastNumber.length === 0)
    ) {
      dateColor = 'red';
    }
  };

  const islength = inPutSet.pw.length > 7;
  const rightPw = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;
  const isPw = rightPw.test(inPutSet.pw);

  const is8 = islength ? '#288D25' : null;
  const isPwOkay = isPw ? '#288D25' : null;

  const enterPw = e => {
    if (e.key === 'Enter' && SignData.name === 1) {
      clickSignIn();
    } else if (e.key === 'Enter' && SignData.name === 2) {
      clickSignUp();
    }
  };

  // useEffect(() => {
  //   fetch('/data/userInfoList.json')
  //     .then(r => r.json())
  //     .then(result => setUserInfoList(result));
  // }, []);

  // const clickSignIn = () => {
  //   if (
  //     name === 1 &&
  //     userInfoList.email === inPutSet.email &&
  //     userInfoList.password === inPutSet.pw &&
  //     userInfoList.name === inPutSet.userName
  //   ) {
  //     navigate('/signup');
  //   }
  // };
  // const clickSingUp = () => {
  //   if (
  //     name === 2 &&
  //     userInfoList.email === inPutSet.email &&
  //     userInfoList.password === inPutSet.pw
  //   ) {
  //     navigate('/');
  //   }
  // };
  //fetch
  const clickSignUp = () => {
    fetch('http://10.58.52.77:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inPutSet.email,
        password: inPutSet.pw,
        name: inPutSet.userName,
        residentNumberFront: dateCollect.birthday,
        residentNumberBack: dateCollect.lastNumber,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패');
      })
      .catch(error => console.log(error))
      .then(data => {
        // if (data.message === "SUCCESS") {
        localStorage.setItem('token', data.accesstoken);
        //   alert("로그인 성공");
        //   console.log("AA");
        // } else if (data.message === " INVALIDU_USER_ID") {
        //   alert("아이디 혹은 비밀번호를 확인해 주세요");
        // }
      });
    const token = localStorage.getItem('token');
  };
  const clickSignIn = () => {
    fetch('http://10.58.52.77:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inPutSet.email,
        password: inPutSet.pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패');
      })
      .catch(error => console.log(error))
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.accesstoken);
          alert('로그인 성공');
          // console.log("AA");
        } else if (data.message === ' LOGIN_FAIL') {
          alert('아이디 혹은 비밀번호를 확인해 주세요');
        }
      });
    const token = localStorage.getItem('token');
  };

  return (
    <div className="userContainer" onClick={onClickRed}>
      <div className="layOut">
        <div className="icon">
          <SiNike size="50" />
        </div>
        <h1>{title}</h1>
        <form>
          <div className="controlHeight">
            <div className="email" style={{ borderColor: emailColor }}>
              <input
                name="email"
                type="email"
                placeholder="이메일"
                value={inPutSet.email}
                onChange={saveInPutSet}
                onKeyPress={enterPw}
                onClick={onClickRed}
                onFocus={() => console.log('Focused on input')}
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
              <div className="userName" style={{ borderColor: nameColor }}>
                <input
                  name="userName"
                  type="text"
                  placeholder="이름"
                  value={inPutSet.userName}
                  onChange={saveInPutSet}
                  onKeyPress={enterPw}
                  onClick={onClickRed}
                />
              </div>

              {0 < inPutSet.userName.length && inPutSet.userName.length < 3 && (
                <div className="wrong">필수</div>
              )}
            </div>
          )}
          <div className="controlHeightPw">
            <div className="pw" style={{ borderColor: pwColor }}>
              <input
                name="pw"
                type={pwOrTxt}
                placeholder="비밀번호"
                value={inPutSet.pw}
                onChange={saveInPutSet}
                onKeyPress={enterPw}
                autoComplete="on"
                onClick={onClickRed}
              />
              <div className="pwIcon" onClick={onClick}>
                {isShowing ? (
                  <AiFillEye size={25} />
                ) : (
                  <AiFillEyeInvisible size={25} />
                )}
              </div>
            </div>
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
                &nbsp; 알파벳 대문자 및 소문자 특수문자 숫자 조합, 최소 1개
                이상의 숫자
              </div>
            )}
          </div>

          {name === 1 && (
            <div className="date" style={{ borderColor: dateColor }}>
              <div className="birthday">
                <input
                  name="birthday"
                  type="text"
                  placeholder="생년월일"
                  value={dateCollect.birthday}
                  onChange={saveDateCollect}
                  onKeyPress={enterPw}
                  minLength="6"
                  maxLength="6"
                  onClick={onClickRed}
                />
              </div>
              <div className="dash">-</div>
              <div className="lastNumber">
                <input
                  name="lastNumber"
                  type="tel"
                  // placeholder="?"
                  value={dateCollect.lastNumber}
                  onChange={saveDateCollect}
                  onKeyPress={enterPw}
                  maxLength="1"
                  onClick={onClickRed}
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
          {name === 1 && <button onClick={clickSignUp}>{btntext}</button>}
          {name === 2 && <button onClick={clickSignIn}>{btntext}</button>}
        </div>
        <div className="link">
          <Link to={url}>{text}</Link>
        </div>
      </div>
    </div>
  );
};

export default User;
