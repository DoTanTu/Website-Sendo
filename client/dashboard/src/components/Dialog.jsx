import { Button } from '@material-tailwind/react';
import React from 'react';
import { IoIosWarning } from "react-icons/io";


export default function Dialog({onConfirm, onCancel }) {
  return (
    <div className="confirmation-dialog fixed top-1/3 left-1/2 -translate-x-1/2 z-10">
      <div className='w-[480px] bg-white px-5 pt-5 pb-2 border-t-4 border-red-600 shadow-xl'>
        <div className='flex'>
          <div className='icon_waring w-16 flex items-center'>
            <IoIosWarning className='text-red-600' size={30} />
          </div>
          <div>
            <h1 className='text-black font-bold'>Xác nhận xóa danh mục</h1>
            <span>Bạn có chắc chắn muốn xóa danh mục này không?</span>
          </div>
        </div>
        <div className='flex justify-end mt-4 border-t-[1px] border-gray-300 pt-2'>
          <Button className='border-[1px] border-red-400 w-24 px-3 text-red-400 hover:bg-red-600 hover:text-white mr-5 py-2 rounded-sm' onClick={() => onConfirm(false)}>Hủy</Button>
          <Button className='w-24 bg-blue-500 text-white  px-3 py-2 rounded-sm hover:bg-blue-600'  onClick={() => onConfirm(true)}>Xác nhận</Button>
        </div>
      </div>
    </div>
  ) 
}
