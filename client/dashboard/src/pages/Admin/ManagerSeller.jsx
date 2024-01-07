import React from 'react';
import { Tabs } from 'flowbite-react';
import { HiUserCircle } from 'react-icons/hi';
import AcceptSeller from './AcceptSeller';
import ListSeller from './ListSeller';
import { MdFormatListNumbered } from "react-icons/md";

function ManagerSeller() {
  return (
    <div>
      <div className="top_title">
        <h1 className="text-lg font-bold uppercase text-gray-600">
          Danh sách seller
        </h1>
      </div>
      <div className="container mt-10">
        <Tabs aria-label="Tabs with underline" >
          <Tabs.Item active title="Duyệt yêu cầu" icon={HiUserCircle}>
            <AcceptSeller />
          </Tabs.Item>
          <Tabs.Item title="Danh sách Seller" icon={MdFormatListNumbered}>
           <ListSeller />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>
  );
}

export default ManagerSeller