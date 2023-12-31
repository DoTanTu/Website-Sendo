import React, {useState} from 'react';
import { Button } from '@material-tailwind/react';
import { VscTrash } from "react-icons/vsc";


export default function CartPage() {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div className='mb-20'>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className="left_cart w-full pe-5">
            <div className="list_cart mt-10">
              <div className="cart_item mb-4 bg-white px-5 py-2 flex items-center justify-between rounded-sm border-l-4 hover:border-l-red-500 hover:cursor-pointer transition-all ease-in-out duration-300">
                 <div className="image_prod w-24 h-24 overflow-hidden rounded-full">
                  <img src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover' alt="" />
                 </div>
                 <div className="name_prod px-2">
                    <span>Áo khoát nam rất đẹp</span>
                 </div>
                 <div className="color_prod px-3">
                    <select name="" id=""  className='border px-4 py-1'>
                      <option value="">Đỏ</option>
                      <option value="">Xanh</option>
                      <option value="">Trắng</option>
                    </select>
                 </div>
                 <div className="size_prod px-2">
                    <select name="" id="" className='border px-4 py-1'>
                      <option value="">M</option>
                      <option value="">L</option>
                      <option value="">XL</option>
                      <option value="">2XL</option>
                    </select>
                 </div>
                 <div className="number_choose flex items-center">
                  <Button className='w-6 h-6 px-0 py-0' onClick={handleDecrease}>
                    -
                  </Button>
                  <div className="number_display w-14  rounded-sm mx-3">
                    <input type="number" value={count} placeholder='1' className='w-full border border-black ps-2' />
                  </div>
                  <Button className='w-6 h-6 px-0 py-0' onClick={handleIncrease}>
                    +
                  </Button>
                 </div>
                 <div className="price_prod">
                  <span className='text-red-500'>50.000 đ</span>
                 </div>
                 <div className="delete_prod">
                  <span className='w-12 h-12 text-red-500 flex items-center justify-center hover:bg-red-500 rounded-full hover:text-white transition-all ease-in-out duration-300'>
                    <VscTrash size={20} />
                  </span>
                 </div>
              </div>
              <div className="cart_item mb-4 bg-white px-5 py-2 flex items-center justify-between rounded-sm border-l-4 hover:border-l-red-500 hover:cursor-pointer transition-all ease-in-out duration-300">
                 <div className="image_prod w-24 h-24 overflow-hidden rounded-full">
                  <img src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover' alt="" />
                 </div>
                 <div className="name_prod px-2">
                    <span>Áo khoát nam rất đẹp</span>
                 </div>
                 <div className="color_prod px-3">
                    <select name="" id=""  className='border px-4 py-1'>
                      <option value="">Đỏ</option>
                      <option value="">Xanh</option>
                      <option value="">Trắng</option>
                    </select>
                 </div>
                 <div className="size_prod px-2">
                    <select name="" id="" className='border px-4 py-1'>
                      <option value="">M</option>
                      <option value="">L</option>
                      <option value="">XL</option>
                      <option value="">2XL</option>
                    </select>
                 </div>
                 <div className="number_choose flex items-center">
                  <Button className='w-6 h-6 px-0 py-0' onClick={handleDecrease}>
                    -
                  </Button>
                  <div className="number_display w-14  rounded-sm mx-3">
                    <input type="number" value={count} placeholder='1' className='w-full border border-black ps-2' />
                  </div>
                  <Button className='w-6 h-6 px-0 py-0' onClick={handleIncrease}>
                    +
                  </Button>
                 </div>
                 <div className="price_prod">
                  <span className='text-red-500'>50.000 đ</span>
                 </div>
                 <div className="delete_prod">
                  <span className='w-12 h-12 text-red-500 flex items-center justify-center hover:bg-red-500 rounded-full hover:text-white transition-all ease-in-out duration-300'>
                    <VscTrash size={20} />
                  </span>
                 </div>
              </div>
              <div className="cart_item mb-4 bg-white px-5 py-2 flex items-center justify-between rounded-sm border-l-4 hover:border-l-red-500 hover:cursor-pointer transition-all ease-in-out duration-300">
                 <div className="image_prod w-24 h-24 overflow-hidden rounded-full">
                  <img src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover' alt="" />
                 </div>
                 <div className="name_prod px-2">
                    <span>Áo khoát nam rất đẹp</span>
                 </div>
                 <div className="color_prod px-3">
                    <select name="" id=""  className='border px-4 py-1'>
                      <option value="">Đỏ</option>
                      <option value="">Xanh</option>
                      <option value="">Trắng</option>
                    </select>
                 </div>
                 <div className="size_prod px-2">
                    <select name="" id="" className='border px-4 py-1'>
                      <option value="">M</option>
                      <option value="">L</option>
                      <option value="">XL</option>
                      <option value="">2XL</option>
                    </select>
                 </div>
                 <div className="number_choose flex items-center">
                  <Button className='w-6 h-6 px-0 py-0' onClick={handleDecrease}>
                    -
                  </Button>
                  <div className="number_display w-14  rounded-sm mx-3">
                    <input type="number" value={count} placeholder='1' className='w-full border border-black ps-2' />
                  </div>
                  <Button className='w-6 h-6 px-0 py-0' onClick={handleIncrease}>
                    +
                  </Button>
                 </div>
                 <div className="price_prod">
                  <span className='text-red-500'>50.000 đ</span>
                 </div>
                 <div className="delete_prod">
                  <span className='w-12 h-12 text-red-500 flex items-center justify-center hover:bg-red-500 rounded-full hover:text-white transition-all ease-in-out duration-300'>
                    <VscTrash size={20} />
                  </span>
                 </div>
              </div>
            
            </div>
          </div>
          <div className="right_checkout w-[400px] mt-10 bg-white rounded-sm shadow-sm h-fit">
            <div className="header_checkout  px-5 border-b-2 py-4">
              <span className='text-lg font-semibold'>Sản phẩm đã chọn</span>
            </div>
            <div className="main px-3 py-2">
              <div className="price_some flex justify-between">
                <span>Tạm tính:</span>
                <span className='font-semibold text-red-600'>400.000 đ</span>
              </div>
              <div className="btn_checkout mt-5 flex justify-center">
                <Button className='bg-red-500 w-full'>Mua hàng</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
