import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/style.css";

export default function Sidebar() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API để lấy dữ liệu
        const response = await axios.get("http://localhost:3000/category");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div class="sidebar_left">
        <div className="category_sidebar">
          <div className="title_cate_sidebar">
            <h5>Danh mục</h5>
          </div>
          {categories.map(category => (
          <a key={category.id} class="item_cate" href="">
            <div class="left_image">
              <picture>
                <img src={category.url} alt="" />
              </picture>
            </div>
            <div className="right_title">
              <span>{category.title}</span>
            </div>
          </a>
            ))}
        </div>
        <div className="outstanding">
          <div className="title_cate_sidebar">
            <h5>Nổi bật</h5>
          </div>
          <a class="item_cate" href="">
            <div class="left_image">
              <picture>
                <img src="https://salt.tikicdn.com/cache/100x100/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png.webp" alt="" />
              </picture>
            </div>
            <div className="right_title">
              <span>Đồ Chơi - Mẹ & Bé</span>
            </div>
          </a>
        </div>
        <div className="sale_with_tiki"></div>
      </div>
    </>
  );
}
