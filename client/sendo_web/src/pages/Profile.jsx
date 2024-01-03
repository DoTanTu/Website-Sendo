import NavbarProfile from "../components/NavbarProfile";
import Footer from "../components/Footer";
import UpdateSeller from "../components/ui/UpdateSeller";
import UserService from "../service/UserService";
import {useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  const [data, setData] = useState([]);
  const [name , setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

const getInfor = async () => {
  try {
    const token = localStorage.getItem('token');
    const respone = await UserService.userProfile(token);
    setData(respone.data);
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
      <div className="w-full h-max p-6 shadow-sm">
        { 
          data ? (
          <div className="w-full h-max bg-white rounded-md flex ">
          <div className="w-1/3 mb-10">
            <div className="">
              <div className="w-56 h-56 p-2 bg-[#DA251E] mx-auto my-4 mt-8 rounded-full">
                <img
                  className="object-cover  mx-auto rounded-full"
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
            <div className="flex gap-40 mt-4 ">
              <p className="text-base text-black/35 w-44"> Tên tài khoản:</p>
              <input type="text" value={data.name} onChange={e => setName(e.target.value)} className=" border shadow-2xl" />
            </div>
            <div className="flex gap-40 mt-4 ">
              <p className="text-base text-black/35 w-44"> Tên đăng nhập:</p>
              <input type="text" className=" border shadow-2xl" />
            </div>

            <div className="flex gap-40 mt-4">
              <p className="text-base text-black/35 w-44"> Email:</p>
              <p className="text-base text-black">{data.email}</p>
            </div>
            <div className="flex gap-40 mt-4">
              <p className="text-base text-black/35 w-44"> Số điện thoại:</p>
              <input type="text" value={data.phoneNumber} onChange={e => setPhone(e.target.value)} className=" border shadow-2xl" />
            </div>
            <div className="flex gap-40 mt-4">
              <p className="text-base text-black/35 w-44"> Ngày Sinh:</p>
              <input type="text" value={data.birthday} onChange={e => setBirthday(e.target.value)} className=" border shadow-2xl" />
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
