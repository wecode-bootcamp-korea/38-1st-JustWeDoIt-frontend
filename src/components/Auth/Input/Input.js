import React from 'react';
import './Input.scss';

const Input = props => {
  const { name, saveInputSet, enterPassword, isShowing, placeholder } = props;

  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        type={isShowing ? 'password' : 'text'}
        onChange={saveInputSet}
        onKeyPress={enterPassword}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
