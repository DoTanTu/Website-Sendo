import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UpdateSeller from "../components/ui/UpdateSeller";
import UserService from "../service/UserService";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import TokenExtraction from "../service/TokenExtraction";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../components/createImage/firebase";
import { v4 } from "uuid";

export default function Profile() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState();
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");
  var filePath = "";

  //----------Tạo mới form
  const formData = new FormData();

  //----------Fill dữ liệu nhận được vào giao diện
  const fillData = (data) => {
    setName(data.name);
    setEmail(data.email);
    setFile(data.image);
    setGender(data.gender || 0);
    setPhone(data.phoneNumber);
    setBirthday(data.birthday);
    setAddress(data.address);
  };

  const checkDataUser = () => {
    if (
      address === "" ||
      address === "" ||
      phone === "" ||
      file === "" ||
      file === null
    ) {
      return true;
    } else {
      return false;
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
        fillData(respone.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
    console.log("Giá trị sau khi thay đổi của image " + image);
  }

  const uploadImage = () => {
    return new Promise(async (resolve, reject) => {
      try {
        if (image == null) {
          resolve("");
        }
        const imageRef = ref(storage, `users/${image.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        resolve(url);
      } catch (error) {
        console.error("Error uploading image:", error);
        reject("");
      }
    });
  };

  //----------Đưa dữ liệu vào form data
  const setDataForm = (formData, filePath) => {
    formData.append("image", filePath),
      formData.append("name", name),
      formData.append("gender", gender),
      formData.append("address", address),
      formData.append("phoneNumber", phone),
      formData.append("birthday", birthday);
  };

  //---------Nhận form data và token sau đó gọi api để gửi dữ liệu đi
  const updateFunction = async (formData, token) => {
    try {
      const result = await UserService.updateToSeller(formData, token);
      return result.status;
    } catch (error) {
      console.log(error);
    }
  };

  //----------Thực hiện khi lần đầu tiên trang load
  useEffect(() => {
    getInfor();
  }, []);

  //---------Xử lý submit form từ người dùng
  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (image !== "" && image !== undefined) {
      const imageUrl = await uploadImage();
      filePath = imageUrl;
    } else {
      filePath = file;
    }
    setDataForm(formData, filePath);
    const result = await updateFunction(formData, token);
    if (result == 200) {
      toast.success("Cập nhật tài khoản thành công");
    } else {
      toast.error("Cập nhật thất bại");
    }
    filePath = "";
    setImage("");
    getInfor();
  };
  return (
    <div>
      <Navbar />
      <div className="w-full h-max p-6 shadow-sm">
        {data ? (
          <div className="w-full h-max bg-white rounded-md flex ">
            <div className="w-1/3 mb-10">
              <div className="">
                <div className="w-56 h-56 p-1 bg-red-500 mx-auto my-4 mt-8 rounded-full relative">
                  {file ? (
                    <img
                      className="object-cover w-full h-full mx-auto rounded-full"
                      src={file}
                    />
                  ) : (
                    <FaUserCircle className="w-full h-full text-gray-100" />
                  )}
                  <div className="editImage absolute bottom-0 right-5 w-10 h-8 bg-gray-300 z-20 rounded-lg">
                    <input
                      key={file}
                      id="dropzone-file"
                      onChange={handleChange}
                      type="file"
                      className="w-full h-full opacity-0"
                    />
                    <BiImageAdd className="absolute top-0 left-0 w-full h-full -z-10" />
                  </div>
                </div>

                <h1 className="text-2xl font-bold mx-auto my-4 mt-12 text-center">
                  {data.name}
                </h1>
                <div className="flex justify-center">
                  <UpdateSeller checkDataUser={checkDataUser} />
                </div>
              </div>
            </div>
            <div className="w-2/3 p-4 flex-col mt-12">
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
                  Giới tính:
                </p>
                <div className="flex items-center border-l-[3px] border-l-red-400 px-6">
                  <div className="flex items-center me-20">
                    <input
                      id="default-radio-1"
                      type="radio"
                      key={gender}
                      value=""
                      checked={gender == 0}
                      onChange={(e) => setGender(0)}
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2 "
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Nam
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      type="radio"
                      key={gender}
                      checked={gender == 1}
                      onChange={(e) => setGender(1)}
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-medium text-gray-900 "
                    >
                      Nữ
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex gap-36 mt-4">
                <p className="text-base text-black/35 w-44 py-2  font-semibold">
                  {" "}
                  Ngày Sinh:
                </p>
                <input
                  type="text"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className=" border-l-[3px] border-l-red-400 px-2 py-2 focus:outline-2 focus:outline-gray-400"
                />
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
              <div className="flex gap-36 mt-4">
                <p className="text-base text-black/35 w-44 py-2  font-semibold">
                  Địa chỉ:
                </p>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className=" border-l-[3px] border-l-red-400 w-[350px] px-2 py-2 focus:outline-2 focus:outline-gray-400"
                />
              </div>
              <div className="mt-10 w-2/5 px-30 flex justify-end">
                <button
                  className=" bg-red-500 p-2 px-5 text-md font-bold text-white rounded-lg hover:bg-red-500/60 "
                  onClick={handleSubmit}
                >
                  Cập nhập
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
