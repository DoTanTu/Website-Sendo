import React from 'react';
import { NavLink } from "react-router-dom";

export default function Header({ onContainTitleClick }) {
  return (
    <div className='header_dashboard'>
      <div className="left_header">
        <div className="contain_title" onClick={onContainTitleClick}>
        <ion-icon name="filter"></ion-icon>
          <div className="title_dashboard">
            <span>Dashboard</span>
          </div>
        </div>
      </div>
      <div className="right_header">
        <div className="notification">
          <ion-icon name="notifications"></ion-icon>
        </div>
        <div className="account_seller">
            <div className="image_account">
              <img src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="right_account">
              <div className="name_account">
                <h5>Diep Minh Hieu</h5>
                <small>seller</small>
              </div>
              <div className="option_common">
                <ul>
                  <li>
                  <NavLink to='/profile'>
                    <ion-icon name="person-outline"></ion-icon>
                    <span>Profile</span>
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to='/logout'>
                  <ion-icon name="exit-outline"></ion-icon>
                    <span>Logout</span>
                  </NavLink>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
