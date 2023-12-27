import React from 'react';
import ItemCategory from '../../components/Admin/ItemCategory';
import { Button } from '@material-tailwind/react';
import CategoryService from '../../service/Admin/CategoryService';
import { useState, useEffect, useCallback  } from 'react';
import Message from '../../components/LabelMessage';
import ConfirmationDialog from '../../components/Dialog';

function DanhMuc() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState(null);
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Gọi service để lấy data và đưa vào array State
  const fetchData = useCallback(async () => {
    try {
      const response = await CategoryService.getCategory();
      setCategory(response);
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

  const handleCategoryDelete = useCallback(async (categoryIdParam) => {
    try {
      setCategoryId(categoryIdParam);
      setConfirmationVisible(true);
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Xóa thất bại' });
    }
  }, []);

  const confirmDelete = useCallback(async (result) => {
    setConfirmationResult(result);
    setConfirmationVisible(false);
  }, []);

  const cancelDelete = useCallback(() => {
    setConfirmationResult(false);
    setConfirmationVisible(false);
  }, []);

  const handleEditCategory = useCallback( async (idCategory, nameCategory) => { 
    try {
      setName(nameCategory)
    } catch (error) {
      
    }
  },[]);


  useEffect(() => {
    const deleteCategory = async () => {
      try {
        const response = await CategoryService.deleteCategory(categoryId);
        if (response === 200) {
          setStatus({ type: 'success', message: 'Xóa thành công' });
          setTimeout(() => {
            setStatus(null);
          }, 2500);
          setName('');
          fetchData();
        } else {
          setStatus({ type: 'error', message: 'Xóa thất bại' });
        }
      } catch (error) {
        console.error(error);
        setStatus({ type: 'error', message: 'Xóa thất bại' });
      }
    };
  
    if (confirmationResult !== null) {
      if (confirmationResult === true) {
        deleteCategory();
      } else {
        // Xử lý khi hủy bỏ
      }
    }
  }, [confirmationResult, categoryId, fetchData, setName, setStatus]);
  
  //  Xử lý khi submit thêm danh mục
  const handleSubmit = async () => {
    try {
      const response = await CategoryService.createCategory(name);
      if (response === 201) {
        setStatus({ type: 'success', message: 'Thêm thành công' });
        setTimeout(() => {
          setStatus(null);
        }, 2500);
        setName('');
        fetchData();
      } else {
        setStatus({ type: 'error', message: 'Thêm thất bại' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Có lỗi xảy ra' });
    }
   }


  return (
    <div>
      <div className="top_title">
            <h1 className='text-lg font-bold uppercase text-gray-600'>Danh mục</h1>
        </div>
        <div className="container mt-10">
            <div className="table_infort flex">
                <div class="w-full h-fit overflow-x-auto shadow-md sm:rounded-lg">
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
                            <ItemCategory data={category} onDelete={handleCategoryDelete} onEdit={handleEditCategory} />
                        </tbody>
                    </table>
                </div>
                <div className='newCategory w-[500px] h-fit bg-red ms-5 shadow-lg rounded-lg border sticky top-32'>
                   <div className="header px-5 py-5 bg-red-500 rounded-lg ">
                     <h5 className='text-white font-bold text-center text-lg'>Thêm danh mục</h5>
                   </div>
                   <div className="main_contain py-4">
                        <div className="input_category px-3 pb-4">
                            <label className='text-gray-400 font-semibold' htmlFor="">Nhập tên danh mục:</label>
                            <input className='block px-5 py-2 border border-gray-300 w-full mt-4 focus:outline-gray-300'  type="text" placeholder='Nhập tên...' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="btn_add flex items-center justify-center mt-4">
                            <Button onClick={() => setName("")} className='bg-red-400 mr-5 rounded-sm w-24 hover:bg-red-600'>Hủy</Button>
                            <Button onClick={() => handleSubmit()} className='bg-blue-500 w-24 rounded-sm hover:bg-blue-600'>Thêm</Button>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        {status !== null && (
        <div>
          { status !== null && <Message type={status.type} message={status.message} />}
        </div>
      )}
      {confirmationVisible && (
        <ConfirmationDialog
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  )
}

export default DanhMuc