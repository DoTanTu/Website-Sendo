
import React, { useState } from 'react';
import './App.css';
import "./assets/css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Orders from "./pages/Orders";
import Customers from "./pages/Customer";
import Dashboard from "./pages/Dashboard";
function App() {
  const [leftBannerDisplay, setLeftBannerDisplay] = useState('block');

  const handleContainTitleClick = () => {
    setLeftBannerDisplay((prevDisplay) => (prevDisplay === 'block' ? 'none' : 'block'));
  };
  return (
    <>
    <Router>
      <div className='main_dashboard'>
        <div className="left_banner" style={{ display: leftBannerDisplay }}>
          <Navbar />
        </div>
        <div className='right_main'>
          <Header onContainTitleClick={handleContainTitleClick} />
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='/orders' element={<Orders />}/>
            <Route path='/customers' element={<Customers />}/>
          </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
