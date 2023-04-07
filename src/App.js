import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Definition from './pages/definition/Layout';
import User from './pages/UserInfo';
import NoPage from './pages/NoPage';
import Store from './pages/store/Store';
import DetailDrone from './pages/store/DetailStore';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Usage from './pages/usage/Usage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Definition />} />
          <Route path="store" element={<Store />} />
          <Route path="store/:productId" element={<DetailDrone />} />
          <Route path="userinfo" element={<User />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/usage" element={<Usage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
