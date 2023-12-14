import React from 'react'
import ProductItem from "../components/product/Product"

export default function Products() {
  return (
    <>
    <div className="products">
      <div className="header_prod">
        <div className="left_head_prod">
          <div className="box_search_prod">
            <span>
              <ion-icon name="search-outline"></ion-icon>
            </span>
            <input type="text" placeholder="Enter name value" />
          </div>
        </div>
        <div className="right_header_prod">
          <div className="export_file">
            <ion-icon name="document-outline"></ion-icon>

            <span>Export Excel</span>
          </div>
          <div className="new_product">
            <ion-icon name="add-outline"></ion-icon>
            <span>Add product</span>
          </div>
        </div>
      </div>
      <div className="main_prod">
        <div className="filter_prod">
          <div className="list_options_filter">
            <div className="filter_item">
              <select name="" id="">
                <option value="" default>
                  Chọn danh mục
                </option>
                <option value="">Áo</option>
                <option value="">Quần</option>
              </select>
            </div>
            <div className="filter_item">
              <select name="" id="">
                <option value="" default>
                  Chọn danh mục
                </option>
                <option value="">Áo</option>
                <option value="">Quần</option>
              </select>
            </div>
            <div className="filter_item">
              <select name="" id="">
                <option value="" default>
                  Chọn danh mục
                </option>
                <option value="">Áo</option>
                <option value="">Quần</option>
              </select>
            </div>
          </div>
          <div className="list_products">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input type="checkbox" />
                  </th>
                  <th scope="col">Image</th>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Orders Sold </th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              <ProductItem/>
              </tbody>
              
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
