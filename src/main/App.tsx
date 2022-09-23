import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HouseList from '../house/HouseList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <Routes>
          <Route path="/" element={<HouseList/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
