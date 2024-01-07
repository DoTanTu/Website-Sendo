import React, { useState, useEffect } from "react";
import DefaultRating from "./DefaultRating";
import { useParams} from "react-router-dom";
import ProductService from "../../service/ProductService";
import changeSize from "../convert/size";
import changeColor from "../convert/color";
import { messageAlert } from "../convert/message";
import { Button } from '@material-tailwind/react';
import { SlUserFollow } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import { FaStore } from "react-icons/fa";




export default function CardDetail() {
  const { id } = useParams();
  const [value, setValue] = useState(1);
  const [min_value, setMinValue] = useState(0);
  const [dataProduct, setDataProduct] = useState();

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      let temp = await ProductService.getProductDetail(id);
      setDataProduct(temp);
    } catch (error) {
      console.log(error);
    }
  };

  const onPress = (e) => {
    const number = Number(e.target.value);

    if (e.target.id === "button-plus") {
      setValue(value + number);
    } else if (e.target.id === "button-minus") {
      if (value < min_value) {
        alert("Giá trị không được âm");
      } else {
        setValue(value - number);
      }
    }
  };

  const addToCart = () => {
    messageAlert();
  }
  return (
    <>
      {dataProduct ? (
        <div className=" h-max ">
          <div className="flex bg-white my-6 mx-28 rounded-lg">
            <div className="w-1/3">
              <div className="">
                <img
                  className="object-cover w-96 h-96 mx-auto my-4"
                  src={dataProduct.image}
                  alt="Product Thumbnail"
                />
              </div>
            </div>
            <div className="w-2/3 p-4 ps-16 flex-col ">
              <h1 className="text-2xl font-bold">{dataProduct.product_name}</h1>
              <p>Thương hiệu: OEM</p>
              <div className="rating mt-2">
                <DefaultRating />
              </div>
              <h1 className="text-2xl text-red-700 font-semibold mt-5">
                {dataProduct.variants[0].price.toLocaleString()} đ
              </h1>

              <div className="flex gap-3 mt-3 items-center">
                <p className="my-auto">Chọn màu:</p>
                {dataProduct.variants
                  ? dataProduct.variants.map((variant, index) => (
                      <div className={`w-5 h-5 border-2 border-${changeColor(variant.color_id)} cursor-pointer rounded-full flex items-center justify-center`}>
                        <div className={`w-4 h-4 bg-${changeColor(variant.color_id)} cursor-pointer rounded-full`}></div>
                      </div>
                  )):null
                  } 
              </div>
              <div className="flex gap-3 mt-6">
                <p className="my-auto">Chọn size:</p>
                {dataProduct.variants
                  ? dataProduct.variants.map((variant, index) => (
                      <div
                        key={index} // Hãy thêm key cho mỗi phần tử khi lặp
                        className="w-12 h-6 bg-blue-gray-300/60 rounded-lg text-center cursor-pointer hover:bg-blue-gray-300/30"
                        value={variant.size}
                      >
                        {changeSize(variant.size_id)}
                      </div>
                    ))
                  : null}
              </div>
              <div className="flex gap-3 mt-6">
                <p className="my-auto">Số lượng:</p>
                <button
                  className="border p-3"
                  id="button-minus"
                  onClick={onPress}
                >
                  -
                </button>

                <input
                  className="border p-2"
                  type="number"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  className="border p-3"
                  id="button-plus"
                  onClick={onPress}
                >
                  +
                </button>
              </div>
              <div className=" mt-10">
                <button
                  className="w-64 bg-blue-gray-500 p-2 text-xl text-white font-semibold rounded-sm hover:bg-blue-gray-500/60 mr-5 hover:font-bold"
                  onClick={addToCart}
                >
                  Thêm vào giỏ hàng
                </button>
                <button className="w-64 bg-red-500 p-2  text-xl font-semibold text-white rounded-sm hover:bg-red-500/60 hover:font-bold">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
          <div className="descriptionPlus mt-5 my-6 mx-28 rounded-lg">
            <div className="flex">
              <div className="infor_seller w-[430px] bg-white px-4 py-4 rounded-lg sticky top-[50px] me-5 shrink-0 h-fit">
                  <div className="title_introlduce">
                    <span className="font-semibold text-xl">Thông tin nhà cung cấp</span>
                  </div>
                  <div className="top_seller flex mt-4">
                    <div className="image_seller w-14 h-14 overflow-hidden rounded-full">
                      <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8" className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="name_seller ms-5 ">
                      <span className="font-semibold text-lg">Nguyễn văn a</span>
                      <span className="text-gray-500 block">Hồ chí mính</span>
                    </div>
                  </div>
                  <div className="bottom_seller mt-5 flex items-center">
                    <Button className="bg-gray-300 text-gray-700 shadow-none flex items-center py-2 px-4 rounded-md me-3">
                      <SlUserFollow size={18} className="mr-2"/>
                      <span>Theo dõi shop</span>
                    </Button>
                    <Button className="bg-gray-300 text-gray-700 shadow-none flex items-center py-2 px-4 rounded-md me-3">
                       <FaStore size={18} className="mr-2" />
                      <span>Vào shop</span>
                    </Button>
                    <Button className="bg-gray-300 text-gray-700 shadow-none flex items-center py-2 px-4 rounded-md ">
                      <IoCall size={18} className="mr-2" />
                    </Button>
                  </div>
              </div>
              <div className="desc_prod  bg-white px-4 py-4 rounded-lg w-full">
                <div className="title_desc">
                  <span className="text-lg font-semibold">Mô tả chi tiết về sản phẩm</span>
                </div>
                <div className="div_content mt-4">
                  <div dangerouslySetInnerHTML={{ __html: dataProduct.description }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
