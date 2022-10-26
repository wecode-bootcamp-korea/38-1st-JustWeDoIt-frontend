import React from 'react';
import './Input.scss';

const Input = props => {
  const {
    name,
    saveInputSet,
    enterPassword,
    isShowing,
    onClick,
    onFocus,
    onBlur,
  } = props;

  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        type={isShowing ? 'password' : 'text'}
        onChange={saveInputSet}
        onKeyPress={enterPassword}
        onClick={onClick}
        autoComplete="on"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
