import React from 'react'

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
                <tr>
                  <td scope="row"><input type="checkbox" /></td>
                  <td>
                    <div className="images_products">
                      <img src="https://images.unsplash.com/photo-1617258856138-402b60da4e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
                    </div>
                  </td>
                  <td>1242332</td>
                  <td>100.000</td>
                  <td>Áo dài truyền thống</td>
                  <td>Nestcose</td>
                  <td>200</td>
                  <td>
                    <span className='edit_product'>
                      <ion-icon name="create-outline"></ion-icon>
                    </span>
                  
                    <span className="delete_product">
                      <ion-icon name="trash-outline"></ion-icon>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td scope="row"><input type="checkbox" /></td>
                  <td>
                    <div className="images_products">
                      <img src="https://images.unsplash.com/photo-1617258856138-402b60da4e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
                    </div>
                  </td>
                  <td>1242332</td>
                  <td>100.000</td>
                  <td>Áo dài truyền thống</td>
                  <td>Nestcose</td>
                  <td>200</td>
                  <td>
                    <span className='edit_product'>
                      <ion-icon name="create-outline"></ion-icon>
                    </span>
                  
                    <span className="delete_product">
                      <ion-icon name="trash-outline"></ion-icon>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td scope="row"><input type="checkbox" /></td>
                  <td>
                    <div className="images_products">
                      <img src="https://images.unsplash.com/photo-1617258856138-402b60da4e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
                    </div>
                  </td>
                  <td>1242332</td>
                  <td>100.000</td>
                  <td>Áo dài truyền thống</td>
                  <td>Nestcose</td>
                  <td>200</td>
                  <td>
                    <span className='edit_product'>
                      <ion-icon name="create-outline"></ion-icon>
                    </span>
                  
                    <span className="delete_product">
                      <ion-icon name="trash-outline"></ion-icon>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td scope="row"><input type="checkbox" /></td>
                  <td>
                    <div className="images_products">
                      <img src="https://images.unsplash.com/photo-1617258856138-402b60da4e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
                    </div>
                  </td>
                  <td>1242332</td>
                  <td>100.000</td>
                  <td>Áo dài truyền thống</td>
                  <td>Nestcose</td>
                  <td>200</td>
                  <td>
                    <span className='edit_product'>
                      <ion-icon name="create-outline"></ion-icon>
                    </span>
                  
                    <span className="delete_product">
                      <ion-icon name="trash-outline"></ion-icon>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td scope="row"><input type="checkbox" /></td>
                  <td>
                    <div className="images_products">
                      <img src="https://images.unsplash.com/photo-1617258856138-402b60da4e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
                    </div>
                  </td>
                  <td>1242332</td>
                  <td>100.000</td>
                  <td>Áo dài truyền thống</td>
                  <td>Nestcose</td>
                  <td>200</td>
                  <td>
                    <span className='edit_product'>
                      <ion-icon name="create-outline"></ion-icon>
                    </span>
                  
                    <span className="delete_product">
                      <ion-icon name="trash-outline"></ion-icon>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td scope="row"><input type="checkbox" /></td>
                  <td>
                    <div className="images_products">
                      <img src="https://images.unsplash.com/photo-1617258856138-402b60da4e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
                    </div>
                  </td>
                  <td>1242332</td>
                  <td>100.000</td>
                  <td>Áo dài truyền thống</td>
                  <td>Nestcose</td>
                  <td>200</td>
                  <td>
                    <span className='edit_product'>
                      <ion-icon name="create-outline"></ion-icon>
                    </span>
                  
                    <span className="delete_product">
                      <ion-icon name="trash-outline"></ion-icon>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td scope="row"><input type="checkbox" /></td>
                  <td>
                    <div className="images_products">
                      <img src="https://images.unsplash.com/photo-1617258856138-402b60da4e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="img-fluid" />
                    </div>
                  </td>
                  <td>1242332</td>
                  <td>100.000</td>
                  <td>Áo dài truyền thống</td>
                  <td>Nestcose</td>
                  <td>200</td>
                  <td>
                    <span className='edit_product'>
                      <ion-icon name="create-outline"></ion-icon>
                    </span>
                  
                    <span className="delete_product">
                      <ion-icon name="trash-outline"></ion-icon>
                    </span>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
