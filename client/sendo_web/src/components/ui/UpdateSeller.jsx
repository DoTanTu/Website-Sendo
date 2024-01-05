import React, { useState} from "react";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import { IoArrowBackOutline } from "react-icons/io5";
import logo from "../../img/Better_logo_white.png";
import Toast from "../notification/Toast";
import {toast } from 'react-toastify';

export default function UpdateSeller() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleOpen = () => setOpen(!open);
  const handleSubmit = () => {
    alert("name" + name + "\n" + "địa chỉ" + "\n" + address + "\n" + "phone " + phone + "\n");
    setOpen(close)
    toast.info("Đang gửi yêu cầu");
  }

  return (
    <>
      <Toast />
      <button
        onClick={handleOpen}
        className="w-1/2 bg-gray-400 p-2  text-xl font-bold text-white rounded-lg hover:bg-red-600"
      >
        Đăng ký bán hàng
      </button>

      <Dialog
        className=" w-[800px]  h-[527px]  rounded-2xl "
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="lg"
      >
        <DialogBody className=" flex  p-0">
          <div className="w-3/5 h-[527px] p-12 ">
            <Button
              onClick={handleOpen}
              className="p-2 text-black/35 hover:text-black bg-transparent mb-5 flex items-center"
            >
              <IoArrowBackOutline size={20} className="mr-2" />
            <span className="text-[14px]">Back</span>
            </Button>
            <p className="text-2xl text-black ">Nâng cấp Seller</p>
            <p className="pt-2 text-md text-black ">
              Nhập email và mật khẩu tài khoản
            </p>

            <form>
              <p className="pt-2 text-md text-black/40   ">tantu@gmail.com</p>
              <Input
                className="pt-2 text-2xl h-full"
                variant="static"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tên doanh nghiệp muốn đăng ký"
              />
              {/* <Input
                className="pt-2 text-2xl h-full"
                variant="static"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="SĐT doanh nghiệp"
              /> */}
              <Input
                className="pt-2 text-2xl h-full"
                variant="static"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Địa chỉ doanh nghiệp"
              />
            </form>

            <button className=" mt-6 w-full text-2xl text-white py-3  bg-[#DA251E] hover:bg-red-300 rounded-md" onClick={handleSubmit}>
              Đăng ký
            </button>
          </div>

          <div className="relative w-2/5 h-[527px] bg-[#DA251E] rounded-r-2xl">
            <img
              className="absolute h-60 w-60 top-1/2 left-1/2  -translate-y-1/2 -translate-x-1/2 "
              src={logo}
            ></img>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
