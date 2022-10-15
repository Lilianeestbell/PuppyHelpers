import React from 'react';
import { ConfigProvider } from 'antd';
import { Route, BrowserRouter, Routes} from 'react-router-dom'
import 'antd/dist/antd.css';
import './App.css';
import MainHeader from './pages/components/Header';
import PuppyList from './pages/MainPage';
import MarketList from './pages/MarketPage';

function App() {
  return (
    <React.StrictMode>
      <ConfigProvider>
          <BrowserRouter>
            <MainHeader/>
            <Routes>
              <Route path="/business" element={<MarketList />} /> 
              <Route path="/home" element={<PuppyList />} /> 
            </Routes>
          </BrowserRouter>
      </ConfigProvider>
    </React.StrictMode>
  );
}

export default App;
