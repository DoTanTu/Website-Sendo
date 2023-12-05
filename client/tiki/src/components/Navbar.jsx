import React from "react";
import Search from "./ui/Search";
import Login from "./ui/Login";

const Navbar = () => {
  return (
    <div className="bg-white  w-full h-full flex items-center justify-center gap-x-9 pt-2">
      <img
        src="https://salt.tikicdn.com/ts/upload/c1/64/f7/4e6e925ea554fc698123ea71ed7bda26.png"
        className="h-20 w-20 img-fluid cursor-pointer ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
        alt="logo tiki"
      />
      <div className="flex-col w-3/5">
        <Search />
        <menu className="flex gap-4 text-gray-400 mt-3 mb-3 ">
          <menuItem className="cursor-pointer">khỏe đẹp</menuItem>
          <menuItem className="cursor-pointer">nhà cửa</menuItem>
          <menuItem className="cursor-pointer">sách </menuItem>
          <menuItem className="cursor-pointer">thể thao</menuItem>
        </menu>
      </div>
      <div className="">
        <div className="flex">
          <button
            data-modal-target="default-modal"
            data-modal-toggle="default-modal"
            type="button"
            class="py-2.5 px-5 me-2  text-sm font-bold text-blue-500  focus:outline-none bg-white rounded-lg  hover:bg-blue-300/30  focus:z-10 "
          >
            Trang chủ
          </button>

          <Login />

          <button
            type="button"
            class="py-2.5 px-5 me-2  text-sm font-bold text-blue-500  focus:outline-none bg-white rounded-lg  hover:bg-blue-300/30  focus:z-10 "
          >
            Shop
          </button>
        </div>
        <div className="flex gap-2 cursor-pointer  mt-3 mb-3 ">
          <p className=" text-gray-400">
            Giao đến:
            <span className="text-black underline">
              Q. Hải Châu, P. Hải Châu I, Đà Nẵng
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
