import React from 'react';
import { AiFillEdit } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";


function ItemCategory(props) {

  const handleDelete = (id) => {
    props.onDelete(id);
  }
  const handleEdit = (id, name) => {
    props.onEdit(id, name);
  }
  const category = props.data;
  return (
    <>
        {
          category.map((value,  index) => (
      <tr key={value.category_id} className="bg-white border-b hover:bg-gray-100 ">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td className="px-6 py-4">{value.category_name}</td>
      <td className="px-6 py-4">25/12/2023</td>
      <td className="px-6 py-4">
        <div className='flex'>
            <div className="btn_edit mr-4 cursor-pointer" onClick={() => handleEdit(value.category_id ,value.category_name)}>
                <AiFillEdit size={22} color='blue' className="hover:text-blue-600" />
            </div>
            <div className="btn_edit cursor-pointer" onClick={() => handleDelete(value.category_id)}>
                <FaRegTrashCan size={20} color='red' className="hover:text-blue-600" />
            </div>
        </div>
      </td>
    </tr>
          ))
        }
    </>
  )
}

export default ItemCategory