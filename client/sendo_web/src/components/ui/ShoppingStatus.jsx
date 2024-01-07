import React from "react";

export default function ShoppingStatus() {
  return (
    <div className="">
      <div className="w-full flex gap-3 items-center">
        <div className=" flex flex-col justify-center items-center p-1 border-[3px] border-green-700 rounded-full w-28">
          <p className="text-center text-xs font-bold text-green-700">
            Shopping cart
          </p>
        </div>
        <div className=" w-12 h-[3px] bg-green-700 "></div>
        <div className=" flex flex-col justify-center items-center p-1 border-[3px] border-green-700 rounded-full w-20">
          <p className="text-center text-xs  font-bold text-green-700">
            Checkout
          </p>
        </div>
        <div className=" w-12  h-[3px] bg-gray-600"></div>
        <div className=" flex flex-col justify-center items-center p-1 border-[3px] border-gray-600 rounded-full w-20">
          <p className="text-center text-xs  font-bold text-gray-600">Finish</p>
        </div>
      </div>
    </div>
  );
}
