import React, { useState, useEffect } from "react";
import ProductService from "../../service/ProductService";
import { useNavigate } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Card() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  useEffect(() => {
    getAll();
  }, [currentPage ]);

  const getAll = async () => {
    try {
      let response = await ProductService.getAllProducts(currentPage);
      const { dataTrans, totalPages } = response;
      setProducts(dataTrans);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortPrice = (e) => {
    const state = e.target.value;
    let sortedData;
    
    if (state === 'none') {
      getAll();
    } else if (state === 'down') {
      sortedData = [...products].sort((a, b) => {
        const priceA = a.variants.reduce((acc, variant) => Math.min(acc, variant.price), Infinity);
        const priceB = b.variants.reduce((acc, variant) => Math.min(acc, variant.price), Infinity);
        return priceB - priceA;
      });
    } else {
      sortedData = [...products].sort((a, b) => {
        const priceA = a.variants.reduce((acc, variant) => Math.min(acc, variant.price), Infinity);
        const priceB = b.variants.reduce((acc, variant) => Math.min(acc, variant.price), Infinity);
        return priceA - priceB;
      });
    }
  
    setProducts(sortedData);
  };
  
  


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const navigateDetail = (id) => {
    navigate('detail/' + id);
  }
  
  
  return (
    <>
      <div>
        <div className="ms-4 w-[888px] bg-white px-2 py-1 flex justify-end rounded-full mb-2 border-2">
          <select className="px-2 py-1 border rounded-full" name="" id="" onChange={handleSortPrice}>
            <option value="none">Mặt định</option>
            <option value="down">Cao đến thấp</option>
            <option value="up">Thấp đến cao</option>
          </select>
         
        </div>
        <div className="ms-4 flex flex-wrap gap-2">
          {products
            ? products.map((values, index) => (
                <div
                  key={values.product_id}
                  className="w-1/2 md:w-1/4 lg:w-1/6 h-max bg-transparent bg-white cursor-pointer hover:shadow-xl"
                  onClick={() => navigateDetail(values.product_id)}
                >
                  <div className="rounded-m shadow-sm px-[8px] py-[8px]">
                    <div className="h-[155px] overflow-hidden">
                      <img
                        className="object-cover"
                        src={values.image}
                        alt="Product Thumbnail"
                      />
                    </div>
                    <div className="px-2 pt-6 h-28">
                      <img
                        className="object-cover w-10 inline"
                        src="https://media3.scdn.vn/img4/2020/07_30/h6fJaiL5WkEbDU2eQRZb.png"
                        alt="Logo"
                      />
                      <p className="text-sm font-semibold line-clamp-2 mt-2">
                        {" "}
                        {values.product_name}
                      </p>
                    </div>
                    <p className="px-2 font-bold">
                      <span className=" text-red-600 font-bold">
                        {values.variants[0].price.toLocaleString()} đ
                      </span>
                    </p>
                    <div className="mt-4 px-2 flex justify-between items-center border-t-[1px] border-[#D3D3D3] pt-2">
                      <p className="text-sm font-normal text-[#808080] flex-shrink">
                        Địa chỉ:
                      </p>
                      <p className="text-xs text-[#808080] font-semibold overflow-hidden overflow-ellipsis line-clamp-1">
                        {values.address_company
                          ? values.address_company.split(",").pop().trim()
                          : null}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        <div className=" mt-4 ms-[350px]">
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className=""><MdKeyboardDoubleArrowLeft /></span>
                  {/* Icon của trang trước */}
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`${
                      currentPage === index + 1
                        ? "text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 border"
                        : "text-gray-500 bg-white border border-gray-300"
                    } flex items-center justify-center px-3 h-8 leading-tight hover:bg-gray-100 hover:text-gray-700 `}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <span className=""><MdKeyboardDoubleArrowRight /></span>
                  {/* Icon của trang kế tiếp */}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
