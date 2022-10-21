import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SiNike } from 'react-icons/si';
import './SignUp.scss';
import InputLabel from 'components/Auth/Input/InputLabel';
import InputPw from 'components/Auth/Input/InputPw';

const SignUp = () => {
  const [inPutSet, setInPutSet] = useState({
    email: '',
    userName: '',
    password: '',
  });
  const [dateCollect, setDateCollect] = useState({
    birthday: '',
    lastNumber: '',
  });
  console.log(inPutSet);
  const saveInPutSet = e => {
    setInPutSet({ ...inPutSet, [e.target.name]: e.target.value });
  };
  const saveDateCollect = e => {
    const onlyNumber = e.target.value.replace(/[^0-9]/g, '');
    setDateCollect({ ...dateCollect, [e.target.name]: onlyNumber });
  };

  const isEmailOkay =
    inPutSet.email.includes('@') > 0 &&
    inPutSet.email.lastIndexOf('.') < inPutSet.email.length - 1 &&
    inPutSet.email.lastIndexOf('.') - inPutSet.email.lastIndexOf('@') > 1;

  const enterPw = e => {
    if (e.key === 'Enter') {
      clickSignUp();
    }
  };
  console.log(inPutSet);

  const clickSignUp = () => {
    fetch('http://10.58.52.77:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inPutSet.email,
        password: inPutSet.password,
        name: inPutSet.userName,
        residentNumberFront: dateCollect.birthday,
        residentNumberBack: dateCollect.lastNumber,
      }),
    })
      .then(response => response.json())

      // .catch(error => console.log(error))
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

  return (
    <div className="userContainer">
      <div className="layOut">
        <div className="icon">
          <SiNike size="50" />
        </div>
        <h1>이제 나이키 멤버가 되어볼까요?</h1>
        <form>
          <InputLabel
            name="email"
            saveInPutSet={saveInPutSet}
            enterPw={enterPw}
            inPutSet={inPutSet}
            isEmailOkay={isEmailOkay}
            innerInputText="이메일"
          />
          <InputLabel
            name="userName"
            saveInPutSet={saveInPutSet}
            enterPw={enterPw}
            inPutSet={inPutSet}
            isEmailOkay={isEmailOkay}
            innerInputText="이름"
          />

          <InputPw
            id="up"
            name="password"
            saveInPutSet={saveInPutSet}
            enterPw={enterPw}
            inPutSet={inPutSet}
            innerInputText="비밀번호"
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
