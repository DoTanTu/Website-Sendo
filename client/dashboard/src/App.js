
import React from 'react';
import './index.js';
import { BrowserRouter, Routes , Navigate,  Route} from "react-router-dom";
import Login from './pages/Login';
import Admin from './pages/Admin/Admin.jsx';
import Seller from './pages/Seller/Seller.jsx';
import ThongKe from './pages/Admin/ThongKe.jsx';
import DanhMuc from './pages/Admin/DanhMuc.jsx';
import DuyetSeller from './pages/Admin/DuyetSeller.jsx';
import Profile from './pages/Admin/Profile.jsx';
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/seller" element={<Seller />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="thong-ke" element={<ThongKe />} />
            <Route path="danh-muc" element={<DanhMuc />} />
            <Route path="duyet-seller" element={<DuyetSeller />} />
            <Route path="profile" element={<Profile />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
