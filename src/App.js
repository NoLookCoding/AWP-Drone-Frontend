import './App.css';
import React from 'react'
import {
  BrowserRouter, Routes, Route } from "react-router-dom";

import Introduce from './pages/introduce/Introduce';

import Home from './pages/home/Home';

import User from './pages/UserInfo';

import NoPage from './pages/NoPage';
import Header from './pages/Header';

import Car from './pages/store/Car';
import Footer from './pages/Footer';

import { Outlet, Link } from "react-router-dom"

// import image1 from 'https://cdn.aitimes.com/news/photo/201904/46763_4_1732.jpg';
// import image2 from 'https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/drone-photography/desktop/drone-photography_P1_900x420.jpg';
// import image3 from 'https://www.cctvnews.co.kr/news/photo/202009/209837_210397_5058.jpg';

const images = ['https://cdn.pixabay.com/photo/2016/11/29/02/59/drone-1866961_1280.jpg', 
'https://cdn.pixabay.com/photo/2017/09/07/08/57/drone-2724257_1280.jpg',
'https://www.cctvnews.co.kr/news/photo/202009/209837_210397_5058.jpg'];

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Header/>}>
        <Route index element={<Home images={images}/>}/>
        <Route path="introduce" element = {<Introduce/>}/>
        <Route path="userinfo" element = {<User/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
 
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
