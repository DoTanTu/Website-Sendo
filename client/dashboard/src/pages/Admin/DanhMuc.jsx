import React from 'react';
import ItemCategory from '../../components/Admin/ItemCategory';

function DanhMuc() {
  return (
    <div>
      <div className="top_title">
            <h1 className='text-lg font-bold uppercase text-gray-600'>Danh sách seller</h1>
        </div>
        <div className="container mt-10">
            <div className="table_infort">
                <div class=" overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50  ">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  " />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Hinh ảnh
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tên danh mục
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ngày tạo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Actions
                                </th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <ItemCategory />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DanhMuc