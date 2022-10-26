import React from 'react';
import './Input.scss';

const Input = props => {
  const { name, saveInputSet, enterPassword, isShowing, onClick, onInput } =
    props;

  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        type={isShowing ? 'password' : 'text'}
        onChange={saveInputSet}
        onKeyPress={enterPassword}
        onClick={onClick}
        onInput={onInput}
      />
    </div>
  );
};

export default Input;
