import React from 'react';
import { Tabs } from 'flowbite-react';
import { FaClipboardList } from "react-icons/fa";
import AllOrders from '../../components/Seller/AllOrders';
import ProgressOrder from '../../components/Seller/ProgressOrder';


export default function Orders() {
  return (
    <div>
      <div className="top_header">
        <h1>Quản lý đơn hàng</h1>
      </div>
      <div className="main_order">
        <div className="search_infor">

        </div>
        <div className="table_order">
        <Tabs aria-label="Tabs with underline" >
          <Tabs.Item active title="Tất cả đơn hàng" icon={FaClipboardList}>
              <AllOrders />
          </Tabs.Item>
          <Tabs.Item title="Chờ xử lý" >
              <ProgressOrder />
          </Tabs.Item>
        </Tabs>
        </div>
      </div>
    </div>
  )
}
