import React from 'react';
import { Button } from "@material-tailwind/react";

export default function ItemsRequireSeller() {
    const handleCancle = () => {
        alert('Cancle');
    }
    const handleAccept = () => {
        alert('Accept');
    }
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
            src="https://t3.ftcdn.net/jpg/02/99/04/20/240_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
            alt=""
          />
        </div>
      </th>
      <td class="px-6 py-4">Trần Công Lập</td>
      <td class="px-6 py-4">tconglap@gmail.com</td>
      <td class="px-6 py-4">0775543229</td>
      <td class="px-6 py-4">21/12/2023</td>
      <td class="px-6 py-4">
        <span className="text-orange-600 font-semibold rounded-xl bg-orange-100 py-1 px-2 text-[12px] shadow-none capitalize">
          Chưa duyệt
        </span>
      </td>
      <td class="px-6 py-4">
        <Button className='w-20 bg-red-100 border border-red-500 rounded-full py-[6px] hover:bg-red-500 hover:text-white text-red-500 mr-2' onClick={() => handleCancle()}>
            Hủy
        </Button>
        <Button className='w-20 bg-blue-100 border border-blue-500 rounded-full py-[6px] hover:bg-blue-500 hover:text-white text-blue-500' onClick={() => handleAccept()}>
            Duyệt
        </Button>
      </td>
    </tr>
  )
}
