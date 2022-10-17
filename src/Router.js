import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Cart from './pages/Cart/Cart';
import ProductFiltered from './pages/ProductFiltered/ProductFiltered';
import './styles/reset.scss';
import './styles/common.scss';
import './styles/responsive.scss';
import Nav from './components/Nav/Nav';

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
