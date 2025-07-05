import React, { useState } from 'react';
import { Outlet,  Link } from 'react-router-dom';
import SidebarMenu from './Acc/SidebarMenu';
import './App.css';

function Layout() {
  const [mode, setMode] = useState('BM');

  const handleToggle = () => {
    setMode(prev => (prev === 'BM' ? 'BI' : 'BM'));
  };
  return (
    <>
      <header>
        <h1><i>Helpdesk</i></h1>
        <nav>
          <ul className="navbar">
            <li><div className="bm-bi-toggle" style={{border:'3px solid black', borderRadius:'0.6em'}}>
        <button onClick={handleToggle}style={{backgroundColor: mode === 'BM' ? '#2AF5FF' : '#000',color: mode === 'BI' ? '#fff' : '#000'
,padding: '8px 16px',marginRight: '4px',borderRadius: '6px',border: 'none',cursor: 'pointer'}}>BM</button>
        <button onClick={handleToggle}style={{backgroundColor: mode === 'BI' ? '#2AF5FF' : '#000',color: mode === 'BI' ? '#000' : '#fff'
,padding: '8px 16px',borderRadius: '6px',border: 'none',cursor: 'pointer'}}>BI</button></div></li>
            <li><img src="https://cdn-icons-png.flaticon.com/128/1827/1827422.png" alt="" /></li>
            <li><Link to="/Account/account"><img src="https://cdn-icons-png.flaticon.com/128/40/40358.png" alt="" /></Link></li>
            <li><Link to='/Account/SignIN'><img src="https://cdn-icons-png.flaticon.com/128/1828/1828479.png" alt="" /></Link></li>
          </ul>
        </nav>
      </header>
      
      <div className="menu">
        <SidebarMenu />
        <div className="content">
          <Outlet />
          <footer className="footer">
            <p style={{fontWeight:'bold'}}>Footer Area</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Layout;