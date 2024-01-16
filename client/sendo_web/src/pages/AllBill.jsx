import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../img/Better_logo.png";
import CardBill from "../components/ui/CardBill";
export default function AllBill() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
      <Navbar />
      </div>
      <div className="w-full p-8">
        <div className="flex gap-3 mt-[100px]">
          <div className="w-1/6 h-max p-4 shadow-sm shadow-gray-400 bg-white  sticky top-[120px]">
            <div className="flex gap-2">
              <img className="h-12 w-12 rounded-full" src={logo} alt="" />
              <div className="flex flex-col items-start">
                <p>Đỗ Tấn Từ</p>
                <p className="text-xs text-green-400">Đang online</p>
              </div>
            </div>
          </div>
          <div className="w-5/6 rounded-2xl p-6 flex flex-col gap-6  bg-white">
            <CardBill />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}