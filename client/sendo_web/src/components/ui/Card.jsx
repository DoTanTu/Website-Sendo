import React, {useState, useEffect} from "react";
import * as productService from "../../service/ListService"
export default function Card() {
  const [products, setProduct] = useState([]);
  useEffect(()=>{
    getAll();
  },[]);
  const getAll = async() =>{
    let temp = await productService.getAll();
    setProduct(temp);
  }
  return (
    <>
    {products.map((values, index) => (
    <div key={index} className="w-1/2 md:w-1/5 h-max bg-transparent p-2 rounded-md">
    <div className="rounded-md bg-blue-gray-50 shadow-md">
      <div className="m-2">
        <img
          className="object-cover"
          src={values.image}
          alt="Product Thumbnail"
        />
      </div>
      <div className="flex justify-center px-2 gap-3">
        <img
          className="object-cover w-10 my-auto"
          src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
          alt="Logo"
        />
        <p className="text-sm">{values.name}</p>
      </div>
      <h2 className="px-2 text-red-600 font-bold">{values.price} đ</h2>
      <div className="mt-4 px-2 flex justify-between">
        <p className="text-sm">{values.location}</p>
      </div>
    </div>
    </div>
    ))}
    </>
  );
}
