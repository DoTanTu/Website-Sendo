import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API để lấy dữ liệu
        const response = await axios.get("http://localhost:8080/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div class="sidebar_left bg-white shadow-md">
        <div className="bg-white px-3 py-5 w-[230px]">
           <div className="category_item ">
              <div className="header_title">
                <span className="uppercase font-semibold text-sm">Danh mục</span>
              </div>
              <div className="list_item mt-4 grid gap-3">
                <div class="flex items-center me-4">
                    <input id="red-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="red-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Áo</label>
                </div>
                <div class="flex items-center me-4">
                    <input id="red-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="red-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quần</label>
                </div>
                <div class="flex items-center me-4">
                    <input id="red-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="red-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
                </div>
                
              </div>
           </div>
        </div>
      </div>
    </>
  );
}
