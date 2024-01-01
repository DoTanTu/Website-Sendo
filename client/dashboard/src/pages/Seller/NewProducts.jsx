import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

export default function NewProducts() {
  const navigate = useNavigate();
  const availableShirts = ["M", "L", "XL", "2XL"];
  const availableTrousers = [27,28,29,30,31,32];
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("nam");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState([{ color: "", size: "", quantity: "", price: "" }]);
  const [availableColors, setAvailableColors] = useState(["Đỏ","Đen","Xanh","Vàng"]);
  const [availableSizes, setAvailableSizes] = useState(availableShirts);
  const [selectedOption, setSelectedOption] = useState("ao");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tên sp : " + name);
    console.log("Giới Tính : " + gender);
    console.log("Thuong Hiệu : " + brand);
    console.log("Mô tả : " + desc);
    console.log(image);
  };

  //Áo hoặc quần được chọn
  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if(selectedOption === 'quan'){
      setAvailableSizes(availableShirts)
    }
    else if(selectedOption === 'ao'){
      setAvailableSizes(availableTrousers)
    }
    console.log()
  };

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  }

  const updateAvailableOptions = () => {
    const usedColors = items.map((item) => item.color);
    const usedSizes = items.map((item) => item.size);

    const newAvailableColors = availableColors.filter(
      (color) => !usedColors.includes(color)
    );
    const newAvailableSizes = availableSizes.filter(
      (size) => !usedSizes.includes(size)
    );

    setAvailableColors(newAvailableColors);
    setAvailableSizes(newAvailableSizes);
  };

  const handleAddItem = () => {
    setItems([...items, { color: "", size: "", quantity: "", price: "" }]);
    updateAvailableOptions();
  };

  const handleDeleteItem = (index) => () => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
    updateAvailableOptions();
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
                          checked={gender === 'nam'}
                          value="nam"
                          onChange={(e) => setGender('nam')}
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
                          checked={gender === 'nữ'}
                          value="nữ"
                          onChange={(e) => setGender("nữ")}
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
                  <div className=" px-4 py-4">
                    <div className="top_gender">
                      <span className="font-semibold">Chọn loại sản phẩm</span>
                      <span className="flex mt-2">
                        <div class="flex items-center">
                          <input
                            id="default-radio-ao"
                            type="radio"
                            value="ao"
                            name="default-radio-ao-quan"
                            checked={selectedOption === "ao"}
                            onChange={() => handleOptionChange("ao")}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            for="default-radio-ao"
                            class="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                          >
                            Áo
                          </label>
                        </div>
                        <div class="flex items-center ms-5">
                          <input
                            id="default-radio-quan"
                            type="radio"
                            value="quan"
                            name="default-radio-ao-quan"
                            checked={selectedOption === "quan"}
                            onChange={() => handleOptionChange("quan")}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
                          />
                          <label
                            for="default-radio-quan"
                            class="ms-2 text-sm font-medium text-gray-500"
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
                              <label
                                className="font-semibold"
                                htmlFor={`color-${index}`}
                              >
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
                                  <option value={value}>{value}</option>
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
                                  <option value={value}>{value}</option>
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
                      {/* <div className="item_infor border border-dashed border-gray-300 px-3 py-2 mt-4">
                        <div className="flex">
                          <div className="mt-4 w-1/2 me-5">
                            <label className="font-semibold" htmlFor="">
                              Màu sản phẩm
                            </label>
                            <select
                              className="outline-none border w-full mt-3 py-1"
                              name=""
                              id=""
                            >
                              <option value="">Chọn màu</option>
                              <option value="">Đỏ</option>
                              <option value="">Đen</option>
                              <option value="">Xanh</option>
                              <option value="">Vàng</option>
                            </select>
                          </div>
                          <div className="w-1/2 mt-4 ms-5">
                            <label className="font-semibold" htmlFor="">
                              Màu sản phẩm
                            </label>
                            <select
                              className="outline-none border w-full mt-3 py-1"
                              name=""
                              id=""
                            >
                              <option value="">Chọn Size</option>
                              <option value="">M</option>
                              <option value="">L</option>
                              <option value="">XL</option>
                              <option value="">2XL</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex mt-4">
                          <div className="w-1/2 me-5">
                            <label className="font-semibold" htmlFor="">
                              Số lượng sản phẩm
                            </label>
                            <input
                              className="block border border-gray-300 focus:outline-none w-full mt-2 px-3 py-1"
                              type="text"
                              placeholder="nhập số lượng"
                            />
                          </div>
                          <div className="w-1/2 ms-5">
                            <label className="font-semibold" htmlFor="">
                              Giá sản phẩm
                            </label>
                            <input
                              className="block border border-gray-300 focus:outline-none w-full mt-2 px-3 py-1"
                              type="text"
                              placeholder="Nhập giá"
                            />
                          </div>
                        </div>
                      </div> */}
                      <div className="btn_add_item mt-4 flex justify-end">
                        <Button
                          className="bg-violet-500 py-2 rounded-sm"
                          onClick={handleAddItem}
                        >
                          Thêm 
                        </Button>
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
