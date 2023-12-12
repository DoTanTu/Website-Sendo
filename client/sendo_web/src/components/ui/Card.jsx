import React from "react";

export default function Card() {
  return (
    <div className=" w-1/2 md:w-1/5 h-max bg-transparent p-2 rounded-md">
      <div className="rounded-md bg-blue-gray-50 shadow-md">
        <div className="m-2">
          <img
            className="object-cover"
            src="https://media3.scdn.vn/img4/2022/02_28/O29Qw58oDDfiSFg5vUmO_simg_de2fe0_100x100_maxb.jpg"
          ></img>
        </div>
        <div className="flex justify-center px-2 gap-3">
          <img
            className="object-cover w-10 my-auto"
            src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
          ></img>
          <p className="text-sm">
            {" "}
            bộ đi chùa vải thun layrong cổ lệch tay lỡ màu hồng - b709
          </p>
        </div>
        <p className=" py-3 px-2  text-sm"> giảm giá</p>
        <h2 className=" px-2 text-red-600 font-bold"> 100000 đ</h2>
        <div className="mt-4 px-2 flex justify-between">
          <p className="text-sm">đánh giá</p>
          <p className="text-sm">ĐN</p>
        </div>
      </div>
    </div>
  );
}
