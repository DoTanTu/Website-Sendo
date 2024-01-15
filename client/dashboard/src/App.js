
import React from 'react';
import './index.js';
import { BrowserRouter, Routes ,  Route} from "react-router-dom";
import Login from './pages/Login';
import Admin from './pages/Admin/Admin.jsx';
import Seller from './pages/Seller/Seller.jsx';
import ThongKeSeller from './pages/Seller/ThongKe.jsx';
import ThongKeAdmin from './pages/Admin/ThongKe';
import DanhMuc from './pages/Admin/DanhMuc.jsx';
import ManagerSeller from './pages/Admin/ManagerSeller.jsx';
import ProfileAdmin  from './pages/Admin/Profile.jsx';
import Products from './pages/Seller/Products.jsx';
import Orders from './pages/Seller/Orders.jsx';
import Buyer from './pages/Seller/Buyer.jsx';
import ProfileSeller from './pages/Seller/Profile.jsx';
import NewProducts from './pages/Seller/NewProducts.jsx';
import EditProduct from './pages/Seller/EditProduct.jsx';
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/seller" element={<Seller />} >
            <Route index path="/seller" element={<ThongKeSeller />} />
            <Route path="analytics" element={<ThongKeSeller />} />
            <Route path="products" element={<Products />} >
              <Route path=":id" element={<EditProduct />} />
            </Route>
            <Route path="orders" element={<Orders />} />
            <Route path="buyer" element={<Buyer />} />
            <Route path="profile" element={<ProfileSeller />} />
            <Route path="products/news" element={<NewProducts />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index path="/admin" element={<DanhMuc />} />
            <Route path="thong-ke" element={<ThongKeAdmin />} />
            <Route path="danh-muc" element={<DanhMuc />} />
            <Route path="duyet-seller" element={<ManagerSeller />} />
            <Route path="profile" element={<ProfileAdmin />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
