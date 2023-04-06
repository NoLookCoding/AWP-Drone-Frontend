import './App.css';
import React from 'react'
import {
  BrowserRouter, Routes, Route } from "react-router-dom";

import Definition from './pages/definition/Layout';
import Home from './pages/Home';
import Car from './pages/store/Car';
import User from './pages/UserInfo';
import NoPage from './pages/NoPage';
import Store from './pages/store/Store';
import DetailDrone from './pages/store/DetailStore';
import Header from './pages/Header';
import Footer from './pages/Footer';

import { Outlet, Link } from "react-router-dom"
import Layout from './pages/definition/Layout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Header/>}>
        <Route index element = {<Definition/>}/>
        <Route path="store" element = {<Store/>}/>
        <Route path="store/:indexOfList" element = {<DetailDrone/>}/>
        <Route path="userinfo" element = {<User/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
 
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
