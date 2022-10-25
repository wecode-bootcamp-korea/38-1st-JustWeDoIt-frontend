import React from 'react';
import './Input.scss';

const Input = props => {
  const { name, saveInputSet, enterPassword, isShowing } = props;

  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        type={isShowing ? 'password' : 'text'}
        onChange={saveInputSet}
        onKeyPress={enterPassword}
      />
    </div>
  );
};

export default Input;
