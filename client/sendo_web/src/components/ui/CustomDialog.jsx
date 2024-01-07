import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';

const CustomDialog = ({ message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleConfirm = () => {
    setIsVisible(true);
    onClose(true); 
  };

  const handleCancel = () => {
    setIsVisible(false);
    onClose(false);
  };

  return (
    <div className={`dialog ${isVisible ? 'visible' : 'hidden'} fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white border-t-2 border-red-500 w-[300px] px-5 py-2`}>
      <div className="content">
        <p className='font-bold text-lg'>{message}</p>
        <div className='mt-4 flex justify-end'>
            <Button className=' px-3 mr-3 bg-blue-600 rounded-sm py-[6px]' onClick={handleConfirm}>Đồng ý</Button>
            <Button className=' px-3 bg-red-400 rounded-sm py-[6px]' onClick={handleCancel}>Hủy</Button>
        </div>
      </div>
    </div>
  );
};

export default CustomDialog;
