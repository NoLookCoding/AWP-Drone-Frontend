import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduce from './pages/introduce/Introduce';
import Home from './pages/home/Home';
import User from './pages/UserInfo';
import NoPage from './pages/NoPage';
import Store from './pages/store/Store';
import DetailDrone from './pages/store/DetailStore';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Usage from './pages/usage/Usage';
import Member from './pages/membership/Membership';
import ShoppingCartPage from "./pages/cart/ShoppingCartPage";

const images = [
'https://cdn.pixabay.com/photo/2016/11/29/02/59/drone-1866961_1280.jpg', 
'https://cdn.pixabay.com/photo/2017/09/07/08/57/drone-2724257_1280.jpg',
'https://www.cctvnews.co.kr/news/photo/202009/209837_210397_5058.jpg',
'https://media.kingston.com/kingston/hero/ktc-hero-blog-personal-storage-drone-photography-tips-lg.jpg',
'https://cdn.imweb.me/upload/S201909210d30ce4a5f5d4/e19cbc5494c57.gif'
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home images={images} />} />
          <Route path="introduce" element={<Introduce />} />
          <Route path="store" element={<Store />} />
          <Route path="store/:productId" element={<DetailDrone />} />
          <Route path="userinfo" element={<User />} />
          <Route path="/usage" element={<Usage />} />
          <Route path="/membership" element={<Member />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
