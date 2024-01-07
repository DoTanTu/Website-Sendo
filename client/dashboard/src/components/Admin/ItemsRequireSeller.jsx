import React from 'react';
import { Button } from "@material-tailwind/react";
import { useState, useEffect } from 'react';
import SellerService from '../../service/Admin/SellerService';

export default function ItemsRequireSeller() {

    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");
    const [id , setId] = useState("");

    const setData = (data) =>{
      setId(data.id);
      setImage(data.image)
      setEmail(data.email)
      setName(data.name)
      setPhone(data.phoneNumber);
      setDate(data.date_created_request);
      setStatus(data.email);
    }

    const handleCancle = () => {
        alert('Cancle');
    }
    const handleAccept = () => {
        alert('Accept');
    }

    const fetchData = async () => {
      try {
        const result = await SellerService.SellerPending();
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    } 

    useEffect(() => {
      fetchData();
    },[]);

  return (
    <tr class="bg-white border-b hover:bg-gray-100 ">
      <td class="w-4 p-4" key={id}>
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
            src={image}
            alt=""
          />
        </div>
      </th>
      <td class="px-6 py-4">{name}</td>
      <td class="px-6 py-4">{email}</td>
      <td class="px-6 py-4">{phone}</td>
      <td class="px-6 py-4">{date}</td>
      <td class="px-6 py-4">
        <span className="text-orange-600 font-semibold rounded-xl bg-orange-100 py-1 px-2 text-[12px] shadow-none capitalize">
          {status}
        </span>
      </td>
      <td class="px-4 py-4">
        <Button className='w-[80px] bg-red-100 border border-red-500 rounded-full py-[6px] hover:bg-red-500 hover:text-white text-red-500 mr-2' onClick={() => handleCancle()}>
            Hủy
        </Button>
        <Button className='w-[80px] px-0 bg-blue-100 border border-blue-500 rounded-full py-[6px] hover:bg-blue-500 hover:text-white text-blue-500' onClick={() => handleAccept(id)}>
            Duyệt
        </Button>
      </td>
    </tr>
  )
}
