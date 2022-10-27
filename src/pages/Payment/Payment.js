import React, { useState } from 'react';
import './Payment.scss';
import PaymentInput from './PaymentInput';
import PaymentSummary from './PaymentSummary.jsx';

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
    <div>
      <main className="paymentWrap">
        <div className="paymentView">
          <div className="paymentBodyWrap">
            <h4>배송 옵션</h4>
            <PaymentInput isEmailOkay={isEmailOkay} />
          </div>
          <PaymentSummary />
        </div>
      </main>
    </div>
  );
};

export default Payment;
