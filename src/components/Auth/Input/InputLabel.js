import React, { useState } from 'react';
import './InputLabel.scss';
import Input from './Input';

const RULES = {
  email: value => value.length > 5,
  password: value => value.length > 0,
  userName: value => value.length > 0,
};

const InputLabel = props => {
  const { name, inputSet, isEmailOkay, placeholder, ...others } = props;
  const [isTopLabel, setIsTopLabel] = useState(true);
  const emailsLength = inputSet.email.length;
  const isEmailValid =
    name === 'email' && isEmailOkay === false && emailsLength > 2;
  const isEmailLengthOkay =
    name === 'email' && 0 < emailsLength && emailsLength < 3;
  // const dddd = name.length === 0
  const test = Object.entries(RULES)
    .filter(([key, value]) => key === name)
    .every(([key, validator]) => {
      return validator;
      // (inputSet[name]);
    });

  console.log(test);

  const onClick = () => {
    // if(test)
    setIsTopLabel(prev => !prev);
  };
  const onInput = e => {
    return e;
  };
  return (
    <div className="controlHeight">
      <div className={`inputControlSet ${name}`}>
        <div className={`inputTag${isTopLabel && 'focused'}`}>
          {placeholder}
        </div>
        <Input
          name={name}
          inputSet={inputSet}
          onClick={onClick}
          onInput={onInput}
          {...others}
        />
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
