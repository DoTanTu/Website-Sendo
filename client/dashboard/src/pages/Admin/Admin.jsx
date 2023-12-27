import React from 'react';
import { BsSearch } from "react-icons/bs";
import NavbarAdmin from '../../components/NavbarAdmin';
import { MdNotificationsActive } from "react-icons/md";
import { Input } from '@material-tailwind/react';
import { MdEmail } from "react-icons/md";
import { Outlet } from 'react-router-dom';
function Admin() {
  return (
    <div className="container">
        <div className="main_container flex">
            <NavbarAdmin />
            <div className="right_content w-full bg-gray-100">
                <div className="header flex justify-between py-4 px-4 sticky top-0 bg-white shadow-md" >
                    <div className="left_search w-[700px]">
                        <div className="group_search flex items-center shadow-sm border border-gray-300 px-10 py-1 rounded-xl bg-white">
                            <BsSearch className='mr-3' />
                            <Input className='w-[500px] outline-none border-none' placeholder='Nhập nội dung tìm kiếm' />
                        </div>
                    </div>
                    <div className="right_option flex items-center">
                        <div className="group_email mr-5 w-10 h-10 rounded-full shadow-xl flex items-center justify-center ">
                            <MdEmail color='red' />
                        </div>
                        <div className="group_email mr-5 w-10 h-10 rounded-full shadow-xl flex items-center justify-center ">
                            <MdNotificationsActive color='red' />
                        </div>
                        <div className="group_account flex items-center">
                            <div className="left_icon w-10 h-10 rounded-full overflow-hidden">
                                <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
                            </div>
                            <span className='text-red-600 font-bold ml-2'>Đỗ Tấn Từ</span>
                        </div>
                    </div>
                </div>
                <div className="contain_display px-4 py-4">
                    <div className="body_container px-5 py-6 rounded-xl shadow-2xl bg-white">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin