import React, { useState, useEffect} from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';
import image_succes from '../../img/payment.png';
import { Button } from '@material-tailwind/react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function ReturnPayment() {
    const navigate = useNavigate();
    const [vnp_Amount, setVnp_Amount] = useState('');
    const [vnp_BankCode, setVnp_BankCode] = useState('');
    const [vnp_OrderInfo, setVnp_OrderInfo] = useState('');
    const [vnp_PayDate, Setvnp_PayDate] = useState('');
    

  const fetchData = () => {
    try {
      const searchParams = new URLSearchParams(location.search);
      setVnp_Amount(searchParams.get('vnp_Amount'));
      setVnp_BankCode(searchParams.get('vnp_BankCode'));
      setVnp_OrderInfo(searchParams.get('vnp_OrderInfo'));
      Setvnp_PayDate(moment(searchParams.get('vnp_PayDate'), "YYYYMMDDHHmmss").format("YYYY-MM-DD HH:mm:ss"));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div>
      <Navbar />
      <div className="my-4">
        <div className="image_payment_success flex items-center justify-center">
          <img className="max-h-[350px]" src={image_succes} alt="" />
        </div>
        <div className="flex justify-center mt-1">
          <h2 className="px-4 py-1  font-semibold text-[18px]">
            ✔️ Chúc mừng thanh toán thành công{" "}
          </h2>
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-[600px] flex px-6 py-4 bg-green-100/80 rounded-sm border">
            <div className="w-1/2">
              <h2 className="mb-2 font-semibold">Số tiền thanh toán</h2>
              <h2 className="mb-2 font-semibold">Ngày Thanh Toán:</h2>
              <h2 className="mb-2 font-semibold">Ngân hàng thanh toán:</h2>
              <h2 className="font-semibold">Ghi chú:</h2>
            </div>
            <div className="w-1/2">
              <h2 className="mb-2">{vnp_Amount}</h2>
              <h2 className="mb-2">{vnp_PayDate}</h2>
              <h2 className="mb-2">{vnp_BankCode}</h2>
              <h2 className="">{vnp_OrderInfo}</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button className="mr-6 bg-blue-500">Đơn hàng của bạn</Button>
          <Button className="bg-red-500" onClick={() => navigate('/')}>Tiếp tục mua sắm</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
