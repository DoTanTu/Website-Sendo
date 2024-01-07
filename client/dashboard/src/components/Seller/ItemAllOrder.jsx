import React from 'react';
import { Button } from "@material-tailwind/react";

export default function ItemAllOrder() {
    const handleCancle = () => {
        alert('Cancle');
    }
    const handleAccept = () => {
        alert('Accept');
    }
  return (
    <tr class="bg-white border-b hover:bg-gray-100 ">
      <td class="w-4 p-4 whitespace-nowrap">
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
      <td class="px-2 py-4">1234</td>
      <td class="px-2 py-4 whitespace-nowrap">Nguyễn Văn A</td>
      <td class="px-2 py-4">Trần Công Lập</td>
      <td class="px-2 py-4">tconglap@gmail.com</td>
      <td class="px-2 py-4">0775543229</td>
      <td class="px-2 py-4">21/12/2023</td>
      <td class="px-2 py-4">
        <span className="text-orange-600 font-semibold rounded-xl bg-orange-100 py-1 px-2 text-[12px] shadow-none capitalize">
          Chưa duyệt
        </span>
      </td>
      <td class="px-6 py-4">
        <Button className='w-20 bg-red-100 border border-red-500 rounded-full py-[6px] hover:bg-red-500 hover:text-white text-red-500 mr-2' onClick={() => handleCancle()}>
            Hủy
        </Button>
      
      </td>
    </tr>
  )
}
