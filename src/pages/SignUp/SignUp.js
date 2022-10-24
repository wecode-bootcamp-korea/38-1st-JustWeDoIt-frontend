import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import InputLabel from 'components/Auth/Input/InputLabel';
import InputPw from 'components/Auth/Input/InputPw';
import './SignUp.scss';

const SignUp = () => {
  const [inputSet, setInputSet] = useState({
    email: '',
    userName: '',
    password: '',
  });
  console.log(inputSet);
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

  const enterPw = e => {
    if (e.key === 'Enter') {
      clickSignUp();
    }
  };

  const clickSignUp = () => {
    fetch('http://10.58.52.93:3000/users/signup', {
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
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.accessToken);
          alert('로그인 성공');
        } else if (data.message === ' LOGIN_FAIL') {
          alert('아이디 혹은 비밀번호를 확인해 주세요');
        }
      });
    const token = localStorage.getItem('token');
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
            enterPw={enterPw}
            inputSet={inputSet}
            isEmailOkay={isEmailOkay}
            // innerInputText="이메일"
            placeholder="이메일"
          />
          <InputLabel
            name="userName"
            saveInputSet={saveInputSet}
            enterPw={enterPw}
            inputSet={inputSet}
            isEmailOkay={isEmailOkay}
            // innerInputText="이름"
            placeholder="이름"
          />

          <InputPw
            id="up"
            name="password"
            saveInputSet={saveInputSet}
            enterPw={enterPw}
            inputSet={inputSet}
            // innerInputText="비밀번호"
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
                onKeyPress={enterPw}
                minLength="6"
                maxLength="6"
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
