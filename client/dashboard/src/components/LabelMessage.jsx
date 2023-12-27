import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";

const Message = ({ type, message }) => {
    const getMessageStyle = () => {
      switch (type) {
        case 'success':
          return 'bg-green-500';
        case 'error':
          return 'bg-red-500';
        default:
          return 'bg-gray-500';
      }
    };
  
    return (
      <div className={`fixed top-0 left-0 py-2 w-full ${getMessageStyle()} text-center`}>
        <div className="content_message flex items-center justify-center">
          <IoIosArrowDropdown className="mr-5 text-white" />
          <h2 className="text-white font-semibold">{message}</h2>
        </div>
      </div>
    );
  };
export default Message