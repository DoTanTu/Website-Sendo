import { useState, useEffect } from "react";
import logo from "../img/Better_logo.png";
import DetailPayProducts from "../components/ui/DetailPayProducts";
import ShoppingStatus from "../components/ui/ShoppingStatus";
import UserService from "../service/UserService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TokenExtraction from "../service/TokenExtraction";
import PaymentService from "../service/PaymentService";
import { useLocation } from 'react-router-dom';
import Toast from '../components/notification/Toast';
import { toast } from 'react-toastify';

export default function Checkout() {
  const location = useLocation();

  const chooseCartFromSource = location.state?.chooseCart || [];
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [addressOrder, setAddressOrder] = useState("");
  const [urlResponse , setUrlResponse] = useState("");

  var sumprice = chooseCartFromSource.reduce((start, value) => {
    return start += value.price * value.quantity;
  },0);
  //----------Tạo mới form

  const [paymentInfo, setPaymentInfo] = useState({
    amount: 20000, // Số tiền thanh toán
    orderDescription: 'Donw hang nong', // Mô tả đơn hàng
    orderType: 'other', // Loại đơn hàng
    language: 'vn', // Ngôn ngữ
    bankCode: 'NCB', // Mã ngân hàng (nếu có)
  });

  const handlePayment = async () => {
    try {
      if(!name || !phone || !address || !addressOrder){
        toast.error('Vui lòng nhập đủ thông tin');
        return;
      }else {
        const updateProfile = await updateUser();
        if(updateProfile.status === 200){
          const response = await PaymentService.createPayment(paymentInfo);
          setUrlResponse(response.data);
          window.location.href = response.data;
        }
        else{
          toast.error('cập nhật thông tin cá nhân thất bại');
        }
      }
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

  const getInforUser = () => {
    const formData = new FormData();
    console.log(name ,address, phone);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("phoneNumber", phone);
    return formData;
  }
  
  const updateUser = async () => {
    try {
      const token = localStorage.getItem('token');
      const formDatas = getInforUser();
      if (formDatas) {
        const profileUpdate = await UserService.updateProfileOrder(formDatas, token);
        return profileUpdate;
      } else {
        console.error("Error creating formData.");
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  }
  

  //----------Lấy thông tin của người dùng
  const getInfor = async () => {
    try {
      const token = localStorage.getItem("token");
      const checkToken = TokenExtraction.isTokenExpired(token);
      if (checkToken == true) {
        toast.error("Vui lòng dăng nhập lại để tiếp tục");
        setTimeout(() => {
          navigate("/login");
        }, "5000");
      } else {
        const respone = await UserService.userProfile(token);
        setData(respone.data);
        setupDataInfor(respone.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setupDataInfor = (data) => {
    setName(data.name);
    setPhone(data.phoneNumber);
    setEmail(data.email);
    setAddress(data.address);
  }

  useEffect(() => {
    getInfor();
  },[])
  return (
    <>
      <Navbar />
      <div className=" bg-white/30 w-full h-max py-8 px-48">
        <Toast/>
        <div className="w-full h-max bg-white shadow-md shadow-black/30 rounded-lg p-2">
          <div className="flex justify-between items-center px-6">
            <img className="h-16" src={logo} alt="" />
            <ShoppingStatus />
          </div>
          <div className=" w-full h-full rounded-lg p-6 flex flex-col gap-4 shadow-sm shadow-gray-700">
            <div className=" w-full h-full rounded-lg flex gap-4">
              <div className="w-1/2 flex flex-col gap-4">
                <p className="text-2xl font-bold">Chi tiết thanh toán</p>
                <div className="w-full  flex-col">
                  <div className="flex gap-36 mt-4 ">
                    <p className="text-base text-black/35 w-40 py-2 font-semibold">
                      {" "}
                      Tên người dùng:
                    </p>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className=" border-l-[3px] border-l-red-400 px-2 py-2 focus:outline-2 focus:outline-gray-400"
                    />
                  </div>
                  <div className="flex gap-36 mt-4">
                    <p className="text-base text-black/35 w-40 py-2  font-semibold">
                      {" "}
                      Email:
                    </p>
                    <p className="text-base text-black/50 border-l-[3px] border-l-red-400 px-2 py-2 ">
                      {email}
                    </p>
                  </div>

                  <div className="flex gap-36 mt-4">
                    <p className="text-base text-black/35 w-40 py-2  font-semibold">
                      {" "}
                      Số điện thoại:
                    </p>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className=" border-l-[3px] border-l-red-400 px-2 py-2 focus:outline-2 focus:outline-gray-400"
                    />
                  </div>

                  <div className="w-full flex gap-36 mt-4">
                    <p className="text-base text-black/35 w-40 py-2  font-semibold">
                      Địa chỉ:
                    </p>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className=" border-l-[3px] border-l-red-400  px-2 py-2 focus:outline-2 focus:outline-gray-400"
                    />
                  </div>
                  <div className="w-full flex gap-36 mt-4">
                    <p className="text-base text-black/35 w-40 py-2  font-semibold">
                      Địa chỉ giao hàng:
                    </p>
                    <input
                      type="text"
                      value={addressOrder}
                      onChange={(e) => setAddressOrder(e.target.value)}
                      className=" border-l-[3px] border-l-red-400  px-2 py-2 focus:outline-2 focus:outline-gray-400"
                    />
                  </div>
                </div>
                <div className="mt-16">
                  <p className="text-xl font-bold">Phương thức thanh toán</p>

                  <div className="flex flex-col mt-3 gap-4 items-start px-6">
                    <div className="flex w-1/2 p-3 items-center border-[1px] border-gray-500">
                      <input
                        id="default-radio-1"
                        type="radio"
                        value=""
                        checked
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                      />
                      <label
                        htmlFor="default-radio-1"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Chuyển khoản
                      </label>
                    </div>
                    <div className="flex w-1/2 p-3 items-center border-[1px] border-gray-500 ">
                      <input
                        id="default-radio-2"
                        type="radio"
                      
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ms-2 text-sm font-medium text-gray-900 "
                      >
                        Thanh toán trực tiếp
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 py-4 pl-20 pr-10">
                <div className="w-full flex flex-col border-[1px] border-gray-500 rounded-lg mt-9 py-3 px-6 text-black">
                  <p className="text-lg">Cart Summary</p>
                  {/* <div className="w-full border-[1px] border-gray-500 mt-2"></div> */}
                  <div>
                    {
                      chooseCartFromSource ? chooseCartFromSource.map((value, index) => (
                        <div className="w-full h-full flex justify-between  border-b-[1px] border-gray-500 mt-2 py-4">
                        <div className="w-2/3">
                          <p className="font-semibold">{value.name} x <span className="text-blue-800">{value.quantity} </span></p>
                        </div>
                        <div className="w-1/3 items-center ">
                          <p className="font-bold text-right">{value.price.toLocaleString(0)} đ</p>
                        </div>
                      </div>
                      )):null
                    }
                  
                  </div>
                  <p className="text-lg text-right font-bold mt-4">
                    Tổng tiền: <span className="text-red-500 italic">{parseInt(sumprice).toLocaleString(0)} đ</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3 py-3 border-t-[1px] border-gray-500 flex justify-between">
              <p>
                Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều
                khoản Better
              </p>
              <button
                className=" bg-red-500 p-3 px-7 text-md font-bold text-white rounded-lg hover:bg-red-500/60 "
                onClick={handlePayment}
              >
                Đặt Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
