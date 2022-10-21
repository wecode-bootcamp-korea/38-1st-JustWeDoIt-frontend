import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import './SignIn.scss';
import InputLabel from 'components/Auth/Input/InputLabel';
import InputPw from 'components/Auth/Input/InputPw';

const SignIn = () => {
  const [inPutSet, setInPutSet] = useState({
    email: '',
    password: '',
  });
  const saveInPutSet = e => {
    setInPutSet({ ...inPutSet, [e.target.name]: e.target.value });
  };

  const isEmailOkay =
    inPutSet.email.includes('@') > 0 &&
    inPutSet.email.lastIndexOf('.') < inPutSet.email.length - 1 &&
    inPutSet.email.lastIndexOf('.') - inPutSet.email.lastIndexOf('@') > 1;

  const enterPw = e => {
    if (e.key === 'Enter') {
      clickSignIn();
    }
  };
  const clickSignIn = () => {
    fetch('http://10.58.52.77:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inPutSet.email,
        password: inPutSet.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.accessToken);
          alert('로그인 성공');
          // console.log("AA");
        } else if (data.message === ' LOGIN_FAIL') {
          alert('아이디 혹은 비밀번호를 확인해 주세요');
        }
      });
    const token = localStorage.getItem('token');
  };
  return (
    <div className="userContainer">
      <div className="layOut">
        <div className="icon">
          <SiNike size="50" />
        </div>
        <h1>'로그인을 위해 이메일과 비밀번호를 입력하세요.'</h1>
        <form>
          <InputLabel
            name="email"
            saveInPutSet={saveInPutSet}
            enterPw={enterPw}
            inPutSet={inPutSet}
            type="email"
            isEmailOkay={isEmailOkay}
          />

          <InputPw
            id="up"
            name="password"
            saveInPutSet={saveInPutSet}
            enterPw={enterPw}
            inPutSet={inPutSet}
          />
        </form>
        <div className="btn">
          <button onClick={clickSignIn}>'계정으로'</button>
        </div>
        <div className="link">
          <Link to="/signup">'계정이 없으신가요?'</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
