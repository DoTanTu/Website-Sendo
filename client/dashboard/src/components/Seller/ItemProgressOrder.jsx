import React from 'react';
import { Button } from "@material-tailwind/react";

export default function ItemProgressOrder() {
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
      <td class="px-2 py-4">Chờ duyệt</td>
      <td class="px-2 py-4">Trực tiếp</td>
      <td class="px-2 py-4">21/12/2023</td>
      <td class="px-2 py-4">500000</td>
      
      <td class="px-2 py-4">
        <Button className='px-0 w-24 bg-green-100 border border-green-500 rounded-full py-[6px] hover:bg-green-500 hover:text-white text-green-500 mr-2' onClick={() => handleCancle()}>
            Chi tiết
        </Button>
      
      </td>
    </tr>
  )
}
