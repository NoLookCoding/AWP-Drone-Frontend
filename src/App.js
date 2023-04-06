import './App.css';
import React from 'react'
import {
  BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/definition/Layout';
import Home from './pages/Home';
import Car from './pages/store/Car';
import User from './pages/UserInfo';
import NoPage from './pages/NoPage';
import DetailDrone from './pages/store/DetailStore';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="carinfo" element = {<DetailDrone/>}/>
        <Route path="userinfo" element = {<User/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
