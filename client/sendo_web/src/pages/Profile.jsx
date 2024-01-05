import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import UpdateSeller from "../components/ui/UpdateSeller";
import UserService from "../service/UserService";
import {useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import TokenExtraction from "../service/TokenExtraction";
import { toast } from "react-toastify";

export default function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name , setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

const getInfor = async () => {
  try {
    const token = localStorage.getItem('token');
    const checkToken = TokenExtraction.isTokenExpired(token);
    if(checkToken == true) {
       toast.error('Vui lòng dăng nhập lại để tiếp tục');
      //  navigate('/login');
    }
    else{
      const respone = await UserService.userProfile(token);
      setData(respone.data);
    }
    
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getInfor();
}, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto h-max p-6 shadow-sm">
        { 
          data ? (
          <div className="w-full h-max bg-white rounded-md flex ">
          <div className="w-1/3 mb-10">
            <div className="">
              <div className="w-56 h-56 p-1 bg-[#DA251E] mx-auto my-4 mt-8 rounded-full">
                <img
                  className="object-cover mx-auto rounded-full"
                  src="https://zizoou.com/cdn/shop/files/Ao-khoac-jacket-form-rong-oversize-3-1-Ao-jacket-nau_Extras-ZiZoou-Store.jpg?v=1685791120"
                  alt="Product Thumbnail"
                />
              </div>

              <h1 className="text-2xl font-bold mx-auto my-4 text-center">
                {data.name}
              </h1>
              <div className="flex justify-center">
                <UpdateSeller />
              </div>
            </div>
          </div>
          <div className="w-2/3 p-4 flex-col mt-12">
            <div className="flex gap-36 mt-4 ">
              <p className="text-base text-black/35 w-44 py-2 font-semibold"> Tên tài khoản:</p>
              <input type="text" value={data.name} onChange={e => setName(e.target.value)} className=" border-l-[3px] border-l-red-400 px-2 py-2 focus:outline-2 focus:outline-gray-400" />
            </div>
            <div className="flex gap-36 mt-4">
              <p className="text-base text-black/35 w-44 py-2  font-semibold"> Email:</p>
              <p className="text-base text-black border-l-[3px] border-l-red-400 px-2 py-2 ">{data.email}</p>
            </div>
            <div className="flex gap-36 mt-4">
              <p className="text-base text-black/35 w-44 py-2  font-semibold"> Số điện thoại:</p>
              <input type="text" value={data.phoneNumber} onChange={e => setPhone(e.target.value)} className=" border-l-[3px] border-l-red-400 px-2 py-2 focus:outline-2 focus:outline-gray-400" />
            </div>
            <div className="flex gap-36 mt-4">
              <p className="text-base text-black/35 w-44 py-2  font-semibold"> Ngày Sinh:</p>
              <input type="text" value={data.birthday} onChange={e => setBirthday(e.target.value)} className=" border-l-[3px] border-l-red-400 px-2 py-2 focus:outline-2 focus:outline-gray-400" />
            </div>
            <div className="mt-10 w-2/5 px-30 flex justify-end">
              <button className=" bg-red-500 p-2 px-5 text-md font-bold text-white rounded-lg hover:bg-red-500/60 ">
                Cập nhập
              </button>
            </div>
          </div>
           </div>):null
        }
      </div>
      <Footer />
    </div>
  );
}
