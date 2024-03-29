import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DetailPayProducts from "./components/ui/DetailPayProducts";
import AllBill from "./pages/AllBill";
import ReturnPayment from "./components/ui/ReturnPayment";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/vnpay_return" element={<ReturnPayment />} />
        <Route path="/all-bill" element={<AllBill />} />
      </Routes>
    </>
  );
}

export default App;
