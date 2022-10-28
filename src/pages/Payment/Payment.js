import React, { useState, useEffect } from 'react';
import './Payment.scss';
import PaymentInput from './PaymentInput';
import PaymentSummary from './PaymentSummary.jsx';
import CartList from 'pages/Cart/CartList';

const Payment = () => {
  const [cartItemList, setCartItemList] = useState([]);
  const [inputSet, setInputSet] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    fetch('http://13.113.134.140:3000/carts', {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => setCartItemList(result.data));
  }, []);

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
        <div className="cartData">
          <CartList itemList={cartItemList} setCartItemList={setCartItemList} />
        </div>
      </main>
    </div>
  );
};

export default Payment;
