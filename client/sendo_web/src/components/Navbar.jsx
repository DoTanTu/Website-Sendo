import React, { useState, useEffect } from "react";
import Search from "./ui/Search";
import TokenExtraction from "../service/TokenExtraction";
import axios from "axios";
import logo from "../img/Better_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import CustomDialog from "./ui/CustomDialog";

const Navbar = () => {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [stateUser, setStatusUser] = useState(null);

  const checkAccount = () => {

    const tokenStorage = localStorage.getItem('token');

    if(tokenStorage){
      const name = TokenExtraction.getNameUser(tokenStorage);
      setStatusUser(name);
    }
  }

  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = (result) => {
    if(result === true){
      localStorage.removeItem('token');
      navigate('/login')
    }
    setShowDialog(false);
  };

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
    checkAccount();
    getLocation();
  }, []);
  return (
    <div className="bg-white  w-full h-full flex items-center justify-center gap-x-9 pt-2">
      <Link to="/">
        {" "}
        <img
          src={logo}
          className="h-20 w-20 img-fluid cursor-pointer ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
          alt="logo Better"
        />
      </Link>

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
          {stateUser !== null ? (
            <Link
            to=""
            className="group py-2.5 px-5 me-2 text-sm font-bold text-black focus:outline-none bg-white rounded-lg hover:bg-blue-300/30 focus:z-10 relative"
          >
            <div className="flex items-center">
              <MdAccountCircle className="mr-2" size={20} />
              {stateUser}
            </div>
            <div className="group-hover:block hidden absolute top-full right-0 bg-gray-300 rounded-md overflow-hidden">
              <div className="actions pt-2">
                <div className="Profile">
                  <Link to="/profile" className="block">
                    <span className="hover:text-white hover:bg-red-400 px-12 py-2 block">Profile</span>
                  </Link>
                </div>
                <div className="Logout" onClick={handleOpenDialog}>
                  <span className="hover:text-white hover:bg-red-400 px-12 py-2 block">Logout</span>
                </div>
              </div>
            </div>
            
          </Link>
          
          ) : (
            <Link
              to="/login"
              type="button"
              class="py-2.5 px-5 me-2  text-sm font-bold text-gray-400 focus:outline-none bg-white rounded-lg  hover:bg-blue-300/30  focus:z-10 "
            >
              Tài khoản
            </Link>
          )}

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
      {
        showDialog ? (
          <CustomDialog message="Are you sure?" onClose={handleCloseDialog} />
        ): null
      }
    </div>
  );
};

export default Navbar;
