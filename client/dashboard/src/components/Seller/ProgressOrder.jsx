import React from 'react'
import ItemProgressOrder from './ItemProgressOrder'

export default function ProgressOrder() {
  return (
    <div>
    <div className="table_infort">
    <div className=" overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "
                />
                <label for="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-2 py-3">
              Mã đơn hàng
            </th>
            <th scope="col" className="px-2 py-3">
              Khách hàng
            </th>
            <th scope="col" className="px-2 py-3">
              Trạng thái
            </th>
            <th scope="col" className="px-2 py-3">
              Thanh toán
            </th>
            <th scope="col" className="px-2 py-3">
              Ngày tạo
            </th>
            <th scope="col" className="px-2 py-3">
              Tổng tiền
            </th>
            <th scope="col" className="px-2 py-3">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          <ItemProgressOrder />
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}
