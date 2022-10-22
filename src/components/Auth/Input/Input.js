import React from 'react';
import './Input.scss';

const Input = props => {
  const { name, saveInputSet, enterPw, isShowing, placeholder } = props;

  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        type={isShowing ? 'password' : 'text'}
        onChange={saveInputSet}
        onKeyPress={enterPw}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
