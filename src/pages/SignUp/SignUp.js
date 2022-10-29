import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import InputLabel from 'components/Auth/Input/InputLabel';
import InputPassword from 'components/Auth/Input/InputPassword';
import './SignUp.scss';
import API from '../../config';

const SignUp = () => {
  const navigate = useNavigate();
  const [inputSet, setInputSet] = useState({
    email: '',
    userName: '',
    password: '',
  });
  const [dateCollect, setDateCollect] = useState({
    birthday: '',
    lastNumber: '',
  });
  const saveInputSet = e => {
    setInputSet({ ...inputSet, [e.target.name]: e.target.value });
  };
  const saveDateCollect = e => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
    setDateCollect({ ...dateCollect, [e.target.name]: onlyNumber });
  };

  const isEmailOkay =
    inputSet.email.includes('@') > 0 &&
    inputSet.email.lastIndexOf('.') < inputSet.email.length - 1 &&
    inputSet.email.lastIndexOf('.') - inputSet.email.lastIndexOf('@') > 1;

  const enterPassword = e => {
    if (e.key === 'Enter') {
      clickSignUp();
    }
  };

  const clickSignUp = () => {
    fetch(API.signup, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputSet.email,
        password: inputSet.password,
        name: inputSet.userName,
        residentNumberFront: dateCollect.birthday,
        residentNumberBack: dateCollect.lastNumber,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.insertId) {
          navigate('/signin');
        }
      });
  };

  return (
    <div className="userContainer">
      <div className="layout">
        <div className="icon">
          <SiNike size="50" />
        </div>
        <h1>이제 나이키 멤버가 되어볼까요?</h1>
        <form>
          <InputLabel
            name="email"
            saveInputSet={saveInputSet}
            enterPassword={enterPassword}
            inputSet={inputSet}
            isEmailOkay={isEmailOkay}
            placeholder="이메일"
          />
          <InputLabel
            name="userName"
            saveInputSet={saveInputSet}
            enterPassword={enterPassword}
            inputSet={inputSet}
            isEmailOkay={isEmailOkay}
            placeholder="이름"
          />

          <InputPassword
            id="up"
            name="password"
            saveInputSet={saveInputSet}
            enterPassword={enterPassword}
            inputSet={inputSet}
            placeholder="비밀번호"
          />
          <div className="date">
            <div className="birthday">
              <input
                name="birthday"
                type="text"
                placeholder="생년월일"
                value={dateCollect.birthday}
                onChange={saveDateCollect}
                onKeyPress={enterPassword}
                minLength="6"
                maxLength="6"
              />
            </div>
            <div className="dash">-</div>
            <div className="lastNumber">
              <input
                name="lastNumber"
                type="tel"
                value={dateCollect.lastNumber}
                onChange={saveDateCollect}
                onKeyPress={enterPassword}
                maxLength="1"
              />
            </div>
            <div className="xxxxxx">xxxxxx</div>
          </div>

          <div className="memberRewards">
            생일에 나이키 멤버 리워드를 받으세요.
          </div>
        </form>
        <div className="btn">
          <button onClick={clickSignUp}>'계정 만들기'</button>
        </div>
        <div className="link">
          <Link to="/signin">'이미 가입하셨나요?'</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
