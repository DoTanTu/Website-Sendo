import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export default function NewProducts() {
  const navigate = useNavigate();

  const [file, setFile] = useState();

  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [gender, setGender] = useState("nam");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");

  const [selectedOption, setSelectedOption] = useState("ao");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tên sp : " + name);
    console.log("Số lượng : " + quantity);
    console.log("Giới Tính : " + gender);
    console.log("Thuong Hiệu : " + brand);
    console.log("Mô tả : " + desc);
    console.log(image);

  }
  //Áo hoặc quần được chọn
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

function handleChange(e) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0])
}
  return (
    <div className="container">
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
                  <div class="flex items-center justify-center w-full h-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-gray-50  hover:bg-gray-10 "
                    >
                      {file == null ? (
                        <>
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              class="w-8 h-8 mb-4 text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500">
                              <span class="font-semibold">Click to upload</span>{" "}
                              or drag and drop
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            onChange={handleChange}
                            type="file"
                            class="hidden"
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
                      name=""
                      id=""
                    >
                      <option value="">item 1</option>
                      <option value="">item 2</option>
                      <option value="">item 3</option>
                      <option value="">item 4</option>
                      <option value="">item 5</option>
                    </select>
                  </div>
                  <div className="gender mt-5 w-1/2 ml-5">
                    <label className="font-semibold" htmlFor="">
                      Chọn giới tính
                    </label>
                    <div className="flex items-center mt-3 ">
                      <div class="flex items-center">
                        <input
                          id="default-radio-1"
                          type="radio"
                          checked
                          value="nam"
                          onChange={(e) => setGender(e.target.value)}
                          name="default-radio"
                          class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 "
                        />
                        <label
                          for="default-radio-1"
                          class="ms-2 text-sm font-medium text-gray-900 "
                        >
                          Nam
                        </label>
                      </div>
                      <div class="flex items-center ms-10">
                        <input
                          id="default-radio-2"
                          type="radio"
                          onChange={(e) => setGender(e.target.value)}
                          value="nữ"
                          name="default-radio"
                          class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300  outline-none"
                        />
                        <label
                          for="default-radio-2"
                          class="ms-2 text-sm font-medium text-gray-900 "
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
                    <div>
                      <div className="top_gender">
                        <span>Chọn giới tính</span>
                        
                      </div>
                    </div>
                </div>
                <div className="desShort mt-4 w-full">
                  <label htmlFor="">Mô tả chi tiết</label>
                  <textarea
                    rows={2}
                    className="border text-black border-gray-300 rounded-sm block mt-2 px-3 py-1 w-full outline-1 focus:outline-blue-600"
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Nhập mô tả"
                  />
                </div>
              </div>
            </div>
            <div className="btn_submit text-center text-blue-500 mt-5">
              <Button onClick={() => navigate('/seller/products')}
                className="text-white px-8 py-2 hover:bg-red-600 bg-gray-400 rounded-sm mr-10"
              >
                Hủy 
              </Button>
              <Button onClick={handleSubmit}
                className="text-white px-8 py-2 bg-green-400 hover:bg-blue-500 rounded-sm"
              >
                Thêm
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
