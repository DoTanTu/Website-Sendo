import React from "react";
import { Button } from "@material-tailwind/react";
import { FaThList } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { NavLink, useNavigate} from "react-router-dom";
import { FaBoxOpen } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";


export default function NavbarSeller() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }
  return (
    <div className="left_navbar w-[300px] text-red bg-red-600 sticky top-0 h-screen">
      <div className="nav_container flex flex-col justify-between h-full">
        <div className="top">
          <div className="top_logo py-11 px-6">
            <h1 className="text-2xl text-white">Dashboard Seller</h1>
          </div>
          <ul className="mt-18">
            <li>
            <NavLink to="/seller/analytics" className={({ isActive }) => (isActive ? "active-item" : "")}>
                <div className="item_nav ps-6 py-5 text-white flex items-center relative before:absolute before:left-0 before:w-1 before:rounded-2xl before:transition-all before:ease-in-out before:duration-150 before:bg-red before:h-0 before:hover:h-full hover:before:bg-white">
                  <IoBarChartSharp className="mr-5" size={22}/>
                  <span className="text-lg">Thống kê</span>
                </div>
              </NavLink>
            </li>
            <li >
              <NavLink to="/seller/products" className={({ isActive }) => (isActive ? "active-item" : "")}>
                <div className="item_nav ps-6 py-5 text-white flex items-center relative before:absolute before:left-0 before:w-1 before:rounded-2xl before:transition-all before:ease-in-out before:duration-150 before:bg-red before:h-full hover:before:bg-white">
                  <FaThList  className="mr-5" size={22}/>
                  <span className="text-lg">Danh sách sản phẩm</span>
                </div>
              </NavLink>
            </li>
            <li >
              <NavLink to="/seller/orders" className={({ isActive }) => (isActive ? "active-item" : "")}>
                <div className="item_nav ps-6 py-5 text-white flex items-center relative before:absolute before:left-0 before:w-1 before:rounded-2xl before:transition-all before:ease-in-out before:duration-150 before:bg-red before:h-full hover:before:bg-white">
                  <FaBoxOpen  className="mr-5" size={22}/>
                  <span className="text-lg">Đơn hàng</span>
                </div>
              </NavLink>
            </li>
            <li >
              <NavLink to="/seller/buyer" className={({ isActive }) => (isActive ? "active-item" : "")}>
                <div className="item_nav ps-6 py-5 text-white flex items-center relative before:absolute before:left-0 before:w-1 before:rounded-2xl before:transition-all before:ease-in-out before:duration-150 before:bg-red before:h-full hover:before:bg-white">
                <BsFillPersonVcardFill className="mr-5" size={22}/>
                <span className="text-lg">Danh sách tài khoản</span>
                </div>
              </NavLink>
            </li>
            <li >
              <NavLink to="/seller/profile" className={({ isActive }) => (isActive ? "active-item" : "")}>
                <div className="item_nav ps-6 py-5 text-white flex items-center relative before:absolute before:left-0 before:w-1 before:rounded-2xl before:transition-all before:ease-in-out before:duration-150 before:bg-red before:h-full hover:before:bg-white">
                  <IoPerson className="mr-5" size={22} />
                  <span>Cá nhân</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bottom_logout pb-7 text-center">
          <Button onClick={handleLogout} className="px-8 py-2 bg-[#f0f0f066] transition-all ease-in-out duration-100 text-white rounded-2xl hover:bg-white hover:text-red-600">
            Đăng Xuất
          </Button>
        </div>
      </div>
    </div>
  );
}
