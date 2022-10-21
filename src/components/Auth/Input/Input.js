import React from 'react';
// import './Input.scss';

const Input = props => {
  const { name, saveInPutSet, enterPw, pwOrTxt } = props;
  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        onChange={saveInPutSet}
        onKeyPress={enterPw}
        type={pwOrTxt}
      />
    </div>
  );
};

export default Input;
