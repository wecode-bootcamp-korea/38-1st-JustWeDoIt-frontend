import React from 'react';
// import './InputLabel.scss';
import Input from './Input';

const InputLabel = props => {
  const { name, inPutSet, isEmailOkay, ...others } = props;

  return (
    <div className="controlHeight">
      <div className={name}>
        <Input name={name} inPutSet={inPutSet} {...others} />
      </div>
      {name === 'email' &&
        isEmailOkay === false &&
        inPutSet.email.length > 2 && (
          <div className="wrong">잘못된 이메일입니다</div>
        )}
      {0 < inPutSet.email.length && inPutSet.email.length < 3 && (
        <div className="wrong">필수</div>
      )}
    </div>
  );
};

export default InputLabel;
