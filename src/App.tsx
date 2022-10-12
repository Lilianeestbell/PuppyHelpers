import React from 'react';
import { ConfigProvider } from 'antd';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
// import { ThemeProvider } from 'styled-components';
// import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import MainHeader from './pages/components/Header';
import PuppyList from './pages/MainPage';

function App() {
  // const routerDom = () => (
  //   <Switch>
  //     <Route
  //       path="/" 
  //     >
  //       <PuppyList/>
  //     </Router>
  //   </Switch>
  // )
  // console.log('routerDom: ', routerDom);
  return (
    <React.StrictMode>
      <ConfigProvider>
        <MainHeader />
          <BrowserRouter>
            <Switch>
              <Route path="/home" component={PuppyList} /> 
            </Switch>
          </BrowserRouter>
      </ConfigProvider>
    </React.StrictMode>
  );
}

export default App;
