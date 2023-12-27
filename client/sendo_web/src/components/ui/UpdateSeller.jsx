import React from "react";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";

import logo from "../../img/Better_logo_white.png";

export default function UpdateSeller() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button
        onClick={handleOpen}
        className="w-1/2 bg-red-500 p-2  text-xl font-bold text-white rounded-lg hover:bg-red-500/60"
      >
        Nâng Cấp
      </button>

      <Dialog
        className=" w-[800px]  h-[527px]   rounded-2xl "
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
              className="p-0 text-black bg-transparent mb-5"
            >
              Back
            </Button>
            <p className="text-2xl text-black ">Nâng cấp Seller</p>
            <p className="pt-2 text-md text-black ">
              Nhập email và mật khẩu tài khoản
            </p>

            <form>
              <p className="pt-2 text-md text-black/40   ">tantu@gmail.com</p>
              <Input
                type="password"
                className="pt-2 text-2xl h-full"
                variant="static"
                placeholder="Mật khẩu"
              />
              <Input
                className="pt-2 text-2xl h-full"
                variant="static"
                placeholder="Tên doanh nghiệp muốn đăng ký"
              />
              <Input
                className="pt-2 text-2xl h-full"
                variant="static"
                placeholder="SĐT doanh nghiệp"
              />
              <Input
                className="pt-2 text-2xl h-full"
                variant="static"
                placeholder="Địa chỉ doanh nghiệp"
              />
            </form>

            <button className=" mt-6 w-full text-2xl text-white py-3  bg-[#DA251E] hover:bg-red-300 rounded-md">
              Nâng cấp
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
