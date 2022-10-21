import React from 'react';
import './Input.scss';

const Input = props => {
  const { name, saveInPutSet, enterPw, isShowing } = props;

  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        type={isShowing ? 'password' : 'text'}
        onChange={saveInPutSet}
        onKeyPress={enterPw}
      />
    </div>
  );
};

export default Input;
