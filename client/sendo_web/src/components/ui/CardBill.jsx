import { useState } from "react";
import OrderService from "../../service/OrderService";
import { useEffect } from "react";


export default function CardBill() {
    const [dataRespone, setData] = useState([]);
    const fetchDate = async () => {
        try {
            const token = localStorage.getItem('token');
            const result = await OrderService.getAllOrder(token);
            console.log(result);
            setData(result.data.orders);
        } catch (error) {
            
        }
    }
    useEffect(() => {
        fetchDate();
    }, []);
    return (
      <div>
        {dataRespone
          ? dataRespone.map((value, index) => (
              <div className="p-2 shadow-sm shadow-blue-gray-400 bg-white">
                <div className="flex justify-between pb-3 border-b-[2px] border-b-gray-500 ">
                  <div className="flex items-center">
                    <p className="font-bold">{value.buyer}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <i class="fa-solid fa-truck"></i>
                    <p className="text-sm text-gray-500">Đã giao hàng</p>
                    <div className="w-[2px] h-6 bg-gray-600"></div>
                    <p className="uppercase text-red-300">đã đánh giá</p>
                  </div>
                </div>
                <div className="mt-2 flex justify-between px-2">
                  <div className=" flex gap-2">
                    <img
                      className="w-[150px] h-[200px] object-cover"
                      src={value.product_image}
                      alt=""
                    />
                    <div className="flex flex-col ">
                      <p className="uppercase font-bold">{value.name}</p>
                      <p className="text-sm text-gray-500">{value.product_category}</p>
                      <p className="text-sm ">Số lượng: {value.quantity}</p>
                    </div>
                  </div>
                  <div className="flex items-center ">Giá sản phẩm:  <span className="text-red-500 italic font-semibold"> {value.price} đ</span></div>
                </div>
                <div className="w-full flex justify-end items-center gap-2 px-2">
                  <p>Tổng số tiền:</p>
                  <p className="text-2xl text-red-500">{(value.price * value.quantity).toLocaleString(0)} đ</p>
                </div>
                <div className="flex justify-between py-2 px-2">
                  <p className="text-xs text-gray-400 ">
                    Đang chở người đánh giá
                  </p>
                  <div className=" flex justify-center gap-3 items-center">
                    <button className="py-2 px-4 bg-red-500 hover:bg-red-200 text-white text-sm rounded-md">
                      Mua Lại Nữa
                    </button>
                    <button className="py-2 px-4 border-[1px] border-black/10 text-sm rounded-md">
                      Xem chi tiết đơn hàng
                    </button>
                    <button className="py-2 px-4 border-[1px] border-black/10 text-sm rounded-md">
                      Xem shop
                    </button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    );
  }