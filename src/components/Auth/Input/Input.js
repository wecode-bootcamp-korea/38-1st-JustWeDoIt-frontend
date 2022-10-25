import React from 'react';
import './Input.scss';

const Input = props => {
  const { name, saveInputSet, enterPassword } = props;

  return (
    <div>
      <input
        className={`baseInput ${name}`}
        name={name}
        onChange={saveInputSet}
        onKeyPress={enterPassword}
      />
    </div>
  );
};

export default Input;
