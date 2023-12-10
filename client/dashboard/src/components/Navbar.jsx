import React from 'react'
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="Logo">
        <NavLink to="/">
          <div className="main_logo">
            <div className="images_logo">
              <img
                src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="name_dasboard">
              <span>Better</span>
            </div>
          </div>
        </NavLink>
      </div>
      <ul className="list_option">
        <li>
          <NavLink to="/dashboard" className={`item_option`}>
            <ion-icon name="logo-buffer"></ion-icon>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={`item_option`}>
            <ion-icon name="cube-outline"></ion-icon>
            <span>Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={`item_option`}>
            <ion-icon name="cart-outline"></ion-icon>
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers" className={`item_option`}>
            <ion-icon name="person-outline"></ion-icon>
            <span>Customers</span>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
