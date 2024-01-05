import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function ItemSearch(props) {
  const data = props.data;
  return (
    <div className='max-h-[250px] overflow-y-scroll'>
        {
            data ? data.map((item) => (
                < NavLink key={item.product_id} to={`detail/${item.product_id}`}>
                <span className='px-5 py-1 text-red-500 bg-white block hover:bg-gray-200 hover:text-red hover:border-l-2 hover:border-l-red-600'>{item.product_name}</span>
                </NavLink>
            )):null
        }
    </div>
  )
}
