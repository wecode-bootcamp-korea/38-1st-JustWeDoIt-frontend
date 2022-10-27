import React, { useState } from 'react';
import './InputLabel.scss';
import Input from './Input';

const InputLabel = props => {
  const { name, inputSet, isEmailOkay, placeholder, ...others } = props;
  const [isTopLabel, setIsTopLabel] = useState(true);
  const emailsLength = inputSet.email.length;
  const isEmailValid =
    name === 'email' && isEmailOkay === false && emailsLength > 2;
  const isEmailLengthOkay =
    name === 'email' && 0 < emailsLength && emailsLength < 3;
  const onClick = () => {
    setIsTopLabel(prev => !prev);
  };

  return (
    <div className="controlHeight">
      <div className={`inputControlSet ${name}`}>
        <div className={`inputTag ${isTopLabel}`} onClick={onClick}>
          {placeholder}
        </div>
        <Input name={name} inputSet={inputSet} {...others} />
      </div>
      {isEmailValid && <div className="wrong">잘못된 이메일입니다</div>}
      {isEmailLengthOkay && <div className="wrong">필수</div>}
      {name === 'userName' &&
        0 < inputSet.userName.length &&
        inputSet.userName.length < 3 && <div className="wrong">필수</div>}
    </div>
  );
};

export default InputLabel;
