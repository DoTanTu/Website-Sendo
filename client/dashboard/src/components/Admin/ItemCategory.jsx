import React from 'react';
import { Link } from 'react-router-dom';
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
      <td class="px-6 py-4">{value.category_name}</td>
      <td class="px-6 py-4">25/12/2023</td>
      <td class="px-6 py-4">
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