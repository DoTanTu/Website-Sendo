import React , { useState }from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserService from "../service/UserService";
import { toast } from 'react-toastify';
import Toast from "../components/notification/Toast";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState('');

  //Xử lý đăng ký từ người dùng
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await UserService.userRegister(name, email, password);
      console.log(result.status);
      if(result.status === 200){
        toast.success("Tạo tài khoản thành công, vui lòng check email");
        setTimeout(() => {
          navigate('/login');
        }, "2000");
      }else 
        if(result.status === 400){
          toast.warn("Email này đã tồn tại, vui lòng chọn email khác");
        }
        else{
          toast.error("Tạo tài khoản không thành công!");
        }
    } catch (error) {
       console.log(error);
    }
  };
  return (
    <>
      <div className="flex justify-center place-items-center h-screen bg-red-500 ">
        <Toast />
      <Card className="px-7 py-5 h-[650px] max-w-[450px]" shadow={false}>
        <Link to="/">
          <Button className="px-6 hover:bg-red-500 hover:text-white py-1 text-black bg-transparent mb-5">Back</Button>
        </Link>
        <Typography variant="h4" color="blue-gray">
          Đăng ký tài khoản
        </Typography>
        <Typography color="gray" className="mt-1 font-normal wrap">
          Rất vui được gặp bạn! Nhập thông tin của bạn để đăng ký.
        </Typography>
        <form className="mt-8 mb-2"
         onSubmit={handleSubmit}
         >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Họ tên
            </Typography>
            <Input
              size="lg"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 !py-1"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="name"
              onChange={ e => setName(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email của bạn
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
            {error && (
            <div className="text-red-500 text-sm mb-4">
              {error}
            </div>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Mật khẩu
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button className="bg-red-600 mt-10" fullWidth type="submit">
            sign up
          </Button>
        </form>
      </Card>
    </div>
    </>
  );
}
