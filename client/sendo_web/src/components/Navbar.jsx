import React, { useState, useEffect } from "react";
import Search from "./ui/Search";

import axios from "axios";
import logo from "../img/Better_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              const response = await axios.get(
                `https://api.opencagedata.com/geocode/v1/json?key=fff35d6eaa2d404a83a6430860d2c78c&language=en&q=${latitude}+${longitude}`
              );

              const results = response.data.results[0];
              const city = results.components.city;
              const suburb =
                results.components.suburb ||
                results.components.village ||
                results.components.town;

              setLocation({ latitude, longitude, city, suburb });
            } catch (error) {
              setError(`Không thể lấy thông tin thành phố: ${error.message}`);
            }
          },
          (error) => {
            setError(`Không thể lấy vị trí: ${error.message}`);
          }
        );
      } else {
        setError("Trình duyệt không hỗ trợ lấy vị trí.");
      }
    };

    getLocation();
  }, []);
  return (
    <div className="bg-white  w-full h-full flex items-center justify-center gap-x-9 pt-2">
      <img
        src={logo}
        className="h-20 w-20 img-fluid cursor-pointer ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
        alt="logo Better"
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
            class="py-2.5 px-5 me-2  text-sm font-bold text-[#DA251E]  focus:outline-none bg-white rounded-lg  hover:bg-blue-300/30  focus:z-10 "
          >
            Trang chủ
          </button>

          <Link
            to="Login"
            type="button"
            class="py-2.5 px-5 me-2  text-sm font-bold text-gray-400 focus:outline-none bg-white rounded-lg  hover:bg-blue-300/30  focus:z-10 "
          >
            Tài khoản
          </Link>

          <button
            type="button"
            class="py-2.5 px-5 me-2  text-sm font-bold text-[#DA251E]  focus:outline-none bg-white rounded-lg  hover:bg-blue-300/30  focus:z-10 "
          >
            Shop
          </button>
        </div>
        <div className="flex gap-2 cursor-pointer  mt-3 mb-3 ">
          <p className=" text-gray-400 flex justify-center">
            Giao đến:
            <p className="text-gray-800 underline flex ">
              {location ? (
                <p className="underline text-sm text-center mt-[2px]">
                  {location.suburb}, {location.city}
                </p>
              ) : (
                <p>{error || "Đang lấy vị trí..."}</p>
              )}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
