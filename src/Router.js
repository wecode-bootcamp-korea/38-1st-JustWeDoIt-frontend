import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Cart from './pages/Cart/Cart';
import ProductList from './pages/ProductList/ProductList';
import ProductFiltered from './pages/ProductFiltered/ProductFiltered';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import './styles/reset.scss';
import './styles/common.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/card" element={<Cart />} />
        <Route path="/" element={<ProductList />} />
        <Route path="/product/filtered/:number" element={<ProductFiltered />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
