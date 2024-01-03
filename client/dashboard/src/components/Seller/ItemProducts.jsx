import React from 'react';
import { Button } from "@material-tailwind/react";
import { AiFillEdit } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";

import { Link } from "react-router-dom";
import ProductService from '../../service/Seller/ProductService';

export default function ItemProducts(props) {
  const products = props.data;

  const token = localStorage.getItem('token');
  const handleDeleteProduct = async (id) => {
   try {
      alert('Bạn muốn xóa sản phẩm :' + id);
      const result = await ProductService.deleteProduct(id, token);
      console.log(result);
      if(result.status === 200){
        alert('Xóa sản phẩm thành công');
        props.onReload();
      }
      else{
        alert('Không xóa được sản phẩm');
      }
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <>
      {products.map((value, index) => (
        <tr
          key={value.product_id}
          className="bg-white border-b hover:bg-gray-100 "
        >
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  "
              />
              <label htmlFor="checkbox-table-search-1" className="sr-only">
                checkbox
              </label>
            </div>
          </td>
          <th
            scope="row"
            className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            <div className="image_seller">
              <img
                className="w-10 h-10 rounded-full overflow-hidden object-cover"
                src={value.image}
                alt=""
              />
            </div>
          </th>
          <td className="px-6 py-4 overflow-hidden max-w-[100px] whitespace-nowrap overflow-ellipsis">
            {value.product_name}
          </td>
          <td className="px-6 py-4">{value.category_name}</td>
          <td className="px-6 py-4">
            {value.variants.reduce((start, item) => {
              start += item.stock_quantity;
              return start;
            }, 0)}
          </td>

          <td className="px-6 py-4">1</td>
          <td className="px-6 py-4 flex items-center">
            <Link to={`/seller/products/${value.product_id}`} data={value.product_id}>
              <div className="btn_edit">
                <AiFillEdit size={22} className="hover:text-blue-600" />
              </div>
            </Link>
            <div
              className="ms-4"
              onClick={() => handleDeleteProduct(value.product_id)}
            >
              <span className="hover:text-red-600 hover:cursor-pointer">
                <FaRegTrashCan size={20} />
              </span>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
