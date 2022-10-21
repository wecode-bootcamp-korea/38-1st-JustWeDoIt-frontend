import React, { useState } from 'react';
import './InputLabel.scss';
import Input from './Input';

const InputLabel = props => {
  const { name, inPutSet, isEmailOkay, innerInputText, ...others } = props;
  // const [isTopLabel, setIsTopLabel] = useState(true);

  return (
    <div className="controlHeight">
      <div className={`inputTag ${name}`}>
        {/* <p className={`innerInputText ${isTopLabel && 'focused'}`}>
          {innerInputText}
        </p> */}
        <Input name={name} inPutSet={inPutSet} {...others} />
      </div>
      {name === 'email' &&
        isEmailOkay === false &&
        inPutSet.email.length > 2 && (
          <div className="wrong">잘못된 이메일입니다</div>
        )}
      {name === 'email' &&
        0 < inPutSet.email.length &&
        inPutSet.email.length < 3 && <div className="wrong">필수</div>}
      {name === 'userName' &&
        0 < inPutSet.userName.length &&
        inPutSet.userName.length < 3 && <div className="wrong">필수</div>}
    </div>
  );
};

export default InputLabel;
