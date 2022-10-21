import React, { useState } from 'react';
import Input from './Input';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { FaBan } from 'react-icons/fa';
import { AiOutlineCheck } from 'react-icons/ai';
import './InputPw.scss';

const InputPw = props => {
  const { id, name, inPutSet, value, innerInputText, ...others } = props;

  //   // , inPutSet, ...others
  const [isShowing, setIsShowing] = useState(true);

  const onClick = () => {
    setIsShowing(prev => !prev);
  };

  const islength = inPutSet.password.length > 7;
  const rightPw = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;
  const isPw = rightPw.test(inPutSet.password);

  const is8 = islength ? '#288D25' : null;
  const isPwOkay = isPw ? '#288D25' : null;

  return (
    <>
      <div className="controlHeightPw">
        <div className="password">
          {/* <p className="innerInputText">{innerInputText}</p> */}
          <Input
            name={name}
            isShowing={isShowing}
            inPutSet={inPutSet}
            {...others}
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
      {id === 'up' && (
        <div className="text">
          <div className="textLength8" style={{ color: is8 }}>
            {!is8 ? <FaBan size="12" /> : <AiOutlineCheck size="12" />}
            &nbsp; 최소 8자
          </div>

          <div className="textLength1" style={{ color: isPwOkay }}>
            {!isPwOkay ? <FaBan size="12" /> : <AiOutlineCheck size="12" />}
            &nbsp; 알파벳 대문자 및 소문자 특수문자 숫자 조합, 최소 1개 이상의
            숫자
          </div>
          {id === 'in' &&
            0 < inPutSet.password.length &&
            inPutSet.password.length < 3 && <div className="wrong">필수</div>}
        </div>
      )}
    </>
  );
};

export default InputPw;
