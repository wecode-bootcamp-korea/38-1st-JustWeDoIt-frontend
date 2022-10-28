import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import InputLabel from 'components/Auth/Input/InputLabel';
import InputPassword from 'components/Auth/Input/InputPassword';
import './SignIn.scss';

const SignIn = () => {
  const navigate = useNavigate();
  const [inputSet, setInputSet] = useState({
    email: '',
    password: '',
  });
  const saveInputSet = e => {
    setInputSet({ ...inputSet, [e.target.name]: e.target.value });
  };

  const isEmailOkay =
    inputSet.email.includes('@') > 0 &&
    inputSet.email.lastIndexOf('.') < inputSet.email.length - 1 &&
    inputSet.email.lastIndexOf('.') - inputSet.email.lastIndexOf('@') > 1;

  const enterPassword = e => {
    if (e.key === 'Enter') {
      clickSignIn();
    }
  };
  const clickSignIn = () => {
    fetch('http://13.113.134.140:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputSet.email,
        password: inputSet.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.accessToken);
          alert('로그인 성공');
          navigate('/');
        } else if (data.message === ' LOGIN_FAIL') {
          alert('아이디 혹은 비밀번호를 확인해 주세요');
        } else if (data.message === 'INVALID_PASSWORD') {
          alert('아이디 혹은 비밀번호를 확인해 주세요');
        }
      });
  };
  return (
    <div className="userContainer">
      <div className="layout">
        <div className="icon">
          <SiNike size="50" />
        </div>
        <h1>로그인을 위해 이메일과 비밀번호를 입력하세요.</h1>
        <form>
          <InputLabel
            name="email"
            saveInputSet={saveInputSet}
            enterPassword={enterPassword}
            inputSet={inputSet}
            type="email"
            isEmailOkay={isEmailOkay}
            placeholder="이메일"
            // innerInputText="이메일"
          />

          <InputPassword
            id="in"
            name="password"
            saveInputSet={saveInputSet}
            enterPassword={enterPassword}
            inputSet={inputSet}
            innerInputText="비밀번호"
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
