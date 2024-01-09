import React, { useState, useEffect } from "react";
import ProductService from "../../service/ProductService";
import { useNavigate } from 'react-router-dom';



export default function Card() {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    try {
      let temp = await ProductService.getAllProducts();
      setProduct(temp);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateDetail = (id) => {
    navigate('detail/' + id);
  }
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
              className="w-1/2 md:w-1/4 lg:w-1/6 h-max bg-transparent bg-white cursor-pointer hover:shadow-xl" onClick={() => navigateDetail(values.product_id)}
            >
              <div className="rounded-m shadow-sm px-[8px] py-[8px]">
                <div className="h-[155px] overflow-hidden">
                  <img
                    className="object-cover"
                    src={values.image}
                    alt="Product Thumbnail"
                  />
                </div>
                <div className="px-2 pt-6 h-28">
                  <img
                    className="object-cover w-10 inline"
                    src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                    alt="Logo"
                  />
                  <p className="text-sm font-semibold line-clamp-2 mt-2"> {values.product_name}</p>
                </div>
                <p className="px-2 font-bold">
                  <span className=" text-red-600 font-bold">
                    {values.variants[0].price.toLocaleString()} đ
                  </span>
                </p>
                <div className="mt-4 px-2 flex justify-between items-center border-t-[1px] border-[#D3D3D3] pt-2">
                  <p className="text-sm font-normal text-[#808080] flex-shrink">Địa chỉ:</p>
                  <p className="text-xs text-[#808080] font-semibold overflow-hidden overflow-ellipsis line-clamp-1">{
                    values.address_company ? 
                    values.address_company.split(',').pop().trim() : null
                  }</p>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
}
