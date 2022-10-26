import React from 'react';
import './Input.scss';

const Input = props => {
  const { name, saveInputSet, enterPassword, isShowing, onClick } = props;

  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        type={isShowing ? 'password' : 'text'}
        onChange={saveInputSet}
        onKeyPress={enterPassword}
        onClick={onClick}
      />
    </div>
  );
};

export default Input;
