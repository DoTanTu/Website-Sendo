import React, { useState, useEffect } from "react";
import DefaultRating from "./DefaultRating";
import { useParams} from "react-router-dom";
import ProductService from "../../service/ProductService";
import changValue from "../convert/color";
import { messageAlert } from "../convert/message";

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
        <div className="flex h-max bg-white my-6 mx-28 rounded-lg">
          <div className="w-1/3">
            <div className="">
              <img
                className="object-cover w-96 h-96 mx-auto my-4"
                src={dataProduct.image}
                alt="Product Thumbnail"
              />
            </div>
          </div>
          <div className="w-2/3 p-4 flex-col ">
            <h1 className="text-2xl font-bold">{dataProduct.product_name}</h1>
            <p>Thương hiệu: OEM</p>
            <div className="rating mt-2">
              <DefaultRating />
            </div>
            <h1 className="text-2xl text-red-700 font-semibold mt-5">{dataProduct.variants[0].price.toLocaleString()} đ</h1>
            
            <div className="flex gap-3 mt-3">
              <p className="my-auto">Chọn màu:</p>
              <div className="w-5 h-5 bg-red-300 cursor-pointer"></div>
              <div className="w-5 h-5 bg-red-300 cursor-pointer"></div>
              <div className="w-5 h-5 bg-red-300 cursor-pointer"></div>
              <div className="w-5 h-5 bg-red-300 cursor-pointer"></div>
            </div>
            <div className="flex gap-3 mt-6">
              <p className="my-auto">Chọn size:</p>
              {dataProduct.variants ? dataProduct.variants.map((variant, index) => (
                <div
                  key={index} // Hãy thêm key cho mỗi phần tử khi lặp
                  className="w-12 h-6 bg-blue-gray-300/60 rounded-lg text-center cursor-pointer hover:bg-blue-gray-300/30"
                  value={variant.size}
                >
                  {changValue(variant.size_id)}
                </div>
              )):null}

              
              
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
              <button className="border p-3" id="button-plus" onClick={onPress}>
                +
              </button>
            </div>
            <div className=" mt-10">
              <button className="w-64 bg-blue-gray-500 p-2 text-xl text-white font-semibold rounded-sm hover:bg-blue-gray-500/60 mr-5 hover:font-bold" onClick={addToCart}>
                Thêm vào giỏ hàng
              </button>
              <button className="w-64 bg-red-500 p-2  text-xl font-semibold text-white rounded-sm hover:bg-red-500/60 hover:font-bold">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      ):null
      }
    </>
  );
}
