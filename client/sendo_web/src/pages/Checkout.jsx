import { useState, useEffect } from "react";
import logo from "../img/Better_logo.png";
import DetailPayProducts from "../components/ui/DetailPayProducts";
import ShoppingStatus from "../components/ui/ShoppingStatus";
import UserService from "../service/UserService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TokenExtraction from "../service/TokenExtraction";
import PaymentService from "../service/PaymentService";

export default function Checkout() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [addressOrder, setAddressOrder] = useState("");
  const [urlResponse , setUrlResponse] = useState("");

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
      const response = await PaymentService.createPayment(paymentInfo);
      setUrlResponse(response.data);
      console.log(response.data);
      window.location.href = response.data;
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  };

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
                  <p className="text-base text-black/35 w-44 py-2 font-semibold">
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
                  <p className="text-base text-black/35 w-44 py-2  font-semibold">
                    {" "}
                    Email:
                  </p>
                  <p className="text-base text-black/50 border-l-[3px] border-l-red-400 px-2 py-2 ">
                    {email}
                  </p>
                </div>

                <div className="flex gap-36 mt-4">
                  <p className="text-base text-black/35 w-44 py-2  font-semibold">
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
                  <p className="text-base text-black/35 w-44 py-2  font-semibold">
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
                  <p className="text-base text-black/35 w-44 py-2  font-semibold">
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
                      checked="1"
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
                      checked="0"
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
            <div className="w-1/2 py-4 pl-10 pr-20">
              <div className="w-full flex flex-col border-[1px] border-gray-500 rounded-lg mt-9 py-3 px-6 text-black">
                <p className="text-lg">Cart Summary</p>
                {/* <div className="w-full border-[1px] border-gray-500 mt-2"></div> */}
                <DetailPayProducts />
                <p className="text-lg text-right font-bold">
                  Tổng tiền: {10000}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 py-3 border-t-[1px] border-gray-500 flex justify-between">
            <p>
              Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều
              khoản Better
            </p>
            <button className=" bg-red-500 p-3 px-7 text-md font-bold text-white rounded-lg hover:bg-red-500/60 " onClick={handlePayment}>
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
