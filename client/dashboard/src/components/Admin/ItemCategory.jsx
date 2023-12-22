import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { AiFillEdit } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";

function ItemCategory() {
  return (
    
    <tr class="bg-white border-b hover:bg-gray-100 ">
      <td class="w-4 p-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "
          />
          <label for="checkbox-table-search-1" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        <div className="image_seller">
          <img
            className="w-10 h-10 rounded-full overflow-hidden object-cover"
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=ais"
            alt=""
          />
        </div>
      </th>
      <td class="px-6 py-4">Áo khoát nam</td>
      <td class="px-6 py-4">25/12/2023</td>
      <td class="px-6 py-4">
        <div className='flex'>
            <Link to="/admin/duyet-seller/1" className='mr-4'>
                <div className="btn_edit">
                    <AiFillEdit size={22} color='blue' className="hover:text-blue-600" />
                </div>
            </Link>
            <div className="btn_edit">
                <FaRegTrashCan size={20} color='red' className="hover:text-blue-600" />
            </div>
        </div>
      </td>
    </tr>
  )
}

export default ItemCategory