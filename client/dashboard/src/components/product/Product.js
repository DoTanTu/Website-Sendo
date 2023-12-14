import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import {getAllProduct, getById} from '../../service/ListService'
export default function Product() {
  const [prodItem , setProdItem] = useState([]);
  useEffect(()=>{
    getData();
  },[])

  const getData = async()=>{
    let response = await getAllProduct();
    setProdItem(response);
  }
  console.log(prodItem)
  return (
    <>
      {prodItem ?
      prodItem.map((values, index)=>{
        return (
          <tr>
          <td scope="row">
            <input type="checkbox" />
          </td>
          <td>
            <div className="images_products">
              <img
                src="https://images.unsplash.com/photo-1617258856138-402b60da4e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="img-fluid"
              />
            </div>
          </td>
          <td>1242332</td>
          <td>100.000</td>
          <td>Áo dài truyền thống</td>
          <td>Nestcose</td>
          <td>200</td>
          <td>
            <span className="edit_product">
              <ion-icon name="create-outline"></ion-icon>
            </span>
  
            <span className="delete_product">
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </td>
        </tr> 
        )
      }):null
      } 
    </>
  );
}
