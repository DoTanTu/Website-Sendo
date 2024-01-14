import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import logo from "../img/Better_logo_white.png";
import UserService from "../service/UserService";
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';
import Toast from "../components/notification/Toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const respone = await UserService.userLogin(email, password);
      const token = respone.data.token;
      const is_Seller = jwtDecode(token).is_Seller;
      const isVerified = jwtDecode(token).is_verified;
      if(respone.status === 200 && isVerified === 1){
        localStorage.setItem('token', token);
        alert("Đăng nhập thành công!");
        navigate("/");
      }
      else if(respone.status === 200 && isVerified === 0){
        toast.warn("Vui lòng verified email trước khi đăng nhập")
      }
    } catch (error) {
      alert("Sai mật khẩu hoặc passwword");
    }
  };
  return (
    <div className="flex p-32 shadow-lg">
      <Toast />
      <div className="w-[1200px] flex">
        <div className="w-2/5 h-[527px] p-12 shadow-lg bg-white rounded-l-2xl">
          <p className="text-2xl text-black ">Xin Chào,</p>
          <p className="pt-2 text-md text-black ">
            Đăng nhập hoặc Tạo tài khoản
          </p>
          <Input
            className="pt-2 text-2xl h-full"
            variant="static"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
          />
          <Input
            className="pt-2 text-2xl h-full"
            variant="static"
            placeholder="Mật khẩu"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button
            className=" mt-6 w-full text-2xl text-white py-3  bg-[#DA251E] hover:bg-red-300 rounded-md cursor-pointer"
            type="submit"
            disabled={email && password ? false : true}
            onClick={handleLogin}
            loading={isLoading}
          >
            Đăng nhập
          </button>{" "}
          {token ? <p>Đăng nhập thành công</p> : null}
          <p className="mt-4 ">
            Nếu chưa có tài khoản
            <Link
              to="/signup"
              className="px-1 text-blue-600 w-full text-center underline"
            >
              Đăng ký tại đây
            </Link>
          </p>
          <div className="flex gap-4 items-center mt-8">
            <hr className="w-full h-[1px] bg-blue-gray-300"></hr>
            <p className="text-sm w-[400px]">Hoặc tiếp tục bằng</p>
            <hr className="w-full h-[1px] bg-blue-gray-300 text-base"></hr>
          </div>
          <div className="w-full flex gap-4 justify-center mt-6">
            <button className="w-14 h-14 bg-lime-400 rounded-full">
              <img
                className="w-full h-full "
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
              ></img>
            </button>
            <button className="w-14 h-14 border-1 shadow-lg rounded-full">
              <img
                className="w-full h-full p-1"
                src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227"
              ></img>
            </button>
          </div>
        </div>
        <div className="relative w-2/5 h-[527px] bg-[#DA251E] rounded-r-2xl shadow-lg">
          <img
            className="absolute h-60 w-60 top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 "
            src={logo}
          ></img>
        </div>
      </div>
    </div>
  );
}
