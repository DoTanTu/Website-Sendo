import React from "react";
import { useEffect } from "react";
import PaymentService from "../../service/PaymentService";

export default function DetailPayProducts() {
  const fetchData = async () => {
    try {
      console.log('hafm duojc goi')
      const response = await PaymentService.returnPayment();
      console.log("helloer");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
      {" "}
      <div className="w-full h-full flex justify-between  border-b-[1px] border-gray-500 mt-2 py-4">
        <div className="w-2/3">
          <p className="font-bold"> tên sản phảm 1</p>
          <p className="text-sm text-gray-700 line-clamp-2">Mô tả</p>
        </div>
        <div className="w-1/3 items-center ">
          <p className="font-bold text-right">100000đ</p>
        </div>
      </div>
      <div className="w-full h-full flex justify-between  border-b-[1px] border-gray-500 mt-2 py-4">
        <div className="w-2/3">
          <p className="font-bold"> tên sản phảm 1</p>
          <p className="text-sm text-gray-700 line-clamp-2">Mô tả</p>
        </div>
        <div className="w-1/3 items-center ">
          <p className="font-bold text-right">100000đ</p>
        </div>
      </div>
      <div className="w-full h-full flex justify-between  border-b-[1px] border-gray-500 mt-2 py-4">
        <div className="w-2/3">
          <p className="font-bold"> tên sản phảm 1</p>
          <p className="text-sm text-gray-700 line-clamp-2">Mô tả</p>
        </div>
        <div className="w-1/3 items-center ">
          <p className="font-bold text-right">100000đ</p>
        </div>
      </div>
    </div>
  );
}
