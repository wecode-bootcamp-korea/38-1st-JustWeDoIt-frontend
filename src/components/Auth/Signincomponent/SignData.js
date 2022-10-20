import React from 'react';
import User from './User';

function SignData({ content }) {
  return (
    <div className="SignData">
      <User SignData={content === 'SignIn' ? SIGNIN_DATA : SIGNUP_DATA} />
    </div>
  );
}

const SIGNUP_DATA = {
  name: 1,
  title: '이제 나이키 멤버가 되어볼까요?',
  text: '이미 가입하셨나요?',
  url: '/signin',
  btntext: '계정 만들기',
};
const SIGNIN_DATA = {
  name: 2,
  title: '로그인을 위해 이메일과 비밀번호를 입력하세요.',
  text: '계정이 없으신가요?',
  url: '/signup',
  btntext: '계정으로',
};

export default SignData;
