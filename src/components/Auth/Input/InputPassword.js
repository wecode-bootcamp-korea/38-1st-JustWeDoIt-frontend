import React, { useState } from 'react';
import Input from './Input';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { FaBan } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import RULES from './InputRULES';
import './InputPassword.scss';

const InputPassword = props => {
  const { id, name, inputSet, value, innerInputText, ...others } = props;
  const [isTopLabel, setIsTopLabel] = useState(false);
  const [isShowing, setIsShowing] = useState(true);

  const onClickShow = () => {
    setIsShowing(prev => !prev);
  };

  const isMinLength8 = inputSet.password.length > 7;
  const passwordPattren =
    /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;
  const isValidPassword = passwordPattren.test(inputSet.password);

  const is8 = isMinLength8 ? '#288D25' : null;
  const isPasswordOkay = isValidPassword ? '#288D25' : null;
  const test = Object.entries(RULES)
    .filter(([key, value]) => key === name)
    .every(([key, validator]) => {
      return validator(inputSet[name]);
    });
  const onFocus = () => {
    if (test === false) setIsTopLabel(true);
  };
  const onBlur = () => {
    if (test === false) setIsTopLabel(prev => !prev);
  };

  return (
    <>
      <div className="controlHeightPassword">
        <div className="password">
          <div className={`inputTag${isTopLabel && 'focused'}`}>비밀번호</div>
          <Input
            name={name}
            isShowing={isShowing}
            inputSet={inputSet}
            onFocus={onFocus}
            onBlur={onBlur}
            {...others}
          />
          <div className="passwordIcon" onClick={onClickShow}>
            {isShowing ? (
              <AiFillEye size={25} />
            ) : (
              <AiFillEyeInvisible size={25} />
            )}
          </div>
        </div>
      </div>
      {id === 'up' && (
        <div className="text">
          <div className="textLength8" style={{ color: is8 }}>
            {!is8 ? <FaBan size="12" /> : <AiOutlineCheck size="12" />}
            &nbsp; 최소 8자
          </div>

          <div className="textLength1" style={{ color: isPasswordOkay }}>
            {!isPasswordOkay ? (
              <FaBan size="12" />
            ) : (
              <AiOutlineCheck size="12" />
            )}
            &nbsp; 알파벳 대문자 및 소문자 특수문자 숫자 조합, 최소 1개 이상의
            숫자
          </div>
          {id === 'in' &&
            0 < inputSet.password.length &&
            inputSet.password.length < 3 && <div className="wrong">필수</div>}
        </div>
      )}
    </>
  );
};

export default InputPassword;
