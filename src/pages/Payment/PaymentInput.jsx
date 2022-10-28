import React, { useState } from 'react';
import InputLabel from '../../components/Auth/Input/InputLabel';
import Input from 'components/Auth/Input/Input';
import './PaymentInput.scss';

const PaymentInput = ({ isEmailOkay }) => {
  const [inputSet, setInputSet] = useState({
    email: '',
    password: '',
  });
  const saveInputSet = e => {
    setInputSet({ ...inputSet, [e.target.name]: e.target.value });
  };

  return (
    <div className="paymentContainer">
      <div className="shippingOptions">
        <div className="paymentInputContainer">
          <div className="nameContainer">
            <Input
              name="lastUserName"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
              placeholder="LastName"
            />
            <Input
              name="firstName"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
              placeholder="FirstName"
            />
          </div>
          <div className="InputLabelContainer">
            <InputLabel
              name="address"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
            />
          </div>
          <div className="userInfoContainer">
            <Input
              name="phoneNumber"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
              placeholder="PhoneNumber"
            />
            <Input
              name="email"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
              placeholder="E-mail"
            />
          </div>
          <div className="paymentbuttonContainer">
            <button className="paymentStoragebutton">저장 및 계속</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInput;
