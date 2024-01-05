import React from 'react';
import logo from '../assets/images/Better_logo_white.png';
import { Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginService } from '../service/LoginService';
import { jwtDecode } from "jwt-decode";
function Login() {
    const navigator = useNavigate();    

    const [role, setRole]= useState(0);
    const [email , setEmail] = useState('');
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const handleLogin = async () => {
        try {
            if(role === 1){
                const respone = await LoginService.adminLogin(username, password);
                if(respone.status === 200){
                    navigator('/admin')
                }
            }else if( role === 0){
                const respone = await LoginService.sellerLogin(email, password);
                const token = respone.data.token;
                if(jwtDecode(token).is_verified === 1 && respone.status === 200){
                    localStorage.setItem('token', token);
                    alert('Đăng nhập thành công');
                    navigator('/seller') 
                }  
            }
        } catch (error) {
            console.log('Error: ' + error);
        }
    }

    const handleMothodLogin = (value) => {
        const result = parseInt(value,10);
        if(result === 0){
            setRole(0);
        }else
            if(result === 1){
                setRole(1);
        }
    }
  return (
    <div className='Container h-screen w-screen flex items-center justify-center'>
            <div className='form login flex shadow-2xl rounded-2xl overflow-hidden h-[450px]'>
                <div className="left_form w-[500px] bg-white px-8 py-8">
                    <div className="main_form text-black text-left">
                        <form action="" className='flex flex-col gap-3' key={role}>
                            <h1 className='text-2xl font-bold'>Xin chào</h1>
                            <span>Đăng nhập Admin hoặc Seller</span>
                            <div className="group_item mt-5">
                                <select onChange={e => handleMothodLogin(e.target.value)} className='outline-1 outline-gray-600 border-2 w-full py-2 px-2' name="" id="">
                                    <option value="0">Seller</option>
                                    <option value="1">Admin</option>
                                </select>
                            </div>
                           {
                             role === 0 ? (
                                <div className="group_item mt-3">
                                <Input 
                                className='outline-none pb-2 w-full'
                                variant="standard"
                                placeholder="Nhập email"
                                type='email'
                                onChange={(e) => setEmail(e.target.value)} />
                                </div>
                             ):(
                                <div className="group_item mt-3">
                                <Input 
                                className='outline-none pb-2 w-full'
                                variant="standard"
                                placeholder="Nhập username"
                                type='text'
                                onChange={(e) => setUsername(e.target.value)} />
                                </div>
                             )
                           }
                            <div className="group_item mt-3">
                                <Input className='outline-none pb-2 w-full' variant="standard" placeholder="Nhập password" type='password' onChange={(e) => setPassword(e.target.value)}  />
                            </div>
                            <div className="group_item text-center mt-10" onClick={handleLogin}>
                                <Button className='w-full py-3 bg-red-600 text-white rounded-md'>Đăng nhập</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right_logo w-96 bg-red-600  px-8 py-8 flex items-center justify-center">
                    <div className="image_logo">
                        <img className='w-[200px]' src={logo} alt="" />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Login