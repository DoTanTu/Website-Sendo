import React, { useState } from "react";
import DefaultRating from "./DefaultRating";

export default function CardDetail() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-max bg-white my-6 mx-28 rounded-lg">
      <div className="w-1/3">
        <div className="">
          <img
            className="object-cover w-96 h-96 mx-auto my-4"
            src="https://zizoou.com/cdn/shop/files/Ao-khoac-jacket-form-rong-oversize-3-1-Ao-jacket-nau_Extras-ZiZoou-Store.jpg?v=1685791120"
            alt="Product Thumbnail"
          />
        </div>
      </div>
      <div className="w-2/3 p-4 flex-col ">
        <h1 className="text-2xl font-bold">Tên sản phẩm</h1>
        <p>Thương hiệu: OEM</p>
        <h1 className="text-2xl text-red-700 font-bold">100000đ</h1>
        <DefaultRating />
        <div className="flex gap-3">
          <p className="my-auto">Chọn màu:</p>
          <div className="w-12 h-12 bg-red-300 cursor-pointer"></div>
          <div className="w-12 h-12 bg-red-300 cursor-pointer"></div>
          <div className="w-12 h-12 bg-red-300 cursor-pointer"></div>
          <div className="w-12 h-12 bg-red-300 cursor-pointer"></div>
        </div>
        <div className="flex gap-3 mt-6">
          <p className="my-auto">Chọn size:</p>
          <div className="w-12 h-6 bg-blue-gray-300/60 rounded-lg text-center cursor-pointer hover:bg-blue-gray-300/30">
            S
          </div>
          <div className="w-12 h-6 bg-blue-gray-300/60 rounded-lg text-center cursor-pointer hover:bg-blue-gray-300/30">
            L
          </div>
          <div className="w-12 h-6 bg-blue-gray-300/60 rounded-lg text-center cursor-pointer hover:bg-blue-gray-300/30">
            XL
          </div>
          <div className="w-12 h-6 bg-blue-gray-300/60 rounded-lg text-center cursor-pointer hover:bg-blue-gray-300/30">
            2XL
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <p className="my-auto">Số lượng:</p>
          <button className="border p-3" onClick={() => setCount(count - 1)}>
            -
          </button>
          <p className="border p-2"> {count} </p>
          <button className="border p-3" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        <div className="flex justify-between gap-3 mt-28">
          <button className="w-1/2 bg-blue-gray-500 p-6 text-xl font-bold rounded-lg hover:bg-blue-gray-500/60">
            Thêm vào giỏ hàng
          </button>
          <button className="w-1/2 bg-red-500 p-6  text-xl font-bold text-white rounded-lg hover:bg-red-500/60">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
}
