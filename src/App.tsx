import React from 'react';
import './App.scss';
import logo from  './static/image/logo.jpg';


function App() {
  return <div className="app-root">
    <div className='app-header'>里程工具箱</div>
    <img src={logo}></img>
  </div>
}
export default App