import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from 'pages/Main/Main';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Footer from '../src/components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Payment from 'pages/Payment/payment';
import './styles/reset.scss';
import './styles/common.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/category/:id" element={<ProductList />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
