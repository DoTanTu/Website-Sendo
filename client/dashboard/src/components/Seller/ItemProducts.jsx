import React from 'react';
import { Button } from "@material-tailwind/react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ItemProducts(props) {
  const products = props.data;
  return (
    <>
    {
      products.map((value, index) => (
      <tr className="bg-white border-b hover:bg-gray-100 ">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  "
          />
          <label for="checkbox-table-search-1" className="sr-only">
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
      <td className="px-6 py-4 overflow-hidden max-w-[100px] whitespace-nowrap overflow-ellipsis">{value.product_name}</td>
      <td className="px-6 py-4">{value.category_name}</td>
      <td className="px-6 py-4">0775543229</td>
      <td className="px-6 py-4">1</td>
      <td className="px-6 py-4">
        <Link to="/seller/products/1">
          <div className="btn_edit">
            <AiFillEdit size={22} className="hover:text-blue-600" />
          </div>
        </Link>
      </td>
    </tr>
      ))
    }
    </>
  )
}
