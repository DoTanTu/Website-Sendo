import React, {useState, useEffect, useCallback} from 'react';
import { IoSearch } from "react-icons/io5";
import { Input, Button } from '@material-tailwind/react';
import { FaFileAlt } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { Outlet, useNavigate } from 'react-router-dom';
import ProductService from '../../service/Seller/ProductService';
import ItemProducts from '../../components/Seller/ItemProducts';
export default function Products() {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const handleNewProd = () => {
        navigate('/seller/products/news');
    }

      // Gọi service để lấy data và đưa vào array State
    const fetchData = useCallback(async () => {
    try {
      const response = await ProductService.getAllProduct();
      setProduct(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  // Hiển thị dữ liệu khi load trang
  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [fetchData]);
  console.log(product);
  return (
    <div>
        <Outlet />
        <div className="header_prods">
            <h1 className='text-lg font-bold uppercase text-gray-600'>Danh sách sản phẩm</h1>
        </div>
        <div className="main_contain mt-10">
            <div className="action_data flex justify-between items-center">
                <div className="left_search flex items-center w-[400px] border-[1px] px-5 focus:border-red-300">
                    <IoSearch className='mr-5'/>
                    <Input className='w-full outline-none border-none rounded-md' placeholder='Nhập tên sản phẩm' />
                </div>
                <div className="right_action flex">
                    <Button className='shadow-lg px-5 py-2 flex items-center border-[1px] mr-5 hover:shadow-xl hover:bg-gray-200 rounded-md'>
                        <FaFileAlt color='black' size={22} className='mr-2'/>
                        <span className='text-black '>Export dữ liệu</span>
                    </Button>
                    <Button onClick={handleNewProd} className='bg-blue-700 hover:bg-blue-500 shadow-lg hover:shadow-xl border-lg  rounded-md'>
                        <div className='text-white flex items-center'>
                            <IoIosAddCircle size={22} className='mr-2' />
                            Thêm sản phẩm
                        </div>
                    </Button>
                </div>
            </div>
            <div className="filter_prods flex mt-8">
                <div className="category mr-5">
                    <select name="" id="">
                        <option value="">Danh mục</option>
                        <option value="">Áo</option>
                        <option value="">Quần</option>
                    </select>
                </div>
                <div className="Mức giá">
                    <select name="" id="">
                        <option value="">Danh mục</option>
                        <option value="">Áo</option>
                        <option value="">Quần</option>
                    </select>
                </div>
            </div>
            <div className="table_products mt-5">
            <div class=" overflow-x-auto shadow-md sm:rounded-lg border-[1px]">
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
                                    Ảnh
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Tên sản phẩm
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Danh mục
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Số lượng còn
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Số lượng đã bán
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ItemProducts data={product}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
