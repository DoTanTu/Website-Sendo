import React from "react";
import { useState, useEffect,useCallback } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import ProductService from "../../service/Seller/ProductService";
import TokenService from "../../service/Seller/tokenServiceSeller";
import { getIdColor, getIdSize } from "../../components/ProductAttributes";
import { toast } from "react-toastify";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../components/ControlImage/firebase";
import { v4 } from "uuid";
import Toast from "../../components/Toast";

export default function NewProducts() {
  const navigate = useNavigate();

  const idSeller = TokenService.getIdUserByToken();
  const [categoryArray, setCategoryArray] = useState([]);
  const [category, setCategory] = useState();
  const availableShirts = ["M", "L", "XL", "2XL"];
  const availableTrousers = [27,28,29,30,31,32];
  const [file, setFile] = useState();
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState(0);
  const [selectedOption, setSelectedOption] = useState("ao");
  const [availableSizes, setAvailableSizes] = useState(availableShirts);
  const [availableColors, setAvailableColors] = useState(["Đỏ","Đen","Xanh","Vàng","Trắng"]);
  const [items, setItems] = useState([{ color: "", size: "", quantity: "", price: "" }]);

  const token = TokenService.getToken();
  
  const fetchData = useCallback(async () => {
    try {
      const response = await ProductService.getCategory();
      setCategoryArray(response);
    } catch (error) {
      console.error(error);
    }
  }, []);

  //Xử lý đối với ảnh
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  const uploadImage = () => {
    return new Promise(async (resolve, reject) => {
      try {
        if (image == null) {
          resolve("");
        }
        const imageRef = ref(storage, `images/${image.name + v4()}`);
        const snapshot = await uploadBytes(imageRef, image);
        const url = await getDownloadURL(snapshot.ref);
        resolve(url);
      } catch (error) {
        console.error("Error uploading image:", error);
        reject("");
      }
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const imageUrl = await uploadImage();
      if (!imageUrl) {
        console.log("Ảnh không hợp lệ");
        return;
      }
  
      const formData = new FormData();
      formData.append("product_name", name);
      formData.append("description", desc);
      formData.append("gender", gender);
      formData.append("category_id", category);
      formData.append("users_id", idSeller);
      formData.append("image", imageUrl);
      items.forEach((item, index) => {
        formData.append(`variants[${index}][color_id]`, getIdColor(item.color));
        formData.append(`variants[${index}][size_id]`, getIdSize(item.size));
        formData.append(`variants[${index}][price]`, item.price);
        formData.append(`variants[${index}][stock_quantity]`, item.quantity);
      });
      const respone = await ProductService.createProduct(formData, token);
      console.log(respone);
      if (respone.status === 201) {
        toast.success("Thêm sản phẩm thành công");
        setTimeout(() => {
          navigate("/seller/products");
        }, 3000);
      } else {
        alert("Không thể thêm được sản phẩm");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Áo hoặc quần được chọn
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (selectedOption === "quan") {
      setAvailableSizes(availableShirts);
    } else if (selectedOption === "ao") {
      setAvailableSizes(availableTrousers);
    }
    console.log();
  };

  //Cập nhật các thuộc tính khi thêm 1 item
    // const updateAvailableOptions = () => {
    //   const usedColors = items.map((item) => item.color);
    //   const usedSizes = items.map((item) => item.size);

    //   const newAvailableColors = availableColors.filter(
    //     (color) => !usedColors.includes(color)
    //   );
    //   const newAvailableSizes = availableSizes.filter(
    //     (size) => !usedSizes.includes(size)
    //   );

    //   setAvailableColors(newAvailableColors);
    //   setAvailableSizes(newAvailableSizes);
    // };

  const handleAddItem = () => {
    setItems([...items, { color: "", size: "", quantity: "", price: "" }]);
    // updateAvailableOptions();
  };

  const handleDeleteItem = (index) => () => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    // updateAvailableOptions();
  };

  const handleColorChange = (index, value) => {
    const newItems = [...items];
    newItems[index].color = value;
    setItems(newItems);
  };

  const handleSizeChange = (index, value) => {
    const newItems = [...items];
    newItems[index].size = value;
    setItems(newItems);
  };

  const handleQuantityChange = (index, value) => {
    const newItems = [...items];
    newItems[index].quantity = value;
    setItems(newItems);
  };

  const handlePriceChange = (index, value) => {
    const newItems = [...items];
    newItems[index].price = value;
    setItems(newItems);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, [fetchData]);
  return (
    <div className="container">
      <Toast />
      <div className="header_title">
        <h1 className="text-lg font-bold uppercase text-gray-600 text-center">
          Thêm mới sản phẩm
        </h1>
      </div>
      <div className="main_container mt-5">
        <div className="form_input">
          <form action="">
            <div className="top_form border-b border-gray-300 pb-3">
              <div className="title">
                <h2 className="text-base font-bold text-gray-600">
                  Upload ảnh sản phẩm
                </h2>
                <span className="text-sm text-gray-500">
                  Vui lòng click vào để chọn ảnh sản phẩm
                </span>
              </div>
            </div>
            <div className="bottom_form mt-5 flex">
              <div className="left_image text-left">
                <div className="input_image w-[500px] h-[420px] overflow-hidden rounded-sm border border-dashed  border-gray-300">
                  <div className="flex items-center justify-center w-full h-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-gray-50  hover:bg-gray-10 "
                    >
                      {file == null ? (
                        <>
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              className="w-8 h-8 mb-4 text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span>{" "}
                              or drag and drop
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            onChange={handleChange}
                            type="file"
                            className="hidden"
                          />
                        </>
                      ) : (
                        <>
                          <img src={file} className="max-h-full" alt="" />
                        </>
                      )}
                    </label>
                  </div>
                </div>
                <Button
                  className="text-gray-600 mt-2 border px-5 py-2 hover:bg-red-500 hover:text-white border-gray -500 uppercase font-semibold"
                  onClick={() => setFile(null)}
                >
                  Hủy file
                </Button>
              </div>
              <div className="right_desc ps-5 w-full text-gray-500">
                <div className="name_prod ">
                  <label className="font-semibold" htmlFor="">
                    Tên sản phẩm <span className="text-red-600">*</span>
                  </label>
                  <input
                    className="border text-black border-gray-300 rounded-sm block mt-2 px-3 py-1 w-full outline-1 focus:outline-blue-600"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên sản phẩm"
                  />
                </div>
                <div className="flex">
                  <div className="category mt-5 w-1/2 mr-5">
                    <label className="font-semibold" htmlFor="">
                      Danh mục sản phẩm
                    </label>
                    <select
                      className="block outline-none border border-gray-300 py-1 px-3 mt-2 w-full text-black"
                      name="category_id"
                      id="12345"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value='0'>Chọn danh mục</option>
                    {
                      categoryArray.map((value, index) => (
                        <option key={index} value={value.category_id}>{value.category_name}</option>
                      ))
                    }
                    </select>
                  </div>
                  <div className="gender mt-5 w-1/2 ml-5">
                    <label className="font-semibold" htmlFor="">
                      Chọn giới tính
                    </label>
                    <div className="flex items-center mt-3 ">
                      <div className="flex items-center">
                        <input
                          id="default-radio-1"
                          type="radio"
                          checked={gender === 0}
                          value="nam"
                          onChange={(e) => setGender(0)}
                          name="default-radio"
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 "
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ms-2 text-sm font-medium text-gray-900 "
                        >
                          Nam
                        </label>
                      </div>
                      <div className="flex items-center ms-10">
                        <input
                          id="default-radio-2"
                          type="radio"
                          checked={gender === 1}
                          value="nữ"
                          onChange={(e) => setGender(1)}
                          name="default-radio"
                          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  outline-none"
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
                </div>

                <div className="flex mt-4">
                  <div className="brand_prod w-1/2">
                    <label className="font-semibold" htmlFor="">
                      Tên thương hiệu
                    </label>
                    <input
                      className="border text-black border-gray-300 rounded-sm block mt-2 px-3 py-1 w-full outline-1 focus:outline-blue-600"
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Nhập tên thương hiệu"
                    />
                  </div>
                </div>
                <div className="list_variant mt-4 border px-5 py-3">
                  <div className=" px-4 py-4">
                    <div className="top_gender">
                      <span className="font-semibold">Chọn loại sản phẩm</span>
                      <span className="flex mt-2">
                        <div className="flex items-center">
                          <input
                            id="default-radio-ao"
                            type="radio"
                            value="ao"
                            name="default-radio-ao-quan"
                            checked={selectedOption === "ao"}
                            onChange={() => handleOptionChange("ao")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            htmlFor="default-radio-ao"
                            className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                          >
                            Áo
                          </label>
                        </div>
                        <div className="flex items-center ms-5">
                          <input
                            id="default-radio-quan"
                            type="radio"
                            value="quan"
                            name="default-radio-ao-quan"
                            checked={selectedOption === "quan"}
                            onChange={() => handleOptionChange("quan")}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            htmlFor="default-radio-quan"
                            className="ms-2 text-sm font-medium text-gray-500"
                          >
                            Quần
                          </label>
                        </div>
                      </span>
                    </div>
                    <div className="main_action">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="item_infor border border-dashed border-gray-300 px-3 py-2 mt-4"
                        >
                          <div className="flex justify-between">
                            <span className="border w-6 h-6 flex items-center justify-center rounded-full">
                              {index}
                            </span>
                            {index > 0 ? (
                              <span
                                key={index}
                                className="hover:text-red-600 hover:cursor-pointer"
                                onClick={handleDeleteItem(index)}
                              >
                                <MdOutlineCancel size={22} />
                              </span>
                            ) : null}
                          </div>
                          <div className="flex">
                            <div className="mt-4 w-1/2 me-5">
                              <label className="font-semibold" htmlFor={`color-${index}`} >
                                Màu sản phẩm
                              </label>
                              <select
                                className="outline-none border w-full mt-3 py-1"
                                id={`color-${index}`}
                                value={item.color}
                                onChange={(e) =>
                                  handleColorChange(index, e.target.value)
                                }
                              >
                                <option value="">Chọn màu</option>
                                {availableColors.map((value, index) => (
                                  <option key={index} value={value}>{value}</option>
                                ))}
                              </select>
                            </div>
                            <div className="w-1/2 mt-4 ms-5">
                              <label
                                className="font-semibold"
                                htmlFor={`size-${index}`}
                              >
                                Kích thước
                              </label>
                              <select
                                className="outline-none border w-full mt-3 py-1"
                                id={`size-${index}`}
                                value={item.size}
                                onChange={(e) =>
                                  handleSizeChange(index, e.target.value)
                                }
                              >
                                <option value="">Chọn Size</option>
                                {availableSizes.map((value, index) => (
                                  <option key={index} value={value}>{value}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="flex mt-4">
                            <div className="w-1/2 me-5">
                              <label
                                className="font-semibold"
                                htmlFor={`quantity-${index}`}
                              >
                                Số lượng sản phẩm
                              </label>
                              <input
                                className="block border border-gray-300 focus:outline-none w-full mt-2 px-3 py-1"
                                type="text"
                                placeholder="Nhập số lượng"
                                id={`quantity-${index}`}
                                value={item.quantity}
                                onChange={(e) =>
                                  handleQuantityChange(index, e.target.value)
                                }
                              />
                            </div>
                            <div className="w-1/2 ms-5">
                              <label
                                className="font-semibold"
                                htmlFor={`price-${index}`}
                              >
                                Giá sản phẩm
                              </label>
                              <input
                                className="block border border-gray-300 focus:outline-none w-full mt-2 px-3 py-1"
                                type="text"
                                placeholder="Nhập giá"
                                id={`price-${index}`}
                                value={item.price}
                                onChange={(e) =>
                                  handlePriceChange(index, e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="btn_add_item mt-4 flex justify-end">
                        <Button
                          className="bg-violet-500 py-2 rounded-sm"
                          onClick={handleAddItem}>Thêm</Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desShort mt-4 w-full">
                  <label className="font-semibold" htmlFor="">Mô tả chi tiết</label>
                  <textarea
                    rows={2}
                    className="border text-black border-gray-300 rounded-sm block mt-2 px-3 py-1 w-full outline-1 focus:outline-blue-600"
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Nhập mô tả"
                  />
                </div>
                <div className="btn_submit text-center text-blue-500 mt-5">
                  <Button
                    onClick={() => navigate("/seller/products")}
                    className="text-white px-8 py-2 hover:bg-red-600 bg-gray-400 rounded-sm mr-10"
                  >
                    Hủy
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    className="text-white px-8 py-2 bg-blue-400 hover:bg-blue-500 rounded-sm"
                  >
                    Thêm
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
