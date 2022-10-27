import React, { useState } from 'react';
import './payment.scss';
import InputLabel from '../../components/Auth/Input/InputLabel';
import Input from 'components/Auth/Input/Input';

const Payment = () => {
  const [inputSet, setInputSet] = useState({
    email: '',
    password: '',
  });
  const saveInputSet = e => {
    setInputSet({ ...inputSet, [e.target.name]: e.target.value });
  };

  const isEmailOkay =
    inputSet.email.includes('@') > 0 &&
    inputSet.email.lastIndexOf('.') < inputSet.email.length - 1 &&
    inputSet.email.lastIndexOf('.') - inputSet.email.lastIndexOf('@') > 1;

  return (
    <div className="paymentContainer">
      <p className="title">결제하기</p>
      <div className="shippingOptions">
        <p className="optionText">배송옵션</p>
        <div className="paymentInputContainer">
          <div className="nameContainer">
            <Input
              name="lastUserName"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
            />
            <Input
              name="firstName"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
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
            <p className="directAddressInput">직접주소입력</p>
          </div>
          <div className="userInfoContainer">
            <Input
              name="phoneNumber"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
            />
            <Input
              name="email"
              saveInputSet={saveInputSet}
              inputSet={inputSet}
              type="text"
              isEmailOkay={isEmailOkay}
            />
          </div>
          <button className="paymentStoragebutton">저장 및 계속</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
