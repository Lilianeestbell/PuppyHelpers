import React from 'react';
import { ConfigProvider } from 'antd';
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import 'antd/dist/antd.css';
import './App.css';
import MainHeader from './pages/components/Header';
import PuppyList from './pages/MainPage';
import MarketList from './pages/MarketPage';
import SignupPage from './pages/SignPage/signup/SignupPage';
import LoginPage from './pages/SignPage/loginIn/loginPage';

function App() {
  return (
    <React.StrictMode>
      <ConfigProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/business" element={<div><MainHeader/><MarketList /></div>} /> 
              <Route path="/home" element={<div><MainHeader/><PuppyList /></div>} /> 
              <Route path="/signup" element={<SignupPage />} /> 
              <Route path="/login" element={<LoginPage />} /> 
            </Routes>
          </BrowserRouter>
      </ConfigProvider>
    </React.StrictMode>
  );
}

export default App;
