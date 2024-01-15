import React, {useEffect, useState} from 'react';
import { Button } from '@material-tailwind/react';
import { VscTrash } from "react-icons/vsc";
import CartService from '../../service/CartService';
import { Link, useNavigate } from 'react-router-dom';
import Toast from '../notification/Toast';
import { toast } from 'react-toastify';


export default function CartPage() {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [dataCart , setDataCart] = useState();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [chooseCart, setChooseCart] = useState([]);
  const [sumCart, setSumCart] = useState(0);

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

    //Chuyển hướng sang checkout
  const handleRedirectCheckout = () => {
    navigate('/checkout');
  }

  //Xóa item cart dựa vào id
  const handleDeleteItem = async (id) => {
      try {
        const token = localStorage.getItem('token');
        const result = await CartService.deleteCartItem(token, id);
        if(result.status === 200) {
          toast.success('Đã xóa sản phẩm khỏi cart');
        }
        else{
          toast.error('Xóa thất bại');
        }
        fetchData();
      } catch (error) {
        console.log(error);
      }
  }

  //Check box
  const handleCheckboxChange = async (productId, productQuantity, productPrice, productName) => {
    progresCheckbox(productId, productQuantity, productPrice, productName);  
    // setSumCart(totalPrice(chooseCart));
  };

  function progresCheckbox (productId, productQuantity, productPrice, productName){
    const isSelected = selectedProducts.includes(productId);
  
    if (isSelected) {
      // Nếu sản phẩm đã được chọn, loại bỏ nó khỏi danh sách selectedProducts
      const updatedProducts = selectedProducts.filter((id) => id !== productId);
      setSelectedProducts(updatedProducts);
  
      // Loại bỏ sản phẩm có productId khỏi danh sách chooseCart
      setChooseCart((prevChooseCart) =>
        prevChooseCart.filter((item) => item.id !== productId)
      );
    } else {
      // Nếu sản phẩm chưa được chọn, thêm nó vào danh sách selectedProducts
      setSelectedProducts([...selectedProducts, productId]);
  
      // Thêm sản phẩm mới vào danh sách chọn của bạn
      setChooseCart([...chooseCart, { id: productId, quantity: productQuantity, price: productPrice, name : productName }]);
    }
  }
  
  const totalPrice = (chooseCart) => {
    console.log(chooseCart);
    if (!chooseCart || chooseCart.length === 0) {
      return 0;
    }
    
    const sum = chooseCart.reduce((accumulator, value) => {
      return accumulator + value.quantity * value.price;
    }, 0);
    
    return sum;
  };
  
  const handleCheckout = () => {
    navigate('/checkout', { state: {chooseCart} });
  }

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');
      const result = await CartService.getCarts(token);
      setDataCart(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  },[]);

  useEffect(() => {
    setSumCart(totalPrice(chooseCart));
  }, [chooseCart]);
  return (
    <div className="mb-20">
      <div className="container mx-auto">
        <Toast />
        <div className="flex">
          <div className="left_cart w-full pe-5">
            <div className="list_cart mt-10">
              {dataCart
                ? dataCart.map((value, index) => (
                    <div className="cart_item mb-4 bg-white px-5 py-2 flex items-center justify-between rounded-sm border-l-4 hover:border-l-red-500 hover:cursor-pointer transition-all ease-in-out duration-300">
                      <div class="flex items-center mb-4">
                      <input 
                        id={`checkbox-${index}`} 
                        type="checkbox"
                        value=""
                        onChange={() => handleCheckboxChange(value.cart_id, value.quantity, value.price, value.product_name)}
                        checked={selectedProducts.includes(value.cart_id)}
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "/>
                  </div>
                      <div className="image_prod w-24 h-24 overflow-hidden rounded-full">
                        <img
                          src={value.image}
                          className="object-cover"
                          alt=""
                        />
                      </div>
                      <div className="name_prod px-1 w-[230px]">
                        <span className="">{value.product_name}</span>
                      </div>
                      <div className="color_prod px-3">
                        <select name="" id="" className="border px-4 py-1">
                          <option value="">Đỏ</option>
                          <option value="">Xanh</option>
                          <option value="">Trắng</option>
                        </select>
                      </div>
                      <div className="size_prod px-2">
                        <select name="" id="" className="border px-4 py-1">
                          <option value="">M</option>
                          <option value="">L</option>
                          <option value="">XL</option>
                          <option value="">2XL</option>
                        </select>
                      </div>
                      <div className="number_choose flex items-center">
                        <Button
                          className="w-6 h-6 px-0 py-0"
                          onClick={handleDecrease}
                        >
                          -
                        </Button>
                        <div className="number_display w-14  rounded-sm mx-3">
                          <input
                            type="number"
                            value={value.quantity}
                            placeholder="1"
                            className="w-full border border-black ps-2"
                          />
                        </div>
                        <Button
                          className="w-6 h-6 px-0 py-0"
                          onClick={handleIncrease}
                        >
                          +
                        </Button>
                      </div>
                      <div className="price_prod">
                        <span className="text-red-500">
                          {value.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="delete_prod">
                        <span
                          onClick={() => handleDeleteItem(value.cart_id)}
                          className="w-12 h-12 text-red-500 flex items-center justify-center hover:bg-red-500 rounded-full hover:text-white transition-all ease-in-out duration-300"
                        >
                          <VscTrash size={20} />
                        </span>
                      </div>
                    </div>
                  ))
                : (
                  <div className="noneproduct">
                    <span>Chưa có sản phẩm trong giỏ hàng của bạn.</span>
                  </div>
                )}
            </div>
            <div className="update_cart flex justify-end">
              <Button className="bg-green-400 w-18">Cập nhật</Button>
            </div>
          </div>
          <div className="right_checkout w-[400px] mt-10 bg-white rounded-sm shadow-sm h-fit">
            <div className="header_checkout  px-5 border-b-2 py-4">
              <span className="text-lg font-semibold">Sản phẩm đã chọn</span>
            </div>
            <div className="main px-3 py-2">
              <div className="price_some flex justify-between">
                <span>Tạm tính:</span>
                <span className="font-semibold text-red-600">{sumCart.toLocaleString()} đ</span>
              </div>
              <div className="btn_checkout mt-5 flex justify-center">
                <Button
                  className="bg-red-500 w-full"
                  onClick={handleCheckout}
                >
                  Mua hàng
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
