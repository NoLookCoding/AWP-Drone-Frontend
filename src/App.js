import './App.css';
import React from 'react'
import {
  BrowserRouter, Routes, Route } from "react-router-dom";

import Definition from './pages/definition/Layout';
import Home from './pages/Home';
import Car from './pages/store/Car';
import User from './pages/UserInfo';
import NoPage from './pages/NoPage';
import DetailDrone from './pages/store/DetailStore';
import Header from './pages/Header';
import Footer from './pages/Footer';

import { Outlet, Link } from "react-router-dom"


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
 
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
