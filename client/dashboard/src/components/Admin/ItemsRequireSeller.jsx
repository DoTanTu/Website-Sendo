import React from 'react';
import { Button } from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import SellerService from '../../service/Admin/SellerService';
import Toast from '../Toast';

export default function ItemsRequireSeller() {

  const [id , setId] = useState("");
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [data, setData] = useState([]);

    const handleCancle = () => {
        alert('Cancle');
    }
    const handleAccept = async (e, id) => {
        e.preventDefault();
        try{
          const result = await SellerService.SellerApproved(id);
          console.log(result);
          if(result.status === 200){
            toast.success("Đã duyệt yêu cầu thành công");
            fetchData();
          }else{
            toast.error("")
          }
        }
        catch(err){
          console.log(err);
        }
    }

    const fetchData = async () => {
      try {
        const result = await SellerService.SellerPending();
        console.log(result.data);
        if(result.status === 200){
          setData(result.data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    } 

    useEffect(() => {
      fetchData();
    },[]);

  return (
    <>
      {
        data ?  data.map((value, index) => (
          <tr class="bg-white border-b hover:bg-gray-100 ">
          <td class="w-4 p-4" key={id}>
            <Toast />
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
          <th
            scope="row"
            class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            <div className="image_seller">
              <img
                className="w-10 h-10 rounded-full overflow-hidden object-cover"
                src={value.image}
                alt=""
              />
            </div>
          </th>
          <td class="px-6 py-4">{value.name}</td>
          <td class="px-6 py-4">{value.email}</td>
          <td class="px-6 py-4">{value.phoneNumber}</td>
          <td class="px-6 py-4">{value.date_created_request}</td>
          <td class="px-6 py-4">
            <span className="text-orange-600 font-semibold rounded-xl bg-orange-100 py-1 px-2 text-[12px] shadow-none capitalize">
              Chờ xử lý
            </span>
          </td>
          <td class="px-4 py-4">
            <Button className='w-[80px] bg-red-100 border border-red-500 rounded-full py-[6px] hover:bg-red-500 hover:text-white text-red-500 mr-2' onClick={() => handleCancle()}>
                Hủy
            </Button>
            <Button className='w-[80px] px-0 bg-blue-100 border border-blue-500 rounded-full py-[6px] hover:bg-blue-500 hover:text-white text-blue-500' onClick={(e) => handleAccept(e, value.id)}>
                Duyệt
            </Button>
          </td>
        </tr>
        )) : null
      }
    </>
  )
}
