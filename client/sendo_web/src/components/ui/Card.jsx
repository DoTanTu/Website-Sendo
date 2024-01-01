import React, { useState, useEffect } from "react";
import ProductService from "../../service/ProductService";

export default function Card() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  const getAll = async () => {
    try {
      let temp = await ProductService.getAllProducts();
      setProduct(temp);
    } catch (error) {

    }
  };
  // console.log(products);
  // const truncateString = (str, num) => {
  //   if (str?.length > num) {
  //     return str.slice(0, num) + "...";
  //   } else {
  //     return str;
  //   }
  // };

  return (
    <>
      {products
        ? products.map((values, index) => (
            <div
              key={values.product_id}
              className="w-1/2 md:w-1/4 lg:w-1/5 h-max bg-transparent p-2 rounded-md cursor-pointer"
            >
              <div className="rounded-md bg-blue-gray-50 shadow-md">
                <div className="m-2">
                  <img
                    className="object-cover w-32 h-44 mx-auto my-4"
                    src={values.image}
                    alt="Product Thumbnail"
                  />
                </div>
                <div className="flex justify-between px-2 gap-3 mb-8">
                  <img
                    className="object-cover w-10 my-auto"
                    src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                    alt="Logo"
                  />
                  <p className="text-sm truncate"> {values.product_name}</p>
                </div>
                <p className="px-2 font-bold">
                  Giá:
                  <span className=" text-red-600 font-bold">
                    {values.variants[0].price} đ
                  </span>
                </p>
                <div className="mt-4 px-2 flex justify-between">
                  <p className="text-sm">{values.address}</p>
                  <p className="text-xs">chi tiết</p>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}
